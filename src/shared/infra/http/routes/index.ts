import { Router, Request, Response, NextFunction } from 'express';
import PDFKit from 'pdfkit';
import fs from 'fs';
import path from 'path';

import sessionsRouter from '@modules/users/infra/http/routes/sessions.routes';
import usersRouter from '@modules/users/infra/http/routes/users.routes';
import coursesRouter from '@modules/courses/infra/http/routes/courses.routes';
import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensuredAuthenticated';

const routes = Router();

routes.use("/login", sessionsRouter);
routes.use("/user", usersRouter);
routes.use("/courses", coursesRouter);
routes.get("/", (request: Request, response: Response, _:NextFunction) => {
  return response.json({
    status: "ON"
  })
});
routes.post("/generatePDF", ensureAuthenticated ,(request: Request, response: Response, _:NextFunction) => {
  const { body } = request;

  const pdf = new PDFKit();

  pdf.text(JSON.stringify(body));

  console.log(JSON.stringify(body));
  
  // console.log(`${path.resolve(__dirname, "..", "..", "..", "..", "..", "reports")}/pdftest.pdf`, 'pdftest.pdf');
  

  pdf.pipe(fs.createWriteStream(`${path.resolve(__dirname, "..", "..", "..", "..", "..", "reports")}/pdftest.pdf`));
  pdf.end();
  return response.sendFile(`${path.resolve(__dirname, "..", "..", "..", "..", "..", "reports")}/pdftest.pdf`);
  // return response.json({
  //   "url": `${path.resolve(__dirname, "..", "..", "..", "..", "..", "reports")}/pdftest.pdf`,
  // });

});

export default routes;