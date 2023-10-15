<script setup>
    import TfHomePage from '../components/TfHomePage.vue'
</script>

<template>
    <TfHomePage />
  <v-container
    height="100vh"
    width="100%"
    class="pa-0 ma-0"
    fluid
  >
    <v-row>
      <v-col cols="4">
        <TfSearchCardMini :place-id="'ChIJN1t_tDeuEmsRUsoyG83frY4'" />
      </v-col>

      <v-col cols="8">
        <TfMap />
      </v-col>
    </v-row>
  </v-container>
</template>