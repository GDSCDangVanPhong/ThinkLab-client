<script setup lang="ts">

import {Icon} from "@iconify/vue";
</script>

<template>
    <div class="flex justify-center mt-5">
        <UiTabs default-value="barrier">
          <UiTabsList class=" w-full ">
            <UiTabsTrigger :value="'barrier'" class="text-xs px-1.5">Old Barriers</UiTabsTrigger>
            <UiTabsTrigger :value="'upgrade'" class="text-xs px-1.5">ThinkLab Upgrade</UiTabsTrigger>
            <UiTabsTrigger :value="'impact'" class="text-xs px-1.5">Impacts</UiTabsTrigger>
            <UiTabsTrigger :value="'p&p'" class="text-xs px-1.5">Start & Scale</UiTabsTrigger>
          </UiTabsList>
          <UiTabsContent :value="'barrier'">

              <div class="flex flex-col gap-y-7 mt-6">
                <div class="flex">
                  <Icon icon="simple-icons:elsevier" width="30" height="30"/>
                  <div class="ml-2 mt-1 flex">
                    <div class="text-slate-500 text-sm"><span class="font-semibold text-lg text-black">Elsevier </span> found
                      that 45% of researchers experience major delays.
                    </div>
                  </div>
                </div>
                <div class="  flex items-center">
                  <img src="/assets/image/Nature_journal_logo.svg" class="w-20 h-16 mr-2" alt="logo ">
                  <div class="text-slate-500  text-sm"> reported that students spend 60+ hours drafting one research
                    article.
                  </div>
                </div>
                <div class="  flex items-center">
                  <img src="/assets/image/Final%20Logo.svg" class="w-10 h-10 mr-2" alt="logo ">
                  <div class="text-slate-500 mt-2"> reported that students spend 60+ hours drafting one research
                    article.
                  </div>
                </div>
                <UiButton variant="expandIcon" icon-placement="right" icon="lucide-lab:feather-square">
                  Create workspace right now
                </UiButton>
              </div>


          </UiTabsContent>
          <UiTabsContent :value="'upgrade'">
            <div class="flex flex-col mt-8">
              <div class="space-y-7">
                <p class="text-slate-500">🧑‍🤝‍🧑 Real-time collaboration: Multiple authors can write and review at
                  once.</p>
                <p class="text-slate-500">✅ Live grammar & structure checks: Automated academic proofreading as you
                  type.</p>
                <p class="text-slate-500"> 📎 Built-in reference manager: Drag, drop, and cite without switching tabs.</p>
              <UiButton variant="expandIcon" icon-placement="right" icon="carbon:upgrade" class="w-full">
                See what ThinkLab can
              </UiButton>
              </div>
            </div>
          </UiTabsContent>

          <UiTabsContent :value="'impact'">
            <div class="flex flex-col gap-y-7  mt-6 ">
              <div class="flex flex-col gap-y-7">
                <div class="flex items-center ">
                  <img src="/assets/image/sciverse.svg" alt="" class="w-24 h-12">
                  <div class=" flex mt-4">
                    <div class="text-slate-500 text-sm">Cut writing time by 82% with AI-powered outlining tools.</div>
                  </div>
                </div>
                <div class="  flex items-center">
                  <img src="/assets/image/openEd.svg" class="w-20 h-16 mr-3" alt="logo ">
                  <div class="text-slate-500 mt-2 text-sm"> Reduced researcher drop-off rates by 60% after onboarding with
                    ThinkLab.
                  </div>
                </div>
                <div class="  flex items-center">
                  <img src="/assets/image/Logo.svg" class="w-20 h-16 mr-2" alt="logo ">
                  <div class="text-slate-500 mt-2 text-sm"> Achieved 5× faster peer review turnaround using live collaboration.
                  </div>
                </div>
              </div>
              <UiButton variant="expandIcon" icon-placement="right" icon="gis:search-feature" >
                Browse Features
              </UiButton>
            </div>
          </UiTabsContent>
          <UiTabsContent :value="'p&p'">
            <div class="flex mt-10 ">
              <div class="flex flex-col space-y-10">
                <p class="text-slate-500">🚀 Prebuilt templates for theses, literature reviews, and more.</p>
                <p class="text-slate-500">🧩 No setup required – Launch with zero config.</p>
                <p class="text-slate-500">🌐 Globally fast infrastructure with 99.99% uptime.</p>
                <UiButton variant="expandIcon" icon-placement="right" icon="vaadin:money">
                  Starting from 0$
                </UiButton>
              </div>

            </div>
          </UiTabsContent>
        </UiTabs>
    </div>
</template>

