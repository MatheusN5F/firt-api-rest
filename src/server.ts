import express from 'express';
import mongoose from 'mongoose';
import routes from './routes';
const app = express();
mongoose
  .connect('mongodb://127.0.0.1:27017/firstapi')
  .then(() => {
    console.log('Conexão bem-sucedida!');
  })
  .catch((error) => {
    console.log('Erro ao conectar:', error);
  });

app.use(express.json());

app.use(routes);

app.listen(34454, () => {
  console.log('Http server listening on');
});
