  <script setup lang="ts">
  type Props = {
    iconSrc : string ,
    title : string,
    description : string,
  }
  const props = defineProps<Props>()
  import {Icon} from "@iconify/vue";
  </script>

  <template>
    <div class="hover:bg-accent rounded-md flex p-2 cursor-pointer">
        <Icon v-if="props.iconSrc" :icon="props.iconSrc" width="32" height="32" />
        <div class="ml-4">
            <h3 class="font-semibold">{{props.title}}</h3>
            <span class="overflow-auto text-xs fo">{{props.description}}</span>
        </div>
      
    </div>
  </template>

