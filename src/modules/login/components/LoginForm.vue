<template>
  <form @submit.prevent="submit">
    <div class="form-group">
      <label for="username">Usuário</label>
      <input
        type="text"
        class="form-control"
        id="username"
        v-model="loginStore.payloadLogin.username"
        placeholder="Digite seu usuário"
      />
    </div>
    <div class="form-group">
      <label for="password">Senha</label>
      <input
        type="password"
        class="form-control"
        id="password"
        v-model="loginStore.payloadLogin.password"
        placeholder="Digite sua senha"
      />
    </div>
    <div class="card-body">
      <button type="submit" class="btn btn-primary btn-block">Entrar</button>
    </div>
  </form>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { LoginStore } from "@/modules/login/store";
const loginStore = LoginStore();

const submit = () => {
  console.log("Usuário:", loginStore.payloadLogin.username);
  console.log("Senha:", loginStore.payloadLogin.password);
};
</script>
