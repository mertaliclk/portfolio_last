'use client';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, FileText } from 'lucide-react';
import { TypeAnimation } from 'react-type-animation';
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useState } from 'react';
import { loadSlim } from "@tsparticles/slim";
import Image from 'next/image';
import profile from '../images/profile.jpg';

export function HeroSection() {
  const [ init, setInit ] = useState(false);

  useEffect(() => {
      initParticlesEngine(async (engine) => {
          await loadSlim(engine);
      }).then(() => {
          setInit(true);
      });
  }, []);


  return (
    <section id="home" className="relative w-full py-20 md:py-32 overflow-hidden">
        {init && <Particles
            id="tsparticles"
            options={{
                background: {
                    color: {
                        value: 'transparent',
                    },
                },
                fpsLimit: 60,
                interactivity: {
                    events: {
                        onHover: {
                            enable: true,
                            mode: 'repulse',
                        },
                    },
                    modes: {
                        repulse: {
                            distance: 100,
                            duration: 0.4,
                        },
                    },
                },
                particles: {
                    color: {
                        value: '#ffffff',
                    },
                    links: {
                        color: '#ffffff',
                        distance: 150,
                        enable: true,
                        opacity: 0.1,
                        width: 1,
                    },
                    collisions: {
                      enable: true,
                    },
                    move: {
                        direction: 'none',
                        enable: true,
                        outModes: {
                            default: 'bounce',
                        },
                        random: false,
                        speed: 1,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                        },
                        value: 80,
                    },
                    opacity: {
                        value: 0.2,
                    },
                    shape: {
                        type: 'circle',
                    },
                    size: {
                        value: { min: 1, max: 5 },
                    },
                },
                detectRetina: true,
            }}
            className="absolute inset-0 z-0"
        />}
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 items-center gap-12">
          <div className="flex flex-col items-center text-center space-y-6 relative">
            {/* Desktop/Tablet: Jumping sentence above profile image */}
            <div className="hidden md:flex w-full justify-center">
              <span
                className="text-base lg:text-xl text-primary-foreground opacity-90 select-none interactive-message mysterious-message px-4 py-2"
                style={{ fontFamily: '"UnifrakturMaguntia", "Creepster", cursive, var(--font-headline), sans-serif', fontWeight: 600, maxWidth: '90vw', wordBreak: 'break-word', background: 'none' }}
              >
                {[..."💯 Level up your experience. Explore with your mouse. Watch the whole site respond! 🔥"].map((char, i) => char === " " ? " " : <span key={i} className="jump-letter">{char}</span>)}
              </span>
            </div>
            {/* Mobile: keep as is, no overlay */}
            <span className="block md:hidden relative mx-auto mb-4 text-base text-primary-foreground opacity-80 select-none interactive-message mysterious-message" style={{ zIndex: 20, fontFamily: '"UnifrakturMaguntia", "Creepster", cursive, var(--font-headline), sans-serif', fontWeight: 600, maxWidth: '95vw', wordBreak: 'break-word' }}>
              <ul className="list-none p-0 m-0 space-y-1">
                <li><span role="img" aria-label="hundred">💯</span> {"Level up your experience".split("").map((char, i) => char === " " ? " " : <span key={i} className="jump-letter">{char}</span>)}</li>
                <li>{"Explore with your mouse".split("").map((char, i) => char === " " ? " " : <span key={i} className="jump-letter">{char}</span>)}</li>
                <li>{"Watch the whole site respond!".split("").map((char, i) => char === " " ? " " : <span key={i} className="jump-letter">{char}</span>)} <span role="img" aria-label="fire">🔥</span></li>
              </ul>
            </span>
            <Image src={profile} alt="Profile" width={300} height={300} className="rounded-full mb-4 border-4 border-primary shadow-lg" />
            <h1 className="font-headline text-4xl font-bold tracking-tighter text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
              Hi, I'm Mert Ali Çelik
            </h1>
            <TypeAnimation
              sequence={[
                'AI Developer',
                2000,
                'Data Processing Analyst',
                2000,
                'Full Stack Developer',
                2000,
                'Mobile App Developer',
                2000,
              ]}
              wrapper="p"
              speed={50}
              className="text-2xl font-semibold text-primary"
              repeat={Infinity}
            />
            <p className="max-w-[600px] text-lg text-muted-foreground md:text-xl">
              I develop intelligent AI systems, leveraging Large Language Models to build innovative conversational applications. I also build secure, full-stack websites and have a solid foundation in cybersecurity principles.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button asChild size="lg" className="animate-pulse-slow">
                <Link href="#projects">
                  View My Projects
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="#about">
                  More About Me
                  <FileText className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
