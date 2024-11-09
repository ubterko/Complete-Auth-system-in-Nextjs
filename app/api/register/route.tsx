import prisma from "@/lib/prismadb"
import bcrypt from "bcrypt"
import { NextResponse } from "next/server";

export async function POST(request){
    const credentials = await request.json();
    const {name, email, password } = credentials;

    if (!name || !email || !password){
        throw new Error("Some fields are missing.")
    }

    const exists = await prisma.user.findUnique({
        where: {
            email
        }
    });
    if (exists){
        throw new Error("A user with this email already exists.")
    }
    const hashedPassword = await bcrypt.hash(password, 10)
    console.log("the problem is not from here")
    const user = await prisma.user.create({
        data : {
            name,
            email,
            hashedPassword
        }
    });
    return NextResponse.json(user);
}