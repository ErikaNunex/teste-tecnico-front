import { defineStore } from "pinia";
import { ref } from "vue";
import { UserInterface } from "../interfaces/UserInterface";
import { PaginationInterface } from "@/shared/interfaces/PaginationInterface";
import { UserCreateInterface } from "../interfaces/UserCreateInterface";

export const useUserStore = defineStore("user", () => {
  const users = ref<UserInterface[]>([]);
  const pagination = ref<PaginationInterface>({
    page: 1,
    perPage: 6,
    total: 0,
    totalPages: 0,
  });
  const userRequest = ref<UserCreateInterface>({
    name: "",
    job: "",
  });
  const isCreateUserModalVisible = ref(false);
  return {
    users,
    pagination,
    userRequest,
    isCreateUserModalVisible,
  };
});
