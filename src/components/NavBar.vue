<script setup>
import { Icon } from '@iconify/vue';

</script>
<template>
<nav class="bg-red-900 h-14 flex  items-center">
    <div class="flex justify-between w-full">
        <div class="flex justify-start"><a class="cursor-pointer hone ml-1">Tv-Show</a></div>
       
            <ul class="flex flex-row mr-3 gap-2">
          
                <li class="flex items-center cursor-pointer gap-1 border rounded-md p-1">
                
                <Icon icon="material-symbols-light:search" class="text-white" />
                <a>find film</a>
                </li>
                <li>
                <button  class="bg-sky-950 rounded-md w-16">Login</button></li>
           <li>
            <button class="bg-sky-950 rounded-md w-16">Register</button></li>
                
          
        </ul>
        

    </div>

</nav>
</template>