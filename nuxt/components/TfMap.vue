<template>
    <GoogleMap api-key="AIzaSyAF5niDHCDCD640Vyx7Tv1u19-lUXL9jpw" style="width: 100%; height: 100vh" class="pa-0"
        :center="center" :zoom="15">
        <Marker :options="{ position: center }" />
    </GoogleMap>
</template>

<script>
import { defineComponent } from "vue";
import { GoogleMap, Marker } from "vue3-google-map";

export default defineComponent({
    components: { GoogleMap, Marker },
    setup() {
        const center = { lat: 40.689247, lng: -74.044502 };

        return { center };
    },
});
</script>