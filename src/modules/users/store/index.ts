import { defineStore } from "pinia";
import { ref } from "vue";
import { UserInterface } from "../interfaces/UserInterface";
import { PaginationInterface } from "@/shared/interfaces/PaginationInterface";

export const useUserStore = defineStore("user", () => {
  const users = ref<UserInterface[]>([]);
  const pagination = ref<PaginationInterface>({
    page: 1,
    perPage: 6,
    total: 0,
    totalPages: 0,
  });
  return {
    users,
    pagination,
  };
});
