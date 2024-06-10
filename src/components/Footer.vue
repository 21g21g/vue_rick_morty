<script setup>
import { Icon } from '@iconify/vue';

</script>
<template>
  <footer class="bg-gray-800 flex flex-col">
    <div class="flex justify-between mt-5 px-4">
      <div class="flex">
        <h1 class="text-white cursor-pointer">Tv-Show</h1>
      </div>
      <div class="flex gap-3 mr-5">
        <Icon icon="logos:facebook" class="text-white cursor-pointer" />
             <a href="https://www.figma.com/design/Wdezr1OalkuJcrQ0apdmbv/ricky_movy?node-id=0-1&t=nvLPFq5QkgphLOaE-0" target="_blank"><Icon icon="logos:figma" class="text-white cursor-pointer" /></a>
             <a href="https://github.com/21g21g/vue_rick_morty" target="_blank">
              <Icon icon="ant-design:github-outlined" class="text-white cursor-pointer" /> </a> 
              <a href="https://www.linkedin.com/in/gebeyehu-assega" target="_blank">        <Icon icon="skill-icons:linkedin" class="text-white cursor-pointer" />
                  </a>
           </div>
                 </div>
    <div class="mt-14 flex justify-between px-4 py-3">
      <div>
        <h1 class="text-white font-semibold">Company</h1>
        <ol class="list-none">
          <li class="text-gray-300 cursor-pointer">About Us</li>
          <li class="text-gray-300 cursor-pointer">Careers</li>
          <li class="text-gray-300 cursor-pointer">Contact</li>
        </ol>
      </div>
      <div>
        <h1 class="text-white font-semibold">Support</h1>
        <ol class="list-none">
          <li class="text-gray-300 cursor-pointer">Contact Support</li>
          <li class="text-gray-300 cursor-pointer">Supported Device</li>
          <li class="text-gray-300 cursor-pointer">Help Center</li>
        </ol>
      </div>
      <div>
        <h1 class="text-white font-semibold">Partners</h1>
        <ol class="list-none">
          <li class="text-gray-300 cursor-pointer">Advertise with us</li>
          <li class="text-gray-300 cursor-pointer">Partner with us</li>
        </ol>
      </div>
    </div>
  </footer>
</template>