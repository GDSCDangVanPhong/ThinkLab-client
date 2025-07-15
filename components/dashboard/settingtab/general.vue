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
    <p class="text-xl mt-14">Data Privacy</p>
    <UiCard class="mt-2">
      <UiCardContent>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <p class="opacity-80 font-bold text-sm">ThinkLab Assistant Opt-in Level</p>
            <P class="opacity-60 font-semibold text-xs mt-3">
              ThinkLab can provide more relevant answers if you choose to share different levels of data. This feature is powered by Amazon Bedrock which does not store or log your prompts and completions, nor does it use them to train AWS models or distribute them to third parties. This is an organization-wide setting, so please select the level of data you are comfortable sharing.
            </P>
            <UiButton size="xs" class="text-xs mt-3" variant="outline">
              Learn more about data privacy
            </UiButton>
          </div>
          <div>
            <UiRadioGroup default-value="default">
              <div class="flex items-center space-x-1">
                <UiRadioGroupItem id="r1" value="default" />
                <UiLabel class="font-bold " for="r1">Disable</UiLabel>
              </div>
              <p class="opacity-70  text-xs">
                You do not consent to sharing any database information with Amazon Bedrock and understand that responses will be generic and not tailored to your database
              </p>
              <div class="flex items-center space-x-1">
                <UiRadioGroupItem id="r1" value="assets" />
                <UiLabel class="font-bold " for="r1">Assets Only</UiLabel>
              </div>
              <p class="opacity-70  text-xs">
                You do not consent to sharing any database information with Amazon Bedrock and understand that responses will be generic and not tailored to your database
              </p>
              <div class="flex items-center space-x-1">
                <UiRadioGroupItem id="r1" value="document" />
                <UiLabel class="font-bold " for="r1">Entire Document</UiLabel>
              </div>
              <p class="opacity-70  text-xs">
                You do not consent to sharing any database information with Amazon Bedrock and understand that responses will be generic and not tailored to your database
              </p>

            </UiRadioGroup>
          </div>
        </div>
      </UiCardContent>
      <UiDivider/>
      <UiCardFooter>
        <div class="ml-auto flex items-center gap-x-4">
          <Button size="xxs" variant="outline" class="text-xs">Cancel</Button>
          <Button size="xxs" class="bg-emerald-500 hover:bg-emerald-700  text-xs ">Save</Button>
        </div>
      </UiCardFooter>
    </UiCard>
    <p class="text-xl mt-14">DANGER ZONE</p>
    <UiCard class="mt-2">
      <UiCardContent>
        <UiAlert
          button="Request to delete orginzation"
          icon="line-md:alert-twotone-loop"
          title="Deleting this organization will also remove its projects"
          description="Make sure you have made a backup of your projects if you want to keep your data"
          variant="destructive"
          class="bg-destructive-600 text-foreground"
        />
      </UiCardContent>
    </UiCard>
  </div>
</template>

