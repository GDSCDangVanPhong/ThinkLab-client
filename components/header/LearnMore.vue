<script setup lang="ts">
const items =[
  {
    iconSrc : 'lucide:book-open-text',
    title : 'Docs',
    description : 'Learning ThinkLab within a blink',
  },
  {
    iconSrc : 'lucide:badge-help',
    title : 'FAQ',
    description : 'You got trouble ? Worry not ',
  },
  {
    iconSrc : 'lucide:users',
    title : 'Community',
    description : 'Learning from others ',
  },
]
import {Icon} from "@iconify/vue";
</script>

<template>
  <div v-for="item in items" class="hover:bg-accent rounded-md flex p-2 cursor-pointer">
    <Icon  :icon="item.iconSrc" width="32" height="32" />
    <div class="ml-4">
      <h3 class="font-semibold">{{item.title}}</h3>
      <span class="overflow-auto text-xs fo">{{item.description}}</span>
    </div>

  </div>
</template>
