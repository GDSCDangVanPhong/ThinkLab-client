<script setup lang="ts">
  const texts = [
      "ThinkLab",
      "Collaboration",
      "Robust"
  ]
</script>

<template>
  <section class="relative w-full h-[780px] pt-16  ">
    <InspriraLiquidBackground class="w-full h-[780px]  absolute inset-0 z-0"/>
    <div class="relative z-10 flex flex-col items-center h-full text-center px-4">
      <InspriraMorphingText class="text-black" :texts="texts" />
      <h1 class="mt-10 text-5xl text-black font-extrabold ">Your complete platform for research.</h1>
      <InspriraTextGenerationEffect words="Discover the next frontier of scientific collaboration with ThinkLab — where ideas come to life, researchers connect, and breakthroughs begin. Join a new era of intelligent research, beautifully designed for the thinkers of tomorrow." :delay="200" class="text-black mx-80 mt-6"/>
      <div class="mt-12 flex gap-10">
          <UiButton variant="expandIcon" icon-placement="right" icon="lucide:arrow-up-right" size="lg" class="shadow-2xl bg-black text-white hover:bg-black">Start Now</UiButton>
          <UiButton variant="expandIcon" icon-placement="right" icon="lucide:arrow-up-right" size="lg"  class="shadow-2xl bg-white text-black hover:bg-white">Get a Demo</UiButton>
      </div>
      <CommonGlassmorphisimCube class="cursor-pointer"/>
    </div>
  </section>



</template>

