<template>
  <div class="chart-card">
    <apexchart
      type="donut"
      :options="chartOptions"
      :series="chartSeries"
      height="350"
    ></apexchart>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { useUserStore } from "@/modules/users/store";
const userStore = useUserStore();

const chartOptions = ref({
  labels: ["Início com L", "Outros"],
  colors: ["#FF4560", "#00E396"],
  plotOptions: {
    pie: {
      donut: {
        size: "70%",
      },
    },
  },
  legend: {
    position: "bottom",
  },
});

const chartSeries = computed(() => {
  const totalUsers = userStore.users.length;
  const usersWithL = userStore.users.filter((user) =>
    user.first_name.startsWith("L")
  ).length;
  return [
    (usersWithL / totalUsers) * 100,
    ((totalUsers - usersWithL) / totalUsers) * 100,
  ];
});
</script>

<style scoped>
.chart-card {
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 1rem;
  background-color: #fff;
}
</style>
