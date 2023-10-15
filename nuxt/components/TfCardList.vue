<script setup lang="ts">
defineProps<{
  activities: {
    locationName: string;
    address: string;
  }[];
  title?: string;
}>();

const currentListNumber = ref(0);

const newListNumber = (newNumber: number) => {
  currentListNumber.value = newNumber;
}

</script>

<template>
  <div class="d-flex flex-column align-center w-100 h-100 bg-whiteSub pb-4">
    <h1 v-if="title" class="text-center">
      {{ title }}
    </h1>
    <TfSearchCard v-for="(activity, i) in activities" :key="i"
      :name="`name: ${activity.locationName}, address: ${activity.address}`" :activity-number="i + 1"
      :current-list-number="currentListNumber"
      @emit-current-list-number="(newNumber: number) => newListNumber(newNumber)" />
  </div>
</template>