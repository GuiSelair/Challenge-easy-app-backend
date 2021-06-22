import { Router } from 'express';

import CoursesController from '../controllers/CoursesController';
import LevelCoursesController from '../controllers/LevelCoursesController';

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensuredAuthenticated';

const coursesRouter = Router();
const coursesController = new CoursesController();
const levelCoursesController = new LevelCoursesController();

// NIVEL DO CURSO
coursesRouter.post("/:id/level/create", ensureAuthenticated, levelCoursesController.create);
coursesRouter.put("/:idLevel/level/update", ensureAuthenticated, levelCoursesController.update);
coursesRouter.delete("/:idLevel/level/delete", ensureAuthenticated, levelCoursesController.delete);
coursesRouter.get("/listAllLevels", ensureAuthenticated, levelCoursesController.show);
coursesRouter.get("/listLevel/:id/", ensureAuthenticated, levelCoursesController.index);

// CURSOS
coursesRouter.get("/", coursesController.show);
coursesRouter.get("/:id", ensureAuthenticated, coursesController.index);

export default coursesRouter;