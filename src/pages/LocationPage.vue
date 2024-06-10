<script setup>
import { onMounted, ref } from "vue"
import { useRoute } from "vue-router"
import { useQuery } from "@vue/apollo-composable"
import gql from "graphql-tag"

const route = useRoute()

const { result, loading, error } = useQuery(gql`
  query getLocation($id: ID!) {
    location(id: $id) {
      id
      name
      type
      dimension
      residents {
        id
        name
        status
        species
        type
        gender
        image
      }
      created
    }
  }
`, {
  id: route.params.id
})
</script>

<template>
  <div class="p-4">
    <h1 v-if="loading" class="text-center text-lg">Loading...</h1>
    <h1 v-else-if="error" class="text-center text-lg text-red-500">Error: {{ error.message }}</h1>
    <div v-else class="flex flex-col md:flex-row w-full mt-3 p-3 h-screen gap-4">
      <div class="flex w-full md:w-1/3 bg-slate-600 flex-col p-4 rounded-2xl h-auto">
        <div class="mb-4">
          <h1 class="font-bold text-lg">Location Name:</h1>
          <h5 class="text-base">{{ result.location.name }}</h5>
        </div>
        <div class="mb-4">
          <h1 class="font-bold text-lg">Location Type:</h1>
          <h5 class="text-base">{{ result.location.type }}</h5>
        </div>
        <div class="mb-4">
          <h1 class="font-bold text-lg">Dimension:</h1>
          <h5 class="text-base">{{ result.location.dimension }}</h5>
        </div>
      </div>

      <div class="w-full md:w-2/3 bg-slate-600 rounded-2xl p-4 overflow-auto">
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div v-for="resident in result.location.residents" :key="resident.id" class="flex flex-col bg-gray-800 p-4 rounded-2xl">
            <div class="w-full mb-4">
              <img :src="resident.image" alt="No image available" class="w-full h-auto rounded-2xl">
            </div>
            <div class="flex flex-col">
              <h1 class="font-bold text-lg">{{ resident.name }}</h1>
              <h2 class="text-base">{{ resident.species }}</h2>
              <h2 class="text-base">{{ resident.gender }}</h2>
              <h2 class="text-base">{{ resident.status }}</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>