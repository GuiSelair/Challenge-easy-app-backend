import { Router } from 'express';

import CoursesController from '../controllers/CoursesController';
import LevelCoursesController from '../controllers/LevelCoursesController';

const coursesRouter = Router();
const coursesController = new CoursesController();
const levelCoursesController = new LevelCoursesController();

// NIVEL DO CURSO
coursesRouter.post("/:id/level/create", levelCoursesController.create);
coursesRouter.put("/:idLevel/level/update", levelCoursesController.update);
coursesRouter.delete("/:idLevel/level/delete", levelCoursesController.delete);
coursesRouter.get("/listAllLevels", levelCoursesController.show);
coursesRouter.get("/listLevel/:id/", levelCoursesController.index);

// CURSOS
coursesRouter.get("/", coursesController.show);
coursesRouter.get("/:id", coursesController.index);

export default coursesRouter;