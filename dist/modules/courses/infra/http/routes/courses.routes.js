"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var CoursesController_1 = __importDefault(require("../controllers/CoursesController"));
var LevelCoursesController_1 = __importDefault(require("../controllers/LevelCoursesController"));
var coursesRouter = express_1.Router();
var coursesController = new CoursesController_1.default();
var levelCoursesController = new LevelCoursesController_1.default();
// NIVEL DO CURSO
coursesRouter.post("/:id/level/create", levelCoursesController.create);
coursesRouter.put("/:idLevel/level/update", levelCoursesController.update);
coursesRouter.delete("/:idLevel/level/delete", levelCoursesController.delete);
coursesRouter.get("/listAllLevels", levelCoursesController.show);
coursesRouter.get("/listLevel/:id/", levelCoursesController.index);
// CURSOS
coursesRouter.get("/", coursesController.show);
coursesRouter.get("/:id", coursesController.index);
exports.default = coursesRouter;
