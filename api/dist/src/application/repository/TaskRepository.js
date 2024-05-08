"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Task_1 = __importDefault(require("../../domain/entity/Task"));
class TaskRepository {
    constructor(dbConnection) {
        this.dbConnection = dbConnection;
    }
    async create(task) {
        await this.dbConnection("task").insert({
            id: task.id,
            title: task.title,
            created_at: task.createdAt,
        });
    }
    async complete(task) {
        await this.dbConnection("task").where({ id: task.id }).update({
            done: task.done,
            updated_at: task.updatedAt,
        });
    }
    async getOne(taskId) {
        const taskData = await this.dbConnection("task")
            .where({ id: taskId })
            .first();
        const task = new Task_1.default(taskData.id, taskData.title, taskData.createdAt, taskData.updatedAt);
        return task;
    }
}
exports.default = TaskRepository;
//# sourceMappingURL=TaskRepository.js.map