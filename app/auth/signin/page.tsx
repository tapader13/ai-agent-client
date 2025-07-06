import SignInClientPage from '@/components/auth/login';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sign In - ArkLab AI Agent Catalog',
  description:
    'Sign in to access the ArkLab AI Agent Catalog and discover powerful AI solutions for your business.',
};
export default function SignInPage() {
  return <SignInClientPage />;
}
