'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Users, Clock, Zap, Star, ArrowRight } from 'lucide-react';

export default function EventsPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const upcomingEvents = [
    {
      id: 1,
      title: "Turner Frown Live: Mental Health Workshop",
      date: "Coming Soon",
      time: "TBD",
      location: "Virtual Event",
      type: "Workshop",
      capacity: "500 spots",
      price: "Free",
      status: "planning",
      description: "Join Josh for an intensive 2-hour workshop on transforming your mental health. Share stories, learn strategies, and connect with like-minded men.",
      highlights: [
        "Live Q&A with Josh",
        "Exclusive transformation strategies",
        "Community connection",
        "Downloadable resources"
      ]
    },
    {
      id: 2,
      title: "30-Day Fitness Challenge Launch",
      date: "Coming Soon",
      time: "TBD",
      location: "Online Community",
      type: "Challenge",
      capacity: "1000 participants",
      price: "Free",
      status: "planning",
      description: "Kick off the ultimate 30-day fitness transformation with fellow Turner Frown warriors. Daily workouts, nutrition guidance, and group motivation.",
      highlights: [
        "Daily workout videos",
        "Nutrition meal plans",
        "Community support group",
        "Progress tracking tools"
      ]
    },
    {
      id: 3,
      title: "Turner Frown Meetup Series",
      date: "Coming Soon",
      time: "TBD",
      location: "Major Cities",
      type: "Meetup",
      capacity: "50-100 per city",
      price: "Free",
      status: "planning",
      description: "In-person meetups in major cities across the country. Connect with local Turner Frown community members and build lasting friendships.",
      highlights: [
        "Face-to-face networking",
        "Local community building",
        "Group activities",
        "Josh appearance (select cities)"
      ]
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'planning': return 'bg-yellow-500';
      case 'announced': return 'bg-blue-500';
      case 'open': return 'bg-green-500';
      case 'sold-out': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  const getTypeIcon = (type) => {
    switch (type) {
      case 'Workshop': return Calendar;
      case 'Challenge': return Zap;
      case 'Meetup': return Users;
      default: return Calendar;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className={`text-center max-w-4xl mx-auto transition-all duration-1000 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
            <Calendar className="w-16 h-16 mx-auto mb-6 animate-bounce-gentle" />
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              EVENTS
            </h1>
            <p className="text-xl lg:text-2xl mb-8 opacity-90">
              Connect, learn, and grow with the Turner Frown community.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-lg">
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                <span>Community</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5" />
                <span>Growth</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5" />
                <span>Transformation</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Building Message */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className={`text-center max-w-4xl mx-auto transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <h2 className="text-4xl font-bold mb-6 text-gradient">
              Building Something Bigger
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              The Turner Frown community is growing rapidly, and we're planning incredible events to bring us all together. 
              As our community reaches critical mass, we'll launch workshops, challenges, meetups, and exclusive experiences 
              that will accelerate your transformation journey.
            </p>
            <div className="bg-gradient-to-r from-yellow-100 to-purple-100 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4 text-gray-800">
                Be the First to Know
              </h3>
              <p className="text-lg text-gray-700 mb-6">
                Join our waitlist to get exclusive early access to all Turner Frown events. 
                When we launch, you'll be the first to secure your spot.
              </p>
              <Button size="lg" className="bg-gradient-to-r from-yellow-400 to-purple-600 hover:from-yellow-500 hover:to-purple-700 text-white font-bold px-8 py-4 rounded-full shadow-lg transform hover:scale-105 transition-all duration-200">
                Join the Waitlist
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <h2 className="text-4xl font-bold mb-4 text-gradient">
              What's Coming
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Here's a preview of the incredible events we're planning for the Turner Frown community.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {upcomingEvents.map((event, index) => {
              const IconComponent = getTypeIcon(event.type);
              return (
                <Card key={event.id} className={`overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 ${isVisible ? `animate-slide-up delay-${(index + 1) * 150}` : 'opacity-0'}`}>
                  <CardHeader className="bg-gradient-to-r from-purple-600 to-blue-600 text-white">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <IconComponent className="w-8 h-8" />
                        <div>
                          <CardTitle className="text-xl">{event.title}</CardTitle>
                          <Badge className={`${getStatusColor(event.status)} text-white mt-2`}>
                            {event.status === 'planning' ? 'In Planning' : event.status}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center gap-2 text-gray-600">
                        <Calendar className="w-4 h-4" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <Clock className="w-4 h-4" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <MapPin className="w-4 h-4" />
                        <span>{event.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <Users className="w-4 h-4" />
                        <span>{event.capacity}</span>
                      </div>
                    </div>

                    <p className="text-gray-700 mb-6">{event.description}</p>

                    <div className="mb-6">
                      <h4 className="font-semibold mb-3">Event Highlights:</h4>
                      <ul className="space-y-2">
                        {event.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <Star className="w-4 h-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-gray-600">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex justify-between items-center">
                      <div>
                        <span className="text-2xl font-bold text-green-600">{event.price}</span>
                      </div>
                      <Button className="bg-gradient-to-r from-yellow-400 to-purple-600 hover:from-yellow-500 hover:to-purple-700 text-white font-semibold">
                        Get Notified
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Community Stats */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <h2 className="text-4xl font-bold mb-4">
              Growing Stronger Together
            </h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              The Turner Frown movement is gaining momentum. Join thousands of men who are already transforming their lives.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className={`text-center transition-all duration-1000 ${isVisible ? 'animate-slide-up delay-100' : 'opacity-0'}`}>
              <div className="text-5xl font-bold text-yellow-400 mb-2">10K+</div>
              <div className="text-xl opacity-90">Community Members</div>
            </div>
            <div className={`text-center transition-all duration-1000 ${isVisible ? 'animate-slide-up delay-200' : 'opacity-0'}`}>
              <div className="text-5xl font-bold text-purple-400 mb-2">500+</div>
              <div className="text-xl opacity-90">Success Stories</div>
            </div>
            <div className={`text-center transition-all duration-1000 ${isVisible ? 'animate-slide-up delay-300' : 'opacity-0'}`}>
              <div className="text-5xl font-bold text-green-400 mb-2">50+</div>
              <div className="text-xl opacity-90">Cities Represented</div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className={`max-w-3xl mx-auto transition-all duration-1000 ${isVisible ? 'animate-scale-in' : 'opacity-0'}`}>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Don't Miss Out
            </h2>
            <p className="text-xl mb-8 opacity-90">
              The Turner Frown events will be game-changers. Join the waitlist now and be among the first to experience 
              the power of our community in person.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 font-bold px-8 py-4 rounded-full shadow-lg transform hover:scale-105 transition-all duration-200">
                <Calendar className="mr-2 w-5 h-5" />
                Join Event Waitlist
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-600 font-bold px-8 py-4 rounded-full">
                Follow Updates
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}