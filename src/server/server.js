import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import express from 'express';
import path from 'path';
import routes from './routes';

dotenv.config();
const filePrefix = process.env.NODE_ENV === 'development' ? 'src/app' : 'dist/public';

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(process.cwd(), filePrefix)));
app.use('/', routes);

//404
app.use((req, res, next) => {
  res.status(404);
  if(req.accepts('html')) {
    res.type('text/html').sendFile(path.join(process.cwd(), `${filePrefix}/errors/404.html`));
    return;
  }
  if(req.accepts('json')) {
    res.type('application/json').send({ error: '404 Not found' });
    return;
  }
  res.type('text/plain').send("404: This isn't the page you're looking for.");
  next();
});

//Render errors
app.use((err, req, res, next) => {
  res.status(500);
  console.error(err);
  if(req.accepts('json')) {
    res.type('application/json').send({
      error: '500 Internal Server Error',
      data: err
    });
    return;
  }
  res.type('text/plain').send('500: Internal Server Error');
  next();
});

export default app;