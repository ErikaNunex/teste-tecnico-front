<template>
  <div v-if="alertStore.isVisible" class="alert" :class="alertClasses">
    <i :class="iconClass"></i>
    <span>{{ alertStore.message }}</span>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted } from "vue";
import { useAlertStore } from "@/shared/stores/AlertStore";

const alertStore = useAlertStore();

const alertClasses = computed(() => ({
  "alert-success": alertStore.type === "success",
  "alert-danger": alertStore.type === "danger",
  "alert-dismissible": true,
}));

const iconClass = computed(() => ({
  "bi-check-circle": alertStore.type === "success",
  "bi-x-circle": alertStore.type === "danger",
}));
onMounted(() => {
  if (alertStore.isVisible) {
    setTimeout(() => {
      alertStore.isVisible = false;
    }, alertStore.duration);
  }
});
</script>

<style scoped>
.alert {
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  padding: 1rem;
  border-radius: 0.25rem;
  display: flex;
  align-items: center;
  z-index: 1050;
}

.alert .bi {
  margin-right: 0.5rem;
}
</style>
