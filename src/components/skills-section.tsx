'use client';
import React, { useEffect, useRef, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from '@/components/ui/badge';
import { Code, Database, Terminal, Cpu } from 'lucide-react';

const skillsData = {
    languages: ["Python", "C", "C++", "JavaScript", "TypeScript", "Swift", "SQL", "MATLAB", "Bash (Shell Scripting)", "Assembly", "Scheme", "Prolog", "Verilog"],
    frameworks: ["Flutter", "React", "Node.js"],
    tools: ["Kali Linux", "Postman", "Git", "Firebase"],
};

const skillCategories = [
    {
        title: "Languages",
        icon: <Code className="w-6 h-6 mr-3 text-primary" />,
        skills: skillsData.languages,
    },
    {
        title: "Frameworks & Libraries",
        icon: <Code className="w-6 h-6 mr-3 text-primary" />,
        skills: skillsData.frameworks,
    },
    {
        title: "Tools & Platforms",
        icon: <Terminal className="w-6 h-6 mr-3 text-primary" />,
        skills: skillsData.tools,
    },
];

export function SkillsSection() {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entries[0].target);
                }
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
        <section id="skills" ref={sectionRef} className="w-full py-12 md:py-24 lg:py-32 bg-[#1a1a1a]">
            <div className="container mx-auto px-4 md:px-6">
                <div className={`text-center mb-16 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary-foreground">
                        Skills & Expertise
                    </h2>
                    <p className="max-w-[900px] mx-auto text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mt-4">
                        A snapshot of the programming languages, tools, and technologies I work with.
                    </p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {skillCategories.map((category, index) => (
                         <div key={index} className={`transition-all duration-500 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: `${index * 150}ms`}}>
                             <Card className="bg-card border-2 border-transparent h-full">
                                 <CardHeader>
                                     <CardTitle className="flex items-center">
                                         {category.icon}
                                         {category.title}
                                     </CardTitle>
                                 </CardHeader>
                                 <CardContent>
                                     <div className="flex flex-wrap gap-2">
                                         {category.skills.map((skill) => (
                                             <Badge key={skill} variant="secondary" className="text-sm py-1 px-3">{skill}</Badge>
                                         ))}
                                     </div>
                                 </CardContent>
                             </Card>
                         </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
