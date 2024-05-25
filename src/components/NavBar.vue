<script setup>
import { Icon } from '@iconify/vue';

</script>
<template>
  <nav class="bg-slate-600h-14 flex items-center p-2">
    <div class="flex justify-between w-full px-3">
      <div class="flex justify-start">
        <a class="cursor-pointer font-semibold text-white">Tv-Show</a>
      </div>
      <ul class="flex flex-row gap-2">
        <li class="flex items-center cursor-pointer bg-red-800 hover:bg-red-700 rounded-md p-1">
          <Icon icon="material-symbols-light:search" class="text-white" />
          <a class="text-white">Find Film</a>
        </li>
        <li>
          <button class="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md px-3 py-1">Login</button>
        </li>
        <li>
          <button class="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md px-3 py-1">Register</button>
        </li>
      </ul>
    </div>
  </nav>
</template>