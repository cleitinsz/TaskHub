import { TaskRepository } from "../../repository";

export class CompleteTask {
  constructor(readonly taskRepository: TaskRepository) {}

  async execute(taskId: string) {
    const task = await this.taskRepository.getOne(taskId);
    task.complete();
    this.taskRepository.complete(task);
    return task;
  }
}
