<template>
  <div>
    <InspriraLogoAnimatedLogoCloud
        :logos
        title="Powered By"
    />
  </div>
</template>

<script lang="ts" setup>
const logos = [
  {
    name: "Vercel",
    path: "https://res.cloudinary.com/dfhp33ufc/image/upload/v1715881430/vercel_wordmark_dark_mhv8u8.svg",
  },

  {
    name: "Trustpilot",
    path: "https://res.cloudinary.com/dfhp33ufc/image/upload/v1715276558/logos/tkfspxqmjflfllbuqxsi.svg",
  },
  {
    name: "Webflow",
    path: "https://res.cloudinary.com/dfhp33ufc/image/upload/v1715276560/logos/nymiivu48d5lywhf9rpf.svg",
  },

  {
    name: "Stackoverflow",
    path: "https://res.cloudinary.com/dfhp33ufc/image/upload/v1715276558/logos/ts1j4mkooxqmscgptafa.svg",
  },

];
</script>