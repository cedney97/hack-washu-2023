<script setup lang="ts">
    defineProps<{
        title?: string
    }>()
</script>

<template>
    <h1>
        {{ title ? title: "TravelFreely" }}
    </h1>
</template>