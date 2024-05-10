import { CategoryRepository } from "../../repository";

export class UpdateCategory {
  constructor(private readonly categoryRepository: CategoryRepository) {}

  async execute(id: string, name: string): Promise<void> {
    const categoryToUpdate = await this.categoryRepository.getOne(id);
    categoryToUpdate.update(name);
    await this.categoryRepository.update(categoryToUpdate);
  }
}
