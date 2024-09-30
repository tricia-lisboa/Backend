import { FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply } from "fastify";
import { CreateCustomerController } from './controllers/CreateUserController'
import { ListUsersController } from "./controllers/ListUsersController";
import { DeleteUserController } from "./controllers/DeleteUserController";

export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions) {
    fastify.get("/teste", async (request: FastifyRequest, reply: FastifyReply) => {
        return { ok: true };
    })

    fastify.post("/user", async (request:FastifyRequest, reply: FastifyReply) => {
     return new CreateCustomerController().handle(request, reply)   
    })

    fastify.get("/users", async (request:FastifyRequest, reply: FastifyReply) => {
        return new ListUsersController().handle(request, reply)   
       })

       fastify.delete("/user", async (request:FastifyRequest, reply: FastifyReply) => {
        return new DeleteUserController().handle(request, reply)   
       })

    console.log("Route '/teste' registered.");
}
