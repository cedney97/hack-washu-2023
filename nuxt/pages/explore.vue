<script setup lang="ts">

import { gptData } from '../types/ChatGPT/gptData.type'

const route = useRoute();
const data = route.query;
const location = data.location;
const startDate = data.startDate;
const endDate = data.endDate;
const numberPeople = data.numberPeople;
const interests = data.interests;
console.log(data)

const gptPrompt = `Give me a trip itinerary of ${location} with addresses, following these parameters:start date: ${startDate} end date: ${endDate} number of people: ${numberPeople} interests: ${interests.join(", ")}. I want this formatted as a JSON file following these fields: { trip: {  itinerary: { day: number, date: string, activities: {  locationName: string  address: string }[] }[] } } `;

// const resData: gptData[] = await $fetch('api/openAi/generate', {
//   params: {
//     prompt: gptPrompt
//   }
// })
// const jsonData = await JSON.parse(resData[0].message.content ? resData[0].message.content : '');
// console.log(jsonData)

const days = ref([['ChIJN1t_tDeuEmsRUsoyG83frY4', 'ChIJVTPokywQkFQRmtVEaUZlJRA'], ['ChIJVTPokywQkFQRmtVEaUZlJRA'], ['ChIJAYWNSLS4QIYROwVl894CDco']])

</script>

<template>
  <div class="h-screen w-screen d-flex flex-column align-center bg-whiteSub">
    <v-container class="pa-4 h-100 overflow-hidden w-100" fluid>
      <v-row no-gutters>
        <v-col cols="4" class="pa-3 overflow-auto h-screen w-100">
          <v-sheet class="overflow-y-auto">
            <div v-for="(day, i) in days" :key="i">
              <TfCardList :place-ids="days[i]" :title="`Day ${i + 1}`" />
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
  </div>
</template>