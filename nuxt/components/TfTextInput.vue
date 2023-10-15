<script setup lang="ts">
    defineProps<{
        label?: string
        placeholderText?: string
        value?: string
        classes?: string
    }>()
</script>

<template>
    <div :class='["w-50", classes]'>
        <p class="mb-2 text-primary font-italic w-100 text-center">{{ label && label }}</p>
        <v-text-field 
            :label="placeholderText ? placeholderText : 'Answer?'" 
            variant="outlined"
            color="blackSub"
        ></v-text-field>
    </div>
</template>