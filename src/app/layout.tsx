import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster"

export const metadata: Metadata = {
  title: 'Mert Ali Çelik | Portfolio',
  description: 'A personal portfolio website to showcase projects and skills.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&family=Lora:wght@700;900&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased dark bg-background">
          {children}
          <Toaster />
      </body>
    </html>
  );
}
