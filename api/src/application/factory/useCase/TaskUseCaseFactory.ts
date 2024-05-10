import {
  AssignCategoryTask,
  CompleteTask,
  CreateTask,
} from "../../useCase/Task";

export class TaskUseCaseFactory {
  constructor(readonly taskRepository: any) {}

  useCases() {
    return {
      assignCategoryTask: new AssignCategoryTask(this.taskRepository),
      createTask: new CreateTask(this.taskRepository),
      completeTask: new CompleteTask(this.taskRepository),
    };
  }
}
