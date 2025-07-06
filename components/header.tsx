'use client';

import { motion } from 'framer-motion';
import { Bot } from 'lucide-react';
import { UserMenu } from './user-menu';
console.log('Header component loaded', motion);
export function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className='border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50'
    >
      <div className='container mx-auto px-4 py-4'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center space-x-3'>
            <div className='w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center'>
              <Bot className='h-5 w-5 text-white' />
            </div>
            <div>
              <h1 className='text-xl font-bold'>ArkLab</h1>
              <p className='text-xs text-muted-foreground'>AI Agent Catalog</p>
            </div>
          </div>
          <UserMenu />
          {/* {hasMounted && isAuthenticated && (
            <div className='flex items-center space-x-4'>
              <div className='hidden sm:block text-sm text-muted-foreground'>
                Welcome back, {user?.name?.split(' ')[0] || 'User'}!
              </div>
            </div>
          )} */}
        </div>
      </div>
    </motion.header>
  );
}
