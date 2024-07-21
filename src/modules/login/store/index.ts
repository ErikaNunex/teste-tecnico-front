import { defineStore } from "pinia";
import { ref } from "vue";
import { LoginPayloadInterface } from "../interfaces/LoginPayloadInterface";
export const LoginStore = defineStore("login", () => {
  const payloadLogin = ref<LoginPayloadInterface>({
    email: "",
    password: "",
  });
  return {
    payloadLogin,
  };
});
