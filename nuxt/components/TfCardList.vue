<script setup lang="ts">
defineProps<{
    placeIds?: string[]
    title?: string
}>()
</script>

<template>
  <div class="d-flex flex-column align-center w-100">
    <h1
      v-if="title"
      class="text-center"
    >
      {{ title }}
    </h1>
    <TfSearchCard
      v-for="(placeId, index) in placeIds"
      :place-id="placeId"
      :key="index"
    />
  </div>
</template>