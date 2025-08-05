'use client';

import { Mail, Instagram, Heart } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const pathname = usePathname();

  // Get color scheme based on current page
  const getColorScheme = () => {
    switch (pathname) {
      case '/fitness':
        return {
          bg: 'bg-gradient-to-r from-yellow-400 to-orange-500',
          text: 'text-white',
          hover: 'hover:text-yellow-200',
          border: 'border-yellow-300'
        };
      case '/diet':
        return {
          bg: 'bg-gradient-to-r from-green-600 to-blue-600',
          text: 'text-white',
          hover: 'hover:text-green-200',
          border: 'border-green-300'
        };
      case '/mental-health':
        return {
          bg: 'bg-gradient-to-r from-teal-600 to-purple-600',
          text: 'text-white',
          hover: 'hover:text-teal-200',
          border: 'border-teal-300'
        };
      case '/events':
        return {
          bg: 'bg-gradient-to-r from-blue-600 to-purple-600',
          text: 'text-white',
          hover: 'hover:text-blue-200',
          border: 'border-blue-300'
        };
      default:
        return {
          bg: 'bg-gradient-to-r from-purple-600 to-blue-600',
          text: 'text-white',
          hover: 'hover:text-purple-200',
          border: 'border-purple-300'
        };
    }
  };

  const colors = getColorScheme();

  return (
    <footer className={`${colors.bg} ${colors.text}`}>
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-6">
        <div className="space-y-4">
          {/* Brand Row */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Image
                src="/tflogo.png"
                alt="Turner Frown Logo"
                width={32}
                height={32}
                className="rounded"
              />
              <h3 className="text-lg font-bold">Turner Frown</h3>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
              <a
                href="mailto:josh@turnerfrown.co.uk"
                className={`flex items-center gap-2 opacity-90 ${colors.hover} transition-colors text-sm`}
              >
                <Mail className="w-4 h-4" />
                <span className="text-xs sm:text-sm">josh@turnerfrown.co.uk</span>
              </a>
              <a
                href="https://instagram.com/turnerfrown"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-2 text-sm opacity-90 ${colors.hover} transition-colors`}
              >
                <Instagram className="w-4 h-4" />
                <span className="text-xs sm:text-sm">@turnerfrown</span>
              </a>
            </div>
          </div>

          {/* Quick Links Row */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6">
            <Link href="/" className={`text-xs sm:text-sm opacity-90 ${colors.hover} transition-colors`}>
              Home
            </Link>
            <Link href="/mental-health" className={`text-xs sm:text-sm opacity-90 ${colors.hover} transition-colors`}>
              Mental Health
            </Link>
            <Link href="/fitness" className={`text-xs sm:text-sm opacity-90 ${colors.hover} transition-colors`}>
              Fitness
            </Link>
            <Link href="/diet" className={`text-xs sm:text-sm opacity-90 ${colors.hover} transition-colors`}>
              Nutrition
            </Link>
            <Link href="/events" className={`text-xs sm:text-sm opacity-90 ${colors.hover} transition-colors`}>
              Events
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className={`border-t ${colors.border} border-opacity-30`}>
        <div className="container mx-auto px-4 py-3">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-2">
            <div className="flex items-center gap-2 text-xs opacity-80">
              <span>© {currentYear} Turner Frown. All rights reserved.</span>
              <Heart className="w-3 h-3 text-red-400" />
            </div>
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs opacity-70">
              <span>Made in the UK</span>
              <span className="hidden sm:inline">•</span>
              <span>Registered in England & Wales</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 