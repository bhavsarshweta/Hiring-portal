import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
    const postdata = await readBody(event)
    
    
    try {

        const Usercreation = await prisma.users.update({
            where: {
                id:postdata.id
            },
            data: {
                Status:"Inactive"
            },
        });
        return Usercreation;
    } catch (error) {
        return error
    }
})