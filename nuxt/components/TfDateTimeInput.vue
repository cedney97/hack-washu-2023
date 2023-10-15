<script setup lang="ts">

import { VDatePicker } from 'vuetify/lib/labs/components.mjs';
import { DateTime } from 'luxon';

defineProps<{
    placeholderText?: string
    value?: string
}>()

defineEmits<{
    (e: 'update:date', result: DateTime[]): void
}>()

const date = ref<DateTime[]>([])
</script>

<template>
    <div class='pa-4 rounded border'>
        <!-- <input type="date" v-model="date" @change="emitValue" /> -->
        <v-date-picker v-model="date" color="primary" @update:model-value="$emit('update:date', date)"></v-date-picker>
    </div>
</template>

<style>
.border {
    border: 1px solid #ccc;
}
</style>