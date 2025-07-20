import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, FileText } from 'lucide-react';
import Image from 'next/image';

export function HeroSection() {
  return (
    <section id="home" className="relative w-full py-20 md:py-32 bg-gradient-to-br from-background via-blue-100 to-background dark:from-background dark:via-blue-900/20 dark:to-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
          <div className="flex flex-col items-start space-y-6">
            <h1 className="font-headline text-4xl font-bold tracking-tighter text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
              Crafting Digital Experiences
            </h1>
            <p className="max-w-[600px] text-lg text-muted-foreground md:text-xl">
              Welcome to my personal portfolio. I'm a passionate developer specializing in creating modern, responsive, and user-friendly web applications. Explore my work and get to know more about my skills and experience.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button asChild size="lg">
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
          <div className="flex justify-center">
            <Image
              src="https://placehold.co/600x600.png"
              alt="Hero Image"
              width={500}
              height={500}
              className="rounded-full shadow-2xl aspect-square object-cover"
              data-ai-hint="abstract geometric"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
