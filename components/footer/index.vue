<script setup lang="ts">
import { Icon } from '@iconify/vue';
</script>

<template>
  <div class="border-b w-full py-24 border-t">
    <div class="px-6 md:px-20 flex flex-col md:flex-row md:justify-between gap-10">
      <!-- Logo & Description -->
      <div class="text-center md:text-left">
        <div class="flex justify-center md:justify-start cursor-pointer">
          <img src="assets/image/Final%20Logo.svg" alt="logo" class="w-11 h-11" />
          <span class="font-bold text-2xl mt-3 pl-1">ThinkLab</span>
        </div>
        <p class="mt-5 text-gray-500 max-w-xs mx-auto md:mx-0">
          A complete platform for researchers and innovators
        </p>
        <div class="flex justify-center md:justify-start gap-x-3 mt-4">
          <Icon icon="mdi:github" width="24" height="24" class="cursor-pointer text-black" />
          <Icon icon="ic:baseline-facebook" width="24" height="24" class="cursor-pointer text-black" />
          <Icon icon="mdi:linkedin" width="24" height="24" class="cursor-pointer text-black" />
        </div>
      </div>

      <!-- Navigation Links -->
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 text-center md:text-left mx-auto md:mx-0">
        <div>
          <div class="font-bold">Product</div>
          <div class="mt-4 text-gray-500 hover:text-primary cursor-pointer text-sm">Overview</div>
          <div class="mt-2 text-gray-500 hover:text-primary cursor-pointer text-sm">Pricing</div>
          <div class="mt-2 text-gray-500 hover:text-primary cursor-pointer text-sm">Features</div>
        </div>
        <div>
          <div class="font-bold">Company</div>
          <div class="mt-4 text-gray-500 hover:text-primary cursor-pointer text-sm">About</div>
          <div class="mt-2 text-gray-500 hover:text-primary cursor-pointer text-sm">Team</div>
        </div>
        <div>
          <div class="font-bold">Resources</div>
          <div class="mt-4 text-gray-500 hover:text-primary cursor-pointer text-sm">Help</div>
          <div class="mt-2 text-gray-500 hover:text-primary cursor-pointer text-sm">Privacy</div>
          <div class="mt-2 text-gray-500 hover:text-primary cursor-pointer text-sm">Git Hub</div>
        </div>
      </div>
    </div>

    <!-- Divider -->
    <UiDivider class="px-6 md:px-20 mt-14" />

    <!-- Bottom section -->
    <div class="flex flex-col md:flex-row items-center justify-between px-6 md:px-20 mt-10 gap-4 text-center md:text-left">
      <p class="font-light text-sm text-gray-600">© 2025 ThinkLab. All rights reserved.</p>
      <div class="flex flex-col md:flex-row gap-2 md:gap-x-3">
        <p class="font-light text-sm text-gray-600 cursor-pointer hover:text-primary">Terms and Conditions</p>
        <p class="font-light text-sm text-gray-600 cursor-pointer hover:text-primary">Privacy Policy</p>
      </div>
    </div>
  </div>
</template>
