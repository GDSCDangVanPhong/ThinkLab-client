<script setup lang="ts">
import {Icon} from "@iconify/vue";
</script>

<template>
  <div class="w-full">
    <UiTabs default-value="barrier" class="w-full">
      <div class="mb-9 w-full">
        <UiTabsContent :value="'barrier'">
          <div class="flex ">
            <div>
              <div class="flex">
                <Icon icon="simple-icons:elsevier" width="30" height="30"/>
                <div class="ml-2 mt-1 flex">
                  <div class="text-slate-500"><span class="font-semibold text-2xl text-black">Elsevier </span> found
                    that 45% of researchers experience major delays.
                  </div>
                </div>
              </div>
              <div class="  flex items-center">
                <img src="/assets/image/Nature_journal_logo.svg" class="w-20 h-16 mr-2" alt="logo ">
                <div class="text-slate-500 mt-2"> reported that students spend 60+ hours drafting one research
                  article.
                </div>
              </div>
              <div class="  flex items-center">
                <img src="/assets/image/Final%20Logo.svg" class="w-10 h-10 mr-2" alt="logo ">
                <div class="text-slate-500 mt-2"> reported that students spend 60+ hours drafting one research
                  article.
                </div>
              </div>
            </div>
            <div class="w-96 ml-auto text-slate-500">Use ThinkLab’s AI-powered templates to kickstart your research
              faster. Collaborate with your team in real time, get instant feedback, and eliminate manual formatting.
              No setup. No friction. Just globally fast, ready-to-go research infrastructure.
            </div>
          </div>
        </UiTabsContent>
        <UiTabsContent :value="'upgrade'">
          <div class="flex ">
            <div class="space-y-6">
              <p class="text-slate-500">🧑‍🤝‍🧑 Real-time collaboration: Multiple authors can write and review at
                once.</p>
              <p class="text-slate-500">✅ Live grammar & structure checks: Automated academic proofreading as you
                type.</p>
              <p class="text-slate-500"> 📎 Built-in reference manager: Drag, drop, and cite without switching tabs.</p>
            </div>
            <div class="w-96 ml-auto text-slate-500">Switch to ThinkLab Pro and access advanced tools built for serious
              research. From AI insights to version history and high-performance sync — everything just works,
              instantly.
            </div>
          </div>
        </UiTabsContent>
        <UiTabsContent :value="'impact'">
          <div class="flex ">
            <div>
              <div class="flex items-center">
                <img src="/assets/image/sciverse.svg" alt="" class="w-24 h-12">
                <div class=" flex mt-4">
                  <div class="text-slate-500">Cut writing time by 82% with AI-powered outlining tools.</div>
                </div>
              </div>
              <div class="  flex items-center">
                <img src="/assets/image/openEd.svg" class="w-20 h-16 mr-2" alt="logo ">
                <div class="text-slate-500 mt-2"> Reduced researcher drop-off rates by 60% after onboarding with
                  ThinkLab.
                </div>
              </div>
              <div class="  flex items-center">
                <img src="/assets/image/Logo.svg" class="w-20 h-16 mr-2" alt="logo ">
                <div class="text-slate-500 mt-2"> Achieved 5× faster peer review turnaround using live collaboration.
                </div>
              </div>
            </div>
            <div class="w-96 ml-auto text-slate-500">From faster drafts to smoother collaboration — ThinkLab is
              transforming how research gets done. Join the labs already seeing the difference.
            </div>
          </div>
        </UiTabsContent>
        <UiTabsContent :value="'p&p'">
          <div class="flex ">
            <div class="space-y-6">
              <p class="text-slate-500">🚀 Prebuilt templates for theses, literature reviews, and more.</p>
              <p class="text-slate-500">🧩 No setup required – Launch with zero config.</p>
              <p class="text-slate-500">🌐 Globally fast infrastructure with 99.99% uptime.</p>
            </div>
            <div class="w-96 ml-auto text-slate-500">Start writing instantly with ThinkLab’s free tools — no
              installation, no delays. Access ready-made templates, real-time editing, and blazing-fast sync, all
              powered by our 99.99% uptime infrastructure.
            </div>
          </div>
        </UiTabsContent>
      </div>
      <div class="flex">
        <UiTabsList class="mt-1.5">
          <UiTabsTrigger :value="'barrier'">Old Barriers</UiTabsTrigger>
          <UiTabsTrigger :value="'upgrade'">ThinkLab Upgrade</UiTabsTrigger>
          <UiTabsTrigger :value="'impact'">Impacts</UiTabsTrigger>
          <UiTabsTrigger :value="'p&p'">Start & Scale</UiTabsTrigger>
        </UiTabsList>

        <UiTabsContent :value="'barrier'" class="ml-auto ">
          <UiButton variant="expandIcon" icon-placement="right" icon="lucide-lab:feather-square">
            Create workspace right now
          </UiButton>
        </UiTabsContent>
        <UiTabsContent :value="'upgrade'" class="ml-auto ">
          <UiButton variant="expandIcon" icon-placement="right" icon="carbon:upgrade">
            See what ThinkLab can
          </UiButton>
        </UiTabsContent>
        <UiTabsContent :value="'impact'" class="ml-auto ">
          <UiButton variant="expandIcon" icon-placement="right" icon="gis:search-feature">
            Browse Features
          </UiButton>
        </UiTabsContent>
        <UiTabsContent :value="'p&p'" class="ml-auto ">
          <UiButton variant="expandIcon" icon-placement="right" icon="vaadin:money">
            Starting from 0$
          </UiButton>
        </UiTabsContent>
      </div>

    </UiTabs>
  </div>
</template>

