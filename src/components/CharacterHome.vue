<script setup>
import { ref } from 'vue';
import { useQuery } from "@vue/apollo-composable";
import gql from "graphql-tag";

// GraphQL query to fetch characters
const { result, loading, error } = useQuery(gql`
  query {
    characters {
      results {
        id
        name
        image
      }
    }
  }
`);

//to control how much character display by clicking a button
const showMore = ref(false);
const charactersToShow = ref(8);

const toggleShowMore = () => {
  showMore.value = !showMore.value;
  charactersToShow.value = showMore.value ? result.value.characters.results.length : 8;
};
</script>
<template>
  <div class="mt-2 p-4" >
    <h2 class="text-3xl font-bold">Characters of the Film</h2>
    <transition-group name="fade" tag="div" class="grid sm:grid-cols-2 md:grid-cols-4 gap-6 mt-5">
      <h1 v-if="loading">Loading...</h1>
      <h1 v-else-if="error">Error: {{ error.message }}</h1>
      <div v-else v-for="char in result?.characters.results.slice(0, charactersToShow)" :key="char.id" class="flex flex-col">
        <router-link :to="`/character/${char.id}`">
          <img :src="char.image" alt="there is no image" class="w-full h-auto rounded shadow-lg">
        </router-link>
        <div class="bg-gray-800 text-white text-center p-2 mt-2 rounded">
          <h2 class="text-lg">{{ char.name }}</h2>
        </div>
      </div>
    </transition-group>
    <div class="text-center mt-4">
      <button @click="toggleShowMore" class="bg-blue-500 text-white px-4 py-2 rounded">
        {{ showMore ? 'Show Less' : 'Show More' }}
      </button>
    </div>
  </div>
</template>
