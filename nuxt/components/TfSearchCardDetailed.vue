<template>
  <v-card v-if="richPlace">
    <h1 class="pa-2 text-primary">
      {{ activityNumber + ". " + richPlace.name }}
    </h1>
    <v-row>
      <v-col cols="12">
        <TfPhoto
          v-if="richPlace.photos && richPlace.photos?.length > 0"
          :photo-id="richPlace.photos[0].photo_reference"
          :name="richPlace.name"
        />

        <v-img
          v-else
          cover
          :src="'https://npf-prod.imgix.net/uploads/shutterstock_110306771.jpg?auto=compress%2Cformat&fit=max&q=80&w=1600'"
        />
      </v-col>
      <v-col cols="12">
        <v-row
          no-gutters
          class="px-2"
        >
          <v-col
            v-if="richPlace.formatted_address"
            cols="12"
          >
            <b>Address:</b>
            <p>{{ richPlace.formatted_address }}</p>
          </v-col>

          <v-col
            v-if="richPlace.rating"
            cols="12"
            class="my-2"
          >
            <b>Rating:</b> {{ richPlace.rating }} <img
              height="15"
              width="15"
              style="position: relative; top: 1.5px;"
              src="../images/star.png"
            >
          </v-col>

          <v-col
            v-if="richPlace.formatted_phone_number"
            cols="12"
          >
            <b>Phone Number:</b> {{ richPlace.formatted_phone_number }}
          </v-col>

          <v-col
            v-if="richPlace.website"
            cols="12"
            class="my-2"
          >
            <a :href="richPlace.website">Website</a>
          </v-col>

          <v-col
            v-if="richPlace.reviews"
            cols="12"
            class="my-2"
          >
            <b>Reviews:</b>

            <TfReviewCard
              v-for="(review, index) in richPlace.reviews"
              :key="index"
              :review="review"
            />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-card>
</template>

<script setup lang="ts">
import { Place } from '~~/types/Google/googlePlace.type';

const props = defineProps<{
  placeId: string
  activityNumber: number
}>()

const richPlace = ref<Place | undefined>(undefined);

async function getPlaceDetails() {
    try {
      const data = await $fetch('/api/google/search', {
        params: {
          placeId: props.placeId,
        },
      });

      console.log('name: ', props.placeId, ' data: ', data)
      // @ts-ignore
      richPlace.value = data.result as Place;
      console.log('from TfSearchCard rich Place:', richPlace.value);
    } catch (error) {
      console.error('Error fetching place details:', error)
    }
}

onMounted(() => {
  getPlaceDetails()
});

</script>