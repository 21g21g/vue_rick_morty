<script setup>
import { useQuery } from "@vue/apollo-composable";
import gql from "graphql-tag";

const { result, loading, error } = useQuery(gql`
  query {
    locations {
      results {
        id
        name
        type
        dimension
      }
    }
  }
`);
</script>

<template>
  <div class="mt-3 p-4">
    <h1 class="text-3xl font-bold">Locations</h1>
    <div class="flex flex-wrap mt-4">
      <h1 v-if="loading" class="text-lg">Loading...</h1>
      <h1 v-else-if="error" class="text-lg text-red-500">Error: {{ error.message }}</h1>
      <div v-else v-for="location in result?.locations.results" :key="location.id" class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-2">
        <router-link :to="`/location/${location.id}`">
          <div class="bg-gray-800 p-4 rounded-lg shadow-lg">
            <h1 class="text-xl font-bold mb-2">{{ location.name }}</h1>
            <p class="text-sm">Type: {{ location.type }}</p>
            <p class="text-sm">Dimension: {{ location.dimension }}</p>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>