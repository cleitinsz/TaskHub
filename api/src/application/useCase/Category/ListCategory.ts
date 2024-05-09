import { Category } from "../../../domain/entity/Category";
import CategoryRepository from "../../repository/CategoryRepository";

export class ListCategory {
  constructor(private readonly categoryRepository: CategoryRepository) {}

  async execute(): Promise<Category[]> {
    const categories = await this.categoryRepository.list();

    return categories;
  }
}
