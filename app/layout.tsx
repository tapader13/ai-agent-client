import type React from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ReduxProvider } from '@/components/redux-provider';
import { AuthProvider } from '@/components/auth/auth-provider';

import { auth } from '@/auth';
import { NextAuthProvider } from '@/components/auth/session-provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'ArkLab AI Agent Catalog - Discover Powerful AI Solutions',
  description:
    'Explore our comprehensive collection of AI agents designed to enhance your workflow and productivity. Find the perfect AI solution for customer service, marketing, development, and more.',
  keywords:
    'AI agents, artificial intelligence, automation, chatbots, AI tools, productivity, customer service, marketing AI',
  authors: [{ name: 'ArkLab' }],
  openGraph: {
    title: 'ArkLab AI Agent Catalog',
    description:
      'Discover and explore our comprehensive collection of AI agents designed to enhance your workflow and productivity.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ArkLab AI Agent Catalog',
    description: 'Discover powerful AI agents for your business needs',
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
  // console.log('Sessions:', session);
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={inter.className}>
        <NextAuthProvider session={session}>
          <ReduxProvider>
            <AuthProvider>{children}</AuthProvider>
          </ReduxProvider>
        </NextAuthProvider>
      </body>
    </html>
  );
}
