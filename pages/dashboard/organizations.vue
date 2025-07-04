<script setup lang="ts">
  import type { Crumbs } from "~/components/Ui/Breadcrumbs.vue";

  import logo from '~/assets/image/Final Logo.svg'
  import AvartarDropDown from "~/components/dashboard/AvartarDropDown.vue";
  import { Icon } from "@iconify/vue";
  const items: Crumbs[] = [
    { img : logo ,link : "/dashboard/organizations"},
    { label: "Organization", link: "/dashboard/organizations" },
  ];


</script>

<template>
  <div class="w-full " >
    <UiNavbar class="w-full px-4 py-3 flex justify-between">
      <UiBreadcrumbs separator="lucide:slash" :items="items"  />
      <div class="flex space-x-3 ">
      <UiButton size="xs" variant="outline">Feedback</UiButton>
        <AvartarDropDown class="cursor-pointer"/>
      </div>
    </UiNavbar>
    <div class="mx-auto w-full max-w-[1200px] px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 2xl:px-24 my-8">
      <h1 class="text-2xl font-bold ml-4 mt-6">Your Organizations</h1>
      <div class="flex w-full mt-6 pr-4 ">
        <UiButton class="ml-4 hover:bg-emerald-700 bg-emerald-500 text-xs  md:text-md"  size="sm"  >
        New organization
        </UiButton>
        <div class="md:w-60 ml-auto w-32">
          <UiVeeInput
            placeholder="Search for an organization ..."
            class="text-xs md:text-md"
            type="search"
            icon="lucide:search"
          >

          </UiVeeInput>
        </div>

      </div>

      <div class="mt-10 grid sm:grid-cols-1 px-4 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
        <UiCard class="cursor-pointer hover:bg-secondary">
            <UiCardContent class="flex items-center gap-x-5 p-4">
              <Icon icon="lucide:boxes" width="20" height="20"  />
              <div class="flex flex-col">
                <span class="text-sm font-bold">Mono Render</span>
                <span class="text-xs">Free plan</span>
              </div>
            </UiCardContent>


        </UiCard>
        <UiCard>

        </UiCard>
        <UiCard>

        </UiCard>
      </div>
    </div>
  </div>


</template>

