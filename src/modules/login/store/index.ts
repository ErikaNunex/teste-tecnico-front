import { defineStore } from "pinia";
import { ref } from "vue";
import { LoginInterface } from "../interfaces/LoginInterface";
export const LoginStore = defineStore("login", () => {
  const payloadLogin = ref<LoginInterface>({
    username: "",
    password: "",
  });
  return {
    payloadLogin,
  };
});
