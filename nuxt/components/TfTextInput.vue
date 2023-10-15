<script setup lang="ts">
defineProps<{
    label?: string
    placeholderText?: string
    value?: string
    classes?: string
}>()

const emit = defineEmits(['emitValue'])

const location = ref("")

const emitValue = () => {
    emit('emitValue', location.value);
}

</script>

<template>
    <div :class='["w-50", classes]'>
        <p class="mb-2 text-primary font-italic w-100 text-center">{{ label && label }}</p>
        <v-text-field v-model="location" :label="placeholderText && placeholderText" variant="outlined" color="blackSub"
            @change="emitValue"></v-text-field>
    </div>
</template>