'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { getResumeDownloadURL } from '@/lib/firebase';
import { Download, Mail, Copy } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export function ContactSection() {
  const [resumeUrl, setResumeUrl] = React.useState('#');
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const email = 'mertali@alumni.sabanciuniv.edu';
  const { toast } = useToast();

  React.useEffect(() => {
    getResumeDownloadURL().then(setResumeUrl);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.1 }
    );

    if (sectionRef.current) {
        observer.observe(sectionRef.current);
    }

    return () => {
        if (sectionRef.current) {
            observer.unobserve(sectionRef.current);
        }
    };
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    toast({
      title: 'Email Copied!',
      description: 'The email address has been copied to your clipboard.',
    });
  };

  return (
    <section id="contact" ref={sectionRef} className="w-full py-12 md:py-24 lg:py-32 bg-[#1a1a1a]">
      <div className={`container mx-auto grid items-center justify-center gap-8 px-4 text-center md:px-6 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="space-y-3">
          <h2 className="font-headline text-3xl font-bold tracking-tighter md:text-4xl/tight text-primary-foreground">Get in Touch</h2>
          <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Have a project in mind, or just want to say hello? I'm always open to discussing new opportunities and collaborations.
          </p>
        </div>
        <div className="mx-auto w-full max-w-lg space-y-6">
            <div className="relative group">
                <a href={`mailto:${email}`} className="flex items-center justify-center gap-2 font-mono text-lg text-primary transition-all duration-300 group-hover:tracking-wider">
                    {email}
                </a>
                <Button
                    variant="ghost"
                    size="icon"
                    onClick={handleCopy}
                    className="absolute -right-10 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity"
                    aria-label="Copy email address"
                >
                    <Copy className="h-5 w-5" />
                </Button>
            </div>

            <Button asChild>
                <a href={`mailto:${email}`}>
                    <Mail className="mr-2 h-4 w-4" /> Send an Email
                </a>
            </Button>
        </div>
        <div className="flex flex-col items-center justify-center space-y-4 mt-8">
            <Button asChild variant="link" disabled={resumeUrl === '#'}>
                <a href={resumeUrl} target="_blank" rel="noopener noreferrer">
                    <Download className="mr-2 h-4 w-4" /> Download Resume
                </a>
            </Button>
        </div>
      </div>
    </section>
  );
}
