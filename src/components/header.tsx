'use client';
import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Feather, Github, Linkedin } from 'lucide-react';
import { ThemeToggle } from './theme-toggle';

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills'},
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

export function Header() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        {/* Left Side: Logo */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center space-x-2">
            <Feather className="h-6 w-6 text-primary" />
            <span className="font-bold font-headline hidden sm:inline-block">FolioForge</span>
          </Link>
        </div>

        {/* Center: Desktop Navigation */}
        <nav className="hidden flex-1 items-center justify-center space-x-6 text-sm font-medium md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-primary uppercase tracking-wider"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right Side: Socials & Mobile Menu */}
        <div className="flex items-center justify-end md:w-auto w-full">
            <div className="hidden md:flex items-center space-x-2 mr-2">
                 <Button asChild variant="ghost" size="icon">
                    <Link href="#" target="_blank" rel="noopener noreferrer"><Github className="h-5 w-5"/></Link>
                </Button>
                <Button asChild variant="ghost" size="icon">
                    <Link href="#" target="_blank" rel="noopener noreferrer"><Linkedin className="h-5 w-5"/></Link>
                </Button>
            </div>
          <ThemeToggle />
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden ml-2">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col p-4">
                <Link href="/" className="mb-8 flex items-center space-x-2" onClick={() => setIsOpen(false)}>
                  <Feather className="h-6 w-6 text-primary" />
                  <span className="font-bold font-headline">FolioForge</span>
                </Link>
                <nav className="flex flex-col space-y-4">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="text-lg transition-colors hover:text-primary"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
                 <div className="flex space-x-4 mt-8">
                    <Button asChild variant="outline" size="icon">
                        <Link href="#" target="_blank" rel="noopener noreferrer"><Github /></Link>
                    </Button>
                    <Button asChild variant="outline" size="icon">
                        <Link href="#" target="_blank" rel="noopener noreferrer"><Linkedin /></Link>
                    </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}