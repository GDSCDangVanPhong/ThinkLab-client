<script setup lang="ts">
  import LearnMore from "~/components/header/LearnMore.vue";

  const items= [
    {
      iconSrc : 'lucide:handshake',
      title : 'Collaboration Editing',
      description : 'Write and edit documents in real-time with multiple collaborators.',
    },
    {
      iconSrc : "lucide:brain-cog",
      title : 'AI Writing & Editing Support',
      description : 'Get suggestions, grammar checks, and style improvements powered by AI.',
    },
    {
      iconSrc : "lucide:history",
      title : 'Version History',
      description : 'Review and restore previous document versions anytime.',
    },
    {
      iconSrc : "lucide:save",
      title : 'Auto Saving',
      description : 'Your work is saved automatically — no data loss, ever.',
    },

  ]
</script>

<template>
  <UiNavigationMenu >
    <UiNavigationMenuList>
      <UiNavigationMenuItem>
        <UiNavigationMenuLink>
          <UiButton variant="ghost" >Home</UiButton>
        </UiNavigationMenuLink>
      </UiNavigationMenuItem>
      <UiNavigationMenuItem >
        <UiNavigationMenuTrigger title="Features" />
        <UiNavigationMenuContent >
          <div class="grid w-[700px] grid-cols-2 gap-5 p-4">
            <HeaderFeaturePart v-for="item in items" :icon-src="item.iconSrc" :title="item.title" :description="item.description" />
          </div>
        </UiNavigationMenuContent>
      </UiNavigationMenuItem>
      <UiNavigationMenuItem>
        <UiNavigationMenuLink>
            <UiButton variant="ghost" >Pricing </UiButton>
        </UiNavigationMenuLink>
      </UiNavigationMenuItem>
      <UiNavigationMenuItem>
        <UiNavigationMenuTrigger title="Resources"/>
        <UiNavigationMenuContent>
          <div class=" grid w-[700px] p-4 grid-cols-2 gap-5">
          <LearnMore/>
          </div>
        </UiNavigationMenuContent>
      </UiNavigationMenuItem>
      <UiNavigationMenuItem>

      </UiNavigationMenuItem>
    </UiNavigationMenuList>
  </UiNavigationMenu>

</template>

