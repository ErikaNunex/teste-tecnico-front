<template>
  <div class="login-container">
    <div class="card">
      <div class="card-body">
        <h2 class="card-title text-center">Login</h2>
        <form @submit.prevent="submit">
          <div class="form-group">
            <label for="username">Usuário</label>
            <input
              type="text"
              class="form-control"
              id="username"
              v-model="username"
              placeholder="Digite seu usuário"
            />
          </div>
          <div class="form-group">
            <label for="password">Senha</label>
            <input
              type="password"
              class="form-control"
              id="password"
              v-model="password"
              placeholder="Digite sua senha"
            />
          </div>
          <div class="card-body">
            <button type="submit" class="btn btn-primary btn-block">
              Entrar
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const username = ref("");
const password = ref("");

const submit = () => {
  console.log("Usuário:", username.value);
  console.log("Senha:", password.value);
};
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
