import express from 'express';
import cors from 'cors';
import dotEnv from 'dotenv';

const app = express();
dotEnv.config();

app.use(express.json());
app.use(cors());

app.use((req, res, next) => {
  return res.status(200).json({
    message: 'welcome',
    status: true,
  });
});

const port = parseInt(process.env.NODE_ENV === 'test' ? 8378 : process.env.PORT, 10) || 8000;
export const server = app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

export default app;
