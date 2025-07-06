'use client';

import type React from 'react';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAppSelector } from '@/lib/hooks';
import { Skeleton } from '@/components/ui/skeleton';

interface AuthGuardProps {
  children: React.ReactNode;
}

export function AuthGuard({ children }: AuthGuardProps) {
  const { isAuthenticated, isLoading, user } = useAppSelector(
    (state) => state.auth
  );
  const router = useRouter();
  console.log(user, 'user in auth guard');
  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.push('/auth/signin');
    }
  }, [isAuthenticated, isLoading, router]);

  if (isLoading) {
    return (
      <div className='container mx-auto px-4 py-8'>
        <div className='text-center mb-8'>
          <Skeleton className='h-12 w-96 mx-auto mb-4' />
          <Skeleton className='h-6 w-[600px] mx-auto' />
        </div>
        <div className='mb-8'>
          <Skeleton className='h-10 w-full max-w-md' />
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-4 gap-8'>
          <div className='lg:col-span-1'>
            <Skeleton className='h-96 w-full' />
          </div>
          <div className='lg:col-span-3'>
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6'>
              {Array.from({ length: 6 }).map((_, i) => (
                <Skeleton key={i} className='h-48 w-full rounded-lg' />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return null;
  }

  return <>{children}</>;
}
