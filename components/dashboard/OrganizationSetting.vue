<script setup lang="ts">

</script>

<template>
  <div class="mx-auto w-full max-w-[1200px] px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 2xl:px-24 my-8">
    <h1 class="text-2xl font-bold">Organization Settings</h1>
    <div class="mt-8 w-full">
      <UiTabs
        default-value="General"
        orientation="horizontal"
        class=" w-full"
      >
        <UiTabsList
          class="relative mb-3 h-auto gap-2 rounded-none border-b border-border bg-transparent px-0 py-1 text-foreground w-full"
        >
          <UiTabsTrigger value="General"
          >
            General
          </UiTabsTrigger>
          <UiTabsTrigger value="Audit"
          >
            Audit Logs
          </UiTabsTrigger>
          <UiTabsTrigger value="Legal"
          >
            Legal Documents
          </UiTabsTrigger>
          <UiTabsIndicator />
        </UiTabsList>
        <UiTabsContent value="General">
          <DashboardSettingtabGeneral/>
        </UiTabsContent>
        <UiTabsContent value="Audit">
          <DashboardSettingtabAuditLogs/>
        </UiTabsContent>
      </UiTabs>
    </div>
  </div>
</template>

