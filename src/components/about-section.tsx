import Image from 'next/image';

export function AboutSection() {
  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="flex justify-center">
            <Image
              src="https://placehold.co/550x550.png"
              alt="Professional Photo"
              width={550}
              height={550}
              className="rounded-xl shadow-lg aspect-square object-cover"
              data-ai-hint="professional portrait"
            />
          </div>
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                About Me
              </h2>
              <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                I am a dedicated and results-driven developer with a passion for building beautiful and functional web applications. My journey into technology started with a fascination for how things work, which led me to master various technologies and frameworks. I thrive in collaborative environments and am always eager to learn and tackle new challenges. When I'm not coding, I enjoy exploring new hiking trails and experimenting with new recipes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
