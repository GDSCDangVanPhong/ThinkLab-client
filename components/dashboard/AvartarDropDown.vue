<template>
  <div class="flex items-center justify-center">
    <UiDropdownMenu>
          <UiChip color="bg-emerald-500" position="bottom-right">
            <UiDropdownMenuTrigger>
              <UiAvatar class="w-8 h-8">
                <UiAvatarImage :src="ava" alt="Kelly King" />
                <UiAvatarFallback>KK</UiAvatarFallback>
              </UiAvatar>
            </UiDropdownMenuTrigger>

          </UiChip>
      <UiDropdownMenuContent class="w-56">
        <UiDropdownMenuLabel>
            <p class="opacity-85 text-sm">GDSCDangVanPhong</p>
            <p class="opacity-60 text-xs">gdschanu.phongdv2909@gmail.com</p>
        </UiDropdownMenuLabel>
        <template v-for="(item, i) in menuitems" :key="i">
          <UiDropdownMenuSeparator v-if="item.divider" />
          <UiDropdownMenuItem
            v-else-if="item.title && !item.items"
            :title="item.title"
            :icon="item.icon"
            @click ="item.link && navigateTo(item.link)"
            class="cursor-pointer opacity-65 "
          />
          <UiDropdownMenuSub v-else-if="item.title && item.items">
            <UiDropdownMenuSubTrigger
              :title="item.title"
              :icon="item.icon"
              :text-value="item.title"
              class="cursor-pointer opacity-65"
            />
            <UiDropdownMenuSubContent>
              <template v-for="(child, k) in item.items" :key="`child-${k}`">
                <UiDropdownMenuSeparator v-if="child.divider" />
                <UiDropdownMenuItem
                  class="cursor-pointer opacity-65"
                  v-else
                  :title="child.title"
                  :icon="child.icon"
                  @click="changeMode(child.title.toLowerCase()) "
                />
              </template>
            </UiDropdownMenuSubContent>
          </UiDropdownMenuSub>
        </template>
      </UiDropdownMenuContent>
    </UiDropdownMenu>
  </div>
</template>

<script lang="ts" setup>
  import ava from "~/assets/image/pexels-codioful-7130475.jpg"

  const colorMode = useColorMode()
  const changeMode = (color: string) =>{
    colorMode.preference = color
    console.log(colorMode.preference)
  }
  const menuitems = [
    { label: "My Account" },
    { divider: true },
    { title: "Profile", icon: "ph:user"  ,link : "/dashboard/account/me"},
    { title : "Features Preview" , icon : "carbon:chemistry" },

    { divider: true },

    {
      title: "Theme",
      icon: "fluent:dark-theme-24-regular",
      items: [
        { title: "Light", icon: "solar:sun-bold"},
        { title: "Dark", icon: "tabler:moon-filled"},
        { title: "System", icon: "lucide:laptop" },

      ],
    },


    { divider: true },


    { title: "Sign out", icon: "ph:sign-out" },
  ];
</script>


