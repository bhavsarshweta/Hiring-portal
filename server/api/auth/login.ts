import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { Prisma, PrismaClient } from '@prisma/client'
import db from '~/lib/prisma';

const prisma = new PrismaClient()

const secretKey = 'abcd';


const generateToken = (id: number) => {
    //please provide proper env file 'secreat token' instead 'ancdefg'
    return jwt.sign({ userId: id }, secretKey, {
        expiresIn: '10h',
    })
}



export default defineEventHandler(async (event) => {



    assertMethod(event, 'POST')
    const postData = await readBody(event)
     const {Password, Email} = postData
    try {

        // if (postData.create === "User") {
            let user = await db.users.findUnique({
                where: {
                    email: Email,
                },
            });

            if (!user) {
                return { message: 'Username does not exists.' };
            }

            const isPasswordValid = await bcrypt.compare(Password, user.password)

            if (!isPasswordValid) {
                return { message: 'password mismatch.' };
            }

            if (user && isPasswordValid) {
                const token = generateToken(user.id)
               
                setCookie(event, 'user', JSON.stringify(user))
                setCookie(event, 'token', token)
                console.log("Login Successfull!");
                
                return { user, token };
            }else{
                console.log(user.Status);
                return {message: "Your Account has been disabled!"}
            }

    } catch (error) {
        console.log(error)
        return  error ;
    }




})
