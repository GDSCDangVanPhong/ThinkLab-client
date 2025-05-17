
<template>
  <div class="flex">
    <UiButton size="sm"  class="mt-1.5 mr-4" >Log In</UiButton>
    <UiDropdownMenu>
      <UiDropdownMenuTrigger as-child>
        <UiButton size="xs" variant="link" class="hover:bg-accent flex mt-1.5" >
          <Icon v-if="ColorMode.value==='light'"  icon="lucide:sun-medium" width="18" height="18"/>
          <Icon v-if="ColorMode.value=='dark'"  icon="lucide:moon" width="18" height="18"  />
        </UiButton>
      </UiDropdownMenuTrigger>
      <UiDropdownMenuContent >
        <UiDropdownMenuItem class="cursor-pointer flex" @click="toggleColorMode('light')">
          <Icon  icon="lucide:sun-medium" width="18" height="18"/>
          Light
        </UiDropdownMenuItem>
        <UiDropdownMenuItem class="cursor-pointer" @click="toggleColorMode('dark')">
          <Icon  icon="lucide:moon" width="18" height="18"  />
          Dark
        </UiDropdownMenuItem>
      </UiDropdownMenuContent>
    </UiDropdownMenu>
    <UiButton size="xs" variant="link" class="hover:bg-accent flex mt-1.5 ml-1">
      <Icon icon="lucide:github" width="18" height="18" />
    </UiButton>
  </div>


</template>


<script setup lang="ts">
import {useUserColorMode} from "~/composables/common/useUserColorMode";
const {ColorMode, toggleColorMode } = useUserColorMode()
import {Icon} from "@iconify/vue";

</script>