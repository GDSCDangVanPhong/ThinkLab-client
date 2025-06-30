
<template>
  <div class="flex ">
    <NuxtLink to ='/login'>
      <UiButton size="sm"  class="mt-1.5 mr-4" >Log In</UiButton>
    </NuxtLink>
    <UiButton size="xs" variant="link"  class="hover:bg-accent flex mt-1.5 ml-1"  >
      <Icon icon="lucide:github" width="18" height="18" />
    </UiButton>
  </div>


</template>


<script setup lang="ts">

import {Icon} from "@iconify/vue";

</script>