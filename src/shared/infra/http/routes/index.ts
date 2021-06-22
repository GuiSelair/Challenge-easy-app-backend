import { Router } from 'express';

import sessionsRouter from '@modules/users/infra/http/routes/sessions.routes';
import usersRouter from '@modules/users/infra/http/routes/users.routes';
import coursesRouter from '@modules/courses/infra/http/routes/courses.routes';

const routes = Router();

routes.use("/login", sessionsRouter);
routes.use("/user", usersRouter);
routes.use("/courses", coursesRouter);

export default routes;