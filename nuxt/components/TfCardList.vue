<script setup lang="ts">
defineProps<{
    placeIds?: string[]
    title?: string
}>()
</script>

<template>
    <div class="d-flex flex-column align-center w-100 h-100 bg-whiteSub pb-4">
        <h1 v-if="title" class="text-center">{{ title }}</h1>
        <TfSearchCard v-for="(placeId, i) in placeIds" :place-id="placeId" :activity-number="i + 1" />
    </div>
</template>