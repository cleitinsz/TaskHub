"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("../../src/app"));
const server_1 = require("../../src/server");
describe("Server Integration Test", () => {
    test.skip("should call console.error", () => {
        const mockError = new Error("Failed to start server");
        const listenSpy = jest.spyOn(app_1.default, "listen").mockImplementation(() => {
            throw mockError;
        });
        const consoleErrorSpy = jest
            .spyOn(console, "error")
            .mockImplementation(() => { });
        (0, server_1.initServer)();
        expect(listenSpy).toHaveBeenCalled();
        expect(consoleErrorSpy).toHaveBeenCalledWith(mockError);
    });
    test.skip("should init server", async () => {
        const listenSpy = jest.spyOn(app_1.default, "listen");
        (0, server_1.initServer)(3001);
        expect(listenSpy).toHaveBeenCalled();
    });
});
//# sourceMappingURL=server.test.js.map