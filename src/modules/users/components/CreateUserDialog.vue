<template>
  <div>
    <button class="btn btn-primary add-user" @click="isVisible = true">
      +
    </button>
    <div
      v-if="isVisible"
      class="modal show"
      tabindex="-1"
      style="display: block"
      aria-labelledby="createUserModa"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="createUserModa">Criar Usuário</h5>
            <button
              type="button"
              class="btn-close"
              @click="closeDialog"
            ></button>
          </div>
          <div class="modal-body">
            <form @submit.prevent="createUser">
              <div class="mb-3">
                <label for="name" class="form-label">Nome</label>
                <input
                  v-model="userStore.userRequest.name"
                  type="text"
                  class="form-control"
                  id="name"
                  placeholder="Ex: João"
                  required
                />
              </div>
              <div class="mb-3">
                <label for="job" class="form-label">Profissão</label>
                <input
                  v-model="userStore.userRequest.job"
                  type="text"
                  class="form-control"
                  id="job"
                  placeholder="Ex: Motorista"
                  required
                />
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-primary btn-block"
              @click="createUser"
            >
              Criar Usuário
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useUserStore } from "@/modules/users/store";
import { UserService } from "../services/UsersServices";

const userStore = useUserStore();
const userService = new UserService();

const isVisible = ref(false);

const closeDialog = () => {
  isVisible.value = false;
};

const createUser = async () => {
  await userService.createUser(userStore.userRequest);
  closeDialog();
};
</script>

<style scoped>
.modal.show {
  display: block;
  background-color: rgba(0, 0, 0, 0.5);
}

.modal-footer .btn-block {
  width: 100%;
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
