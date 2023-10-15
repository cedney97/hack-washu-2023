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

const emitValue = () => {
    console.log(date.value)
    // emit('emitValue', date.value);
}
</script>

<template>
    <div class='pa-4 rounded border'>
        <!-- <input type="date" v-model="date" @change="emitValue" /> -->
        <v-date-picker :value="date" v-model="date" color="primary"
            @update:model-value="$emit('update:date', date)"></v-date-picker>
    </div>
</template>

<style>
.border {
    border: 1px solid #ccc;
}
</style>