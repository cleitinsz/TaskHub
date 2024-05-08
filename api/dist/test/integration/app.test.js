"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const app_1 = __importDefault(require("../../src/app"));
describe("App Integration Test", () => {
    let server;
    beforeAll(() => {
        server = (0, supertest_1.default)(app_1.default);
    });
    test("should return 200 when call GET", async () => {
        const response = await server.get("/");
        expect(response.status).toBe(200);
    });
});
//# sourceMappingURL=app.test.js.map