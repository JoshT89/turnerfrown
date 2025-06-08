import './globals.css';
import { Inter } from 'next/font/google';
import Navigation from '@/components/Navigation';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Turner Frown - Men\'s Wellness Platform',
  description: 'Transform your mindset, elevate your health. A positive, professional platform for men to access reliable content on mental health, diet, and fitness.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        <main>{children}</main>
      </body>
    </html>
  );
}