<template>
  <div>
   Welcome
  </div>
</template>
<script setup lang="ts">
definePageMeta({
  middleware: ["auth"],
});
</script>
