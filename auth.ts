import NextAuth from 'next-auth';
import Google from 'next-auth/providers/google';
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID!,
      clientSecret: process.env.AUTH_GOOGLE_SECRET!,
    }),
  ],
  secret: process.env.AUTH_SECRET,
  // callbacks: {
  //   async jwt({ token, account, profile }) {
  //     if (account && profile) {
  //       token.picture = profile.picture;
  //       token.name = profile.name;
  //       token.email = profile.email;
  //     }
  //     return token;
  //   },
  //   async session({ session, token }) {
  //     session.user.image = token.picture as string;
  //     session.user.name = token.name as string;
  //     session.user.email = token.email as string;
  //     return session;
  //   },
  // },
});
