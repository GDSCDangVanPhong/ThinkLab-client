<script setup lang="ts">
  import {Icon} from "@iconify/vue";
</script>

<template>
  <div class="border-r w-full md:w-1/2">
    <div class="mt-8 md:mt-12 px-4 md:px-10">
      <!-- Header -->
      <div class="flex">
        <Icon icon="fluent:document-autosave-24-filled" class="text-[20px] md:text-[24px]" style="color: #6c6c6c" />
        <p class="ml-1 text-sm md:text-base mt-0.5 text-slate-500">Autosaving Documents</p>
      </div>

      <!-- Title & Subtitle -->
      <h1 class="mt-4 md:mt-5 font-semibold text-lg md:text-2xl">
        From your screen to server, in seconds.
      </h1>
      <p class="mt-1 md:mt-1.5 font-medium text-sm md:text-xl text-slate-500">
        Storing to your workspace
      </p>

      <!-- Card 1 -->
      <UiCard class="w-2/3 md:w-96 h-40 md:h-52 mt-10 md:mt-14 px-2 pt-2.5 z-10">
        <div class="flex">
          <Icon icon="icon-park-outline:dot" class="w-[14px] h-[14px] md:w-[18px] md:h-[18px]" style="color: #8e8e8e" />
          <Icon icon="icon-park-outline:dot" class="w-[14px] h-[14px] md:w-[18px] md:h-[18px]" style="color: #8e8e8e" />
          <Icon icon="icon-park-outline:dot" class="w-[14px] h-[14px] md:w-[18px] md:h-[18px]" style="color: #8e8e8e" />
          <span class="ml-auto mr-1 text-[10px] md:text-xs text-slate-500">
            Autosave completed
          </span>
          <Icon icon="line-md:check-all" class="animate-bounce w-[14px] h-[14px] md:w-[16px] md:h-[16px]" style="color: #898989" />
        </div>
        <p class="text-xs md:text-sm mt-3 md:mt-4 px-1.5 md:px-2 text-gray-500 leading-tight">
          This study proposes a novel approach using sentiment analysis combined with Graph Neural Networks to enhance recommendation accuracy on the Steam platform.
        </p>
      </UiCard>

      <!-- Card 2 -->
      <UiCard class="w-2/3 md:w-96 h-40 md:h-52 -mt-16 md:-mt-16 shadow-lg z-10 ml-auto px-2 pt-2.5 mb-3">
        <div class="flex">
          <Icon icon="icon-park-outline:dot" class="w-[14px] h-[14px] md:w-[18px] md:h-[18px]" style="color: #fe0000" />
          <Icon icon="icon-park-outline:dot" class="w-[14px] h-[14px] md:w-[18px] md:h-[18px]" style="color: #0066fe" />
          <Icon icon="icon-park-outline:dot" class="w-[14px] h-[14px] md:w-[18px] md:h-[18px]" style="color: #00fe37" />
          <Icon icon="ic:twotone-vpn-lock" class="ml-14 md:ml-20 w-[14px] h-[14px] md:w-[16px] md:h-[16px]" style="color: #898989" />
          <span class="text-[10px] md:text-xs mt-0.5 ml-2 text-slate-600">ThinkLab.com</span>
        </div>
        <InspriraBlackHoleBackground class="w-full h-28 md:h-40 mt-2 rounded-lg">
          <div class="relative z-40 flex flex-col items-center justify-center h-full">
            <img src="/assets/image/mongodb.svg" alt="logo" class="w-24 h-8 md:w-32 md:h-11" />
          </div>
        </InspriraBlackHoleBackground>
      </UiCard>
    </div>
  </div>
</template>
