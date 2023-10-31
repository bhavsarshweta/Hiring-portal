import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()



export default defineEventHandler(async (event) => {
    const postdata = await readBody(event)
 
   
    try {

        const Usercreation = await prisma.users.update({
            where: {
                id: postdata.id,
            },
            data: {
                email: postdata.email,
                fullName: postdata.fullName,
            },
        }); 
        
        return Usercreation;
    } catch (error) {
        return error
    }
})