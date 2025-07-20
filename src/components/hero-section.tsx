import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, FileText } from 'lucide-react';
import Image from 'next/image';

export function HeroSection() {
  return (
    <section id="home" className="relative w-full py-20 md:py-32 bg-gradient-to-br from-background via-green-900/10 to-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 items-center gap-12">
          <div className="flex flex-col items-center text-center space-y-6">
            <h1 className="font-headline text-4xl font-bold tracking-tighter text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
              Hi, I'm Mert Ali
            </h1>
            <p className="text-2xl font-semibold text-primary">AI Developer & Data Processing Analyst</p>
            <p className="max-w-[600px] text-lg text-muted-foreground md:text-xl">
              I specialize in developing intelligent systems and analyzing complex data to drive innovation. Explore my work to see how I'm shaping the future with AI.
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
        </div>
      </div>
    </section>
  );
}
