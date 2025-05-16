<script setup lang="ts">

</script>

<template>
  <UiNavigationMenu>
    <UiNavigationMenuList>
      <UiNavigationMenuItem>
        <UiNavigationMenuTrigger title="Beach day" />
        <UiNavigationMenuContent>
          <div class="grid w-[600px] grid-cols-2 gap-5 p-4">
            <img
                src="https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80"
                alt="Beach"
                class="h-full w-full rounded-md object-cover"
            />

          </div>
        </UiNavigationMenuContent>
      </UiNavigationMenuItem>
      <UiNavigationMenuItem>
        <UiNavigationMenuTrigger title="Components" />
        <UiNavigationMenuContent>

        </UiNavigationMenuContent>
      </UiNavigationMenuItem>
      <UiNavigationMenuItem>
        <UiNavigationMenuTrigger title="Learn more" />
        <UiNavigationMenuContent>
          <div class="grid w-[500px] grid-cols-2 place-items-center gap-5 p-3">

            <img
                src="https://www.radix-vue.com/logo.svg"
                alt="Radix Vue Logo"
                class="h-full w-full"
            />
            <div>
              <p class="text-lg font-semibold text-foreground">Radix Vue</p>
              <p class="mt-2 text-muted-foreground">
                Unstyled, accessible components for building high-quality design systems and web
                apps in Vue.
              </p>
            </div>
          </div>
        </UiNavigationMenuContent>
      </UiNavigationMenuItem>
      <UiNavigationMenuItem>

      </UiNavigationMenuItem>
    </UiNavigationMenuList>
  </UiNavigationMenu>

</template>

