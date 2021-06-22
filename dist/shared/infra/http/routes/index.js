"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var sessions_routes_1 = __importDefault(require("@modules/users/infra/http/routes/sessions.routes"));
var users_routes_1 = __importDefault(require("@modules/users/infra/http/routes/users.routes"));
var courses_routes_1 = __importDefault(require("@modules/courses/infra/http/routes/courses.routes"));
var routes = express_1.Router();
routes.use("/login", sessions_routes_1.default);
routes.use("/user", users_routes_1.default);
routes.use("/courses", courses_routes_1.default);
routes.get("/", function (request, response) {
    return response.json({
        status: "ON"
    });
});
exports.default = routes;
