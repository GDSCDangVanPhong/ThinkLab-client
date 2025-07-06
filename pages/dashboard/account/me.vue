<script setup lang="ts">
  import logo from '~/assets/image/Final Logo.svg'

  import AvartarDropDown from "~/components/dashboard/AvartarDropDown.vue";
  import type { Crumbs } from "~/components/Ui/Breadcrumbs.vue";
  import { Icon } from "@iconify/vue";
  import Button from "~/components/Ui/Button.vue";
const items: Crumbs[] = [
  { img : logo ,link : "/dashboard/organizations"},
  { label : "Account" , link : "/dashboard/account/me" },
];
  const tabs = [
    {
      title: "Overview",
      icon: "lucide:home",
      content: "This is the overview. Here you can see the overview of the project.",
    },
    {
      title: "Security",
      icon: "lucide:panels-top-left",
      content: "These are the number of outstanding projects.",
    },

  ];
  const theme = useColorMode()
  onMounted(()=>{
    console.log(theme.preference);
  })
  const router = useRouter();
</script>

<template>
  <UiNavbar class="w-full px-4 py-3 flex justify-between z-30">
    <div class="flex gap-x-2 items-center">
      <UiBreadcrumbs separator="lucide:slash" :items="items" class="text-xs md:text-md" />
    </div>
    <div class="flex space-x-3">
      <UiButton size="xs" variant="outline" class="text-xs md:text-md">Feedback</UiButton>
      <AvartarDropDown class="cursor-pointer" />
    </div>
  </UiNavbar>
  <div class="mx-auto w-full max-w-[1200px] px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 2xl:px-24 my-8">
    <span class="opacity-60 font-bold cursor-pointer flex items-center gap-x-2 hover:opacity-100 w-36">
      <span>
        <Icon icon="lucide:move-left" class="w-4 h-4" />
      </span>
      <span class="text-xs" @click="router.back()">
        Back to dashboard
      </span>
    </span>
    <div class="mt-8">
      <span class="text-2xl  font-bold">Account settings</span>
    </div>
    <div class="mt-8">
    <UiTabs default-value="AccountSettings" class="w-full">
      <UiTabsList
        class="relative mb-3 h-auto gap-2 rounded-none border-b border-border bg-transparent px-0 py-1 text-foreground w-full"
      >
        <UiTabsTrigger value="AccountSettings"
        >
          Account Settings
        </UiTabsTrigger>
        <UiTabsTrigger value="Audit"
        >
          Audit Logs
        </UiTabsTrigger>
        <UiTabsIndicator />

      </UiTabsList>
      <UiTabsContent value="AccountSettings">
        <div class="flex mt-16 w-full">
          <UiTabs
            default-value="Overview"
            orientation="vertical"
            class="flex gap-x-8 w-full"
          >
            <UiTabsList :pill="false" class="h-auto flex-col gap-1 py-0">
              <UiTabsTrigger
                v-for="t in tabs"
                :key="t.title"
                :pill="false"
                :value="t.title"
                class="w-full justify-start data-[state=active]:bg-muted data-[state=active]:shadow-none text-xs "
              >
                {{ t.title }}
              </UiTabsTrigger>
            </UiTabsList>
            <UiTabsContent value="Overview" class="w-full">
              <UiCard class="w-full">
                  <UiCardHeader class="font-semibold mb-0 p-4 opacity-75">
                    Profile Information
                  </UiCardHeader>
                <UiDivider/>
                  <UiCardContent >
                    <form class="mt-3 mb-3" >
                      <fieldset class="flex flex-col gap-y-7">
                        <div class="flex gap-x-14 md:gap-x-24 items-center">
                            <p class="text-xs opacity-70 font-bold w-32">First Name</p>
                            <UiVeeInput/>
                        </div>
                        <div class="flex gap-x-14 md:gap-x-24 items-center">
                          <p class="text-xs opacity-70 font-bold w-32">Last Name</p>
                          <UiVeeInput/>
                        </div>
                      </fieldset>
                    </form>
                  </UiCardContent>
                <UiDivider/>
                <UiCardFooter class="p-4">
                  <div class="ml-auto flex items-center gap-x-4">
                    <Button size="xs" variant="outline" class="text-xs">Cancel</Button>
                    <Button size="xs" class="bg-emerald-500 hover:bg-emerald-700  text-xs ">Save</Button>
                  </div>
                </UiCardFooter>
              </UiCard>
              <UiCard class="w-full mt-12">
                <UiCardHeader class="font-semibold opacity-75 mb-0 p-4" >
                  Account Identities
                </UiCardHeader>
                <UiDivider/>
                <UiCardContent class="p-4 " >
                  <div class="flex items-center">

                    <Icon icon="flat-color-icons:google" width="32" height="32" />
                    <div class="ml-4">
                      <p class="text-xs font-bold">Google</p>
                      <p class="text-xs font-light opacity-70">gdschanu.phongdv2909@gmail.com</p>
                    </div>
                    <UiTooltip disable-closing-trigger >
                      <template #trigger>
                        <UiTooltipTrigger as-child>
                          <Icon icon="solar:pen-bold" width="15" height="15" class="ml-auto opacity-60 hover:cursor-pointer" />
                        </UiTooltipTrigger>
                      </template>
                      <template #content>
                        <UiTooltipContent class="text-xs opacity-70 font-bold">
                          Update email address
                        </UiTooltipContent>
                      </template>
                    </UiTooltip>
                  </div>
                </UiCardContent>
              </UiCard>
              <UiCard class="mt-12 w-full">
                <UiCardHeader class="font-semibold opacity-75 mb-0 p-4">
                  Appearance
                </UiCardHeader>
                <UiDivider/>
                <UiCardContent>
                  <div class="gap-x-20 md:gap-x-44 flex items-center justify-center">

                    <p class="opacity-75 text-sm">ThinkLab will use your selected theme</p>
                  </div>
                  <div class="mt-9 px-6 grid grid-cols-3 gap-x-14">

                      <div class="border rounded-md p-4 hover:bg-secondary cursor-pointer" @click="()=>{theme.preference = 'dark'}">
                        <svg viewBox="0 0 162 88" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_701_65535)"><rect x="0.242188" width="161.5" height="88" rx="6" fill="#1C1C1C"></rect><mask id="path-3-inside-1_701_65535" fill="white"><path d="M0.242188 6C0.242188 2.68629 2.92848 0 6.24219 0H13.2422V88H6.24219C2.92848 88 0.242188 85.3137 0.242188 82V6Z"></path></mask><path d="M0.242188 6C0.242188 2.68629 2.92848 0 6.24219 0H13.2422V88H6.24219C2.92848 88 0.242188 85.3137 0.242188 82V6Z" fill="#1C1C1C"></path><path d="M0.242188 0H13.2422H0.242188ZM13.2422 88H0.242188H13.2422ZM0.242188 88V0V88ZM14.2422 0V88H12.2422V0H14.2422Z" fill="#2E2E2E" mask="url(#path-3-inside-1_701_65535)"></path><mask id="path-5-inside-2_701_65535" fill="white"><path d="M155.742 -2.62268e-07C159.056 -1.17421e-07 161.742 2.68629 161.742 6L161.742 13L13.2422 13L13.2422 -6.49114e-06L155.742 -2.62268e-07Z"></path></mask><path d="M155.742 -2.62268e-07C159.056 -1.17421e-07 161.742 2.68629 161.742 6L161.742 13L13.2422 13L13.2422 -6.49114e-06L155.742 -2.62268e-07Z" fill="#1C1C1C"></path><path d="M161.742 0L161.742 13L161.742 0ZM13.2422 13L13.2422 -6.49114e-06L13.2422 13ZM13.2422 -6.49114e-06L161.742 0L13.2422 -6.49114e-06ZM161.742 14L13.2422 14L13.2422 12L161.742 12L161.742 14Z" fill="#2E2E2E" mask="url(#path-5-inside-2_701_65535)"></path><rect x="44.2552" y="21.5" width="86.4738" height="23.5" rx="2.5" fill="#232323" stroke="#2E2E2E"></rect><rect x="44.2552" y="51.5" width="86.4738" height="23.5" rx="2.5" fill="#232323" stroke="#2E2E2E"></rect><rect x="52.4406" y="28" width="19.2318" height="1.5" rx="0.75" fill="#A0A0A0"></rect><rect x="52.4406" y="56.5" width="19.2318" height="1.5" rx="0.75" fill="#A0A0A0"></rect><rect x="77.8762" y="28" width="19.2318" height="1.5" rx="0.75" fill="#EDEDED"></rect><rect x="77.8762" y="56.5" width="19.2318" height="1.5" rx="0.75" fill="#EDEDED"></rect><rect x="77.8762" y="33.25" width="44.0471" height="1.5" rx="0.75" fill="#EDEDED"></rect><rect x="77.8762" y="61.75" width="44.0471" height="1.5" rx="0.75" fill="#EDEDED"></rect><rect x="17.9922" y="4.625" width="20.5" height="3.75" rx="1.875" fill="#3ECF8E"></rect><rect x="43.7552" y="4.625" width="20.5" height="3.75" rx="1.875" fill="#707070"></rect><rect x="69.0052" y="4.625" width="20.5" height="3.75" rx="1.875" fill="#707070"></rect><rect x="101.423" y="28" width="20.5" height="1.5" rx="0.75" fill="#FFB224"></rect><rect x="4.86719" y="4.625" width="3.75" height="3.75" rx="1" fill="#707070"></rect><rect x="4.86719" y="13.375" width="3.75" height="3.75" rx="1" fill="#707070"></rect><rect x="4.86719" y="20.875" width="3.75" height="3.75" rx="1" fill="#707070"></rect><rect x="4.86719" y="28.375" width="3.75" height="3.75" rx="1" fill="#707070"></rect><rect x="4.86719" y="35.875" width="3.75" height="3.75" rx="1" fill="#707070"></rect><rect x="4.86719" y="78.875" width="3.75" height="3.75" rx="1" fill="#707070"></rect></g><rect x="0.742188" y="0.5" width="160.5" height="87" rx="5.5" stroke="#2E2E2E"></rect><defs><clipPath id="clip0_701_65535"><rect x="0.242188" width="161.5" height="88" rx="6" fill="white"></rect></clipPath></defs></svg>
                        <div class="flex items-center space-x-2 opacity-75 mt-3.5">
                          <input
                            type="radio"
                            value="dark"
                            class="accent-black dark:accent-white"

                            :checked="theme.preference == 'dark'"
                          />
                          <span >
                                Dark
                          </span>
                        </div>
                      </div>
                      <div class="border rounded-md p-4 hover:bg-secondary cursor-pointer" @click="()=>{theme.preference = 'light'}">
                        <svg viewBox="0 0 162 88" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_701_65608)"><rect x="0.242188" width="161.5" height="88" rx="6" fill="#F8F9FA"></rect><mask id="path-3-inside-1_701_65608" fill="white"><path d="M0.242188 6C0.242188 2.68629 2.92848 0 6.24219 0H13.2422V88H6.24219C2.92848 88 0.242188 85.3137 0.242188 82V6Z"></path></mask><path d="M0.242188 6C0.242188 2.68629 2.92848 0 6.24219 0H13.2422V88H6.24219C2.92848 88 0.242188 85.3137 0.242188 82V6Z" fill="#F8F9FA"></path><path d="M0.242188 0H13.2422H0.242188ZM13.2422 88H0.242188H13.2422ZM0.242188 88V0V88ZM14.2422 0V88H12.2422V0H14.2422Z" fill="#E6E8EB" mask="url(#path-3-inside-1_701_65608)"></path><mask id="path-5-inside-2_701_65608" fill="white"><path d="M155.742 -2.62268e-07C159.056 -1.17421e-07 161.742 2.68629 161.742 6L161.742 13L13.2422 13L13.2422 -6.49114e-06L155.742 -2.62268e-07Z"></path></mask><path d="M155.742 -2.62268e-07C159.056 -1.17421e-07 161.742 2.68629 161.742 6L161.742 13L13.2422 13L13.2422 -6.49114e-06L155.742 -2.62268e-07Z" fill="#F8F9FA"></path><path d="M161.742 0L161.742 13L161.742 0ZM13.2422 13L13.2422 -6.49114e-06L13.2422 13ZM13.2422 -6.49114e-06L161.742 0L13.2422 -6.49114e-06ZM161.742 14L13.2422 14L13.2422 12L161.742 12L161.742 14Z" fill="#E6E8EB" mask="url(#path-5-inside-2_701_65608)"></path><rect x="44.2552" y="21.5" width="86.4738" height="23.5" rx="2.5" fill="#FCFCFC" stroke="#E6E8EB"></rect><rect x="44.2552" y="51.5" width="86.4738" height="23.5" rx="2.5" fill="#FCFCFC" stroke="#E6E8EB"></rect><rect x="52.4406" y="28" width="19.2318" height="1.5" rx="0.75" fill="#525252"></rect><rect x="52.4406" y="56.5" width="19.2318" height="1.5" rx="0.75" fill="#525252"></rect><rect x="77.8762" y="28" width="19.2318" height="1.5" rx="0.75" fill="#11181C"></rect><rect x="77.8762" y="56.5" width="19.2318" height="1.5" rx="0.75" fill="#11181C"></rect><rect x="77.8762" y="33.25" width="44.0471" height="1.5" rx="0.75" fill="#11181C"></rect><rect x="77.8762" y="61.75" width="44.0471" height="1.5" rx="0.75" fill="#11181C"></rect><rect x="17.9922" y="4.625" width="20.5" height="3.75" rx="1.875" fill="#3FCF8E"></rect><rect x="43.7552" y="4.625" width="20.5" height="3.75" rx="1.875" fill="#B2B2B2"></rect><rect x="69.0052" y="4.625" width="20.5" height="3.75" rx="1.875" fill="#B2B2B2"></rect><rect x="101.423" y="28" width="20.5" height="1.5" rx="0.75" fill="#FFB224"></rect><rect x="4.86719" y="4.625" width="3.75" height="3.75" rx="1" fill="#B2B2B2"></rect><rect x="4.86719" y="13.375" width="3.75" height="3.75" rx="1" fill="#B2B2B2"></rect><rect x="4.86719" y="20.875" width="3.75" height="3.75" rx="1" fill="#B2B2B2"></rect><rect x="4.86719" y="28.375" width="3.75" height="3.75" rx="1" fill="#B2B2B2"></rect><rect x="4.86719" y="35.875" width="3.75" height="3.75" rx="1" fill="#B2B2B2"></rect><rect x="4.86719" y="78.875" width="3.75" height="3.75" rx="1" fill="#B2B2B2"></rect></g><rect x="0.742188" y="0.5" width="160.5" height="87" rx="5.5" stroke="#E6E8EB"></rect><defs><clipPath id="clip0_701_65608"><rect x="0.242188" width="161.5" height="88" rx="6" fill="white"></rect></clipPath></defs></svg>
                        <div class="flex items-center space-x-2 opacity-75 mt-3.5">
                          <input
                            type="radio"
                            value="dark"
                            class="accent-black dark:accent-white"

                            :checked="theme.preference =='light'"
                          />
                          <span >
                                Light
                          </span>
                        </div>
                      </div>
                      <div class="border rounded-md p-4 hover:bg-secondary cursor-pointer" @click="()=>{theme.preference = 'system'}">
                        <svg viewBox="0 0 163 88" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_742_69895)"><rect x="0.742188" width="161.5" height="88" rx="6" fill="#1C1C1C"></rect><mask id="path-3-inside-1_742_69895" fill="white"><path d="M0.742188 6C0.742188 2.68629 3.42848 0 6.74219 0H13.7422V88H6.74219C3.42848 88 0.742188 85.3137 0.742188 82V6Z"></path></mask><path d="M0.742188 6C0.742188 2.68629 3.42848 0 6.74219 0H13.7422V88H6.74219C3.42848 88 0.742188 85.3137 0.742188 82V6Z" fill="#1C1C1C"></path><path d="M0.742188 0H13.7422H0.742188ZM13.7422 88H0.742188H13.7422ZM0.742188 88V0V88ZM14.7422 0V88H12.7422V0H14.7422Z" fill="#2E2E2E" mask="url(#path-3-inside-1_742_69895)"></path><mask id="path-5-inside-2_742_69895" fill="white"><path d="M156.242 -2.62268e-07C159.556 -1.17421e-07 162.242 2.68629 162.242 6L162.242 13L13.7422 13L13.7422 -6.49114e-06L156.242 -2.62268e-07Z"></path></mask><path d="M156.242 -2.62268e-07C159.556 -1.17421e-07 162.242 2.68629 162.242 6L162.242 13L13.7422 13L13.7422 -6.49114e-06L156.242 -2.62268e-07Z" fill="#1C1C1C"></path><path d="M162.242 0L162.242 13L162.242 0ZM13.7422 13L13.7422 -6.49114e-06L13.7422 13ZM13.7422 -6.49114e-06L162.242 0L13.7422 -6.49114e-06ZM162.242 14L13.7422 14L13.7422 12L162.242 12L162.242 14Z" fill="#2E2E2E" mask="url(#path-5-inside-2_742_69895)"></path><rect x="44.7552" y="21.5" width="86.4738" height="23.5" rx="2.5" fill="#232323" stroke="#2E2E2E"></rect><rect x="44.7552" y="51.5" width="86.4738" height="23.5" rx="2.5" fill="#232323" stroke="#2E2E2E"></rect><rect x="52.9406" y="28" width="19.2318" height="1.5" rx="0.75" fill="#A0A0A0"></rect><rect x="52.9406" y="56.5" width="19.2318" height="1.5" rx="0.75" fill="#A0A0A0"></rect><rect x="78.3762" y="28" width="19.2318" height="1.5" rx="0.75" fill="#EDEDED"></rect><rect x="78.3762" y="56.5" width="19.2318" height="1.5" rx="0.75" fill="#EDEDED"></rect><rect x="78.3762" y="33.25" width="44.0471" height="1.5" rx="0.75" fill="#EDEDED"></rect><rect x="78.3762" y="61.75" width="44.0471" height="1.5" rx="0.75" fill="#EDEDED"></rect><rect x="18.4922" y="4.625" width="20.5" height="3.75" rx="1.875" fill="#3ECF8E"></rect><rect x="44.2552" y="4.625" width="20.5" height="3.75" rx="1.875" fill="#707070"></rect><rect x="69.5052" y="4.625" width="20.5" height="3.75" rx="1.875" fill="#707070"></rect><rect x="101.923" y="28" width="20.5" height="1.5" rx="0.75" fill="#FFB224"></rect><rect x="5.36719" y="4.625" width="3.75" height="3.75" rx="1" fill="#707070"></rect><rect x="5.36719" y="13.375" width="3.75" height="3.75" rx="1" fill="#707070"></rect><rect x="5.36719" y="20.875" width="3.75" height="3.75" rx="1" fill="#707070"></rect><rect x="5.36719" y="28.375" width="3.75" height="3.75" rx="1" fill="#707070"></rect><rect x="5.36719" y="35.875" width="3.75" height="3.75" rx="1" fill="#707070"></rect><rect x="5.36719" y="78.875" width="3.75" height="3.75" rx="1" fill="#707070"></rect><mask id="mask0_742_69895" maskUnits="userSpaceOnUse" x="32" y="0" width="131" height="88" style="mask-type: alpha;"><path d="M130.534 2.34842e-05L32.4507 88H162.131V0L130.534 2.34842e-05Z" fill="black"></path></mask><g mask="url(#mask0_742_69895)"><rect x="0.742188" width="161.5" height="88" fill="#F8F9FA"></rect><mask id="path-27-inside-3_742_69895" fill="white"><path d="M156.242 -2.62268e-07C159.556 -1.17421e-07 162.242 2.68629 162.242 6L162.242 13L13.7422 13L13.7422 -6.49114e-06L156.242 -2.62268e-07Z"></path></mask><path d="M156.242 -2.62268e-07C159.556 -1.17421e-07 162.242 2.68629 162.242 6L162.242 13L13.7422 13L13.7422 -6.49114e-06L156.242 -2.62268e-07Z" fill="#F8F9FA"></path><path d="M162.242 0L162.242 13L162.242 0ZM13.7422 13L13.7422 -6.49114e-06L13.7422 13ZM13.7422 -6.49114e-06L162.242 0L13.7422 -6.49114e-06ZM162.242 14L13.7422 14L13.7422 12L162.242 12L162.242 14Z" fill="#E6E8EB" mask="url(#path-27-inside-3_742_69895)"></path><rect x="44.7552" y="21.5" width="86.4738" height="23.5" rx="2.5" fill="#FCFCFC" stroke="#E6E8EB"></rect><rect x="44.7552" y="51.5" width="86.4738" height="23.5" rx="2.5" fill="#FCFCFC" stroke="#E6E8EB"></rect><rect x="52.9406" y="28" width="19.2318" height="1.5" rx="0.75" fill="#525252"></rect><rect x="52.9406" y="56.5" width="19.2318" height="1.5" rx="0.75" fill="#525252"></rect><rect x="78.3762" y="28" width="19.2318" height="1.5" rx="0.75" fill="#11181C"></rect><rect x="78.3762" y="56.5" width="19.2318" height="1.5" rx="0.75" fill="#11181C"></rect><rect x="78.3762" y="33.25" width="44.0471" height="1.5" rx="0.75" fill="#11181C"></rect><rect x="78.3762" y="61.75" width="44.0471" height="1.5" rx="0.75" fill="#11181C"></rect><rect x="18.4922" y="4.625" width="20.5" height="3.75" rx="1.875" fill="#3FCF8E"></rect><rect x="44.2552" y="4.625" width="20.5" height="3.75" rx="1.875" fill="#B2B2B2"></rect><rect x="69.5052" y="4.625" width="20.5" height="3.75" rx="1.875" fill="#B2B2B2"></rect><rect x="101.923" y="28" width="20.5" height="1.5" rx="0.75" fill="#FFB224"></rect></g></g><rect x="1.24219" y="0.5" width="160.5" height="87" rx="5.5" stroke="#2E2E2E"></rect><defs><clipPath id="clip0_742_69895"><rect x="0.742188" width="161.5" height="88" rx="6" fill="white"></rect></clipPath></defs></svg>
                        <div class="flex items-center space-x-2 opacity-75 mt-3.5">
                          <input
                            type="radio"
                            value="dark"
                            class="accent-black dark:accent-white"
                            :checked="theme.preference =='system'"
                          />
                          <span >
                                System
                          </span>
                        </div>
                      </div>

                  </div>
                </UiCardContent>
              </UiCard>
              <UiCard class="mt-12 w-full">
                <UiCardHeader class="font-semibold opacity-75 mb-0 p-4">
                  DANGER ZONE
                </UiCardHeader>
                <UiDivider/>
                <UiCardContent class="p-4">
                  <UiAlert
                    button="Request to delete account"
                    icon="line-md:alert-twotone-loop"
                    title="Request for account deletion"
                    description="Deleting your account is permanent and cannot be undone. Your data will be deleted within 30 days, except we may retain some metadata and logs for longer where required or permitted by law."
                    variant="destructive"
                    class="bg-destructive-600 text-foreground"
                  />
                </UiCardContent>
              </UiCard>
            </UiTabsContent>
            <UiTabsContent value="Security" class="w-full">
              <div class=" w-full">
                <UiCard class="w-full">
                  <UiCardHeader class="p-4 opacity-75 ">
                    <div class="flex items-center">
                      <Icon icon="fluent:phone-32-light" width="16" height="16" />
                      <p class="font-bold ml-4 opacity-75 ">Authenticator app </p>
                      <UiBadge variant="outline"  size="xs" class="ml-auto ">0 app configured</UiBadge>
                    </div>

                  </UiCardHeader>
                  <UiDivider/>
                  <UiCardContent>
                    <p class="text-xs opacity-75">
                      Generate one-time passwords via authenticator apps like 1Password, Authy, etc. as a second factor to verify your identity during sign-in.
                    </p>
                    <UiButton size="xs" class="bg-emerald-500 hover:bg-emerald-700 mt-2 text-xs">Add new app</UiButton>
                  </UiCardContent>
                </UiCard>
              </div>
            </UiTabsContent>
          </UiTabs>
        </div>
      </UiTabsContent>

    </UiTabs>
    </div>
  </div>
</template>
