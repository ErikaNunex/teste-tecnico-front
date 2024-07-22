<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <span>{{ props.routeName }}</span>
    </nav>
  </header>
</template>
<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps({ routeName: { type: String, requered: true } });
</script>
