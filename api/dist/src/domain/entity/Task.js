"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const crypto_1 = __importDefault(require("crypto"));
class Task {
    constructor(id, title, createdAt, updatedAt) {
        this.id = id;
        this.title = title;
        this.createdAt = createdAt;
        this.done = false;
    }
    static create(title) {
        const taskId = crypto_1.default.randomUUID();
        return new Task(taskId, title, new Date());
    }
    complete() {
        this.done = true;
        this.updatedAt = new Date();
    }
}
exports.default = Task;
//# sourceMappingURL=Task.js.map