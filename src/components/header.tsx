'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Feather, Github, Linkedin } from 'lucide-react';

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

export function Header() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [activeLink, setActiveLink] = useState('');

  useEffect(() => {
    const sections = navLinks.map(link => document.querySelector(link.href));

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        if (section && scrollPosition >= (section as HTMLElement).offsetTop && scrollPosition < (section as HTMLElement).offsetTop + (section as HTMLElement).offsetHeight) {
          setActiveLink(section.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); 

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="md:flex-1 flex items-center">
          <Link href="/" className="flex items-center space-x-2">
            <Feather className="h-6 w-6 text-primary" />
            <span className="font-bold font-headline hidden sm:inline-block">FolioForge</span>
          </Link>
        </div>

        <nav className="hidden flex-1 items-center justify-center space-x-6 text-sm font-medium md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setActiveLink(link.href.substring(1))}
              className={`link-underline transition-colors hover:text-primary uppercase tracking-wider ${activeLink === link.href.substring(1) ? 'active' : ''}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex flex-1 items-center justify-end">
          <div className="hidden md:flex items-center space-x-2 mr-2">
            <Button asChild variant="ghost" size="icon">
              <Link href="#" target="_blank" rel="noopener noreferrer"><Github className="h-5 w-5" /></Link>
            </Button>
            <Button asChild variant="ghost" size="icon">
              <Link href="#" target="_blank" rel="noopener noreferrer"><Linkedin className="h-5 w-5" /></Link>
            </Button>
          </div>
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
                      onClick={() => {
                        setActiveLink(link.href.substring(1));
                        setIsOpen(false);
                      }}
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
