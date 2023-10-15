<script setup lang="ts">
defineProps<{
    title?: string
}>()
</script>

<template>
    <h1 class="text-h1 text-blackSub">
        {{ title ? title : "TravelFreely" }}
    </h1>
</template>