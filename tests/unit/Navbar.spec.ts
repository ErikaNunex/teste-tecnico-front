import { mount } from "@vue/test-utils";
import NavbarComponent from "@/shared/components/NavbarComponent.vue";
import { createPinia, setActivePinia } from "pinia";
import { useSidebarStore } from "@/shared/components/stores/SidebarStore";

describe("NavbarComponent.vue", () => {
  let sidebarStore: ReturnType<typeof useSidebarStore>;

  beforeEach(() => {
    setActivePinia(createPinia());
    sidebarStore = useSidebarStore();
  });
});
