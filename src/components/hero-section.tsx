'use client';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, FileText } from 'lucide-react';
import { TypeAnimation } from 'react-type-animation';
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useState } from 'react';
import { loadSlim } from "@tsparticles/slim";

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
          <div className="flex flex-col items-center text-center space-y-6">
            <h1 className="font-headline text-4xl font-bold tracking-tighter text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
              Hi, I'm Mert Ali
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
