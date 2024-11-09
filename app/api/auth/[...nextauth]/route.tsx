import prisma from "@/lib/prismadb";
import NextAuth from "next-auth";
import {PrismaAdapter} from "@next-auth/prisma-adapter"
import GoogleProvider from "next-auth/providers/google"
import GithubProvider from "next-auth/providers/github"
import CredentialsProvider from "next-auth/providers/credentials"
import bcrypt from 'bcrypt'

export const authOptions = {
    adapter: PrismaAdapter(prisma),
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET
        }),
        CredentialsProvider({
            name: 'credentials',
            credentials: {
                name: {label: "Name", type: "text", placeholder: "Enter name"},
                email: {label: "Email", type: "text" },
                password: {label: "Password", type: "text"}
            },
            async authorize(credentials){
                // check if fields are complete 
                if (!credentials.password || !credentials.email) {
                    throw new Error("Either email or password is missing.")
                }
                // check if uer exist 
                const user = await prisma.user.findUnique({
                    where: {
                        email: credentials.email
                    }
                })
                if (!user || !user.hashedPassword){
                    throw new Error("User doesn't exist.")
                }
                // check if password is correct 
                const passwordMatch = await bcrypt.compare(credentials.password, user.hashedPassword)
                if (!passwordMatch){
                    throw new Error("Password incorrect!")
                }
                return user;
            },
        }),
    ],
    secret: process.env.SECRET,
    session: {
        strategy: "jwt",
    },
    debug: process.env.NODE_ENV === "development",
}

const handler = NextAuth(authOptions);

export {handler as GET, handler as POST}