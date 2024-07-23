<template>
  <header class="user-header">
    <div class="input-container">
      <input
        v-model="search"
        @change="searchUser"
        type="text"
        placeholder="Buscar usuário"
      />
      <i class="bi bi-search search-icon" @click="searchUser"></i>
    </div>
    <CreateUpdateUserDialog action="Criar Usuário" :create="true" />
  </header>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { UserService } from "../services/UsersServices";
import CreateUpdateUserDialog from "./CreateUpdateUserDialog.vue";

const userService = new UserService();
const search = ref<string>("");

function searchUser() {
  userService.findUser(search.value);
}
</script>

<style scoped>
.user-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  border-bottom: 1px solid #ccc;
}

.input-container {
  display: flex;
  align-items: center;
  position: relative;
  flex: 1;
  margin-right: 1rem;
}

input {
  padding: 0.5rem 2.5rem 0.5rem 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  flex: 1;
}

.search-icon {
  position: absolute;
  right: 0.5rem;
  cursor: pointer;
  color: #999;
}
</style>
