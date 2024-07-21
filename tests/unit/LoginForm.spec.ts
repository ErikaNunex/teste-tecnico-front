import { mount } from "@vue/test-utils";
import LoginForm from "@/modules/login/components/LoginForm.vue";
import { createPinia, setActivePinia } from "pinia";
import { useLoginStore } from "@/modules/login/store";

describe("LoginForm.vue", () => {
  let loginStore: ReturnType<typeof useLoginStore>;

  beforeEach(() => {
    setActivePinia(createPinia());
    loginStore = useLoginStore();
  });

  it("render login form", () => {
    const wrapper = mount(LoginForm);
    expect(wrapper.find("label[for='email']").text()).toBe("Email");
    expect(wrapper.find("input#email").exists()).toBe(true);
    expect(wrapper.find("label[for='password']").text()).toBe("Senha");
    expect(wrapper.find("input#password").exists()).toBe(true);
    expect(wrapper.find("button").text()).toBe("Entrar");
  });
  it("update email and password on input", async () => {
    const wrapper = mount(LoginForm);

    const email = wrapper.find("input#email");
    await email.setValue("eve.holt@reqres.in");
    expect(loginStore.payloadLogin.email).toBe("eve.holt@reqres.in");

    const password = wrapper.find("input#password");
    await password.setValue("123456");
    expect(loginStore.payloadLogin.password).toBe("123456");
  });
});
