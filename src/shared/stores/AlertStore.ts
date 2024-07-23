import { defineStore } from "pinia";
import { ref } from "vue";

export const useAlertStore = defineStore("alert", () => {
  const type = ref<"success" | "danger">("success");
  const message = ref<string>("");
  const duration = ref<number>(3000);
  const isVisible = ref<boolean>(false);

  return {
    type,
    message,
    duration,
    isVisible,
  };
});
