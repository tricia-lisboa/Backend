import { FastifyRequest, FastifyReply } from 'fastify'
import { ListUsersService } from '../services/ListUsersService'

class ListUsersController {
    async handle(request: FastifyRequest, reply: FastifyReply){
        const listUserService = new ListUsersService();

        const users = await listUserService.execute();

        reply.send(users);
    }
}

export { ListUsersController }