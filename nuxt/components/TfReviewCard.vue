<template>
  <v-card>
    <v-row>
      <v-col
        v-if="review.profile_photo_url"
        cols="4"
      >
        <v-avatar
        
          size="30"
        >
          <img
            :src="review.profile_photo_url"
            alt="Author Photo"
          > 
        </v-avatar>
      </v-col>

      <v-col cols="8">
        <span class="author-name">{{ review.author_name }}</span>
        <span class="rating">Rating: {{ review.rating }}</span>
      </v-col>
    
      <v-col cols="12">
        <v-card
          max-height="200px"
          class="text-wrap"
        > 
          {{ review.text }}
        </v-card>
      </v-col>

      <v-col cols="12">
        {{ review.relative_time_description }}
      </v-col>
    </v-row>
  </v-card>
</template>

<script setup lang="ts">
import { PlaceReview } from '~~/types/Google/googlePlace.type';
defineProps<{
    review: PlaceReview
}>()
</script>