import { UserRepository } from "@/modules/users/repositories/UsersRepository";
import { PaginationService } from "@/shared/services/PaginationService";
import { useUserStore } from "@/modules/users/store";

export class UserService {
  private userRepository: UserRepository;
  private paginationService: PaginationService;

  constructor() {
    this.userRepository = new UserRepository();
    this.paginationService = new PaginationService();
  }

  async getUsers(page: number) {
    const userStore = useUserStore();

    try {
      const response = await this.userRepository.findUsers(page);
      userStore.users = response.data;
      this.paginationService.setPagination(
        response.page,
        response.per_page,
        response.total,
        response.total_pages
      );

      userStore.pagination = this.paginationService.pagination;
    } catch (error) {
      console.error("Erro ao listar usuários:", error);
    }
  }
}
