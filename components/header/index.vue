<script setup lang="ts">

import { Icon } from "@iconify/vue";
</script>

<template>
  <UiNavbar class="p-4 flex justify-between">
    <div class="flex">
      <img src="assets/image/Final%20Logo.svg" alt="logo" class="w-11 h-11 cursor-pointer" />
      <span class="font-bold text-end text-2xl mt-3 pl-2">ThinkLab</span>
    </div>
    <HeaderNavigationMenuParts/>
    <UiButton size="icon" variant="link" class="hover:bg-accent">
      <Icon  icon="lucide:sun-medium" width="24" height="24" />
    </UiButton>

  </UiNavbar>
</template>

