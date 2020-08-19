import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()
async function main() {
    /*const newUser = await prisma.user.create({
        data: {
            name: 'Paulo Cesar',
            email: 'teste123@gmail.com',
            Post: {
                create: [
                    {title: 'MEDIUM1'},
                    {title: 'MEDIUM2'},
                ]
            }
        }
    });*/
    const allusers = await prisma.user.findMany({
        include:{
            Post: true,
        }
    });
    console.log({ teste: allusers })

}
main()
    .catch(e => {
        throw e
    })
    .finally(async () => {
        await prisma.$disconnect()
    })
