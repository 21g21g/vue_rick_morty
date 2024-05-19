<script setup>
import { onMounted, ref } from "vue"
import {useRoute} from "vue-router"
import {useQuery} from "@vue/apollo-composable"
import gql from "graphql-tag"
const route=useRoute()
// const id=ref(route.params.id)
// onMounted(()=>{
//     console.log(id.value)
// })

 const {result,loading,error}=useQuery(gql`
 query getLocation($id:ID!){
location(id:$id){
 id
  name
  type
  dimension
  residents{
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
 `,{
    id:route.params.id
 }
 )


</script>
<template>
    <div>
        <h1 v-if="loading">Loading...</h1>
        <h1 v-else-if="error">Error:{{error.message}}</h1>
        <div v-else >
            <div class="flex w-full mt-3 p-3 h-screen">
                <div class="flex w-1/3 bg-slate-600 flex-col ml-2 p-3 rounded-2xl h-44 flex-none">
                <div class="location">
                  <h1 class="hone">Location Name:-</h1>
                  <h5 class="h-five">{{result.location.name}}</h5>
                    </div>
                 <div class="location">
                <h1 class="hone">Location Type:-</h1>
                <h5 class="h-five">{{result.location.type}}</h5>
                </div>
                <div class="location">
                <h1 class="hone">Dimension:-</h1>
                <h5 class="h-five">{{result.location.dimension}}</h5>
                </div>
                </div>
               <div class=" w-2/3 bg-slate-600 rounded-2xl grid grid-cols-2 flex-1 overflow-auto  p-3">
                       
                   <div v-for="resident in result?.location.residents" :key="resident.id" >
                    
                    <div class="flex flex-col w-full gap-2 ml-7">
                     <div class="w-1/3 mt-2 ">
                       <img :src="resident.image" alt="there is no image" class="rounded-2xl">
                     </div>
                     <div class="w-2/3 flex flex-col">
                     <h1 class="hone">{{resident.name}}</h1>
                     <h2 class="hone">{{resident.species}}</h2>
                     <h2 class="hone">{{resident.gender}}</h2>
                     <h2 class="hone">{{resident.status}}</h2>
                     
                     </div>
                    </div>
                     
                   </div>

                </div></div>
                
            </div>
        </div>
    
</template>