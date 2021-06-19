import 'reflect-metadata';
import express from 'express';
import cors from 'cors';

import routes from './routes';

const port = process.env.PORT || 3000;
const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(port, () => console.log("[ON] Server running on port 3333"));
