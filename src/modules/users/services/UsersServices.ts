import { UserRepository } from "@/modules/users/repositories/UsersRepository";
import { PaginationService } from "@/shared/services/PaginationService";
import { useUserStore } from "@/modules/users/store";
import { UserInterface } from "../interfaces/UserInterface";
import { UserCreateInterface } from "../interfaces/UserCreateInterface";

export class UserService {
  private userRepository: UserRepository;
  private paginationService: PaginationService;
  userStore = useUserStore();
  constructor() {
    this.userRepository = new UserRepository();
    this.paginationService = new PaginationService();
  }

  async getUsers(page: number) {
    try {
      const response = await this.userRepository.findUsers(page);
      this.userStore.users = response.data;
      this.paginationService.setPagination(
        response.page,
        response.per_page,
        response.total,
        response.total_pages
      );

      this.userStore.pagination = this.paginationService.pagination;
    } catch (error) {
      console.error("Erro ao listar usuários:", error);
    }
  }
  async findUser(user: string) {
    if (user.length < 3) {
      return;
    }

    try {
      const allUsers = this.userStore.users;
      const filteredUsers = allUsers.filter(
        (u: UserInterface) =>
          u.first_name.toLowerCase().includes(user.toLowerCase()) ||
          u.last_name.toLowerCase().includes(user.toLowerCase())
      );
      this.userStore.users = filteredUsers;
    } catch (error) {
      console.error("Erro ao buscar usuário:", error);
    }
  }
  async createUser(userRequest: UserCreateInterface) {
    try {
      await this.userRepository.createUser(userRequest);
      this.getUsers(1);
    } catch (error) {
      console.error("Erro ao criar usuário:", error);
    }
  }

  async updateUser(userId: number) {
    const userStore = useUserStore();

    try {
      await this.userRepository.updateUser(userId, userStore.userRequest);
      const updatedUserList = userStore.users.map((user) =>
        user.id === userId ? { ...user, ...userStore.userRequest } : user
      );
      userStore.users = updatedUserList;
    } catch (error) {
      console.error("Erro ao editar  usuário:", error);
    }
  }
}
