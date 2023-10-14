<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <client-only>
      <v-app>
        <v-main>
          <!-- Header goes heres -->
          <ElHeader />
          <slot />
        </v-main>
      </v-app>
    </client-only>
  </div>
</template>

<script setup lang="ts">

</script>
