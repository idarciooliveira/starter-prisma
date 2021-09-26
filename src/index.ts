import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main(){
    await prisma.user.create({
        data: {
            username: 'idarciooliveira',
            password: '12345'
        }
    })
}

main()