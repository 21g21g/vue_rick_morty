<script setup>
import { onMounted, ref, watchEffect,onUnmounted,computed } from "vue"

import { useRoute } from "vue-router"
import { useQuery } from "@vue/apollo-composable"
import gql from "graphql-tag"
import { Carousel, Slide, Navigation } from "vue3-carousel"
import 'vue3-carousel/dist/carousel.css'

const route = useRoute()
const episodeId = ref(route.params.id)

onMounted(() => {
    console.log(episodeId.value)
})

const { result, loading, error } = useQuery(gql`
    query getEpisode($id: ID!) {
        episode(id: $id) {
            id
            name
            air_date
            episode
            created
            characters {
                id
                name
                status
                species
                gender
                image
            }
        }
    }`, {
    id: route.params.id
})

const windowWidth = ref(window.innerWidth)
const itemsToShow = ref(3)

const updateItemsToShow = () => {
    itemsToShow.value = window.innerWidth < 768 ? 1 : 3
}

onMounted(() => {
    window.addEventListener('resize', updateItemsToShow)
    updateItemsToShow()
})

watchEffect(() => {
    itemsToShow.value = windowWidth.value < 768 ? 1 : 3
})

onUnmounted(() => {
    window.removeEventListener('resize', updateItemsToShow)
})
</script>

<template>
    <div class="mt-2">
        <h1 v-if="loading" class="text-center text-lg">Loading...</h1>
        <h1 v-else-if="error" class="text-center text-lg text-red-500">Error: {{ error.message }}</h1>
        <div v-else class="w-full flex flex-col md:flex-row gap-4">
            <div class="w-full md:w-1/3 bg-slate-500 p-4 rounded-lg">
                <div class="flex flex-row">
                    <h1 class="font-bold text-lg">Episode Name:</h1>
                    <p>{{ result.episode.name }}</p>
                </div>
                <div class="flex flex-row">
                    <h1 class="font-bold text-lg">Air Date:</h1>
                    <p>{{ result.episode.air_date }}</p>
                </div>
                <div class="flex flex-row">
                    <h1 class="font-bold text-lg">Episode:</h1>
                    <p>{{ result.episode.episode }}</p>
                </div>
                <div class="flex flex-row">
                    <h1 class="font-bold text-lg">Created Date:</h1>
                    <p>{{ result.episode.created }}</p>
                </div>
            </div>
            <div class="w-full md:w-2/3 bg-slate-700 p-4 rounded-lg">
                <Carousel :items-to-show="itemsToShow" :wrap-around="true" class="mt-3">
                    <Slide v-for="character in result.episode.characters" :key="character.id">
                        <div class="w-full bg-gray-800 p-4 rounded-lg flex flex-col justify-between">
                            <img :src="character.image" alt="No image available" class="w-full h-auto rounded-lg">
                            <div class="flex flex-col gap-2">
                                <div class="flex flex-row">
                                    <h1 class="font-bold text-lg">Character Name:</h1>
                                    <p>{{ character.name }}</p>
                                </div>
                                <div class="flex flex-row">
                                    <h1 class="font-bold text-lg">Status:</h1>
                                    <p>{{ character.status }}</p>
                                </div>
                                <div class="flex flex-row">
                                    <h1 class="font-bold text-lg">Species:</h1>
                                    <p>{{ character.species }}</p>
                                </div>
                                <div class="flex flex-row">
                                    <h1 class="font-bold text-lg">Gender:</h1>
                                    <p>{{ character.gender }}</p>
                                </div>
                            </div>
                        </div>
                    </Slide>
                    <template #addons>
                        <Navigation />
                    </template>
                </Carousel>
            </div>
        </div>
    </div>
</template>