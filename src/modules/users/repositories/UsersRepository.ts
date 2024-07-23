import { get, post, patch, del } from "@/shared/repositories/BaseRepository";
import { UserInterface } from "../interfaces/UserInterface";
import { UserCreateInterface } from "../interfaces/UserCreateInterface";
import { UserResponseInterface } from "../interfaces/UserResponseInterface";

interface UserPaginationResponse {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: UserInterface[];
  support?: {
    url: string;
    text: string;
  };
}

export class UserRepository {
  async findUsers(page: number): Promise<UserPaginationResponse> {
    const response = await get<UserPaginationResponse>(`/users?page=${page}`);
    return response.data;
  }
  async createUser(data: UserCreateInterface): Promise<UserResponseInterface> {
    const response = await post<UserCreateInterface>("/users", data);
    return response.data;
  }
  async updateUser(
    userId: number,
    userUpdateData: Partial<UserCreateInterface>
  ): Promise<void> {
    await patch<Partial<UserCreateInterface>>(
      `/users/${userId}`,
      userUpdateData
    );
  }
  async deleteUser(userId: number): Promise<void> {
    await del(`/users/${userId}`);
  }
}
