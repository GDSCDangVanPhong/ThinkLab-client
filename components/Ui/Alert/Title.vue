<template>
  <Primitive v-bind="forwarded" :class="styles({ class: props.class })">
    <slot>{{ title }}</slot>
  </Primitive>
</template>

<script lang="ts" setup>
  import { Primitive } from "radix-vue";
  import type { PrimitiveProps } from "radix-vue";

  const props = withDefaults(
    defineProps<
      PrimitiveProps & {
        /** Custom class to add to the parent */
        class?: any;
        /** The title text that should be displayed */
        title?: string;
      }
    >(),
    { as: "h5", class: undefined, title: undefined }
  );

  const forwarded = reactiveOmit(props, "class", "title");

  const styles = tv({
    base: "mb-3 font-bold leading-none tracking-tight",
  });
</script>
