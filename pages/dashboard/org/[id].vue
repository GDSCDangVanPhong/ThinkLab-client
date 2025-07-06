<template>
  <div class="flex flex-col h-screen w-full">
    <UiNavbar class="w-full px-4 py-3 flex justify-between z-30" :sticky="true">
      <div class="flex gap-x-2 items-center">
        <UiBreadcrumbs separator="lucide:slash" :items="items" class="text-xs md:text-md" />
        <HeaderDropDown/>
      </div>
      <div class="flex space-x-3">
        <UiButton size="xs" variant="outline" class="text-xs md:text-md">Feedback</UiButton>
        <AvartarDropDown class="cursor-pointer" />
      </div>
    </UiNavbar>
    <div class="flex-1  flex">
      <DashboardTLSideBar />
      <div class="ml-12 p-5 flex-1 overflow-auto" style="z-index: 0;">
        <DashboardTeam v-if="tabStore.tab == 'Team' "/>
        <DashboardBilling v-if="tabStore.tab == 'Billing'"/>
        <DashboardOrganizationSetting v-if="tabStore.tab == 'Settings'"/>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

  import logo from '~/assets/image/Final Logo.svg'
  import AvartarDropDown from "~/components/dashboard/AvartarDropDown.vue"
  import type { Crumbs } from "~/components/Ui/Breadcrumbs.vue";
  import HeaderDropDown from "~/components/dashboard/HeaderDropDown.vue";
  import { useTabs } from "~/stores/common/useTabs";
  const tabStore = useTabs()




  const items: Crumbs[] = [
    { img : logo ,link : "/dashboard/organizations"},
    { icon : "lucide:boxes", label : "ThinkLab" , badge : "Hobby" },
  ];

</script>