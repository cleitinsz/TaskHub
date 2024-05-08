"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTask = void 0;
const Task_1 = __importDefault(require("../../../domain/entity/Task"));
class CreateTask {
    constructor(taskRepository) {
        this.taskRepository = taskRepository;
    }
    async execute(title) {
        const task = Task_1.default.create(title);
        await this.taskRepository.create(task);
        return task;
    }
}
exports.CreateTask = CreateTask;
//# sourceMappingURL=CreateTask.js.map