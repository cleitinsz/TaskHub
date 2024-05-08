"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const knex_1 = require("knex");
class KnexConnection {
    constructor() {
        const configParams = {
            client: "pg",
            connection: {
                host: process.env.DB_HOSTNAME,
                user: process.env.DB_USERNAME,
                password: process.env.DB_PASSWORD,
                database: process.env.DB_DATABASE,
            },
        };
        this.connection = (0, knex_1.knex)(configParams);
    }
    getInstance() {
        return this.connection;
    }
}
exports.default = KnexConnection;
//# sourceMappingURL=KnexConnection.js.map