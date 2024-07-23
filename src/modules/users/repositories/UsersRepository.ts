import { get } from "@/shared/repositories/BaseRepository";
import { UserInterface } from "../interfaces/UserInterface";

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
}
