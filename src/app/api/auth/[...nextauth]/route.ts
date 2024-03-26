import NextAuth from "next-auth/next";
import { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import userLogIn from "@/libs/userLogIn";

export const authOptions: AuthOptions = {
    providers: [
        CredentialsProvider({
            credentials: {
                email: { label: "Email", type: "email", placeholder: "email"},
                password: { label: "Password", type: "password" }
            },
            authorize: async (credentials) => {
                if (!credentials){
                    return Promise.resolve(null)
                }
                const user = await userLogIn(credentials.email, credentials.password)
                if (user) {
                    return Promise.resolve(user)
                } else {
                    return Promise.resolve(null)
                }
            },
        })  
    ],
    session: {
        strategy: "jwt",
    },
    callbacks: {
        async jwt({token, user}) {
            if (user) {
                token = { ...token, ...user }
            }
            return token
        },
        async session({session, token, user}) {
            session.user = token as any
            return session
        }
    }
}

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST}