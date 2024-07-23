import { useRouter } from "vue-router";
import { LoginRepository } from "@/modules/login/repositories/LoginRepository";
import { LoginPayloadInterface } from "@/modules/login/interfaces/LoginPayloadInterface";
import { useLoginStore } from "@/modules/login/store";
import { redirect } from "@/shared/services/RoutingService";
import { useAlertStore } from "@/shared/stores/AlertStore";

export class LoginService {
  private loginRepository: LoginRepository;
  private loginStore = useLoginStore();
  private router = useRouter();
  alertStore = useAlertStore();

  constructor() {
    this.loginRepository = new LoginRepository();
  }

  async signIn(user: LoginPayloadInterface): Promise<void> {
    try {
      const response = await this.loginRepository.authenticate(user);
      this.loginStore.token = response.token;
      if (this.loginStore.token !== "") {
        redirect(this.router, "Dashboard");
      }
      this.alertStore.message = "Usuário logado com sucesso!";
      this.alertStore.isVisible = true;
      this.alertStore.type = "success";
    } catch (error) {
      this.alertStore.message = "Erro ao fazer login";
      this.alertStore.isVisible = true;
      this.alertStore.type = "danger";
      console.error(error);
    }
  }
}
