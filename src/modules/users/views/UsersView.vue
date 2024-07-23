<template>
  <div>
    <UserHeader />
    <UserList />
    <PaginationList
      :page="userStore.pagination.page"
      :perPage="userStore.pagination.perPage"
      :total="userStore.pagination.total"
      @pageChange="changePage"
    />
    <AlertComponent />
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import UserHeader from "@/modules/users/components/UserHeader.vue";
import UserList from "@/modules/users/components/UserList.vue";
import { useUserStore } from "../store";
import { UserService } from "@/modules/users/services/UsersServices";
import PaginationList from "@/shared/components/PaginationList.vue";
import AlertComponent from "@/shared/components/AlertComponent.vue";

const userService = new UserService();
const userStore = useUserStore();
const changePage = (page: number) => {
  userService.getUsers(page);
};

onMounted(() => {
  userService.getUsers(1);
});
</script>
<style scoped></style>
