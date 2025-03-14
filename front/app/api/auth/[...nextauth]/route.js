import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        try {
          const res = await fetch("http://localhost:8000/api/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              email: credentials.email,
              password: credentials.password,
            }),
            credentials: "include",
          });


          if (!res.ok) {
            throw new Error("Invalid credentials");
          }

          const data = await res.json();

          if (!data) {
            throw new Error("User not found");
          }

          return data;
        } catch (error) {
          console.error(error)
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.accessToken = user.token;
        token.id = user.user.id;
        token.name = user.user.name;
        token.email = user.user.email;
        token.role = user.user.role;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.accessToken = token.accessToken;
        session.id = token.id;
        session.name = token.name;
        session.email = token.email;
        session.role = token.role;
      }
      return session;
    },
  },
})

export { handler as GET, handler as POST }
