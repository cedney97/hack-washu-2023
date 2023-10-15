<template>
  <v-card>
    Detailed
    <v-row>
      <v-col cols="4">
        <v-img
          height="100%"
          cover
          :src="coverPhoto ? coverPhoto : 'https://npf-prod.imgix.net/uploads/shutterstock_110306771.jpg?auto=compress%2Cformat&fit=max&q=80&w=1600'"
        />
      </v-col>
      <v-col cols="8">
        <v-row no-gutters>
          <v-col cols="12">
            {{ name }}
          </v-col>
  
          <v-col cols="12">
            Address: {{ address }}
          </v-col>
  
          <v-col cols="12">
            Rating: {{ rating }}
          </v-col>
  
          <v-col cols="12">
            Phone Number: {{ phoneNumber }}
          </v-col>
  
          <v-col cols="12">
            Website: {{ website }}
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-card>
</template>

<script setup lang="ts">
import { PlacePhoto, PlaceReview } from '~~/types/Google/googlePlace.type';

defineProps<{
  coverPhoto?: string
  name?: string
  address?: string
  rating?: number
  phoneNumber?: string
  website?: string
  reviews?: Array<PlaceReview>
  photos?: Array<PlacePhoto>
}>()
</script>