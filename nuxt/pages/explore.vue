<script setup lang="ts">
import { gptData } from '../types/ChatGPT/gptData.type'
import { Place } from '~~/types/Google/googlePlace.type';
  
const richPlace = ref<Place | undefined>(undefined);

const route = useRoute();
const data = route.query;
const location = data.location;
const startDate = data.startDate;
const endDate = data.endDate;
const numberPeople = data.numberPeople;
const interests = data.interests;

const gptPrompt = `Give me a trip itinerary of ${location} with addresses, following these parameters:start date: ${startDate} end date: ${endDate} number of people: ${numberPeople} interests: ${interests.join(", ")}. I want this formatted as a JSON file following these fields: { trip: {  itinerary: { day: number, date: string, activities: {  locationName: string  address: string }[] }[] } } `;

const jsonData = ref(undefined)
const loadingItinerary = ref(false)

async function getItinerary() {
  loadingItinerary.value = true

  try {
    const resData: gptData[] = await $fetch('api/openAi/generate', {
      params: {
        prompt: gptPrompt,
      },
    });

    jsonData.value = await JSON.parse(resData[0].message.content ? resData[0].message.content : '');
    console.log('result from OPENAI in explore: ', jsonData.value)

  } catch (error) {
    console.error('Error fetching place details:', error)
  }

  loadingItinerary.value = false
}



async function findPlace() {
    try {
      const data = await $fetch('/api/google/find', {
        params: {
          name: 'Forest Park',
        },
      });
      // @ts-ignore
      richPlace.value = data.result as Place;
      console.log('test rich Place:', richPlace.value);
    } catch (error) {
      console.error('Error fetching place details:', error)
    }
  }

// onMounted(() => {
//   getItinerary()
// })

const days = ref([['ChIJN1t_tDeuEmsRUsoyG83frY4', 'ChIJVTPokywQkFQRmtVEaUZlJRA'], ['ChIJVTPokywQkFQRmtVEaUZlJRA'], ['ChIJAYWNSLS4QIYROwVl894CDco']])

</script>

<template>
  <v-card-title>
    Loading Itinerary: {{ loadingItinerary }}
  </v-card-title>

  <v-btn @click="getItinerary()">
    Generate Itinerary
  </v-btn>

  {{ jsonData }}

  <!-- <div class="h-screen w-screen d-flex flex-column align-center bg-whiteSub">
    <v-container
      class="pa-4 h-100 overflow-hidden w-100"
      fluid
    >
      <v-row no-gutters>
        <v-col
          cols="4"
          class="pa-3 overflow-auto h-screen w-100"
        >
          <v-sheet
            height="100vh"
            class="pa-3 overflow-auto h-screen w-100"
          >
            <div
              v-for="(day, i) in days"
              :key="i"
            >
              <TfCardList
                :place-ids="days[i]"
                :title="`Day ${i + 1}`"
              />
            </div>
          </v-sheet>
        </v-col>

        <v-col cols="8" class="pa-0">
          <v-card height="100vh" rounded>
            <TfMap />
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div> -->
  <div>
    {{ jsonData }}
  </div>
</template>