"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const KnexConnection_1 = __importDefault(require("./application/infra/database/knex/KnexConnection"));
const TaskController_1 = __importDefault(require("./application/controller/TaskController"));
const Task_1 = require("./application/useCase/Task");
const TaskRepository_1 = __importDefault(require("./application/repository/TaskRepository"));
const knexConnection = new KnexConnection_1.default();
const dbConnection = knexConnection.getInstance();
const taskRepository = new TaskRepository_1.default(dbConnection);
const createTask = new Task_1.CreateTask(taskRepository);
const completeTask = new Task_1.CompleteTask(taskRepository);
const taskController = new TaskController_1.default(createTask, completeTask);
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.get("/", (req, res) => res.sendStatus(200));
app.post("/task", taskController.create.bind(taskController));
app.put("/task/:id/complete", taskController.complete.bind(taskController));
exports.default = app;
//# sourceMappingURL=app.js.map