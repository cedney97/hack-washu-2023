<template>
  <div v-if="richPlace">
    <v-card
      v-if="!detailedView"
      @click="detailedView = !detailedView"
    >
      <TfSearchCardMini
        :name="richPlace.name"
        :address="richPlace.formatted_address"
        :rating="richPlace.rating"
        :phone-number="richPlace.formatted_phone_number"
        :website="richPlace.website"
        :price-level="richPlace.price_level"
        :opening-hours="richPlace.opening_hours"
      />
    </v-card>

    <v-card
      v-else
      @click="detailedView = !detailedView"
    >
      <TfSearchCardDetailed
        :name="richPlace.name"
        :address="richPlace.formatted_address"
        :rating="richPlace.rating"
        :phone-number="richPlace.formatted_phone_number"
        :website="richPlace.website"
        :reviews="richPlace.reviews"
        :photos="richPlace.photos"
      />
    </v-card>
  </div>
</template>
      
<script setup lang="ts">
import { defineProps, ref, onMounted } from 'vue';
import { Place } from '~~/types/Google/googlePlace.type';

const props = defineProps<{
  placeId: string;
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