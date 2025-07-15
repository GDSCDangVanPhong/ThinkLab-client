<script setup lang="ts">
  import {Icon} from "@iconify/vue";
</script>

<template>
  <div class="mx-auto w-full max-w-[1200px] px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 2xl:px-24 my-8">
    <h1 class="text-2xl font-bold">Integrations</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
      <div>
        <h1>Google Drive Connections</h1>
        <p class="mt-4 text-sm opacity-75">Connect any of your GoogleDrive documents to a project.</p>
        <UiCard class="w-52 mt-5">
          <UiCardContent class="flex items-center justify-center ">
            <Icon icon="logos:google-drive" width="48" height="48" />
          </UiCardContent>
        </UiCard>
      </div>
      <div>
        <h1>How will GitHub connections work?</h1>
        <p class="mt-4 text-sm opacity-75">You will be able to connect a GitHub repository to a Supabase project. The GitHub app will watch for changes in your repository such as file changes, branch changes as well as pull request activity.</p>
      </div>
    </div>
    <div class="mt-7 rounded-md bg-secondary border-2 dark:border-white border-dashed h-32 flex items-center justify-center">
        <UiButton size="xs" variant="outline" class="text-xs">
          Connect to a Google Drive
        </UiButton>
    </div>
    <UiDivider class="mt-8"/>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
      <div>
        <h1>Integrated Gemini Pro</h1>
        <p class="mt-4 text-sm opacity-75">Providing helps to accelerate your project's progress.</p>
        <UiCard class="w-52 mt-5">
          <UiCardContent class="flex items-center justify-center ">
            <Icon icon="logos:google-gemini" width="48" height="48" />
          </UiCardContent>
        </UiCard>
      </div>
      <div>
        <h1>How will GitHub connections work?</h1>
        <p class="mt-4 text-sm opacity-75">You will be able to connect a GitHub repository to a Supabase project. The GitHub app will watch for changes in your repository such as file changes, branch changes as well as pull request activity.</p>
      </div>
    </div>
    <UiAlert
      title="Limited request"
      description="Projects may become unresponsive when this organization exceeds its included usage quota. To scale seamlessly, upgrade to a paid plan."
      icon="lucide:triangle-alert"
      class="text-xs mt-5 opacity-75"
    >
    </UiAlert>
    <UiDivider class="mt-8"/>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
      <div>
        <h1>Integrated CoreAPI database</h1>
        <p class="mt-4 text-sm opacity-75">Accessing metadata or even full-text data that you wwil need.</p>
        <UiCard class="w-52 mt-5">
          <UiCardContent class="flex items-center justify-center ">
            <Icon icon="game-icons:apple-core" width="48" height="48" />
          </UiCardContent>
        </UiCard>
      </div>
      <div>
        <h1>How will GitHub connections work?</h1>
        <p class="mt-4 text-sm opacity-75">You will be able to connect a GitHub repository to a Supabase project. The GitHub app will watch for changes in your repository such as file changes, branch changes as well as pull request activity.</p>
      </div>
    </div>
    <UiAlert
      title="Limited request"
      description="Projects may become unresponsive when this organization exceeds its included usage quota. To scale seamlessly, upgrade to a paid plan."
      icon="lucide:triangle-alert"
      class="text-xs mt-5 opacity-75"
    >
    </UiAlert>
  </div>
</template>
