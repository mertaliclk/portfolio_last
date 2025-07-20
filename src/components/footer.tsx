import Link from 'next/link';

export function Footer() {
  return (
    <footer className="w-full border-t bg-background">
      <div className="container mx-auto py-6 px-4 md:px-6 flex flex-col sm:flex-row items-center justify-center gap-4 flex-wrap">
        <p className="text-sm text-muted-foreground text-center">
          Mert Ali's Portfolio Website. All Rights Reserved. © 2025
        </p>
      </div>
    </footer>
  );
}
