import { PaginationInterface } from "@/shared/interfaces/PaginationInterface";

export class PaginationService {
  private _pagination: PaginationInterface = {
    page: 1,
    perPage: 10,
    total: 0,
    totalPages: 0,
  };

  get pagination() {
    return this._pagination;
  }

  setPagination(
    page: number,
    perPage: number,
    total: number,
    totalPages: number
  ) {
    this._pagination = { page, perPage, total, totalPages };
  }

  nextPage() {
    if (this._pagination.page < this._pagination.totalPages) {
      this._pagination.page += 1;
    }
  }

  previousPage() {
    if (this._pagination.page > 1) {
      this._pagination.page -= 1;
    }
  }
}
