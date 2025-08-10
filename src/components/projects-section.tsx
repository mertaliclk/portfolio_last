'use client';
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Github, Link as LinkIcon } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import dovet from '../images/dovet.png';
import jitsi from '../images/jitsi.png';
import DDS from '../images/DDS.png';
import nba from '../images/nba.png';
import honeypot from '../images/honeypot.png';
import imdb from '../images/imdb.png';
import house from '../images/house.png';
import netflix from '../images/netflix.png';
import verilog from '../images/verilog.png';
import gender from '../images/gender.png';
import adventure from '../images/adventure.png';
import tune from '../images/tune.png';

const projects = [
  {
    title: 'Turkish Travel Website Honeypot',
    description: 'Developed a Flask-based honeypot web application for a Turkish travel advice/news website, incorporating dynamic content delivery through RSS feeds, advanced user authentication mechanisms, and an interactive comment system.',
    image: honeypot,
    githubUrl: 'https://github.com/mertaliclk/Turkish_Travel_Website_Honeypot',
    technologies: ['Python3', 'Flask', 'Kali Linux'],
    category: 'Web Development/Cybersecurity',
    aiHint: 'website security'
  },
  {
    title: 'Gender Classification Model',
    description: 'A deep learning model using TensorFlow and Keras to classify gender from facial images. Features include CNN architecture, real-time prediction, and robust evaluation metrics.',
    image: gender,
    githubUrl: 'https://github.com/mertaliclk/Gender_Detection_Model',
    technologies: ['Python', 'TensorFlow', 'Keras', 'NumPy', 'Pandas', 'Pillow', 'Matplotlib', 'Seaborn', 'scikit-learn'],
    category: 'AI & Machine Learning',
    aiHint: 'gender classification'
  },
  {
    title: 'Adventure Game',
    description: 'A turn-based simulation game in C++ demonstrating file I/O, data structures, and an interactive menu. Players are loaded from a file, assigned tasks, and roll dice to determine scores. Features include dynamic player/task management, score tracking, and a console menu for statistics and gameplay.',
    image: adventure,
    githubUrl: 'https://github.com/mertaliclk/Adventure_Game',
    technologies: ['C++', 'STL', 'File I/O', 'Random', 'Data Structures'],
    category: 'Hardware',
    aiHint: 'turn-based game'
  },
  {
    title: 'Tune-Mosaic Project',
    description: 'Spearheaded the development of a music analysis and recommendation system that consolidates liked-song data from diverse sources. Implemented robust backend functionality for data processing and analysis.',
    image: tune,
    githubUrl: 'https://github.com/mertaliclk/tune-mosaic',
    technologies: ['React', 'Swift', 'Firebase', 'Postman'],
    category: 'Mobile Apps',
    aiHint: 'music analysis'
  },
  {
    title: 'Self-Hosted Video Conferencing Tool',
    description: 'Developed a secure, open-source self-hosted video conferencing platform to address privacy concerns in commercial offerings. Leveraged Jitsi Meet for core functionality while implementing enhancements for scalability and memory management.',
    image: jitsi,
    githubUrl: 'https://github.com/mertaliclk/Self-Hosted-JitsiMeet',
    technologies: ['Linux', 'Jitsi Meet', 'Web Development Frameworks', 'Cloud Hosting'],
    category: 'Web Development/Cybersecurity',
    aiHint: 'video conference'
  },
  {
    title: 'Drowsiness Detection System Website',
    description: 'Developed a CNN-based Autoencoder system for anomaly detection in ECG data, exploring various loss functions and generating insightful visualizations to evaluate model performance.',
    image: DDS,
    githubUrl: 'https://github.com/mertaliclk/Drowsiness_Detection_System_UI_Website',
    technologies: ['Python3', 'JavaScript', 'Flask', 'Wireshark'],
    category: 'AI & Machine Learning',
    aiHint: 'health monitoring'
  },
  {
    title: 'Basketball Teams and Leagues Analysis',
    description: 'Examined the success of basketball teams based on the performance of star players using machine learning models and efficiency score calculations.',
    image: nba,
    githubUrl: 'https://github.com/mertaliclk/NBA_Teams_Stats_Analysis_Project',
    technologies: ['Python', 'sklearn', 'seaborn', 'Pandas', 'NumPy'],
    category: 'AI & Machine Learning',
    aiHint: 'sports analytics'
  },
  {
    title: 'IMDB Rating Prediction',
    description: 'Developed machine learning models for predicting movie ratings from provided datasets.',
    image: imdb,
    githubUrl: '#',
    technologies: ['Python'],
    category: 'AI & Machine Learning',
    aiHint: 'machine learning'
  },
  {
    title: 'Digital Combination Lock',
    description: 'Engineered a robust digital combination lock system using Algorithmic State Machine (ASM) principles, focusing on both security and reliability. Designed and implemented the controller logic to manage user input sequences, ensuring only the correct code grants access. Developed the complete circuit pathway, integrating hardware and software components for seamless operation. This project deepened my understanding of digital logic design, state machines, and secure embedded systems.',
    image: verilog,
    githubUrl: '#',
    technologies: ['Verilog', 'Prolog'],
    category: 'Hardware',
    aiHint: 'digital circuit'
  },
  {
    title: 'Netflix Controller Project',
    description: 'Developed a Netflix controller application that interfaces with a database to manage favorite and popular movies, allowing users to add, remove, and browse movies for easier decision-making.',
    image: netflix,
    githubUrl: '#',
    technologies: ['C++', 'Node.js', 'MySQL'],
    category: 'Hardware',
    aiHint: 'movie database'
  },
  {
    title: 'House Price Prediction',
    description: 'Utilized Python to construct a neural network-based regressor for predicting house prices using the provided dataset.',
    image: house,
    githubUrl: '#',
    technologies: ['Python'],
    category: 'AI & Machine Learning',
    aiHint: 'data prediction'
  },
  {
    title: 'E-commerce Website',
    description: 'A modern e-commerce platform built with Next.js, React, TypeScript, and Tailwind CSS. Features include Firebase integration for product and user management, persistent shopping cart, and secure authentication.',
    image: dovet,
    githubUrl: '#',
    technologies: ['React', 'Next.js', 'Tailwind CSS', 'Vercel', 'Firebase'],
    category: 'Web Development/Cybersecurity',
    aiHint: 'e-commerce'
  }
];

