'use client';
import React, { useEffect, useRef, useState } from 'react';
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

const skillsData = [
    { name: 'React', level: 90, color: 'bg-sky-500' },
    { name: 'JavaScript', level: 85, color: 'bg-yellow-500' },
    { name: 'HTML/CSS', level: 90, color: 'bg-red-500' },
    { name: 'Node.js', level: 80, color: 'bg-green-500' },
    { name: 'Python', level: 75, color: 'bg-blue-500' },
    { name: 'SQL', level: 85, color: 'bg-indigo-500' },
    { name: 'TypeScript', level: 88, color: 'bg-cyan-500' },
    { name: 'Firebase', level: 82, color: 'bg-amber-500' },
];

export function SkillsSection() {
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
        <section id="skills" ref={sectionRef} className="w-full py-12 md:py-24 lg:py-32 bg-[#1a1a1a]">
            <div className="container mx-auto px-4 md:px-6">
                <div className={`text-center mb-12 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary-foreground">
                        Skills & Expertise
                    </h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
                    {skillsData.map((skill, index) => (
                        <Card key={index} className={`bg-card p-6 shadow-md rounded-lg transition-all duration-500 ease-out ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`} style={{ transitionDelay: `${index * 150}ms`}}>
                            <CardContent className="p-0">
                                <div className="flex justify-between items-center mb-2">
                                    <h3 className="text-lg font-semibold">{skill.name}</h3>
                                    <span className="text-sm font-medium text-muted-foreground">{skill.level}%</span>
                                </div>
                                <Progress value={isVisible ? skill.level : 0} indicatorClassName={`${skill.color} transition-all duration-1000 ease-in-out`} />
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
