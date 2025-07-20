import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Instagram, Youtube } from 'lucide-react';

export function Footer() {
  return (
    <footer className="w-full border-t bg-background">
      <div className="container mx-auto py-6 px-4 md:px-6 flex flex-col sm:flex-row items-center justify-between gap-4 flex-wrap">
        <p className="text-sm text-muted-foreground text-center sm:text-left">
          Mert Ali's Portfolio Website. All Rights Reserved. © 2025
        </p>
        <div className="flex items-center space-x-2">
            <Button asChild variant="ghost" size="icon">
              <Link href="https://github.com/mertaliclk" target="_blank" rel="noopener noreferrer"><Github className="h-5 w-5" /></Link>
            </Button>
            <Button asChild variant="ghost" size="icon">
              <Link href="https://www.linkedin.com/in/mertaliclk" target="_blank" rel="noopener noreferrer"><Linkedin className="h-5 w-5" /></Link>
            </Button>
             <Button asChild variant="ghost" size="icon">
              <Link href="https://www.instagram.com/mertaliclk/" target="_blank" rel="noopener noreferrer"><Instagram className="h-5 w-5" /></Link>
            </Button>
            <Button asChild variant="ghost" size="icon">
              <Link href="https://www.youtube.com/@cantguardmac13" target="_blank" rel="noopener noreferrer"><Youtube className="h-5 w-5" /></Link>
            </Button>
        </div>
      </div>
    </footer>
  );
}
