<template>
  <div id="app" class="d-flex flex-column vh-100">
    <!-- navbar aqui -->
    <main class="d-flex flex-grow-1">
      <!-- sidebar aqui -->
      <section class="content flex-grow-1">
        <router-view />
      </section>
    </main>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss">
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.content {
  flex-grow: 1;
  padding: 20px;
  background-color: #f5f5f5;
}
.sidebar {
  width: 280px;
  height: 100%;
}
</style>
