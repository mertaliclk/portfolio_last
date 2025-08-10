'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Briefcase, Heart, Youtube, Circle, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import basketball1 from '../images/basketball1.jpg';
import basketball2 from '../images/basketball2.jpg';
import football1 from '../images/football1.jpg';
import football2 from '../images/football2.jpg';

const experienceData = [
  {
    year: '2025 - Present',
    title: 'ATEZ',
    description:
      'Automating Cross-Border Trade, Intelligently Blockchain-Ready AI-Powered, End to end Customs & Transit Solutions. Revolutionizing cross-border trade with intelligent solutions for customs compliance, cross-border movement of goods, and autonomous data engineering, powered by Artificial Intelligence, Machine Learning, and Business Intelligence.',
  },
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


const TimelineItem = ({ item, isVisible, open, onClick }: { item: typeof experienceData[0], isVisible: boolean, open: boolean, onClick: () => void }) => {
  return (
    <div className={`flex items-start gap-6 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
      <div className={`flex flex-col items-center mr-4 relative ${open ? 'justify-start' : 'justify-center'} transition-all duration-300`} style={{ minWidth: '32px', height: '100%' }}>
        {/* Top vertical line, filled green if open, height changes */}
        <div className={`w-0.5 ${open ? 'h-8' : 'h-1/2'} ${open ? 'bg-primary' : 'bg-primary/30'} transition-all duration-300`}></div>
        {/* Icon, position changes, line through center */}
        <div className="relative flex items-center justify-center transition-all duration-300" style={{ height: 24, width: 24 }}>
          <span className="absolute left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2 bg-transparent" style={{ zIndex: 1 }}></span>
          {open ? (
            <CheckCircle2 className="w-6 h-6 text-primary bg-background rounded-full ring-4 ring-primary/20 shrink-0" style={{ zIndex: 2 }} />
          ) : (
            <Circle className="w-6 h-6 text-primary bg-background rounded-full ring-4 ring-primary/20 shrink-0" style={{ zIndex: 2 }} />
          )}
        </div>
        {/* Bottom vertical line, height changes */}
        <div className={`w-0.5 ${open ? 'flex-grow' : 'h-1/2'} bg-primary/30 transition-all duration-300`}></div>
      </div>
      <div className="pb-12">
        <button type="button" onClick={onClick} className={`w-full text-left bg-card text-card-foreground rounded-lg shadow-lg p-6 -mt-2 transition-all duration-300 ease-in-out border-2 border-transparent hover:border-primary hover:scale-[1.10] hover:-translate-y-2 hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-primary/50`}>
            <p className="text-primary font-bold mb-1">{item.year}</p>
            <h3 className="font-headline text-2xl font-bold mb-2">{item.title}</h3>
            {open && <p className="text-muted-foreground">{item.description}</p>}
        </button>
      </div>
    </div>
  );
};

export function AboutSection() {
    const [visibleItems, setVisibleItems] = useState<Record<string, boolean>>({});
    const [openIndex, setOpenIndex] = useState<number | null>(null);
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
                        <TimelineItem 
                          item={item} 
                          isVisible={!!visibleItems[`timeline-${index}`]} 
                          open={openIndex === index}
                          onClick={() => setOpenIndex(openIndex === index ? null : index)}
                        />
                    </div>
                ))}
            </div>
        </div>

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
                    <Image src={basketball1} alt="Basketball image 1" width={600} height={400} className="rounded-md object-cover" />
                    <Image src={basketball2} alt="Basketball image 2" width={600} height={400} className="rounded-md object-cover" />
                </div>
            </div>
        </div>

        {/* American Football Section */}
        <div data-id="hobby-football" className={`transition-all duration-1000 ease-out ${visibleItems['hobby-football'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="bg-card rounded-lg shadow-lg p-8">
                <h4 className="font-headline text-3xl font-bold mb-2">American Football</h4>
                <p className="text-destructive font-mono text-lg md:text-xl font-bold mb-4 transition-all duration-300 hover:translate-x-2 hover:text-primary cursor-pointer select-none">#cantguardmac13</p>
                <p className="text-muted-foreground mb-6">During my time at Sabancı University, I played American Football as a Wide Receiver and Cornerback, wearing the jersey number 13. I was part of the Sabancı Seahawks team, contributing to both offense and defense positions. For one year, I served as the defensive coach for the girls' flag football team, helping develop their skills and strategies.</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                     <Image src={football1} alt="American Football image 1" width={600} height={400} className="rounded-md object-cover" />
                    <Image src={football2} alt="American Football image 2" width={600} height={400} className="rounded-md object-cover" />
                </div>
                <div className="flex flex-col gap-8 mb-6">
<video src="/images/football1.mp4" muted controls autoPlay loop playsInline className="rounded-md w-full aspect-video max-h-[600px] object-cover">
  Your browser does not support the video tag. If you can't see the video, check your browser console for errors.
</video>
<video src="/images/football2.mp4" muted controls autoPlay loop playsInline className="rounded-md w-full aspect-video max-h-[600px] object-cover">
  Your browser does not support the video tag. If you can't see the video, check your browser console for errors.
</video>
</div>
                 <Button asChild variant="destructive">
                    <Link href="https://www.youtube.com/watch?v=VQxN4uxEV3k" target="_blank" rel="noopener noreferrer">
                        <Youtube className="mr-2 h-5 w-5" />
                        Watch My Football Highlights
                    </Link>
                </Button>
            </div>
        </div>

      </div>
    </section>
  );
}
