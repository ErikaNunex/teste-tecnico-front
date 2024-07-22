import { useRouter } from "vue-router";
import { LoginRepository } from "@/modules/login/repositories/LoginRepository";
import { LoginPayloadInterface } from "@/modules/login/interfaces/LoginPayloadInterface";
import { useLoginStore } from "@/modules/login/store";
import { redirect } from "@/shared/services/RoutingService";

export class LoginService {
  private loginRepository: LoginRepository;
  private loginStore = useLoginStore();
  private router = useRouter();

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
    } catch (error) {
      console.error(error);
    }
  }
}
