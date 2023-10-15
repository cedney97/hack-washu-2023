<template>
  <h1>Google Places API</h1>
  <button @click="getPlaceDetails()">
    Get place details
  </button>

  <div v-if="richPlace">
    <v-card>
      <v-row>
        <v-col cols="4">
          <v-img class="h-100" cover :src="richPlace.icon ? richPlace.icon : ''" />
        </v-col>
        <v-col cols="8">
          <v-row no-gutters>
            <v-col cols="12">
              {{ richPlace.name }}
            </v-col>

            <v-col cols="12">
              Address: {{ richPlace.formatted_address }}
            </v-col>

            <v-col cols="12">
              Rating: {{ richPlace.rating }}
            </v-col>

            <v-col cols="12">
              Phone Number: {{ richPlace.formatted_phone_number }}
            </v-col>

            <v-col cols="12">
              Website: {{ richPlace.website }}
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>
    
<script setup lang="ts">
import { Place, PlacePhoto } from "~~/types/Google/googlePlace.type";

const props = defineProps<{
  placeId: string
}>()

const richPlace = ref<Place | undefined>(undefined)

async function getPlaceDetails() {
  const data = await $fetch('/api/google/search', {
    params: {
      // placeId: 'ChIJN1t_tDeuEmsRUsoyG83frY4'
      placeId: props.placeId
    }
  })

  // @ts-ignore
  richPlace.value = data.result as Place
  console.log('rich Place: ', richPlace.value)
  // console.log(richPlace.value?.photos[0])
}
</script>