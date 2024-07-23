import { mount } from "@vue/test-utils";
import SidebarComponent from "@/shared/components/SidebarComponent.vue";
import { createPinia, setActivePinia } from "pinia";
import { useSidebarStore } from "@/shared/stores/SidebarStore";
import { createRouter, createMemoryHistory, RouteRecordRaw } from "vue-router";
import { nextTick } from "vue";

const routes: RouteRecordRaw[] = [
  {
    path: "/dashboard",
    name: "Dashboard",
    component: { template: "<div>Dashboard</div>" },
  },
  {
    path: "/usuarios",
    name: "Usuários",
    component: { template: "<div>Usuários</div>" },
  },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

describe("SidebarComponent.vue", () => {
  let sidebarStore: ReturnType<typeof useSidebarStore>;

  beforeEach(() => {
    setActivePinia(createPinia());
    sidebarStore = useSidebarStore();
  });

  it("render sidebar items and set active class", async () => {
    router.push("/dashboard");
    await router.isReady();

    const wrapper = mount(SidebarComponent, {
      global: {
        plugins: [router],
      },
    });

    await nextTick();
    expect(wrapper.find("i.bi-house").exists()).toBe(true);
    expect(wrapper.find("i.bi-people").exists()).toBe(true);
    expect(wrapper.find(".list-group-item.active").text()).toContain(
      "Dashboard"
    );
  });
  it("toggle visibility sidebarStore", async () => {
    const wrapper = mount(SidebarComponent, {
      global: {
        plugins: [router],
      },
    });

    sidebarStore.isSidebarVisible = true;
    await nextTick();

    expect(wrapper.find(".sidebar").classes()).toContain("visible");

    sidebarStore.isSidebarVisible = false;
    await nextTick();

    expect(wrapper.find(".sidebar").classes()).not.toContain("visible");
  });
});
