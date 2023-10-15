<template>
  <div class="h-screen w-screen d-flex flex-column align-center bg-whiteSub">
    <v-container class="pa-4 h-100 overflow-hidden w-100" fluid>
      <v-row no-gutters>
        <v-col cols="4" class="pa-4 overflow-hideen h-screen w-100">
          <v-sheet height="100vh" class="overflow-y-auto">
            <div v-for="(day, i) in chatGptData.trip.itinerary" :key="i">
              <TfCardList :activities="day.activities" :title="`Day ${i + 1} - ${day.date}`" />
            </div>
          </v-sheet>
        </v-col>

        <v-col cols="8" class="pa-0">
          <v-card height="100vh" rounded>
            <TfMap />
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup lang="ts">
import { gptResponse } from '~~/types/ChatGPT/gptData.type';
defineProps<{
  chatGptData: gptResponse
}>();
</script>