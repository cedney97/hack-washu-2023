<template>
  <button @click="chatGPT">Fetch Data</button>
</template>

<script setup lang="ts">

// Type of `data` is inferred as string even though we returned a Date object
async function chatGPT() {
  try {
    const data = await $fetch('/api/openAi/generate', {
      method : 'POST'
    });
    console.log(data);
  }
  catch (error) {
    console.error('Error fetching place details:', error);
  }};

</script>