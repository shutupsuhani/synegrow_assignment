
//index.ts

import express from 'express';
import cors from 'cors';
import taskRoutes from './routes/task.route';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use('/tasks', taskRoutes);

app.get('/', (_, res) => {
  res.send('🎯 Task Manager API is running!');
});

app.listen(PORT, () => {
  console.log(`🚀 Server is running at http://localhost:${PORT}`);
});
