<script setup lang="ts">

const ids = ref<string[]>([]);

ids.value.push('ChIJN1t_tDeuEmsRUsoyG83frY4');
ids.value.push('ChIJVTPokywQkFQRmtVEaUZlJRA');
ids.value.push('ChIJAYWNSLS4QIYROwVl894CDco');

</script>

<template>
  <div class="h-screen w-screen d-flex flex-column align-center bg-whiteSub">
    <v-container class="pa-4 h-100 overflow-hidden w-100" fluid>
      <v-row>
        <v-col cols="4" class="pa-3 overflow-auto h-screen w-100">
          <TfCardList :place-ids="ids" title="Your Itinerary" />
        </v-col>

        <v-col cols="8" class="pa-0">
          <TfMap />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>