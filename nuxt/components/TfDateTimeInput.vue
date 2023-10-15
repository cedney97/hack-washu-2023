<script setup lang="ts">
    defineProps<{
        placeholderText?: string
        value?: string
    }>()
</script>

<template>
    <div class='pa-4 rounded border'>
        <input type="date" />
    </div>
</template>

<style>
    .border {
        border: 1px solid #ccc;
    }
</style>