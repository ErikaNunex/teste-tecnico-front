<template>
  <div class="user-list">
    <div class="header">
      <div class="column"></div>
      <div class="column">Usuário</div>
      <div class="column">Email</div>
      <div class="column">Ações</div>
    </div>
    <div v-for="user in users" :key="user.id" class="card">
      <div class="column avatar">
        <img :src="user.avatar" alt="Avatar" />
      </div>
      <div class="column user-name">
        {{ user.first_name }} {{ user.last_name }}
      </div>
      <div class="column email">
        {{ user.email }}
      </div>
      <div class="column actions">
        <button class="btn btn-outline-warning btn-sm">
          <i class="bi bi-pencil"></i> Editar
        </button>
        <button class="btn btn-outline-danger btn-sm">
          <i class="bi bi-trash-fill"></i> Excluir
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useUserStore } from "@/modules/users/store";

const userStore = useUserStore();

const users = computed(() => userStore.user);
</script>

<style scoped>
.user-list {
  margin: 1rem;
}

.header {
  display: grid;
  grid-template-columns: 1fr 2fr 2fr 1fr;
  border-bottom: 1px solid #ccc;
  font-weight: bold;
  color: #fff;
}

.card {
  display: grid;
  grid-template-columns: 1fr 2fr 2fr 1fr;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 1rem;
  padding: 1rem;
}

.column {
  padding: 0.5rem;
}

.avatar img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}

.user-name {
  display: flex;
  align-items: center;
}

.actions button {
  margin-right: 0.5rem;
}

@media (max-width: 768px) {
  .card {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto;
  }

  .card {
    display: flex;
    flex-direction: column;
  }
}
</style>
