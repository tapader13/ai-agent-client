// import { SessionProvider } from 'next-auth/react';
// import type React from 'react';

// export function NextAuthProvider({ children }: { children: React.ReactNode }) {
//   return <SessionProvider>{children}</SessionProvider>;
// }
// 'use client';
import { SessionProvider } from 'next-auth/react';
import type React from 'react';
import type { Session } from 'next-auth';
export function NextAuthProvider({
  children,
  session,
}: {
  children: React.ReactNode;
  session?: Session | null;
}) {
  return <SessionProvider session={session}>{children}</SessionProvider>;
}
