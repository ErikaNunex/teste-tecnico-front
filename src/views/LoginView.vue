<template>
  <div class="login-container">
    <div class="card">
      <div class="card-body">
        <h2 class="card-title text-center">Login</h2>
        <LoginForm />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import LoginForm from "@/modules/login/components/LoginForm.vue";
</script>

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
  background-color: #93bf50;
}

.card {
  width: 100%;
  max-width: 400px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
</style>
