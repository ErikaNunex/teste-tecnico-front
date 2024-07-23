<template>
  <div class="dashboard">
    <header class="dashboard-header">
      <h1>Monitoramento de Usuário</h1>
    </header>
    <div class="chart-container">
      <div class="chart-card">
        <span>Usuários que começam com a letra L</span>
        <DonutChart />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import DonutChart from "@/modules/dashboard/components/DonutChart.vue";
import { UserService } from "@/modules/users/services/UsersServices";

const userService = new UserService();
onMounted(() => {
  userService.getUsers(2);
});
</script>

<style scoped>
.dashboard {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
}

.dashboard-header {
  margin-bottom: 100px;
  color: #fff;
}

.chart-container {
  display: flex;
  flex-direction: row;
  gap: 1rem;
  flex-wrap: wrap;
}

.chart-card {
  flex: 1;
  min-width: 250px;
  padding: 1rem;
  background-color: #fff;
}

.chart-card span {
  display: block;
  margin-bottom: 1rem;
  font-size: 1.25rem;
}
</style>
