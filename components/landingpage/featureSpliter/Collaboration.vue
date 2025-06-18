<script setup lang="ts">

import {Icon} from "@iconify/vue";
</script>

<template>
  <div class="w-full md:w-1/2 px-4 md:px-10">
    <div class="flex mt-8 md:mt-12">
      <Icon icon="carbon:collaborate" class="text-[18px] md:text-[24px]" style="color: #898989" />
      <p class="ml-1 text-sm md:text-base text-slate-500">Realtime Collaboration</p>
    </div>

    <h1 class="mt-4 md:mt-5 font-semibold text-lg md:text-2xl">
      Enjoy realtime collaboration with no conflict.
    </h1>
    <p class="mt-1 md:mt-1.5 font-medium text-sm md:text-xl text-slate-500">
      Ensure consistency among contributers
    </p>

    <div class="mt-8 md:mt-12">
      <!-- Card A -->
      <UiCard class="w-1/2 md:w-1/4 ml-1 md:ml-2 h-8 md:h-9 flex items-center justify-center mb-3 md:mb-4 shadow-lg animate-bounce">
        <p class="text-[10px] md:text-xs">a sudden <span class="text-red-500">price</span></p>
      </UiCard>

      <!-- Line A -->
      <div class="flex items-center w-full">
        <div class="flex items-center space-x-1 md:space-x-2">
          <div class="h-px w-10 md:w-14 bg-gray-300"></div>
          <span class="text-[10px] md:text-sm text-gray-600">A</span>
        </div>
        <div class="flex-1 h-px bg-gray-300 ml-1 md:ml-2"></div>
      </div>
      <span class="text-[10px] md:text-xs text-slate-600">Client A</span>

      <!-- Card A+B -->
      <UiCard class="w-1/2 md:w-2/6 ml-40 md:ml-60 h-8 md:h-9 flex items-center justify-center shadow-lg animate-bounce mt-2">
        <p class="text-[10px] md:text-xs">a sudden <span class="text-red-500">price change</span></p>
      </UiCard>

      <!-- Line A+B -->
      <div class="flex items-center w-full mt-6 md:mt-7">
        <div class="flex items-center space-x-1 md:space-x-2">
          <div class="h-px w-28 md:w-36 bg-gray-300"></div>
          <span class="text-[10px] md:text-sm text-gray-600 mr-1 md:mr-2">A</span>
          <div class="h-px w-24 md:w-32 bg-gray-300"></div>
          <span class="text-[10px] md:text-sm text-gray-600">A + B</span>
        </div>
        <div class="flex-1 h-px bg-gray-300 ml-1 md:ml-2"></div>
      </div>
      <span class="text-[10px] md:text-xs text-slate-600">Server</span>

      <!-- Line B -->
      <div class="flex items-center w-full mt-12 md:mt-14">
        <div class="flex items-center space-x-1 md:space-x-2">
          <div class="h-px w-52 md:w-60 bg-gray-300"></div>
          <span class="text-[10px] md:text-sm text-gray-600">B</span>
        </div>
        <div class="flex-1 h-px bg-gray-300 ml-1 md:ml-2"></div>
      </div>
      <span class="text-[10px] md:text-xs text-slate-600">Client B</span>

      <!-- Card B -->
      <UiCard class="w-1/3 md:w-1/4 ml-36 md:ml-44 h-8 md:h-9 flex items-center justify-center mb-3 md:mb-4 shadow-lg animate-bounce">
        <p class="text-[10px] md:text-xs">a sudden <span class="text-red-500">change</span></p>
      </UiCard>
    </div>

    <div class="w-full flex justify-end mb-4">
      <UiButton class="mt-2 md:mt-3 text-xs md:text-sm px-2 md:px-4 py-1 md:py-2">
        See how them work
      </UiButton>
    </div>
  </div>
</template>
