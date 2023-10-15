<template>
  <v-btn @click="findPlace()">
    FindPlaces
  </v-btn>
</template>
        
  <script setup lang="ts">
  import { Place } from '~~/types/Google/googlePlace.type';
  
//   const props = defineProps<{
//     placeId: string;
//   }>();
  
  const richPlace = ref<Place | undefined>(undefined);

  async function findPlace() {
    try {
      const data = await $fetch('/api/google/find', {
        params: {
          name: 'Forest Park',
        },
      });
      // @ts-ignore
      richPlace.value = data.result as Place;
      console.log('test rich Place:', richPlace.value);
    } catch (error) {
      console.error('Error fetching place details:', error)
    }
  }
  
//   onMounted(() => {
//     findPlace()
//   });
  </script>