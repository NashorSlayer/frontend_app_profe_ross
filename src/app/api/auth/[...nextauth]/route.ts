import { AuthBackendPaths, HTTPMETHODS } from "@/utils/constants";
import { access } from "fs";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";


export const authOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "email", placeholder: "email@gmail.com" },
                password: { label: "Password", type: "password", placeholder: "******" }
            },
            async authorize(credentials, req): Promise<any> {
                const res = await fetch((`${process.env.NEXT_PUBLIC_BACKEND_URL}` + AuthBackendPaths.LOGIN), {
                    method: HTTPMETHODS.POST,
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        email: credentials?.email,
                        password: credentials?.password
                    })
                });
                if (res.status != 200) throw new Error(res.statusText);

                const response = await res.json();
                console.log(response);

                //USAR JWT DEL BACKEND
                return {
                    user: response.user,
                    accessToken: response.accessToken,
                }
            }
        })
    ],

    pages: {
        signIn: '/auth/signIn',
    },

};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };