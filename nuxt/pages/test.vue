<template>
  <v-btn @click="resolvePhotos()">
    resolve Img
  </v-btn>
  <img
    v-if="resolvedPhoto"
    cover
    :src="resolvedPhoto"
    :alt="'Place Photo'"
  >
</template>
  
  <script setup lang="ts">
//   const props = defineProps<{
//       name?: string
//       photoId: string
//   }>()
  
  const resolvedPhoto = ref<string | undefined>(undefined)
  const photoId = "ATJ83zg18SwVTGGLOTICShJuBQWhAbwSw7mat6TgjYmYrXy-oOE_hphA1dlCmU-GYokxICJ8oNpILfVecW6qyLDIuU0gdchOq9Jhs6j9bxknqjYYDiOQI19HjDzoP5HdWN09FKqX5WcBU0vFiLad9yXEWJfVImbeUkgFB7ItcKIuQbRIDUr2"
  async function resolvePhotos() {
      try {
          const data = await $fetch('/api/google/photo', {
              params: {
                  photoReference: photoId,
              },
          });
          resolvedPhoto.value = URL.createObjectURL(data);
      } catch (error) {
          console.error('Error fetching place details:', error)
      }
  }
  
  onMounted(() => {
    //   resolvePhotos()
  })
  </script>