const categories = ['All Projects', 'AI & Machine Learning', 'Web Development/Cybersecurity', 'Mobile Apps', 'Hardware'];

const ProjectCard = ({ project, index, isVisible }: { project: typeof projects[0], index: number, isVisible: boolean }) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const [isEntranceAnimationDone, setIsEntranceAnimationDone] = useState(false);
    const [style, setStyle] = useState({});

    useEffect(() => {
        if (isVisible) {
            const timer = setTimeout(() => {
                setIsEntranceAnimationDone(true);
            }, index * 100 + 500); // Wait for fade-in to complete
            return () => clearTimeout(timer);
        }
    }, [isVisible, index]);

    useEffect(() => {
        const card = cardRef.current;
        if (!card) return;

        const handleMouseMove = (e: MouseEvent) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            const rotateY = (x / (rect.width / 2)) * 10;
            const rotateX = -(y / (rect.height / 2)) * 10;
            setStyle({
                '--rotate-x': `${rotateX}deg`,
                '--rotate-y': `${rotateY}deg`,
                '--translate-z': '50px',
                'transform': 'perspective(1000px) rotateX(var(--rotate-x)) rotateY(var(--rotate-y)) translateZ(var(--translate-z))'
            });
        };

        const handleMouseLeave = () => {
            setStyle({
                '--rotate-x': '0deg',
                '--rotate-y': '0deg',
                '--translate-z': '0px',
                'transform': 'perspective(1000px) rotateX(var(--rotate-x)) rotateY(var(--rotate-y)) translateZ(var(--translate-z))'
            });
        };

        card.addEventListener('mousemove', handleMouseMove);
        card.addEventListener('mouseleave', handleMouseLeave);
        
        return () => {
            card.removeEventListener('mousemove', handleMouseMove);
            card.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);
    
    return (
        <Card
            ref={cardRef}
            style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(2rem)',
                transitionProperty: 'transform, opacity',
                transitionTimingFunction: 'ease-out',
                transitionDuration: isEntranceAnimationDone ? '200ms' : '500ms',
                transitionDelay: isEntranceAnimationDone ? '0ms' : `${index * 100}ms`,
                ...(isEntranceAnimationDone ? style : {})
            }}
            className="overflow-hidden hover:shadow-2xl"
        >
            <CardHeader className="p-0">
                <Image
                    src={project.image}
                    alt={`Image of ${project.title}`}
                    width={project.title === 'Tune-Mosaic Project' ? 400 : 600}
                    height={project.title === 'Tune-Mosaic Project' ? 300 : 400}
                    className={`w-full h-auto object-cover ${project.title === 'Tune-Mosaic Project' ? 'max-w-[400px] mx-auto' : ''}`}
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
                {project.githubUrl && !['E-commerce Website', 'Netflix Controller Project', 'Digital Combination Lock', 'IMDB Rating Prediction', 'House Price Prediction'].includes(project.title) && (
                    <Button asChild>
                        <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                            <Github className="mr-2 h-4 w-4" /> View Project
                        </Link>
                    </Button>
                )}
            </CardFooter>
        </Card>
    );
};

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
    <section id="projects" ref={sectionRef} className="w-full py-12 md:py-24 lg:py-32 bg-[#0a0a0a] relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className={`flex flex-col items-center justify-center space-y-4 text-center transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary-foreground">
            My Projects
          </h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Here are some of the projects I've worked on, showcasing my skills across different technologies and domains.
          </p>
        </div>
        
        <div className={`relative z-10 flex justify-center flex-wrap gap-2 my-12 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '200ms' }}>
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

        <div className="grid gap-8 py-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={`${activeCategory}-${index}`} project={project} index={index} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  );
}
