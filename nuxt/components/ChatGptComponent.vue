
<script setup lang="ts">

// Type of `data` is inferred as string even though we returned a Date object
async function chatGPT() {
  try {
    const data = await $fetch('../server/api/openAi/generate')
  }
  catch (error) {
    console.log("this shit ain't working");
  }};

  onMounted(() => {
  chatGPT()
});
</script>