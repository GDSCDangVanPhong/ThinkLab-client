<template>
  <div
    class="fixed left-0  h-screen border-r  transition-all duration-300 z-10 overflow-hidden"
    @mouseenter="openSidebar"
    @mouseleave="closeSidebar"
    :class="isOpen ? 'w-44 bg-white dark:bg-black' : 'w-14'"
  >
    <ul class="mt-5 space-y-2.5 px-1.5">
      <li
        v-for="item in items"
        :key="item.label"
        class="flex items-center p-2 rounded-md cursor-pointer hover:bg-secondary hover:opacity-100"
        :class="isSpotlight(item.label) ? 'opacity-100' : 'opacity-30' "
        @click="changingTab(item.label)"
      >

        <div class="w-5 h-5 flex justify-center items-center">
          <Icon :icon="item.icon" class="w-5 h-5 opacity-100 "/>
        </div>

        <span
          class=" text-xs font-bold  whitespace-nowrap transition-all duration-300"
          :class="isOpen ? 'opacity-100 visible ml-3  ' : 'opacity-0 invisible w-0 overflow-hidden'"
        >
          {{ item.label }}
        </span>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import { Icon } from '@iconify/vue'
  import { useTabs } from "~/stores/common/useTabs";

  const isOpen = ref(false)
  const tabStore = useTabs()
  const isSpotlight = (indicator : string) =>{
      return indicator == tabStore.tab
  }


  const changingTab = (nextTab: string) => {
    tabStore.changeTab(nextTab)

  }
  const openSidebar = () => (isOpen.value = true)
  const closeSidebar = () => (isOpen.value = false)

  const items = [
    { label: 'Playground', icon: 'lucide:codesandbox' },
    { label: 'Team', icon: 'lucide:users-round' },
    { label: 'Integrations', icon: 'lucide:blocks' },
    { label: 'Usage', icon: 'lucide:chart-area' },
    { label: 'Billing', icon: 'lucide:receipt' },
    { label: 'Settings', icon: 'lucide:settings' },
  ]
</script>
