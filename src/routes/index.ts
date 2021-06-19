import { Router } from 'express';

const routes = Router();

routes.get("/", (request, response) => {
  return response.json({
    ola: "world",
    ai: "teste"
  })
})

export default routes;