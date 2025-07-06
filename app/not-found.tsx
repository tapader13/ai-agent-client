import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Bot } from 'lucide-react';

export default function NotFound() {
  return (
    <div className='min-h-screen bg-background flex items-center justify-center px-4'>
      <div className='text-center'>
        <div className='mb-8'>
          <Bot className='h-24 w-24 mx-auto text-muted-foreground' />
        </div>
        <h1 className='text-4xl font-bold mb-4'>404 - Page Not Found</h1>
        <p className='text-xl text-muted-foreground mb-8 max-w-md mx-auto'>
          The page you&apos;re looking for doesn&apos;t exist. Let&apos;s get
          you back to exploring our AI agents.
        </p>
        <Button asChild>
          <Link href='/'>
            <ArrowLeft className='h-4 w-4 mr-2' />
            Back to Catalog
          </Link>
        </Button>
      </div>
    </div>
  );
}
