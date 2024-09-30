import prismaClient from "../prisma";

interface DeleteUserProps{
    id: string;
}

class DeleteUserService{
    async execute({ id }: DeleteUserProps){

        if(!id){
            throw new Error("Solicitação Inválida.")

        }


        const findUser = await prismaClient.users.findFirst({
            where:{
                id: id
            }
        })


        if(!findUser){
            throw new Error("Esse usuário não existe.")
        }

        await prismaClient.users.delete({
            where:{
                id: findUser.id
            }
        })

        return {message: "Deletado com sucesso!"}

    }
}

export { DeleteUserService }