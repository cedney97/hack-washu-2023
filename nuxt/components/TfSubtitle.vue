<script setup lang="ts">
defineProps<{
    subtitle?: string
}>()
</script>

<template>
    <h1 class="text-h4 text-accent pt-4">
        {{ subtitle && subtitle }}
    </h1>
</template>