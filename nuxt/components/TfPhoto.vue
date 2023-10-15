<template>
  <v-card class="pa-1" elevation="0">
    <img
      v-if="resolvedPhoto"
      cover
      :src="resolvedPhoto"
      :alt="name || 'Place Photo'"
    >
  </v-card>
</template>

<script setup lang="ts">
const props = defineProps<{
    name?: string
    photoId: string
}>()

const resolvedPhoto = ref<string | undefined>(undefined)

async function resolvePhotos() {
    try {
        const data = await $fetch('/api/google/photo', {
            params: {
                photoReference: props.photoId,
            },
        });
        resolvedPhoto.value = URL.createObjectURL(data);
    } catch (error) {
        console.error('Error fetching place details:', error)
    }
}

onMounted(() => {
    resolvePhotos()
})
</script>