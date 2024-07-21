import { mount } from "@vue/test-utils";
import LoginForm from "@/modules/login/components/LoginForm.vue";
import { createPinia, setActivePinia } from "pinia";
import { useLoginStore } from "@/modules/login/store";
import { LoginService } from "@/modules/login/services/loginService";

jest.mock("@/modules/login/services/loginService");

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

  it("call login service on form", async () => {
    (LoginService.prototype.signIn as jest.Mock).mockResolvedValue({
      token: "bhvvuhuhvg",
    });

    const wrapper = mount(LoginForm);
    await wrapper.find("input#email").setValue("eve.holt@reqres.in");
    await wrapper.find("input#password").setValue("123456");
    await wrapper.find("form").trigger("submit.prevent");
    expect(LoginService.prototype.signIn).toHaveBeenCalledWith({
      email: "eve.holt@reqres.in",
      password: "123456",
    });
  });
});
