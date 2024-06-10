<script setup>
import { onMounted, ref } from "vue"
import { useRoute } from "vue-router"
import { useQuery } from "@vue/apollo-composable"
import gql from "graphql-tag"

const route = useRoute()
// To check if the character ID exists in the console.
const characterId = ref(route.params.id)
onMounted(() => {
    console.log(characterId.value)
})

const { result, loading, error } = useQuery(gql`
 query getCharacter($id: ID!) {
  character(id: $id) {
    id
    name
    status
    species
    gender
    episode {
      id
      name
      air_date
      episode
      created
    }
    image
  }
}`, {
    id: route.params.id
})
</script>

<template>
  <div class="p-4 h-screen overflow-hidden">
    <h1 v-if="loading" class="text-center text-lg">Loading...</h1>
    <h1 v-else-if="error" class="text-center text-lg text-red-500">Error: {{ error.message }}</h1>
    <div v-else class="flex flex-col md:flex-row h-full gap-4">
     
      <div class="w-full md:w-1/3 flex-none bg-slate-500 rounded-t-lg md:rounded-l-lg md:rounded-tr-none h-1/3 md:h-full overflow-hidden">
        <img :src="result.character.image" alt="No image available" class="w-full h-full object-cover rounded-t-lg md:rounded-l-lg md:rounded-tr-none">
      </div>
      
      <div class="w-full md:w-2/3 bg-slate-500 rounded-b-lg md:rounded-r-lg md:rounded-bl-none p-4 flex-1 overflow-auto">
        <div class="flex flex-col gap-4">
          <div class="flex flex-row">
            <h1 class="font-bold text-lg mr-2">Name:</h1>
            <p>{{ result.character.name }}</p>
          </div>
          <div class="flex flex-row">
            <h1 class="font-bold text-lg mr-2">Status:</h1>
            <p>{{ result.character.status }}</p>
          </div>
          <div class="flex flex-row">
            <h1 class="font-bold text-lg mr-2">Species:</h1>
            <p>{{ result.character.species }}</p>
          </div>
          <div class="flex flex-row">
            <h1 class="font-bold text-lg mr-2">Gender:</h1>
            <p>{{ result.character.gender }}</p>
          </div>
          <h1 class="font-bold text-lg" v-if="result.character.gender === 'Male'">List of Episodes he participated</h1>
          <h1 class="font-bold text-lg" v-else>List of Episodes she participated</h1>
          <div class="flex flex-col gap-4">
            <div v-for="episode in result.character.episode" :key="episode.id" class="bg-gray-800 p-4 rounded-lg">
              <div class="flex flex-row">
                <h1 class="font-bold text-lg mr-2">Episode Name:</h1>
                <p>{{ episode.name }}</p>
              </div>
              <div class="flex flex-row">
                <h1 class="font-bold text-lg mr-2">Air Date:</h1>
                <p>{{ episode.air_date }}</p>
              </div>
              <div class="flex flex-row">
                <h1 class="font-bold text-lg mr-2">Episode:</h1>
                <p>{{ episode.episode }}</p>
              </div>
              <div class="flex flex-row">
                <h1 class="font-bold text-lg mr-2">Created On:</h1>
                <p>{{ episode.created }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>