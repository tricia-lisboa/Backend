import prismaClient from "../prisma";

interface CreateUserProps{
    name: string;
    email: string;
}

class CreateUserService{
    async execute({ name, email }: CreateUserProps){

        if(!name || !email){
            throw new Error("Preencha todos os campos")
        }

        const user = await prismaClient.users.create({
            data:{
                name,
                email,
                status: true
            }
        })

        return user
    }
}

export { CreateUserService }