'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Dumbbell, Apple, Brain, Calendar, ArrowRight } from 'lucide-react';

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const sections = [
    {
      title: 'FITNESS',
      icon: Dumbbell,
      description: 'Build strength, power, and confidence with proven workout routines',
      href: '/fitness',
      color: 'from-yellow-400 to-orange-500',
      delay: 'delay-100'
    },
    {
      title: 'DIET',
      icon: Apple,
      description: 'Fuel your body with optimal nutrition and meal planning',
      href: '/diet',
      color: 'from-green-400 to-blue-500',
      delay: 'delay-200'
    },
    {
      title: 'MENTAL HEALTH',
      icon: Brain,
      description: 'Develop mental resilience and unlock your true potential',
      href: '/mental-health',
      color: 'from-purple-500 to-pink-500',
      delay: 'delay-300'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative hero-gradient text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 py-20 lg:py-32">
          <div className="text-center max-w-4xl mx-auto">
            <div className={`transition-all duration-1000 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
              <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
                TURNER
                <span className="block text-6xl lg:text-8xl">FROWN</span>
              </h1>
              <div className="flex items-center justify-center gap-3 mb-8">
                <Image
                  src="/tflogo.png"
                  alt="Turner Frown Logo"
                  width={50}
                  height={50}
                  className="rounded animate-bounce-gentle"
                />
                <p className="text-xl lg:text-2xl font-semibold uppercase tracking-wide">
                  Transform Your Mindset, Elevate Your Health
                </p>
                <Image
                  src="/tflogo.png"
                  alt="Turner Frown Logo"
                  width={50}
                  height={50}
                  className="rounded animate-bounce-gentle"
                />
              </div>
              <p className="text-lg lg:text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                Hi, I&apos;m Josh. I built this platform because I know how it feels to go through tough times. 
                This is my way of helping other men take control of their physical and mental wellbeing. 
                No excuses. No shortcuts. Just results.
              </p>
              <Link href="/mental-health">
                <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 font-bold text-lg px-8 py-4 rounded-full shadow-lg transform hover:scale-105 transition-all duration-200">
                  Start Your Transformation
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Sections */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-gradient">
              Choose Your Path
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Three pillars of masculine wellness that helped me through my darkest moments. 
              Pick your focus and start building the life you deserve.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {sections.map((section, index) => {
              const IconComponent = section.icon;
              return (
                <Link key={section.title} href={section.href}>
                  <Card className={`group cursor-pointer h-full border-2 border-transparent hover:border-yellow-400 hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 ${isVisible ? `animate-slide-up ${section.delay}` : 'opacity-0'}`}>
                    <CardContent className="p-8 text-center h-full flex flex-col">
                      <div className={`w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r ${section.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className="w-10 h-10 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-purple-600 transition-colors">
                        {section.title}
                      </h3>
                      <p className="text-gray-600 mb-6 flex-grow">
                        {section.description}
                      </p>
                      <Button className="w-full bg-black hover:bg-gray-800 text-white font-semibold py-3 rounded-full group-hover:bg-gradient-to-r group-hover:from-yellow-400 group-hover:to-purple-600 transition-all duration-300">
                        Explore {section.title}
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4 text-center">
          <div className={`max-w-3xl mx-auto transition-all duration-1000 ${isVisible ? 'animate-scale-in' : 'opacity-0'}`}>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Ready to Turn That Frown Around?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of men who have already started their transformation journey. 
              I&apos;ve been where you are, and I&apos;m here to show you the way forward. 
              The only thing standing between you and your best self is action.
            </p>
            <div className="flex justify-center">
              <Link href="/events">
                <Button size="lg" className="bg-gradient-to-r from-yellow-400 to-purple-600 hover:from-yellow-500 hover:to-purple-700 text-white font-bold px-8 py-4 rounded-full shadow-lg transform hover:scale-105 transition-all duration-200">
                  <Calendar className="mr-2 w-5 h-5" />
                  Upcoming Events
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}