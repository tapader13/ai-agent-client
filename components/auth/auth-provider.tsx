'use client';

import type React from 'react';

import { useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useAppDispatch } from '@/lib/hooks';
import { setUser, setLoading } from '@/lib/authSlice';

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const { data: session, status } = useSession();
  const dispatch = useAppDispatch();
  console.log('session', session, 'status', status);
  useEffect(() => {
    if (status === 'loading') {
      console.log('Loading session...');
      dispatch(setLoading(true));
    } else {
      console.log('Session loaded:', session);
      dispatch(setLoading(false));
      if (session?.user) {
        console.log('session user', session.user);
        dispatch(
          setUser({
            id: session.user.email || '',
            name: session.user.name || null,
            email: session.user.email || null,
            image: session.user.image || null,
          })
        );
      } else {
        console.log('No user session found');
        dispatch(setUser(null));
      }
    }
  }, [session, status, dispatch]);

  return <>{children}</>;
}
