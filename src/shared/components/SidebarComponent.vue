<template>
  <aside>
    <nav class="sidebar bg-light">
      <ul class="list-group">
        <li class="list-group-item" @click="handleRedirect('Dashboard')">
          <i class="bi bi-house"></i>
          Dashboard
        </li>
        <li class="list-group-item" @click="handleRedirect('Usuários')">
          <i class="bi bi-people"></i>
          Usuários
        </li>
      </ul>
    </nav>
  </aside>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import { redirect } from "@/shared/services/RoutingService";
const router = useRouter();

const handleRedirect = (routeName: string) => {
  redirect(router, routeName);
};
</script>

<style scoped>
.sidebar {
  width: 250px;
  height: 100%;
}
</style>
