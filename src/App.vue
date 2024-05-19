<script setup>
import Footer from "./components/Footer.vue";
import NavBar from "./components/NavBar.vue";
import CharacterPage from "./pages/CharacterPage.vue";
import EpisodePage from "./pages/EpisodePage.vue";
import HomePage from "./pages/HomePage.vue"
</script>

<template>
<div class="w-full min-h-screen text-white flex flex-col " >
    
        <NavBar/>
        
        <div class="flex-grow">
              
               <router-view></router-view>       

        </div>
        <Footer/>
        
    
   
    

</div>
</template>

