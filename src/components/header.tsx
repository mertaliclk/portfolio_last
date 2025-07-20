'use client';
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Feather, Github, Linkedin, Instagram, Youtube } from 'lucide-react';

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

export function Header() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [activeLink, setActiveLink] = useState('');
  const observer = useRef<IntersectionObserver | null>(null);
  const isClickNavigating = useRef(false);
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (observer.current) {
        observer.current.disconnect();
    }
    observer.current = new IntersectionObserver((entries) => {
      if (isClickNavigating.current) return; // Ignore observer if we are click-scrolling
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setActiveLink(entry.target.id);
            }
        });
    }, { rootMargin: '-50% 0px -50% 0px' });

    const sections = navLinks.map(link => document.querySelector(link.href));
    sections.forEach(section => {
        if (section) {
            observer.current?.observe(section);
        }
    });

    return () => observer.current?.disconnect();
  }, []);
  
  const handleLinkClick = (href: string) => {
    const sectionId = href.substring(1);

    // Immediately update the active link
    setActiveLink(sectionId);
    setIsOpen(false);
    
    // Disable observer and set a timeout to re-enable it after scroll
    isClickNavigating.current = true;
    if (scrollTimeout.current) {
      clearTimeout(scrollTimeout.current);
    }
    scrollTimeout.current = setTimeout(() => {
      isClickNavigating.current = false;
    }, 1000); // A bit longer than scroll duration
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="flex-1 flex items-center">
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
              onClick={() => handleLinkClick(link.href)}
              className={`link-underline transition-colors hover:text-primary uppercase tracking-wider ${activeLink === link.href.substring(1) ? 'active' : ''}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex flex-1 items-center justify-end">
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
                      onClick={() => handleLinkClick(link.href)}
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
