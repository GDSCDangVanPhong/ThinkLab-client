<template>
  <div class="text-center">
    <UiDrawer v-model:open="isOpen" should-scale-background>
      <UiDrawerTrigger as-child>
        <UiButton variant="outline">
          <Icon icon="charm:menu-hamburger" width="16" height="16"  style="color: #000" />
        </UiButton>
      </UiDrawerTrigger>
      <UiDrawerContent>
        <div class="mx-auto w-full max-w-sm rounded-t-lg p-4 pb-10">
          <UiDrawerTitle class="mb-1.5">Think Lab</UiDrawerTitle>
          <UiDrawerDescription class="mt-10">
            <NuxtLink to="/register">
              <UiButton class="w-full">
                Sign Up
              </UiButton>
            </NuxtLink>
            <NuxtLink to="/login">
              <UiButton class="w-full mt-4 text-black" variant="outline">
                Sign In
              </UiButton>
            </NuxtLink>
            <UiDivider class="mt-5">

            </UiDivider>
            <UiAccordion :items type="single" collapsible class="w-full" default-value="3">
              <template #trigger="{ item }">
                <UiAccordionTrigger class="text-[15px] leading-6 hover:no-underline">
                  <div class="flex items-center gap-3">
                    <Icon size="md" circle :icon="item.icon" />
                    <div class="flex flex-col items-start space-y-1">
                      {{ item.title }}
                      <span v-if="item.sub" class="text-sm font-normal">{{ item.sub }}</span>
                    </div>
                  </div>
                </UiAccordionTrigger>
              </template>
              <template #content="{ item }">
                <UiAccordionContent class="ps-12 text-muted-foreground">{{
                    item.content
                  }}</UiAccordionContent>
              </template>
            </UiAccordion>

          </UiDrawerDescription>




        </div>
      </UiDrawerContent>
    </UiDrawer>
  </div>
</template>

<script lang="ts" setup>
import {Icon} from "@iconify/vue";
import Button from "~/components/Ui/Button.vue";

const isOpen = defineModel<boolean>();
const items = [
  {
    id: "1",
    icon: "pajamas:feature-flag",
    value: "1",
    title: "Feature",
    sub: "See what we can bring you",
    content:
        "Connect your accounts from Google, GitHub, or Microsoft to enable single sign-on and streamline your workflow. Connected accounts can be used for quick login and importing your preferences across platforms. You can revoke access to any connected account at any time.",
  },
  {
    id: "2",
    icon: "lucide:bell",
    value: "2",
    title: "Notifications",
    sub: "Customize your notification preferences",
    content:
        "Choose which updates you want to receive. You can get notifications for: security alerts, billing updates, newsletter and product announcements, usage reports, and scheduled maintenance. Notifications can be delivered via email, SMS, or push notifications on your devices.",
  },
  {
    id: "3",
    icon: "lucide:shield-check",
    value: "3",
    title: "2-step verification",
    sub: "Add an extra layer of security to your account",
    content:
        "Protect your account with two-factor authentication. You can use authenticator apps like Google Authenticator or Authy, receive SMS codes, or use security keys like YubiKey. We recommend using an authenticator app for the most secure experience.",
  },
  {
    id: "4",
    icon: "lucide:life-buoy",
    value: "4",
    title: "Contact support",
    sub: "We're here to help 24/7",
    content:
        "Our support team is available around the clock to assist you. For billing inquiries, technical issues, or general questions, you can reach us through live chat, email at support@example.com, or schedule a call with our technical team. Premium support is available for enterprise customers.",
  },
];


</script>
