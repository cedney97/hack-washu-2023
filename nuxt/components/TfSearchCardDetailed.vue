<template>
  <v-card>
    <h1 class="pa-2 text-primary">{{ activityNumber + ". " + name }}</h1>
    <v-row>
      <v-col cols="12">
        <v-img height="auto" width="100%" cover
          :src="coverPhoto ? coverPhoto : 'https://npf-prod.imgix.net/uploads/shutterstock_110306771.jpg?auto=compress%2Cformat&fit=max&q=80&w=1600'" />
      </v-col>
      <v-col cols="12">
        <v-row no-gutters class="px-2">
          <v-col cols="12" v-if="address">
            <b>Address:</b>
            <p>{{ address }}</p>
          </v-col>

          <v-col cols="12" v-if="rating" class="my-2">
            <b>Rating:</b> {{ rating }} <img height="15" width="15" style="position: relative; top: 1.5px;"
              src="../images/star.png">
          </v-col>

          <v-col cols="12" v-if="phoneNumber">
            <b>Phone Number:</b> {{ phoneNumber }}
          </v-col>

          <v-col cols="12" v-if="website" class="my-2">
            <a :href="website">Website</a>
          </v-col>

          <v-col cols="12" class="my-2" v-if="reviews">
            <b>Reviews:</b>

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