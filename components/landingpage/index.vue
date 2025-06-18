<script setup lang="ts">

const isMobile = useMediaQuery('(max-width: 768px)')
</script>

<template>
  <div class="md:mt-10 mt-5">
    <LandingpageNewsCTA/>
    <div class="md:px-20 md:mb-20">
      <LandingpageBanner class="w-full md:mt-10 mt-4 "/>
      <div class="w-full border">
        <LandingpageSuccessMetric class="w-full  border-b mb-5" :is-mobile="isMobile"/>
        <LandingpageFeatureSpliter class="border-b"/>
        <LandingpageConnectivity class="px-10"/>
        <LandingpageTestimonial/>
        <LandingpageLogo class="border-t px-7 "/>
      </div>
    </div>
    <Footer/>
  </div>
</template>

