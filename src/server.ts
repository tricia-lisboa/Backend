import Fastify from "fastify";
import { routes } from "./routes";
import cors from '@fastify/cors';

const app = Fastify({ logger: true });

app.setErrorHandler((error, request, reply) => {
    reply.code(400).send({ message: error.message });
});

const start = async () => {
    await app.register(cors);
    await app.register(routes);

    try {
        // Mude esta linha para escutar em 0.0.0.0
        await app.listen({ port: 3333, host: '0.0.0.0' });
        console.log('Servidor rodando na porta 0.0.0.0'); // Mensagem de log
    } catch (err) {
        console.error("Error starting server:", err);
        process.exit(1);
    }
};

start();
