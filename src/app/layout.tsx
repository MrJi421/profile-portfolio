import type {Metadata} from 'next';
import { Inter, Roboto_Mono } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { Toaster } from "@/components/ui/toaster";
import { personalDetails } from '@/lib/data';
import { ThemeProvider } from '@/components/theme-provider';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

const robotoMono = Roboto_Mono({
  variable: '--font-roboto-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: `${personalDetails.name} | ${personalDetails.title}`,
  description: `Personal portfolio of ${personalDetails.name}, a ${personalDetails.title}. Showcasing projects in Data Analytics, Machine Learning, and Python.`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`dark ${inter.variable} ${robotoMono.variable}`}>
      <body className="mx-auto">
        <ThemeProvider>

          <div className="antialiased flex flex-col min-h-screen bg-background text-foreground">
            <Header />

            <main className="flex-grow items-center">
              {children}
            </main>
            <Footer />
            <Toaster />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
