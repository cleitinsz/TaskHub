import {
  CreateCategory,
  ListCategory,
  UpdateCategory,
} from "../../useCase/Category";

export class CategoryUseCaseFactory {
  constructor(readonly categoryRepository: any) {}

  useCases() {
    return {
      createCategory: new CreateCategory(this.categoryRepository),
      listCategory: new ListCategory(this.categoryRepository),
      updateCategory: new UpdateCategory(this.categoryRepository),
    };
  }
}
