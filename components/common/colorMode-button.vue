
<template>
  <div class="flex mr-6">
    <NuxtLink to ='/login'>
      <UiButton size="sm"  class="mt-1.5 mr-4" >Log In</UiButton>
    </NuxtLink>
    <UiButton size="xs" variant="link"  class="hover:bg-accent flex mt-1.5 ml-1" @click="click" >
      <Icon icon="lucide:github" width="18" height="18" />
    </UiButton>
  </div>


</template>


<script setup lang="ts">
// import {useUserColorMode} from "~/composables/common/useUserColorMode";
// const {ColorMode, toggleColorMode } = useUserColorMode()
import {Icon} from "@iconify/vue";

</script>