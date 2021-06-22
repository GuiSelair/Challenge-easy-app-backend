import 'reflect-metadata';
import 'dotenv/config';
import express from 'express';
import cors from 'cors';

import routes from '@shared/infra/http/routes';
import "@shared/infra/typeorm";
import "@shared/container";

const port = process.env.PORT || 3000;
const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(port, () => console.log("[ON] Server running on port 3000"));
