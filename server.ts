import { PrismaClient } from '@prisma/client';
import express from 'express';

const app = express();
const PORT = 8000;

app.use(express.json());

const prisma = new PrismaClient();

app.post('/', async (req, res) => {
  const { title, body } = req.body;
  const posts = await prisma.posts.create({
    data: {
      title,
      body
    }
  });
  return res.json(posts);
});

app.listen(PORT, () => {
  console.log('サーバが起動中...');
});
