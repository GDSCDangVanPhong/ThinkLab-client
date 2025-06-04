<script setup lang="ts">
  import {Icon} from "@iconify/vue";
</script>
<template>
    <div class=" border-b w-full py-24 border-t " >
        <div class = "px-20 flex justify-between">
          <div>
            <div class="flex cursor-pointer">
              <img src="assets/image/Final%20Logo.svg" alt="logo" class="w-11 h-11 " />
              <span class="font-bold text-end text-2xl mt-3 pl-1">ThinkLab</span>
            </div>
            <p class="mt-5 text-gray-500">
              A complete platform for researchers and innovators
            </p>
            <div class="flex gap-x-3 mt-4">
              <Icon icon="mdi:github" width="24" height="24"  style="color: #000"  class="cursor-pointer"/>
              <Icon icon="ic:baseline-facebook" width="24" height="24"  style="color: #000"  class="cursor-pointer"/>
              <Icon icon="mdi:linkedin" width="24" height="24"  style="color: #000" class="cursor-pointer" />
            </div>
          </div>
          <div class=" grid grid-cols-3 gap-24" >
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
        <UiDivider class="px-20 mt-14"/>
        <div class="flex justify-between px-20 mt-10">
          <p class="font-light text-sm text-gray-600">© 2025 ThinKLab. All rights reserved.</p>
          <div class="flex gap-x-3 ">
            <p class="font-light text-sm text-gray-600 cursor-pointer hover:text-primary">Terms and Conditions</p>
            <p class="font-light text-sm text-gray-600 cursor-pointer hover:text-primary">Privacy Policy</p>
          </div>
        </div>
    </div>
</template>

