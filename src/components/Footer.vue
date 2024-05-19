<script setup>
import { Icon } from '@iconify/vue';

</script>
<template>
<footer class="bg-gray-800 flex flex-col">
    <div class="flex flex-row justify-between mt-5">
        <div class="flex ml-4">
            <h1 class="hone curser">Tv-Show</h1>
        </div>
        <div class="flex flex-row mr-5 gap-3">
<Icon icon="logos:facebook" class="curser"/>
<Icon icon="skill-icons:instagram" class="curser"/>
<Icon icon="logos:twitter" class="curser"/>
<Icon icon="skill-icons:linkedin" class="curser"/>
        </div>
    </div>
    <div class="mt-14 flex flex-row ml-6 justify-between p-3">
        <div>
        <h1 class="hone">Company</h1>
        <ol class="list_style">
            <li class="curser">About Us</li>
            <li class="curser">Careers</li>
            <li class="curser">Contact</li>
        </ol>
    </div>
    <div>
        <h1  class="hone">Support</h1>
        <ol  class="list_style">
            <li class="curser">Contact Support</li>
            <li class="curser">Supported Device</li>
            <li class="curser">Help Center</li>
        </ol>
    </div>
    <div>
        <h1  class="hone">Partners</h1>
        <ol  class="list_style mr-3">
            <li class="curser">Advertise with us</li>
            <li class="curser">Partner with us</li>
        </ol>
    </div>
    </div>
    
    

</footer>
</template>