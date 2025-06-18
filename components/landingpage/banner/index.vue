<script setup lang="ts">
const texts = ["ThinkLab", "Collaboration", "Robust"]
</script>

<template>
  <section class="relative w-full h-auto pt-16  overflow-hidden">
    <InspriraLiquidBackground class="absolute inset-0 w-full h-full z-0" />

    <div class="relative z-10 flex flex-col items-center text-center px-4 sm:px-6 md:px-20">
      <InspriraMorphingText class="text-black text-3xl md:text-4xl md:mt-4" :texts="texts" />

      <h1 class="md:mt-6 mt-3 text-md md:text-5xl text-black font-extrabold leading-tight">
        Your complete platform for research.
      </h1>

      <InspriraTextGenerationEffect
          words="Discover the next frontier of scientific collaboration with ThinkLab — where ideas come to life, researchers connect, and breakthroughs begin. Join a new era of intelligent research, beautifully designed for the thinkers of tomorrow."
          :delay="200"
          class="text-gray-700 text-xs mt-6   md:text-xl max-w-3xl"
      />

      <div class="mt-10 flex gap-4 sm:gap-10">
        <UiButton variant="expandIcon" icon-placement="right" icon="lucide:arrow-up-right"
                  size="lg" class="shadow-2xl bg-black text-white hover:bg-black w-full sm:w-auto">
          Start Now
        </UiButton>
        <UiButton variant="expandIcon" icon-placement="right" icon="lucide:arrow-up-right"
                  size="lg" class="shadow-2xl bg-white text-black hover:bg-white w-full sm:w-auto">
          Get a Demo
        </UiButton>
      </div>

      <CommonGlassmorphisimCube class="md:mt-8 w-40 sm:w-60 h-28 md:w-72 mx-auto" />
    </div>
  </section>
</template>
