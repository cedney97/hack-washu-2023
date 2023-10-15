<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <client-only>
      <v-app>
        <v-main>
          <slot />
        </v-main>
      </v-app>
    </client-only>
  </div>
</template>

<script setup lang="ts">

</script>
