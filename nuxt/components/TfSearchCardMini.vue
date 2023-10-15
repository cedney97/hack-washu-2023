<template>
  <v-card class="w-100">
    <p class="pa-2">1. This</p>
    <v-row class="w-100">
      <v-col cols="4">
        <v-img height="100%" cover
          :src="'https://npf-prod.imgix.net/uploads/shutterstock_110306771.jpg?auto=compress%2Cformat&fit=max&q=80&w=1600'" />
      </v-col>
      <v-col cols="8">
        <v-row no-gutters>
          <v-col cols="12" v-if="address">
            <p class="text-caption">Address: {{ address }}</p>
          </v-col>

          <v-col cols="12">
            <p class="text-h6">{{ name }}</p>
          </v-col>

          <v-col cols="12" v-if="rating">
            Rating: {{ rating }}
          </v-col>

          <v-col cols="12" v-if="priceLevel">
            Price: {{ priceLevel }}
          </v-col>

          <v-col cols="12" v-if="openingHours">
            Hours:
            <div v-for="day in openingHours?.weekday_text">
              {{ day }}
            </div>
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
}>()
</script>