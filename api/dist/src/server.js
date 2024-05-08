"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.initServer = void 0;
const app_1 = __importDefault(require("./app"));
function initServer(port) {
    try {
        app_1.default.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });
    }
    catch (error) {
        console.error(error);
    }
}
exports.initServer = initServer;
const port = Number(process.env.PORT) || 3000;
initServer(3000);
//# sourceMappingURL=server.js.map