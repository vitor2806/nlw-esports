// In newer node versions its possible to use 'import' method instead of require, for this, I must add "type":"module" in package.json
import express from 'express';
const app = express();
app.get();
app.listen(3333, console.log('Running...'));
