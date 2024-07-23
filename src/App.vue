<template>
  <div id="app" class="d-flex flex-column vh-100">
    <navbar-component v-if="!isLoginView" :route-name="routeName" />
    <div class="d-flex flex-grow-1">
      <sidebar-component v-if="!isLoginView && isSidebarVisible" />
      <section class="content">
        <router-view />
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";
import NavbarComponent from "@/shared/components/NavbarComponent.vue";
import SidebarComponent from "@/shared/components/SidebarComponent.vue";
import { useSidebarStore } from "@/shared/stores/SidebarStore";
const sidebarStore = useSidebarStore();

const isSidebarVisible = computed(() => sidebarStore.isSidebarVisible);
const route = useRoute();

const routeName = computed(() => {
  return route.name;
});
const isLoginView = computed(() => route.name == "login");
</script>

<style lang="scss">
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.d-flex {
  display: flex;
}

.flex-column {
  flex-direction: column;
}

.flex-grow-1 {
  flex-grow: 1;
}

.content {
  flex-grow: 1;
  padding: 20px;
  background-color: #2c3e59;
  transition: margin-left 0.3s ease;
}

.sidebar-component {
  width: 250px;
  transition: transform 0.3s ease;
  position: relative;
}

.sidebar-component {
  transform: translateX(-100%);
}

.sidebar-component.visible {
  transform: translateX(0);
}

@media (min-width: 768px) {
  .sidebar-component {
    width: 250px;
  }
}

@media (max-width: 768px) {
  .sidebar-component {
    width: 100%;
  }

  .content {
    margin-left: 0;
  }
}
</style>
