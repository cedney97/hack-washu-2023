<template>
  <div
    v-if="richPlace"
    class="mt-4 w-100"
  >
    <v-card
      v-show="!detailedView"
      @click="detailedView = !detailedView"
    >
      <TfSearchCardMini
        :name="richPlace.name"
        :activity-number="activityNumber"
        :address="richPlace.formatted_address"
        :rating="richPlace.rating"
        :photos="richPlace.photos"
      />
    </v-card>

    <v-card
      v-show="detailedView"
      @click="detailedView = !detailedView"
    >
      <TfSearchCardDetailed
        v-if="richPlace.place_id"
        :place-id="richPlace.place_id"
        :activity-number="activityNumber"
      />
    </v-card>
  </div>
</template>
      
<script setup lang="ts">
import { Place } from '~~/types/Google/googlePlace.type';

const props = defineProps<{
  name: string;
  activityNumber: number;
}>();

const richPlace = ref<Place | undefined>(undefined);
const detailedView = ref(false);

async function getPlaceDetails() {
  try {
    const data = await $fetch('/api/google/find', {
      params: {
        name: props.name,
      },
    });

    console.log('name: ', props.name, ' data: ', data)
    // @ts-ignore
    richPlace.value = data.candidates[0] as Place;
  } catch (error) {
    console.error('Error fetching place details:', error)
  }
}

onMounted(() => {
  getPlaceDetails()
});
</script>