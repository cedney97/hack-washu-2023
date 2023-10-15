<script setup lang="ts">
import { gptData, gptResponse } from '../types/ChatGPT/gptData.type'

const route = useRoute();
const data = route.query;
const location = data.location;
const startDate = data.startDate;
const endDate = data.endDate;
const numberPeople = data.numberPeople;
const interests = data.interests;

const gptPrompt = `Give me a trip itinerary of ${location} with addresses, following these parameters:start date: ${startDate} end date: ${endDate} number of people: ${numberPeople} interests: ${interests.join(", ")}. I want this formatted as a JSON file following these fields: { trip: {  itinerary: { day: number, date: string, activities: {  locationName: string  address: string }[] }[] } } `;

const jsonData = ref<gptResponse | undefined>(undefined)
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

onMounted(() => {
  getItinerary()
})
</script>

<template>
  <v-card-title v-if="loadingItinerary">
    Creating Your Itinerary

    <v-progress-circular
      indeterminate
      color="primary"
    />
  </v-card-title>

  <div v-if="!loadingItinerary && jsonData">
    <TfItineraryPage :chat-gpt-data="jsonData" />
  </div>
</template>