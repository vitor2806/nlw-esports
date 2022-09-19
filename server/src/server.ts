// In newer node versions its possible to use 'import' method instead of require, for this, I must add "type":"module" in package.json
import express from 'express';
import cors from 'cors';
import { routes } from './routes';

const app = express();

app.use(express.json());
app.use(routes);
app.use(cors());

/**
 * Query params: 'localhost:3333/ads?page=3&sort=content keep page attributes, if i share this link it will keep the info that I'm in page 3
 */

app.listen(process.env.PORT || 3333, () => console.log('Running...'));
