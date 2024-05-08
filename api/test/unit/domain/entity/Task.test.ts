import Task from "../../../../src/domain/entity/Task";

describe("Task Unit Test", () => {
  test("should create a new task", () => {
    const task = Task.create("Task Title");

    expect(task).toBeInstanceOf(Task);
    expect(task.title).toBe("Task Title");
    expect(task.id).toBeDefined();
    expect(task.createdAt).toBeInstanceOf(Date);
  });

  test("should create a new task and complete it", () => {
    const task = Task.create("Task Title");
    task.complete()

    expect(task).toBeInstanceOf(Task);
    expect(task.title).toBe("Task Title");
    expect(task.id).toBeDefined();
    expect(task.createdAt).toBeInstanceOf(Date);
    expect(task.updatedAt).toBeInstanceOf(Date);
    expect(task.done).toBe(true);
  });
});
