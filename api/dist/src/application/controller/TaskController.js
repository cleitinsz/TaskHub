"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TaskController {
    constructor(createTask, completeTask) {
        this.createTask = createTask;
        this.completeTask = completeTask;
    }
    async create(req, res) {
        const { title } = req.body;
        const task = await this.createTask.execute(title);
        res.status(200).json({
            task: task,
        });
    }
    async complete(req, res) {
        const { id: taskId } = req.params;
        const task = await this.completeTask.execute(taskId);
        res.status(201).json({
            task: task,
        });
    }
}
exports.default = TaskController;
//# sourceMappingURL=TaskController.js.map