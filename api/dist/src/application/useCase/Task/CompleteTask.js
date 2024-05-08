"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompleteTask = void 0;
class CompleteTask {
    constructor(taskRepository) {
        this.taskRepository = taskRepository;
    }
    async execute(taskId) {
        const task = await this.taskRepository.getOne(taskId);
        task.complete();
        this.taskRepository.complete(task);
        return task;
    }
}
exports.CompleteTask = CompleteTask;
//# sourceMappingURL=CompleteTask.js.map