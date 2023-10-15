<template>
  <div
    v-for="(photo, index) in resolvedPhotos"
    :key="index"
  >
    <!-- {{ photo.src }} -->
  </div>
</template>

<script setup lang="ts">
import { PlacePhoto } from '~~/types/Google/googlePlace.type';

const props = defineProps<{
    photos: Array<PlacePhoto>
}>()

const resolvedPhotos = ref<any[]>([])

async function resolvePhotos() {
    let tempResolvedPhotos = []
    for (let i = 0; i < Math.min(props.photos.length, 3); i++) {
        try {
            const data = await $fetch('/api/google/photo', {
                params: {
                    photoReference: props.photos[i].photo_reference,
                },
            });
            // console.log('resolvePhotos photo: ', data)
            // tempResolvedPhotos.push(data)
            const blob = new Blob([data], { type: 'image/jpeg' });
            const image = new Image();
            image.src = URL.createObjectURL(blob);
            tempResolvedPhotos.push(image)
        } catch (error) {
            console.error('Error fetching place details:', error)
        }
    }
    console.log('tempResolvedPhotos: ', tempResolvedPhotos)
    resolvedPhotos.value = tempResolvedPhotos
}

onMounted(() => {
    resolvePhotos()
})
</script>