import express from 'express';
import { prisma } from './prisma/prisma';
import type { Exame, Usuario,  } from './prisma/generated/prisma/client';
import bcrypt from "bcrypt";
import { log } from 'console';

const app = express();
app.use(express.json())
const port = 3000;

app.get('/', (req, res) => {
  console.log(req)
  res.send("Hello world")
})

// Endpoints usuario
app.get('/usuarios', async (_, res) => {
  const usuarios = await prisma.usuario.findMany();
  return res.json(usuarios);
})

app.get('/usuarios/:id', async (req, res) => {
  const idUsuario = Number(req.params.id)
  const usuario = await prisma.usuario.findUnique({
    where: {
      id: idUsuario
    }
  })

  return res.status(200).json(usuario);
})

app.post("/usuarios", async (req, res) => {
  console.log(req.body)
  const dadosUsuario = req.body as Usuario

  const saltRounds = 10
  const hash =  await bcrypt.hash(dadosUsuario.senha, saltRounds)
  
  const usuarioCriado = await prisma.usuario.create({
    data: {
      email: dadosUsuario.email,
      nome: dadosUsuario.nome || null,
      senha: hash
    }

  })
  return res.status(201).json(usuarioCriado)
})

app.put("/usuarios/:id", async (req, res) => {
  const idUsuario = Number(req.params.id)
  const dadosParaAtualizar = req.body as Omit<Usuario, 'id'>
  const saltRounds = 10
  const hash =  await bcrypt.hash(dadosParaAtualizar.senha, saltRounds)

  const usuarioAtualizado = await prisma.usuario.update({
    data: {
      ...dadosParaAtualizar,
      senha: hash
    },
    where: {
      id: idUsuario
    }
  })

  return res.status(200).json(usuarioAtualizado);
})

app.delete('/usuarios/:id', async (req, res) => {
  const idUsuario = Number(req.params.id)
  const usuarioDeletado = await prisma.usuario.delete({
    where: {
      id: idUsuario
    }
  })

  return res.status(200).json({
    mensagem: "Usuário deletado com sucesso!",
    data: usuarioDeletado
  });
})

//Exames

app.get('/exames', async (req, res) => {
  const exames = await prisma.exame.findMany()
  res.json(exames)
})

app.get('/exames/:id', async (req, res) => {
  const idExame = Number(req.params.id)
  const exame = await prisma.exame.findUnique({
    where: {
      id: idExame
    }
  })
  return res.status(200).json(exame)
})

app.post('/exames', async (req, res) => {
  console.log(req.body)
  const dadosExame = req.body as Exame
  const exameCriado = await prisma.exame.create({
    data: {
      tipo_exame: dadosExame.tipo_exame,
      valor: dadosExame.valor,
      descricao: dadosExame.descricao,
      resultado: dadosExame.resultado,
      data_exame: new Date(dadosExame.data_exame)
    }
  })
  return res.status(201).json(exameCriado)
})

app.listen(port, () => {
  console.log("Servidor ta de pé :p")
})

app.put('/exames/:id', async (req, res) => {
  const idExame = Number(req.params.id)
  const dadosParaAtualizar = req.body as Omit<Exame, 'id'>

  const exameAtualizado = await prisma.exame.update({
    data: {
      ...dadosParaAtualizar
    },
    where: {
      id: idExame
    }
  })

  return res.status(200).json(exameAtualizado)
})

app.delete('/exames/:id', async (req, res) => {
  const idExame = Number(req.params.id)
  const exameDeletado = await prisma.exame.delete({
    where: {
      id: idExame
    }
  })
  return res.status(200).json({
    mensagem: "Exame deletado com sucesso!",
    data: exameDeletado
  })
})

