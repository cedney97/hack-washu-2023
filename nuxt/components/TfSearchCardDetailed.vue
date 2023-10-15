<template>
  <v-card>
    <h1 class="pa-2">{{ activityNumber + ". " + name }}</h1>
    <v-row>
      <v-col cols="4">
        <v-img height="100%" cover
          :src="coverPhoto ? coverPhoto : 'https://npf-prod.imgix.net/uploads/shutterstock_110306771.jpg?auto=compress%2Cformat&fit=max&q=80&w=1600'" />
      </v-col>
      <v-col cols="12">
        <v-row no-gutters>
          <v-col cols="12" v-if="address">
            <p class="text-caption">Address: {{ address }}</p>
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

          <v-col cols="12">
            Reviews:

            <TfReviewCard v-for="(review, index) in reviews" :key="index" :review="review" />
          </v-col>

          <v-col v-if="photos" cols="12">
            Photos:
            <TfPhotos :photos="photos" />
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
  activityNumber?: number
}>()
</script>