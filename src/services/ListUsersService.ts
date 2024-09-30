import prismaClient from "../prisma";

class ListUsersService {
    async execute() {

        const users = await prismaClient.users.findMany()

        return users;
        
    }
}

export { ListUsersService }