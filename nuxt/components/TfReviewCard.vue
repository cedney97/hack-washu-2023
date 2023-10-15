<template>
  <v-card class="bg-whiteSub my-2">
    <v-row>
      <v-col cols="12" class="d-flex flex-column align-center justify-flex-start my-2">
        <v-avatar size="30">
          <img :src="review.profile_photo_url" alt="Author Photo">
        </v-avatar>
        <span class="author-name text-bold">{{ review.author_name }}</span>
        <span class="rating">Rating: {{ review.rating }}<img height="15" width="15"
            style="position: relative; top: 1.5px;" src="../images/star.png"></span>
        <span class="text-caption">{{ review.relative_time_description }}</span>
      </v-col>

      <v-col cols="12">
        <v-card max-height="200px" class="text-wrap pa-2 overflow-auto">
          {{ review.text }}
        </v-card>
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