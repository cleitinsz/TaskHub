import { Category } from "../../../domain/entity/Category";
import { CategoryRepository } from "../../repository";

export class CreateCategory {
  constructor(private readonly categoryRepository: CategoryRepository) {}

  async execute(name: string): Promise<Category> {
    const category = Category.create(name);

    await this.categoryRepository.create(category);

    return category;
  }
}
