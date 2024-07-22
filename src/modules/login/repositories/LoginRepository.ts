import { post } from "@/shared/repositories/BaseRepository";
import { LoginPayloadInterface } from "@/modules/login/interfaces/LoginPayloadInterface";
import { LoginResponseInterface } from "@/modules/login/interfaces/LoginResponseInterface";

export class LoginRepository {
  async authenticate(
    payload: LoginPayloadInterface
  ): Promise<LoginResponseInterface> {
    const response = await post<LoginPayloadInterface>("/login", payload);
    return response.data;
  }
}
