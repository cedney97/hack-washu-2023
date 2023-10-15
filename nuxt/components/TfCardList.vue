<script setup lang="ts">
const props = defineProps<{
    placeIds?: string[]
}>()
</script>

<template>
    <div class="d-flex flex-column align-center w-100">
        <TfSearchCardMini v-for="placeId in placeIds" :place-id="placeId" />
    </div>
</template>