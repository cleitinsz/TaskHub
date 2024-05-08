"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Task_1 = __importDefault(require("../../../../src/domain/entity/Task"));
describe("Task Unit Test", () => {
    test("should create a new task", () => {
        const task = Task_1.default.create("Task Title");
        expect(task).toBeInstanceOf(Task_1.default);
        expect(task.title).toBe("Task Title");
        expect(task.id).toBeDefined();
        expect(task.createdAt).toBeInstanceOf(Date);
    });
    test("should create a new task and complete it", () => {
        const task = Task_1.default.create("Task Title");
        task.complete();
        expect(task).toBeInstanceOf(Task_1.default);
        expect(task.title).toBe("Task Title");
        expect(task.id).toBeDefined();
        expect(task.createdAt).toBeInstanceOf(Date);
        expect(task.updatedAt).toBeInstanceOf(Date);
        expect(task.done).toBe(true);
    });
});
//# sourceMappingURL=Task.test.js.map