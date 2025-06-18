<script setup lang="ts">

import FactTabs from "~/components/landingpage/success_metric/FactTabs.vue";
import Mobile from "~/components/landingpage/success_metric/mobile.vue";
const prop = defineProps({
  isMobile : Boolean
})
</script>

<template>
    <div class="h-96  px-10 ">
      <FactTabs class="flex items-center h-full w-full" v-if="!isMobile"/>
      <Mobile v-if="isMobile"/>
    </div>
</template>
