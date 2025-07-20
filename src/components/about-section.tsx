'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Briefcase, Heart, Youtube } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const experienceData = [
  {
    year: '2024',
    title: 'PulpoAR',
    description:
      'Contributed to the development of Virtual Try-On Technology for makeup and skincare products, utilizing AR & AI for online/offline stores and the Metaverse. Developed web pages for the Data Studio app using TypeScript and React, enhancing user interface and experience for multi-brand AR product libraries. Worked on flexible pricing models and partner services, ensuring achievable and affordable solutions for clients.',
  },
  {
    year: '2023',
    title: 'INOV8',
    description:
      'Worked collaboratively within a Scrum framework to develop both frontend and backend code for a startup specializing in selling 3D printed products online. Collaborated with Sabanci University students and graduates on the project.',
  },
  {
    year: '2022',
    title: 'Encom Networks',
    description: 'Specialized in developing cutting-edge embedded software for M2M gateways and devices, adhering to ETSI M2M standards. Focused on innovative solutions for seamlessly connecting small M2M area networks into a decentralized cloud-based M2M network. Leveraged Linux OS and tools, optimized for resource-limited platforms like ARM and MIPS architectures.'
  }
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
        <div className="bg-card text-card-foreground rounded-lg shadow-lg p-6 -mt-2 transition-all duration-200 ease-in-out border-2 border-transparent hover:border-primary hover:scale-105 hover:shadow-xl">
            <p className="text-primary font-bold mb-1">{item.year}</p>
            <h3 className="font-headline text-2xl font-bold mb-2">{item.title}</h3>
            <p className="text-muted-foreground">{item.description}</p>
        </div>
      </div>
    </div>
  );
};

export function AboutSection() {
    const [visibleItems, setVisibleItems] = useState<Record<string, boolean>>({});
    const sectionRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const id = entry.target.getAttribute('data-id');
                        if (id) {
                            setVisibleItems(prev => ({ ...prev, [id]: true }));
                            observer.unobserve(entry.target);
                        }
                    }
                });
            },
            { threshold: 0.1 }
        );

        const elements = sectionRef.current?.querySelectorAll('[data-id]');
        elements?.forEach((el) => {
            if (el) observer.observe(el);
        });

        return () => {
            elements?.forEach((el) => {
                if (el) observer.unobserve(el);
            });
        };
    }, []);

  return (
    <section id="about" ref={sectionRef} className="w-full py-12 md:py-24 lg:py-32 bg-[#0a0a0a]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary-foreground">
            About Me
          </h2>
        </div>
        
        <div className="max-w-3xl mx-auto">
            <h3 data-id="experience-header" className={`flex items-center gap-4 font-headline text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl mb-8 transition-all duration-1000 ease-out ${visibleItems['experience-header'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <Briefcase className="w-8 h-8 text-primary" />
                Experience
            </h3>
            <div className="relative">
                 {experienceData.map((item, index) => (
                    <div key={index} data-id={`timeline-${index}`}>
                        <TimelineItem item={item} isVisible={!!visibleItems[`timeline-${index}`]} />
                    </div>
                ))}
            </div>
        </div>

        <div className="max-w-4xl mx-auto mt-16">
            <h3 data-id="hobbies-header" className={`flex items-center gap-4 font-headline text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl mb-12 transition-all duration-1000 ease-out ${visibleItems['hobbies-header'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <Heart className="w-8 h-8 text-primary" />
                Hobbies & Interests
            </h3>

            {/* Basketball Section */}
            <div data-id="hobby-basketball" className={`mb-16 transition-all duration-1000 ease-out ${visibleItems['hobby-basketball'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <div className="bg-card rounded-lg shadow-lg p-8">
                    <h4 className="font-headline text-3xl font-bold mb-4">Basketball</h4>
                    <p className="text-muted-foreground mb-6">I've been playing basketball since I was 6 years old, representing various teams in Izmir including Pınar Karşıyaka, 9 Eylül, and Mavişehir Sports Club. This early start helped me develop discipline, teamwork, and a competitive spirit that I carry into all aspects of my life.</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <Image src="https://placehold.co/600x400.png" alt="Basketball image 1" width={600} height={400} className="rounded-md object-cover" data-ai-hint="basketball court" />
                        <Image src="https://placehold.co/600x400.png" alt="Basketball image 2" width={600} height={400} className="rounded-md object-cover" data-ai-hint="basketball game" />
                    </div>
                </div>
            </div>

            {/* American Football Section */}
            <div data-id="hobby-football" className={`transition-all duration-1000 ease-out ${visibleItems['hobby-football'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <div className="bg-card rounded-lg shadow-lg p-8">
                    <h4 className="font-headline text-3xl font-bold mb-2">American Football</h4>
                    <p className="text-primary font-mono text-sm mb-4">#cantguardmac13</p>
                    <p className="text-muted-foreground mb-6">During my time at Sabancı University, I played American Football as a Wide Receiver and Cornerback, wearing the jersey number 13. I was part of the Sabancı Seahawks team, contributing to both offense and defense positions. For one year, I served as the defensive coach for the girls' flag football team, helping develop their skills and strategies.</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                         <Image src="https://placehold.co/600x400.png" alt="American Football image 1" width={600} height={400} className="rounded-md object-cover" data-ai-hint="american football game" />
                        <Image src="https://placehold.co/600x400.png" alt="American Football image 2" width={600} height={400} className="rounded-md object-cover" data-ai-hint="football player" />
                    </div>
                     <Button asChild variant="destructive">
                        <Link href="#" target="_blank" rel="noopener noreferrer">
                            <Youtube className="mr-2 h-5 w-5" />
                            Watch My Football Highlights
                        </Link>
                    </Button>
                </div>
            </div>

        </div>
      </div>
    </section>
  );
}
