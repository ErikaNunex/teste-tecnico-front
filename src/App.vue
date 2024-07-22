<template>
  <div id="app" class="d-flex flex-column vh-100">
    <navbar-component :route-name="routeName" />
    <main class="d-flex flex-grow-1">
      <sidebar-component />
      <section
        :class="{
          content: true,
          'flex-grow-1': true,
          'login-container': isLoginView,
        }"
      >
        <router-view />
      </section>
    </main>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";
import NavbarComponent from "@/shared/components/NavbarComponent.vue";
import SidebarComponent from "@/shared/components/SidebarComponent.vue";
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

.content {
  flex-grow: 1;
  padding: 20px;
  background-color: #f5f5f5;
}
.sidebar {
  width: 280px;
  height: 100%;
}
.login-container {
  background-color: #93bf50;
}
</style>
