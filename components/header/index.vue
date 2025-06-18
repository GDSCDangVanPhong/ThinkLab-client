<script setup lang="ts">
</script>

<template>
  <UiNavbar :sticky="true" class="p-4 flex justify-between items-center flex-wrap ">
    <div class="flex items-center space-x-2 cursor-pointer md:w-1/3 sm:w-1/2">
      <img src="assets/image/Final%20Logo.svg" alt="logo" class="w-10 h-10" />
      <span class="font-bold text-2xl">ThinkLab</span>
    </div>

    <div class="hidden md:flex items-center space-x-4 md:w-2/3 justify-between">
      <HeaderNavigationMenuParts />
      <CommonColorModeButton />
    </div>

    <!-- Mobile menu (optional) -->
    <div class="flex md:hidden w-1/2 justify-end ">
      <HeaderSideBar/>
    </div>
  </UiNavbar>
</template>

