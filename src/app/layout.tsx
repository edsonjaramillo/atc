import 'mapbox-gl/dist/mapbox-gl.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { DesktopNavigation, NavigationSpacer } from '@/app/components/navigation/DesktopNavigation';
import { Footer } from '@/app/components/navigation/Footer';
import { MobileNavigation } from '@/app/components/navigation/MobileNavigation';
import { Toast } from '@/app/components/ui/Toast';
import '@/app/globals.css';
import { cn } from '@/app/lib/ui/tw';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-next',
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

type RootLayoutProps = {
  children: React.ReactNode;
};

const bodyClass = cn(
  inter.variable,
  'relative scroll-smooth bg-grayscale-50 font-sans antialiased selection:bg-secondary selection:text-grayscale-inverse',
);

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={bodyClass}>
        <DesktopNavigation />
        <MobileNavigation />
        <NavigationSpacer />
        {children}
        <Footer />
        <Toast />
      </body>
    </html>
  );
}
