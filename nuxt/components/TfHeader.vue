<template>
  <v-app-bar :elevation="2">
    <v-app-bar-title>
      <v-card
        class="text-center"
        @click="$router.push('/')"
      >
        <v-card-title>
          Travel Freely
        </v-card-title>
      </v-card>
    </v-app-bar-title>
  </v-app-bar>
</template>

<script setup lang="ts">
const $router = useRouter()

</script>