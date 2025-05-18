<script setup lang="ts">
  const texts = [
      "ThinkLab",
      "Collaboration",
      "Robust"
  ]
</script>

<template>
  <section class="relative w-full h-[700px] pt-20">
    <InspriraLiquidBackground class="w-full h-full absolute inset-0 z-0"/>
    <div class="relative z-10 flex flex-col items-center h-full text-center px-4">
      <InspriraMorphingText class="text-black" :texts="texts" />
      <h1 class="mt-4 text-5xl text-black font-extrabold ">Your complete platform for research.</h1>
      <p class="mt-10 text-black mx-80">Discover the next frontier of scientific collaboration with ThinkLab — where ideas come to life, researchers connect, and breakthroughs begin. Join a new era of intelligent research, beautifully designed for the thinkers of tomorrow.</p>
      <div class="mt-16 flex gap-16">
          <UiButton  size="lg" class="shadow-2xl">Start Now</UiButton>
          <UiButton size="lg" variant="secondary" class="shadow-2xl">Get a Demo</UiButton>
      </div>
      <img src="assets/image/Final%20Logo.svg" class="w-44 h-44 mt-16 filter brightness-110 drop-shadow-2xl"  alt="logo">
    </div>
  </section>



</template>

