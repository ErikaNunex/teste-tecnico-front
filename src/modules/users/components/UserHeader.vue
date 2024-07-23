<template>
  <header class="user-header">
    <div class="input-container">
      <input type="text" placeholder="Buscar usuário" />
      <i class="bi bi-search search-icon"></i>
    </div>
    <button class="btn btn-primary add-user">+</button>
  </header>
</template>

<script setup lang="ts"></script>

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

.add-user {
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
