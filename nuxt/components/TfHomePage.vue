<script setup lang="ts">
    const numberValue = ref(0)
    const location = ref("")

    const updateNumberValue = (newNumberValue: number) => {
        numberValue.value = newNumberValue
    }

    const logValue = () => {
        console.log(numberValue.value)
        window.location.href = '/explore';
    }
</script>

<template>
    <div class="h-screen w-screen d-flex flex-column align-center pt-5 bg-whiteSub">
        <TfTitle title="TravelFreely" />
        <TfTextInput label="Where do you want to go?" placeholderText="Location" classes="mt-8" />
        <div class="d-flex flex-column w-50">
            <p class="mb-2 text-primary w-100 text-center">When do you want to go?</p>
            <div class="w-100 d-flex justify-center align-center">
                <TfDateTimeInput />
                <p class="mx-4">to</p>
                <TfDateTimeInput />
            </div>
        </div>
        <TfIntegerInput label="How many people are going?" placeholderText="Number" classes="mt-6" :numberValue="numberValue" @emitValue="(newNumberValue) => updateNumberValue(newNumberValue)" />
        <!-- Interests -->
        <v-btn color="primary" @click="logValue">
            Explore
        </v-btn>
    </div>
</template>