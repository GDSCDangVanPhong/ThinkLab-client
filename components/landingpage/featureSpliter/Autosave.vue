<script setup lang="ts">
  import {Icon} from "@iconify/vue";
</script>

<template>
  <div class="border-r w-1/2">
      <div class="mt-12 px-10">
        <div class="flex ">
          <Icon icon="fluent:document-autosave-24-filled" width="24" height="24"  style="color: #6c6c6c" />
          <p class="mt-1 ml-1 text-slate-500">Autosaving Documents</p>
        </div>
        <h1 class="mt-5 font-semibold text-2xl">From your screen to server, in seconds.</h1>
        <p class="mt-1.5 font-semibold text-xl text-slate-500  " >Storing to your workspace</p>
        <UiCard class="w-96 h-52 mt-14 px-2 pt-2.5 z-10">
          <div class="flex">
            <Icon icon="icon-park-outline:dot" width="18" height="18" style="color: #8e8e8e" />
            <Icon icon="icon-park-outline:dot" width="18" height="18" style="color: #8e8e8e" />
            <Icon icon="icon-park-outline:dot" width="18" height="18" style="color: #8e8e8e" />
            <span class="ml-auto mr-1.5 text-xs text-slate-500">
              Autosave completed
            </span>
            <Icon icon="line-md:check-all" width="16" height="16" class="animate-bounce"  style="color: #898989" />
          </div>
          <p class="z-0 text-sm mt-4 px-2 text-gray-500">
            This study proposes a novel approach using sentiment analysis combined with Graph Neural Networks to enhance recommendation accuracy on the Steam platform. The method effectively reduces popularity bias and improves recommendation diversity, leading to a more personalized user experience.
          </p>
        </UiCard>

        <UiCard class="w-96 h-52 -mt-16 shadow-lg z-30 ml-auto px-2 pt-2.5">
          <div class="flex">
            <Icon icon="icon-park-outline:dot" width="18" height="18" style="color: #fe0000" />
            <Icon icon="icon-park-outline:dot" width="18" height="18" style="color: #0066fe" />
            <Icon icon="icon-park-outline:dot" width="18" height="18" style="color: #00fe37" />
            <Icon icon="ic:twotone-vpn-lock" width="16" height="16" style="color: #898989" class="ml-20" />
            <span class="text-xs mt-0.5 ml-2 text-slate-600">ThinkLab.com</span>
          </div>
          <InspriraBlackHoleBackground class="w-full h-40 mt-2 rounded-lg">
            <div class="relative z-40 flex flex-col items-center justify-center h-full">
              <img src="/assets/image/mongodb.svg" alt="logo" class="w-32 h-11" />
            </div>
          </InspriraBlackHoleBackground>
        </UiCard>
      </div>

  </div>
</template>

