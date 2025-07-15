<script setup lang="ts">

import { VueFlow } from "@vue-flow/core";
import { Background } from "@vue-flow/background";
import { MiniMap } from "@vue-flow/minimap";
const nodes = [
  {
    id: '1',
    type: 'default',
    label: 'Scientific Research Project',
    position: { x: 500, y: 300 },
  },
  {
    id: '2',
    type: 'default',
    label: 'Literature Review',
    position: { x: 200, y: 100 },
  },
  {
    id: '3',
    type: 'default',
    label: 'Research Design',
    position: { x: 800, y: 100 },
  },
  {
    id: '4',
    type: 'default',
    label: 'Data Collection',
    position: { x: 200, y: 500 },
  },
  {
    id: '5',
    type: 'default',
    label: 'Data Analysis',
    position: { x: 800, y: 500 },
  },
  {
    id: '6',
    type: 'default',
    label: 'Conclusion & Reporting',
    position: { x: 500, y: 600 },
  },
];
const edges = [
  { id: 'e1-2', source: '1', target: '2' ,data: {pathType: 'smoothstep'} },
  { id: 'e1-3', source: '1', target: '3' },
  { id: 'e1-4', source: '1', target: '4' },
  { id: 'e1-5', source: '1', target: '5' },
  { id: 'e1-6', source: '1', target: '6' },
];


</script>
<template>
  <div class="h-full ">

      <VueFlow
        :nodes="nodes"
        :edges="edges"
        :class="{ dark }"
        class="basic-flow"
        :default-edge-options="{ type: 'animation', animated: true }"
        :default-viewport="{ zoom: 0.9 }"
        :min-zoom="0.2"
        :max-zoom="4"
        fit-view-on-init
      >
        <Background pattern-color="#aaa" :gap="16" />
        <MiniMap />
      </VueFlow>
  </div>
</template>
<style>

  @import '@vue-flow/core/dist/style.css';


  @import '@vue-flow/core/dist/theme-default.css';
</style>