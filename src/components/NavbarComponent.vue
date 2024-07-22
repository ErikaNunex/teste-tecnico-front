<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <h2>{{ props.routeName }}</h2>
    </nav>
  </header>
</template>
<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps({ routeName: { type: String, requered: true } });
</script>
<style scoped>
.navbar {
  height: 50px;
}
</style>
