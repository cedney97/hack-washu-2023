<template>
  <div v-if="richPlace" class="mt-4 w-100">
    <v-card v-if="!detailedView" @click="detailedView = !detailedView">
      <TfSearchCardMini :name="richPlace.name" :activity-number="activityNumber" :address="richPlace.formatted_address"
        :rating="richPlace.rating" />
    </v-card>

    <v-card v-else @click="detailedView = !detailedView">
      <TfSearchCardDetailed :name="richPlace.name" :activity-number="activityNumber"
        :address="richPlace.formatted_address" :rating="richPlace.rating" :phone-number="richPlace.formatted_phone_number"
        :website="richPlace.website" :reviews="richPlace.reviews" :photos="richPlace.photos" />
    </v-card>
  </div>
</template>
      
<script setup lang="ts">
import { Place } from '~~/types/Google/googlePlace.type';

const props = defineProps<{
  placeId: string;
  activityNumber: number;
}>();

const richPlace = ref<Place | undefined>(undefined);
const detailedView = ref(false);
async function getPlaceDetails() {
  try {
    const data = await $fetch('/api/google/search', {
      params: {
        placeId: props.placeId,
      },
    });
    // @ts-ignore
    richPlace.value = data.result as Place;
    console.log('rich Place:', richPlace.value);
  } catch (error) {
    console.error('Error fetching place details:', error)
  }
}

onMounted(() => {
  getPlaceDetails()
});
</script>