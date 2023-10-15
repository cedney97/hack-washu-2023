<template>
  <button @click="chatGPT">Fetch Data</button>
</template>

<script setup lang="ts">

// Type of `data` is inferred as string even though we returned a Date object
async function chatGPT() {
  try {
    // '/api/google/search'
    const data = await $fetch('/api/openAi/generate', {
      method: 'POST'
    });
    const jsonData = await JSON.parse(data[0].message.content ? data[0].message.content : '');
    console.log(jsonData)
  }
  catch (error) {
    console.error('Error fetching GPT details:', error);
  }
};

</script>