<script setup lang="ts">
defineProps<{
  label?: string
  placeholderText?: string
  value?: string
  classes?: string
}>()

const emit = defineEmits(['emitValue'])

const numberValue = ref(0)

const emitValue = () => {
  emit('emitValue', numberValue.value);
}
</script>

<template>
  <div :class="['w-50', classes]">
    <p class="mb-2 text-primary font-italic w-100 text-center">
      {{ label && label }}
    </p>
    <v-text-field v-model="numberValue" variant="outlined" color="blackSub" type="number" @change="emitValue" />
  </div>
</template>