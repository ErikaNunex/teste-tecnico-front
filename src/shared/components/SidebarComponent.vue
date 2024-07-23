<template>
  <aside>
    <nav class="sidebar" :class="{ visible: isSidebarVisible }">
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
import { computed } from "vue";
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
  background-color: #0e2940;
  transition: transform 0.3s ease;
  transform: translateX(-100%);
  &.visible {
    transform: translateX(0);
  }
}

.list-group-item {
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 10px;
  background-color: #0e2940;
  color: #fff;

  &.active {
    background-color: #007bff;
    color: #fff;
    font-weight: bold;

    &:hover {
      background-color: #007bff;
    }
  }

  &:hover {
    background-color: #0056b3;
  }
}
</style>
