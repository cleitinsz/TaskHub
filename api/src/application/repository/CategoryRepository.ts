import { Category } from "../../domain/entity/Category";

export class CategoryRepository {
  constructor(readonly dbConnection: any) {}

  async create(category: Category): Promise<void> {
    await this.dbConnection("category").insert({
      id: category.id,
      name: category.name,
      created_at: category.createdAt,
    });
  }

  async update(category: Category): Promise<void> {
    await this.dbConnection("category")
      .where({
        id: category.id,
      })
      .update({
        name: category.name,
        update_at: category.updatedAt,
      });
  }

  async list(): Promise<Category[]> {
    const list = await this.dbConnection("category").select("*");

    const listFormatted = list.map((category: any) => {
      return new Category(category.id, category.name, category.createdAt);
    });

    return listFormatted;
  }

  async getOne(categoryId: string): Promise<Category> {
    const categoryData = await this.dbConnection("category")
      .where({ id: categoryId })
      .first();

    const category = new Category(
      categoryData.ud,
      categoryData.name,
      categoryData.createdAt
    );

    return category;
  }
}
