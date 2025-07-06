'use client';
import { Bot, Shield, Zap, Users } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Chrome } from 'lucide-react';
import { signIn } from 'next-auth/react';

export default function SignInClientPage() {
  return (
    <div className='min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center px-4'>
      <div className='w-full max-w-4xl grid grid-cols-1 lg:grid-cols-2 gap-8 items-center'>
        <div className='space-y-8'>
          <div className='text-center lg:text-left'>
            <div className='flex items-center justify-center lg:justify-start space-x-3 mb-6'>
              <div className='w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center'>
                <Bot className='h-7 w-7 text-white' />
              </div>
              <div>
                <h1 className='text-2xl font-bold'>ArkLab</h1>
                <p className='text-sm text-muted-foreground'>
                  AI Agent Catalog
                </p>
              </div>
            </div>
            <h2 className='text-3xl font-bold tracking-tight mb-4'>
              Discover Powerful AI Agents
            </h2>
            <p className='text-lg text-muted-foreground mb-8'>
              Access our comprehensive collection of AI agents designed to
              enhance your workflow and productivity.
            </p>
          </div>

          <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
            <div className='flex items-center space-x-3 p-4 rounded-lg bg-white/50 backdrop-blur'>
              <Shield className='h-8 w-8 text-blue-500' />
              <div>
                <h3 className='font-semibold'>Secure Access</h3>
                <p className='text-sm text-muted-foreground'>
                  Protected with Google OAuth
                </p>
              </div>
            </div>
            <div className='flex items-center space-x-3 p-4 rounded-lg bg-white/50 backdrop-blur'>
              <Zap className='h-8 w-8 text-purple-500' />
              <div>
                <h3 className='font-semibold'>Instant Access</h3>
                <p className='text-sm text-muted-foreground'>
                  Quick sign-in process
                </p>
              </div>
            </div>
            <div className='flex items-center space-x-3 p-4 rounded-lg bg-white/50 backdrop-blur'>
              <Users className='h-8 w-8 text-green-500' />
              <div>
                <h3 className='font-semibold'>Personalized</h3>
                <p className='text-sm text-muted-foreground'>
                  Tailored experience
                </p>
              </div>
            </div>
            <div className='flex items-center space-x-3 p-4 rounded-lg bg-white/50 backdrop-blur'>
              <Bot className='h-8 w-8 text-orange-500' />
              <div>
                <h3 className='font-semibold'>10+ Agents</h3>
                <p className='text-sm text-muted-foreground'>
                  Various categories
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className='flex justify-center'>
          <Card className='w-full max-w-md'>
            <CardHeader className='text-center'>
              <CardTitle className='text-2xl'>Welcome Back</CardTitle>
              <CardDescription>
                Sign in to your account to access the AI Agent Catalog
              </CardDescription>
            </CardHeader>
            <CardContent className='space-y-6'>
              <div className='flex justify-center'>
                <Button
                  onClick={() => signIn('google', { callbackUrl: '/' })}
                  variant='outline'
                  size='lg'
                  className='w-full max-w-sm'
                >
                  <Chrome className='h-5 w-5 mr-2' />
                  Continue with Google
                </Button>
              </div>
              <div className='text-center text-xs text-muted-foreground'>
                By signing in, you agree to our Terms of Service and Privacy
                Policy
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
