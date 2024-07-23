import { UserRepository } from "@/modules/users/repositories/UsersRepository";
import { PaginationService } from "@/shared/services/PaginationService";
import { useUserStore } from "@/modules/users/store";
import { UserInterface } from "../interfaces/UserInterface";
import { UserCreateInterface } from "../interfaces/UserCreateInterface";
import { useAlertStore } from "@/shared/stores/AlertStore";

export class UserService {
  private userRepository: UserRepository;
  private paginationService: PaginationService;
  userStore = useUserStore();
  alertStore = useAlertStore();
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
      this.alertStore.message = "Usuários listados com sucesso!";
      this.alertStore.isVisible = true;
      this.alertStore.type = "success";
    } catch (error) {
      this.alertStore.message = "Erro ao listar usuários!";
      this.alertStore.isVisible = true;
      this.alertStore.type = "danger";
      console.error(error);
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

      this.alertStore.message = "Usuário encontrado com sucesso!";
      this.alertStore.isVisible = true;
      this.alertStore.type = "success";
    } catch (error) {
      this.alertStore.message = "Erro ao buscar usuário!";
      this.alertStore.isVisible = true;
      this.alertStore.type = "danger";
      console.error(error);
    }
  }
  async createUser(userRequest: UserCreateInterface) {
    try {
      await this.userRepository.createUser(userRequest);
      this.getUsers(1);
    } catch (error) {
      this.alertStore.message = "Erro ao criar usuário!";
      this.alertStore.isVisible = true;
      this.alertStore.type = "danger";
      console.error(error);
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
      this.alertStore.message = "Usuário editado com sucesso!";
      this.alertStore.isVisible = true;
      this.alertStore.type = "success";
    } catch (error) {
      this.alertStore.message = "Erro ao editar usuário!";
      this.alertStore.isVisible = true;
      this.alertStore.type = "danger";
      console.error(error);
    }
  }
  async deleteUser(userId: number) {
    try {
      await this.userRepository.deleteUser(userId);
      this.alertStore.message = "Usuário excluído com sucesso!";
      this.alertStore.isVisible = true;
      this.alertStore.type = "success";
    } catch (error) {
      this.alertStore.message = "Erro ao excluir usuário!";
      this.alertStore.isVisible = true;
      this.alertStore.type = "danger";
      console.error(error);
    }
  }
}
