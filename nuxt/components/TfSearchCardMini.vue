<template>
  <v-card class="w-100">
    <p class="pa-2 text-h6 text-primary">
      {{ activityNumber + ". " + name }}
    </p>
    <v-row>
      <v-col cols="4">
        <TfPhoto
          v-if="photos && photos?.length > 0"
          :photo-id="photos[0].photo_reference"
          :name="name"
        />

        <v-img
          v-else
          cover
          :src="'https://npf-prod.imgix.net/uploads/shutterstock_110306771.jpg?auto=compress%2Cformat&fit=max&q=80&w=1600'"
        />
      </v-col>

      <v-col cols="8">
        <v-row no-gutters>
          <v-col
            v-if="address"
            cols="12"
          >
            <b>Address:</b>
            <p>{{ address }}</p>
          </v-col>

          <v-col
            v-if="rating"
            cols="12"
            class="my-2"
          >
            <b>Rating:</b> {{ rating }} <img
              height="15"
              width="15"
              style="position: relative; top: 1.5px;"
              src="../images/star.png"
            >
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-card>
</template>
    
<script setup lang="ts">
import { PlaceOpeningHours, PlacePhoto } from '~~/types/Google/googlePlace.type';
defineProps<{
  name?: string
  address?: string
  rating?: number
  phoneNumber?: string
  website?: string
  priceLevel?: number
  openingHours?: PlaceOpeningHours
  activityNumber?: number
  photos?: Array<PlacePhoto>
}>()
</script>