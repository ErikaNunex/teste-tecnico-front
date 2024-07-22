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

  it("render route name", () => {
    const routeName = "Dashboard";
    const wrapper = mount(NavbarComponent, {
      props: { routeName },
    });
    expect(wrapper.find("h2").text()).toBe(routeName);
  });
  it("call toggleSidebar when button is clicked", async () => {
    const routeName = "Dashboard";
    const wrapper = mount(NavbarComponent, {
      props: { routeName },
    });
    const spy = jest.spyOn(sidebarStore, "toggleSidebar");

    await wrapper.find("button").trigger("click");

    expect(spy).toHaveBeenCalled();
  });
});
