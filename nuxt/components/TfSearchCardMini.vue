<template>
  <v-card class="w-100">
    <p class="pa-2 text-h6 text-primary">{{ activityNumber + ". " + name }}</p>
    <v-row class="w-100">
      <v-col cols="4">
        <v-img
          height="100%"
          cover
          :src="'https://npf-prod.imgix.net/uploads/shutterstock_110306771.jpg?auto=compress%2Cformat&fit=max&q=80&w=1600'"
        />
      </v-col>
      <v-col cols="8">
        <v-row no-gutters>
          <v-col cols="12" v-if="address">
            <b>Address:</b>
            <p>{{ address }}</p>
          </v-col>

          <v-col cols="12" v-if="rating" class="my-2">
            <b>Rating:</b> {{ rating }} <img height="15" width="15" style="position: relative; top: 1.5px;"
              src="../images/star.png">
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-card>
</template>
    
<script setup lang="ts">
import { PlaceOpeningHours } from '~~/types/Google/googlePlace.type';
defineProps<{
  name?: string
  address?: string
  rating?: number
  phoneNumber?: string
  website?: string
  priceLevel?: number
  openingHours?: PlaceOpeningHours
  activityNumber?: number
}>()
</script>