import fastify from "fastify";
import cors from '@fastify/cors'
import { PrismaClient } from '@prisma/client'

const app = fastify();
const prisma = new PrismaClient()

app.register(cors) // Aqui pode definir as url que podem acessar essa api
// Método HTTP: Get, Post, Put, Patch, Delete

app.get('/hello', async () => {
    const habits = await prisma.habit.findMany()
    return habits
});

app.listen({
    port: 3333,
}).then(() => {
    console.log('HTTP Server running!')
});