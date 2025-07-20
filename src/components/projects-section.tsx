'use client';
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Github } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const projects = [
  {
    title: 'Turkish Travel Website Honeypot',
    description: 'Developed a Flask-based honeypot web application for a Turkish travel advice/news website, incorporating dynamic content delivery through RSS feeds, advanced user authentication mechanisms, and an interactive comment system.',
    image: 'https://placehold.co/600x400.png',
    githubUrl: '#',
    technologies: ['Python3', 'Flask', 'Kali Linux'],
    category: 'Web Development/Cybersecurity',
    aiHint: 'website security'
  },
  {
    title: 'Tune-Mosaic Project',
    description: 'Spearheaded the development of a music analysis and recommendation system that consolidates liked-song data from diverse sources. Implemented robust backend functionality for data processing and analysis.',
    image: 'https://placehold.co/600x400.png',
    githubUrl: '#',
    technologies: ['React', 'Swift', 'Firebase', 'Postman'],
    category: 'Mobile Apps',
    aiHint: 'music analysis'
  },
  {
    title: 'Self-Hosted Video Conferencing Tool',
    description: 'Developed a secure, open-source self-hosted video conferencing platform to address privacy concerns in commercial offerings. Leveraged Jitsi Meet for core functionality while implementing enhancements for scalability and memory management.',
    image: 'https://placehold.co/600x400.png',
    githubUrl: '#',
    technologies: ['Linux', 'Jitsi Meet', 'Web Development Frameworks', 'Cloud Hosting'],
    category: 'Web Development/Cybersecurity',
    aiHint: 'video conference'
  },
  {
    title: 'Drowsiness Detection System Website',
    description: 'Developed a CNN-based Autoencoder system for anomaly detection in ECG data, exploring various loss functions and generating insightful visualizations to evaluate model performance.',
    image: 'https://placehold.co/600x400.png',
    githubUrl: '#',
    technologies: ['Python3', 'JavaScript', 'Flask', 'Wireshark'],
    category: 'AI & Machine Learning',
    aiHint: 'health monitoring'
  },
  {
    title: 'Basketball Teams and Leagues Analysis',
    description: 'Examined the success of basketball teams based on the performance of star players using machine learning models and efficiency score calculations.',
    image: 'https://placehold.co/600x400.png',
    githubUrl: '#',
    technologies: ['Python', 'sklearn', 'seaborn', 'Pandas', 'NumPy'],
    category: 'AI & Machine Learning',
    aiHint: 'sports analytics'
  },
  {
    title: 'Netflix Controller Project',
    description: 'Developed a Netflix controller application that interfaces with a database to manage favorite and popular movies, allowing users to add, remove, and browse movies for easier decision-making.',
    image: 'https://placehold.co/600x400.png',
    githubUrl: '#',
    technologies: ['C++', 'Node.js', 'MySQL'],
    category: 'Web Development/Cybersecurity',
    aiHint: 'movie database'
  },
  {
    title: 'Digital Combination Lock',
    description: 'Utilized an Algorithmic State Machine methodology to design and execute a digital combination lock system. Spearheaded the development of the controller and mapped out the circuitry pathway.',
    image: 'https://placehold.co/600x400.png',
    githubUrl: '#',
    technologies: ['Verilog', 'Prolog'],
    category: 'Hardware',
    aiHint: 'digital circuit'
  },
  {
    title: 'IMDB Rating Prediction',
    description: 'Developed machine learning models for predicting movie ratings from provided datasets.',
    image: 'https://placehold.co/600x400.png',
    githubUrl: '#',
    technologies: ['Python'],
    category: 'AI & Machine Learning',
    aiHint: 'machine learning'
  },
  {
    title: 'House Price Prediction',
    description: 'Utilized Python to construct a neural network-based regressor for predicting house prices using the provided dataset.',
    image: 'https://placehold.co/600x400.png',
    githubUrl: '#',
    technologies: ['Python'],
    category: 'AI & Machine Learning',
    aiHint: 'data prediction'
  }
];

const categories = ['All Projects', 'AI & Machine Learning', 'Web Development/Cybersecurity', 'Mobile Apps', 'Hardware'];

export function ProjectsSection() {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLDivElement | null>(null);
    const [activeCategory, setActiveCategory] = useState('All Projects');

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
            { threshold: 0.05 }
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

    const filteredProjects = activeCategory === 'All Projects'
        ? projects
        : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" ref={sectionRef} className="w-full py-12 md:py-24 lg:py-32 bg-[#0a0a0a]">
      <div className="container mx-auto px-4 md:px-6">
        <div className={`flex flex-col items-center justify-center space-y-4 text-center transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary-foreground">
            My Projects
          </h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Here are some of the projects I've worked on, showcasing my skills across different technologies and domains.
          </p>
        </div>
        
        <div className={`flex justify-center flex-wrap gap-2 my-12 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '200ms' }}>
            {categories.map(category => (
                <Button 
                    key={category} 
                    variant={activeCategory === category ? 'default' : 'outline'}
                    onClick={() => setActiveCategory(category)}
                    className="rounded-full"
                >
                    {category}
                </Button>
            ))}
        </div>

        <div className="grid gap-8 py-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 [perspective:1000px]">
          {filteredProjects.map((project, index) => (
            <Card key={`${activeCategory}-${index}`} className={`overflow-hidden transition-all duration-500 ease-in-out hover:shadow-xl ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} hover:[transform:rotateY(var(--rotate-y,0))_rotateX(var(--rotate-x,0))_translateZ(var(--translate-z,0))]`} style={{ transitionDelay: `${index * 100}ms`}}>
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
              <CardContent className="p-6 space-y-4">
                <CardTitle className="font-headline text-2xl">{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
                <div className="flex flex-wrap gap-2">
                    {project.technologies.map(tech => (
                        <Badge key={tech} variant="secondary">{tech}</Badge>
                    ))}
                </div>
              </CardContent>
              <CardFooter className="p-6 pt-0 flex justify-end gap-2">
                <Button asChild>
                  <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" /> View Project
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
