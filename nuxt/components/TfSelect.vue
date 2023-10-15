<script setup lang="ts">
const props = defineProps<{
    labels?: string[]
}>()

const interests = ref<string[]>([])

defineEmits<{
    (e: 'update:interests', result: string[]): void
}>()
</script>

<template>
    <div class="d-flex flex-row flex-wrap align-center w-100">
        <v-select v-model="interests" label="Interests" :items="labels" multiple color="primary"
            @update:model-value="$emit('update:interests', interests)"></v-select>
        <!-- <div v-for="(label, index) in labels">
            <v-checkbox :label="label"
                @update:model-value="interests[index] = !interests[index]; $emit('update:interests', interests)"></v-checkbox>
        </div> -->
    </div>
</template>