<script setup>
import { ref } from "vue"; 
import {Carousel} from "vue3-carousel"
import {Slide} from "vue3-carousel"
import {Navigation} from "vue3-carousel"
import {Pagination} from "vue3-carousel"
import 'vue3-carousel/dist/carousel.css'
// import imag1 from "../assets/sttt.jpg"
// import imag2 from "../assets/brea.jpg"
// import imag3 from "../assets/game-of.webp"
import imag4 from "../assets/38.jpeg"
import imag5 from "../assets/175.jpeg"
import imag6 from "../assets/181.jpeg"

const corosol=ref([
    {
        id:1,
        name:"Game of Throne",
        ima1:imag4,
        description:"Game of Thrones is an epic fantasy drama television series based on George R.R. Martin's 'A Song of Ice and Fire' novels. Set in the fictional continents of Westeros and Essos, the series follows noble families as they vie for control of the Iron Throne and the Seven Kingdoms of Westeros.",
        Geners:['Fantacy','Drama','Adventure']
    },
     {
        id:2,
        name:"Stranger Things",
        ima1:imag5,
        description:"Stranger Things is a supernatural horror series created by the Duffer Brothers. Set in the 1980s in the fictional town of Hawkins, Indiana, the show revolves around a group of kids who encounter mysterious events involving government experiments, supernatural forces, and alternate dimensions.",
        Geners:['Fantacy','Drama','Adventure']
    },
     {
        id:3,
        name:"Breaking Bad",
        ima1:imag6,
        description:"Breaking Bad is a crime drama series created by Vince Gilligan. It follows Walter White, a high school chemistry teacher turned methamphetamine manufacturer, as he descends into a world of crime to secure his family's financial future after being diagnosed with cancer.",
        Geners:['Crime','Drama','Thriler']
    },
])
</script>
<template>
 <Carousel class="mt-3 border border-spacing-x-1 bg-slate-700  border-red-500">
 <Slide v-for="coro in corosol" :key="coro.id">
        <div class="flex flex-row w-full">
            <div class="w-1/2 md:ml-10">
              <h1 class="text-red-700 text-3xl">{{coro.name}}</h1>
              <p class="w-80 ml-1">{{coro.description}}</p>
              <div class="flex flex-col ml-2  mt-2">
                <div><h1 class="text-red-700 text-3xl">Geners:</h1></div>
                
                <div><ol class=" flex flex-col " >
                    <li  v-for="gener in coro.Geners" :key="gener">{{gener}}</li>
                    
                </ol></div>
                
              </div>
            </div>
            <div class="p-3 mr-5 w-1/2" >
                <!-- <img :src="coro.ima1" alt="no images"> -->
                <img class="w-96 rounded-lg" :src="coro.ima1" alt="">
            </div>

        </div>

    </Slide>
     <template #addons>
      <Navigation />
      <Pagination />
    </template>
</Carousel>

   
</template>