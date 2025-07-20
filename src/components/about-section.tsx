'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Briefcase, Heart } from 'lucide-react';

const experienceData = [
  {
    year: '2024',
    title: 'PulpoAR',
    description:
      'Contributed to the development of Virtual Try-On Technology for makeup and skincare products. Developed web pages for online/offline stores and the Metaverse using AR and AI. Used TypeScript and React to build a Data Studio application, improving the user interface and experience for multiple AR product libraries. Provided flexible pricing models and common services for customers.',
  },
  {
    year: '2023',
    title: 'INOV8',
    description:
      'Developed both frontend and backend code within a Scrum framework for a startup focused on online sales of 3D printed products. In the project, I took an active role in the entire development process, from database design to user interface implementation.',
  },
  {
    year: '2022',
    title: 'Freelance Web Developer',
    description: 'Designed and developed custom websites for small businesses and individuals. Focused on creating responsive, high-performance sites using modern web technologies like React and Next.js, helping clients establish a strong online presence.'
  }
];

const hobbies = [
  'Exploring new hiking trails',
  'Experimenting with new recipes',
  'Playing the guitar',
  'Photography',
];

const TimelineItem = ({ item, isVisible }: { item: typeof experienceData[0], isVisible: boolean }) => {
  return (
    <div className={`flex items-start gap-6 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
      <div className="flex flex-col items-center">
        <div className="w-0.5 h-6 bg-primary/30"></div>
        <div className="w-4 h-4 rounded-full bg-primary ring-4 ring-primary/20 shrink-0"></div>
        <div className="w-0.5 flex-grow bg-primary/30"></div>
      </div>
      <div className="pb-12">
        <div className="bg-card text-card-foreground rounded-lg shadow-lg p-6 -mt-2">
            <p className="text-primary font-bold mb-1">{item.year}</p>
            <h3 className="font-headline text-2xl font-bold mb-2">{item.title}</h3>
            <p className="text-muted-foreground">{item.description}</p>
        </div>
      </div>
    </div>
  );
};

export function AboutSection() {
    const [visibleItems, setVisibleItems] = useState<Record<number, boolean>>({});
    const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const index = parseInt(entry.target.getAttribute('data-index') || '0', 10);
                        setVisibleItems(prev => ({ ...prev, [index]: true }));
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.1 }
        );

        itemRefs.current.forEach((ref) => {
            if (ref) observer.observe(ref);
        });

        return () => {
            itemRefs.current.forEach((ref) => {
                if (ref) observer.unobserve(ref);
            });
        };
    }, []);

  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-[#0a0a0a]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl" style={{color: '#FF5733'}}>
            About Me
          </h2>
        </div>
        
        <div className="max-w-3xl mx-auto">
            <h3 className="flex items-center gap-4 font-headline text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl mb-8">
                <Briefcase className="w-8 h-8 text-primary" />
                Experience
            </h3>
            <div className="relative">
                 {experienceData.map((item, index) => (
                    <div key={index} ref={el => itemRefs.current[index] = el} data-index={index}>
                        <TimelineItem item={item} isVisible={!!visibleItems[index]} />
                    </div>
                ))}
            </div>
        </div>

        <div className="max-w-3xl mx-auto mt-16">
            <h3 className="flex items-center gap-4 font-headline text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl mb-8">
                <Heart className="w-8 h-8 text-primary" />
                Hobbies & Interests
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                {hobbies.map((hobby, index) => (
                     <div key={index} className="bg-card text-card-foreground p-4 rounded-lg shadow-sm">
                        <p className="font-medium">{hobby}</p>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
}
