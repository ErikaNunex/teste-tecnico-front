<template>
  <form @submit.prevent="submit">
    <div class="form-group">
      <label for="email">Email</label>
      <input
        type="text"
        class="form-control"
        id="email"
        v-model="loginStore.payloadLogin.email"
        placeholder="Digite seu email de usuário"
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
      <button type="submit" @click="submit()" class="btn btn-primary btn-block">
        Entrar
      </button>
    </div>
  </form>
</template>
<script setup lang="ts">
import { useLoginStore } from "@/modules/login/store";
import { LoginService } from "../services/loginService";
const loginStore = useLoginStore();
const loginService = new LoginService();

const submit = () => {
  loginService.signIn(loginStore.payloadLogin);
};
</script>
