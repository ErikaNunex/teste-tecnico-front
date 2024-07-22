<template>
  <aside>
    <nav class="sidebar bg-light" :class="{ visible: isSidebarVisible }">
      <ul class="list-group list-group-flush">
        <li
          class="list-group-item"
          @click="handleRedirect('Dashboard')"
          :class="{ active: isActive('Dashboard') }"
        >
          <i class="bi bi-house"></i>
          Dashboard
        </li>
        <li
          class="list-group-item"
          @click="handleRedirect('Usuários')"
          :class="{ active: isActive('Usuários') }"
        >
          <i class="bi bi-people"></i>
          Usuários
        </li>
      </ul>
    </nav>
  </aside>
</template>

<script setup lang="ts">
import { useRouter, useRoute } from "vue-router";
import { ref, watch, computed } from "vue";
import { redirect } from "@/shared/services/RoutingService";
import { useSidebarStore } from "./stores/SidebarStore";
const router = useRouter();
const route = useRoute();
const sidebarStore = useSidebarStore();

const handleRedirect = (routeName: string) => {
  redirect(router, routeName);
};
const isActive = (routeName: string) => {
  return route.name == routeName;
};
const isSidebarVisible = computed(() => sidebarStore.isSidebarVisible);
</script>

<style scoped lang="scss">
.sidebar {
  width: 250px;
  height: 100%;
  transition: transform 0.3s ease;
  transform: translateX(-100%);
  &.visible {
    transform: translateX(0);
  }
}
.sidebar-collapsed {
  transform: translateX(-100%);
}

.list-group-item {
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 10px;

  &.active {
    background-color: #e9f5e9;
    color: #28a745;
    font-weight: bold;

    &:hover {
      background-color: #e9f5e9;
    }
  }

  &:hover {
    background-color: #f8f9fa;
  }
}
</style>
