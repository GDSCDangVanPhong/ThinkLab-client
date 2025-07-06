<script setup lang="ts">
  import Button from "~/components/Ui/Button.vue";

  const name = ref('SSC')
</script>

<template>
  <div class="mt-12 w-full">
    <p class="text-xl ">Organization Details</p>
    <UiCard class="mt-2">
        <UiCardContent>
          <div class="flex w-full justify-between">
            <p class="text-sm font-semibold opacity-75">Organization name</p>
            <UiInput
              class="w-56 p-2"
              v-model="name"
            />
          </div>
        </UiCardContent>
      <UiDivider/>
      <UiCardContent>
        <div class="flex w-full justify-between">
          <p class="text-sm font-semibold opacity-75">Organization id</p>
          <UiInput
            class="w-56 p-2"
            v-model="name"
          />
        </div>
      </UiCardContent>
      <UiDivider/>
      <UiCardFooter class="p-4">
        <div class="ml-auto flex items-center gap-x-4">
          <Button size="xxs" variant="outline" class="text-xs">Cancel</Button>
          <Button size="xxs" class="bg-emerald-500 hover:bg-emerald-700  text-xs ">Save</Button>
        </div>
      </UiCardFooter>
    </UiCard>
    <p class="text-xl mt-14">Privacy</p>
    <UiCard class="mt-2">

    </UiCard>
  </div>
</template>

