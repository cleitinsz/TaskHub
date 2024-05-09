import { Category } from "../../../../src/domain/entity/Category";

describe("Category Unit Test", () => {
  test("should create a new category", () => {
    const category = Category.create("Category Title");

    expect(category).toBeInstanceOf(Category);
    expect(category.name).toBe("Category Title");
    expect(category).toBeDefined();
    expect(category.createdAt).toBeInstanceOf(Date);
  });

  test("should create a new category and update it", () => {
    const category = Category.create("Category Title");

    category.update('Title')
    expect(category).toBeInstanceOf(Category);
    expect(category.name).toBe("Title");
    expect(category).toBeDefined();
    expect(category.createdAt).toBeInstanceOf(Date);
    expect(category.updatedAt).toBeInstanceOf(Date);
  });
});
