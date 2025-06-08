'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Menu, X, Zap } from 'lucide-react';

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'Fitness', href: '/fitness' },
  { name: 'Diet', href: '/diet' },
  { name: 'Mental Health', href: '/mental-health' },
  { name: 'Events', href: '/events' }
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="bg-black text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <Zap className="w-8 h-8 text-yellow-400 group-hover:rotate-12 transition-transform duration-300" />
            <span className="text-2xl font-bold text-gradient">TURNER FROWN</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`font-semibold transition-colors duration-200 hover:text-yellow-400 ${
                  pathname === item.href ? 'text-yellow-400' : 'text-white'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Button className="bg-gradient-to-r from-yellow-400 to-purple-600 hover:from-yellow-500 hover:to-purple-700 text-white font-semibold px-6 py-2 rounded-full">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-800">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`font-semibold py-2 transition-colors duration-200 hover:text-yellow-400 ${
                    pathname === item.href ? 'text-yellow-400' : 'text-white'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Button className="bg-gradient-to-r from-yellow-400 to-purple-600 text-white font-semibold py-2 rounded-full mt-4">
                Get Started
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}