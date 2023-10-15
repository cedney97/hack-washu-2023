<template>
  <v-card>
    <p class="pa-2">1. This</p>
    <v-row>
      <v-col cols="4">
        <v-img height="100%" cover
          :src="coverPhoto ? coverPhoto : 'https://npf-prod.imgix.net/uploads/shutterstock_110306771.jpg?auto=compress%2Cformat&fit=max&q=80&w=1600'" />
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

          <v-col cols="12" v-if="phoneNumber">
            Phone Number: {{ phoneNumber }}
          </v-col>

          <v-col cols="12" v-if="website">
            <a :href="website">Website</a>
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