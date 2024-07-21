import { defineStore } from "pinia";
import { ref } from "vue";
import { LoginPayloadInterface } from "../interfaces/LoginPayloadInterface";
export const useLoginStore = defineStore("login", () => {
  const payloadLogin = ref<LoginPayloadInterface>({
    email: "",
    password: "",
  });
  const token = ref<string>("");
  return {
    payloadLogin,
    token,
  };
});
