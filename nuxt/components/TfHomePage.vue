<script setup lang="ts">

import { DateTime } from 'luxon';

const people = ref(0)
const location = ref("")
const startDate = ref<DateTime[]>([])
const endDate = ref<DateTime[]>([])
const interests = ref<string[]>([])
const labels = [
    'Beach Vacations',
    'Cultural Immersion',
    'Food and Culinary Experiences',
    'Wildlife Safaris',
    'Historical Exploration',
    'Urban Adventures',
    'Relaxation and Wellness',
    'Art and Architecture',
    'Family-Friendly Destinations',
    'Music and Festivals',
    'Scenic Road Trips',
    'Water Sports and Activities',
    'Mountain Retreats',
    'Skiing and Snowboarding',
    'Yoga and Meditation Retreats',
    'Wine and Vineyard Tours',
    'Eco-Tourism and Sustainability',
    'Volunteer and Service Trips',
    'Photography and Nature',
    'Solo Travel',
    'Luxury and High-End Travel',
    'Budget and Backpacking',
    'Adventure Sports',
    'Cultural Heritage and Traditions',
    'Spiritual and Religious Journeys',
]

const updateNumberValue = (newNumberValue: number) => {
    people.value = newNumberValue
}

const updateLocation = (newLocation: string) => {
    location.value = newLocation
}

const updateStartDate = (newStartDate: DateTime[]) => {
    startDate.value = newStartDate
}

const updateEndDate = (newEndDate: DateTime[]) => {
    endDate.value = newEndDate
}

const updateInterests = (newInterests: string[]) => {
    interests.value = newInterests
}

const printData = () => {
    const data = {
        'numberPeople': people.value,
        'location': location.value,
        'startDate': startDate.value,
        'endDate': endDate.value,
        'interests': interests.value
    }
    console.log(data)
    navigateTo({ path: '/explore', query: data })
}

</script>

<template>
    <div class="h-screen w-screen d-flex flex-column align-center pt-5 pb-12 bg-whiteSub overflow-auto">
        <TfTitle title="TravelFreely" />
        <TfSubtitle subtitle="Create Your Personal Itinerary!" />
        <TfTextInput label="Where do you want to go?" placeholderText="Location" classes="mt-8"
            @emitValue="(newLocation: string) => updateLocation(newLocation)" />
        <div class="d-flex flex-column w-50">
            <p class="mb-2 text-primary w-100 text-center font-italic">When do you want to go?</p>
            <div class="w-100 d-flex justify-center align-center">
                <TfDateTimeInput @update:date="(newStartDate: DateTime[]) => updateStartDate(newStartDate)" />
                <p class="mx-4">to</p>
                <TfDateTimeInput @update:date="(newEndDate: DateTime[]) => updateEndDate(newEndDate)" />
            </div>
        </div>
        <TfIntegerInput label="How many people are going?" placeholderText="Number" classes="mt-6" :numberValue="people"
            @emitValue="(newNumberValue: number) => updateNumberValue(newNumberValue)" />
        <div class="d-flex flex-column w-50 align-center">
            <p class="mb-2 text-primary w-100 text-center font-italic">What are you interested in?</p>
            <TfSelect :labels="labels" @update:interests="(newInterests: string[]) => updateInterests(newInterests)" />
        </div>
        <v-btn color="primary" @click="printData">
            Explore
        </v-btn>
    </div>
</template>