<script setup lang="ts">
import { Icon } from '@iconify/vue';
import Organizations from "~/pages/dashboard/organizations.vue";
const search = ref("");
const dSearch = refDebounced(search, 300);
const loading = ref(false);
const items = [
  "Test1", "Test2", "Test3"
]
</script>

<template>
    <UiDropdownMenu>
      <UiDropdownMenuTrigger as-child>
        <UiButton size="xs" variant="ghost">
          <Icon icon="lucide:chevrons-up-down" width="15" height="15" class="cursor-pointer"/>
        </UiButton>
      </UiDropdownMenuTrigger>
      <UiDropdownMenuContent>
        <UiVeeInput
          v-model.trim="search"
          class="border-none focus-visible:ring-0 "
          placeholder="Search..."
          type="search"
          :icon="!loading ? 'lucide:search' : 'svg-spinners:6-dots-rotate'">
        </UiVeeInput>
        <UiDropdownMenuSeparator/>
        <UiDropdownMenuItem v-for="item in items" class="text-xs text-muted-foreground cursor-pointer">
            {{item}}
        </UiDropdownMenuItem>
        <UiDropdownMenuSeparator/>
        <UiDropdownMenuItem class="text-xs text-muted-foreground cursor-pointer">
          <NuxtLink to ="/dashboard/organizations">
            All organizations
          </NuxtLink>
        </UiDropdownMenuItem>
        <UiDropdownMenuSeparator/>
        <UiDropdownMenuItem class="cursor-pointer">
          <span>
            <Icon icon="lucide:plus" width="12" height="12" />
          </span>
          <span class="text-xs text-muted-foreground">
            New organization
          </span>
        </UiDropdownMenuItem>
      </UiDropdownMenuContent>
    </UiDropdownMenu>

</template>
