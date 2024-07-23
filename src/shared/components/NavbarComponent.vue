<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-light">
      <button
        class="btn btn-lg"
        @click="toggleSidebar"
        aria-label="Toggle Sidebar"
      >
        <i class="bi bi-list"></i>
      </button>
      <h2>{{ props.routeName }}</h2>
    </nav>
  </header>
</template>
<script setup lang="ts">
import { defineProps } from "vue";
import { useSidebarStore } from "@/shared/stores/SidebarStore";

const props = defineProps({ routeName: { type: String, requered: true } });
const sidebarStore = useSidebarStore();

const toggleSidebar = () => {
  sidebarStore.toggleSidebar();
};
</script>
<style scoped>
.navbar {
  height: 50px;
  background-color: #0e2940;
  color: #fff;
}

.btn {
  margin-right: 20px;
  margin-left: 20px;
  color: #fff;
}
</style>
