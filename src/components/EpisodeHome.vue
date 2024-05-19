<script setup>
import gql from "graphql-tag"
import { useQuery } from "@vue/apollo-composable"
import { Carousel, Pagination, Navigation, Slide } from "vue3-carousel"
import 'vue3-carousel/dist/carousel.css'

// GraphQL query to fetch episodes
const { result, loading, error } = useQuery(gql`
  query {
    episodes {
      results {
        id
        name
        episode
        characters {
          id
          image
        }
      }
    }
  }
`)
</script>

<template>
  <div class="p-4">
    <h1 class="text-3xl font-bold mb-4">Episode List</h1>
    
    <Carousel :itemsToShow="3.95" :wrapAround="true" :transition="500" class="space-y-4">
      <h1 v-if="loading" class="text-center text-lg">Loading...</h1>
      <h1 v-else-if="error" class="text-center text-lg text-red-500">{{ error.message }}</h1>
      
      <Slide v-else v-for="epis in result?.episodes.results || []" :key="epis.id" class="p-2">
        <div class="flex flex-col h-full bg-white rounded-lg shadow-lg overflow-hidden">
          <div class="h-2/3">
            <router-link :to="`/episode/${epis.id}`">
              <img v-if="epis.characters.length > 0" :src="epis.characters[0].image" alt="No image available" class="w-full h-full object-cover">
            </router-link>
          </div>
          <div class="p-4 bg-gray-800 text-white flex-1 flex flex-col justify-between">
            <h2 class="text-xl font-semibold">{{ epis.name }}</h2>
            <p class="mt-2">Season: {{ epis.episode }}</p>
          </div>
        </div>
      </Slide>
      
      <template #addons>
        <Pagination />
        <Navigation />
      </template>
    </Carousel>
  </div>
</template>

<style scoped>
@media (max-width: 768px) {
  .carousel {
    --carousel-item-show: 1;
  }
}
</style>