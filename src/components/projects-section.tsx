'use client';
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Project Alpha',
    description: 'An innovative e-commerce platform with a focus on user experience and performance. Built with Next.js and Tailwind CSS.',
    image: 'https://placehold.co/600x400.png',
    liveUrl: '#',
    githubUrl: '#',
    aiHint: 'ecommerce platform'
  },
  {
    title: 'Project Beta',
    description: 'A social media dashboard for content creators to track their engagement and growth across multiple platforms.',
    image: 'https://placehold.co/600x400.png',
    liveUrl: '#',
    githubUrl: '#',
    aiHint: 'dashboard analytics'
  },
  {
    title: 'Project Gamma',
    description: 'A real-time collaborative whiteboard application using Firebase for data synchronization and authentication.',
    image: 'https://placehold.co/600x400.png',
    liveUrl: '#',
    githubUrl: '#',
    aiHint: 'collaborative tool'
  },
    {
    title: 'Project Delta',
    description: 'A mobile-first recipe discovery app that allows users to find, save, and share their favorite recipes.',
    image: 'https://placehold.co/600x400.png',
    liveUrl: '#',
    githubUrl: '#',
    aiHint: 'recipe app'
  },
];

export function ProjectsSection() {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLDivElement | null>(null);

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

  return (
    <section id="projects" ref={sectionRef} className="w-full py-12 md:py-24 lg:py-32 bg-[#0a0a0a]">
      <div className="container mx-auto px-4 md:px-6">
        <div className={`flex flex-col items-center justify-center space-y-4 text-center transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary-foreground">
            My Projects
          </h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Here are some of the projects I've worked on. Each project demonstrates my skills in different areas of web development.
          </p>
        </div>
        <div className="grid gap-8 py-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 [perspective:1000px]">
          {projects.map((project, index) => (
            <Card key={index} className={`overflow-hidden transition-all duration-500 ease-in-out hover:shadow-xl ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} hover:[transform:rotateY(var(--rotate-y,0))_rotateX(var(--rotate-x,0))_translateZ(var(--translate-z,0))]`} style={{ transitionDelay: `${index * 100}ms`}}>
              <CardHeader className="p-0">
                <Image
                  src={project.image}
                  alt={`Image of ${project.title}`}
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                  data-ai-hint={project.aiHint}
                />
              </CardHeader>
              <CardContent className="p-6 space-y-2">
                <CardTitle className="font-headline text-2xl">{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardContent>
              <CardFooter className="p-6 pt-0 flex justify-end gap-2">
                <Button asChild variant="outline">
                  <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                  </Link>
                </Button>
                <Button asChild>
                  <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" /> GitHub
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
