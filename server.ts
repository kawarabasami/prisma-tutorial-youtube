import { PrismaClient } from '@prisma/client';
import express from 'express';

const app = express();
const PORT = 8000;

app.use(express.json());

const prisma = new PrismaClient();

app.get('/', async (req, res) => {
  const posts = await prisma.posts.findMany();
  return res.json(posts);
});

app.get('/:id', async (req, res) => {
  const posts = await prisma.posts.findUnique({
    where: { id: Number(req.params.id) }
  });
  return res.json(posts);
});

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

app.put('/:id', async (req, res) => {
  const { title, body } = req.body;
  const updatedPosts = await prisma.posts.update({
    where: {
      id: Number(req.params.id)
    },
    data: {
      title,
      body
    }
  });
  return res.json(updatedPosts);
});

app.delete('/:id', async (req, res) => {
  const posts = await prisma.posts.delete({
    where: {
      id: Number(req.params.id)
    }
  });
  return res.json(posts);
});

app.listen(PORT, () => {
  console.log('サーバが起動中...');
});
