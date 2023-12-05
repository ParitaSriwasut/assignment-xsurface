import express from 'express';
import pkg from 'mongoose';
import router from './routes/router.js';
import cors from 'cors';
import { notFoundMiddleware, errMiddleware } from './middlewares/middlewares.js';
import { config } from './config/config.js';
const { connect, connection } = pkg;

// Connect to MongoDB using Mongoose. The connect() method returns a promise.
const mongoUri = config.mondbUri;
connect(mongoUri)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Error connecting to MongoDB', err));

// Create Express app
const app = express();
app.use(cors());
app.use(express.json());
app.use('/', router);
app.use(notFoundMiddleware);
app.use(errMiddleware);

app.listen(config.port, () => {
  console.log(`Server running at http://localhost:${config.port}`);
});

process.on('SIGINT', async () => {
  await connection.close();
  process.exit(0);
});
