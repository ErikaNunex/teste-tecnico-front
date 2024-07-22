import { LoginRepository } from "@/modules/login/repositories/LoginRepository";
import { LoginPayloadInterface } from "@/modules/login/interfaces/LoginPayloadInterface";

export class LoginService {
  private loginRepository: LoginRepository;

  constructor() {
    this.loginRepository = new LoginRepository();
  }

  async signIn(user: LoginPayloadInterface): Promise<void> {
    try {
      const response = await this.loginRepository.authenticate(user);
      console.log("Token:", response.token);
    } catch (error) {
      console.error(error);
    }
  }
}
