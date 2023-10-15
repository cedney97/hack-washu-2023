<script setup lang="ts">
// import { useRoute } from '~~/.nuxt/vue-router';

const route = useRoute()

console.log(route.query)

const ids = ref<string[]>([])
ids.value.push('ChIJVTPokywQkFQRmtVEaUZlJRA')
ids.value.push('ChIJN1t_tDeuEmsRUsoyG83frY4')

</script>

<template>
  <div class="h-screen w-screen d-flex flex-column align-center bg-whiteSub">
    <v-container height="100vh" width="100%" class="pa-0 ma-0" fluid>
      <v-row>
        <v-col cols="4">
          <TfCardList :place-ids="ids" />
        </v-col>
        <v-col cols="8" class="pa-0">
          <TfMap />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>