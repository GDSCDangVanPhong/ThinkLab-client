<script setup lang="ts">

import {Icon} from "@iconify/vue";
</script>

<template>
  <div class="w-1/2 px-10">
    <div class="flex mt-12 ">
      <Icon icon="carbon:collaborate" width="24" height="24"  style="color: #898989" />
      <p class="mt-1 ml-1 text-slate-500">Realtime Collaboration</p>
    </div>
    <h1 class="mt-5 font-semibold text-2xl">Enjoy realtime collaboration with no conflict.</h1>
    <p class="mt-1.5 font-semibold text-xl text-slate-500  " >Ensure consistency among contributers</p>
    <div class="mt-12">
      <div>
        <UiCard class="w-1/4 ml-2 h-9 flex items-center justify-center mb-4 shadow-lg animate-bounce">
            <p class="text-xs">a sudden <span class="text-red-500">price</span></p>
        </UiCard>
        <div class="flex items-center w-full">
          <div class="flex items-center space-x-2">
            <div class="h-px w-14 bg-gray-300"></div>
            <span class="text-sm text-gray-600">A</span>
          </div>
          <div class="flex-1 h-px bg-gray-300 ml-2"></div>
        </div>
        <span class="text-xs text-slate-600">Client A</span>
      </div>
      <UiCard class="w-2/6 ml-60 h-9 flex items-center justify-center  shadow-lg animate-bounce">
        <p class="text-xs">a sudden <span class="text-red-500">price change</span></p>
      </UiCard>
      <div>
        <div class="flex items-center w-full mt-7">
          <div class="flex items-center space-x-2">
            <div class="h-px w-36 bg-gray-300"></div>
            <span class="text-sm text-gray-600 mr-2">A</span>
            <div class="h-px w-32 bg-gray-300"></div>
            <span class="text-sm text-gray-600 ">A + B</span>

          </div>
          <div class="flex-1 h-px bg-gray-300 ml-2"></div>
        </div>
        <span class="text-xs text-slate-600">Server</span>
      </div>
      <div>

      <div class="flex items-center w-full mt-14">
        <div class="flex items-center space-x-2">
          <div class="h-px w-60 bg-gray-300"></div>
          <span class="text-sm text-gray-600">B</span>
        </div>
        <div class="flex-1 h-px bg-gray-300 ml-2"></div>
      </div>
      <span class="text-xs text-slate-600">Client B</span>
        <UiCard class="w-1/4 ml-44 h-9 flex items-center justify-center mb-4 shadow-lg animate-bounce">
          <p class="text-xs">a sudden <span class="text-red-500">change</span></p>
        </UiCard>
    </div>
      <div class="w-full flex justify-end">
        <UiButton class="mt-3 ">
          See how them work
        </UiButton>
      </div>
    </div>
  </div>
</template>
