'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Dumbbell, Play, Clock, Target, Zap, Users } from 'lucide-react';

export default function FitnessPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const bullyJuiceVideos = [
    {
      id: 1,
      title: "5-Minute Morning Power Routine",
      duration: "5:32",
      difficulty: "Beginner",
      embedId: "dQw4w9WgXcQ", // Replace with actual YouTube video IDs
      description: "Kickstart your day with this high-energy routine that gets your blood flowing."
    },
    {
      id: 2,
      title: "No-Equipment Strength Builder",
      duration: "12:45",
      difficulty: "Intermediate",
      embedId: "dQw4w9WgXcQ",
      description: "Build serious strength using just your bodyweight with these proven exercises."
    },
    {
      id: 3,
      title: "HIIT Fat Burner Challenge",
      duration: "18:20",
      difficulty: "Advanced",
      embedId: "dQw4w9WgXcQ",
      description: "Torch calories and build endurance with this intense interval training session."
    }
  ];

  const joshRoutines = [
    {
      id: 1,
      title: "The Foundation Builder Bodyweight",
      type: "Strength",
      duration: "15-20 min",
      exercises: [
        "Squats: 3 sets as many as possible",
        "Push-ups: 3 sets as many as posible",
       "1 minute rest between sets",
       "Repeat if you have time",
       "Purchase weights, squat wedge and stands"
      ],
      description: "Perfect for beginners, this routine builds your foundation strength and form."
    },
    {
      id: 2,
      title: "Energy and Strength Builder",
      type: "HIIT",
      duration: "20-30 min",
      exercises: [
        "Burpees: 3 sets as many as possible",
        "Push-ups: legs raised 3 sets as many as possible",
        "Jump Squats: 3 sets as many as possible",
        "Push-ups: 4 sets as many as posible",
      ],
      description: "High-intensity routine to build explosive power."
    },
    {
      id: 3,
      title: "Become the Beast",
      type: "Intense",
      duration: "30-40 min",
      exercises: [
        "Burpees: 3 sets as many as possible",
        "Lateral Raise: 4 sets as many as possible",
        "Jump Squats: 3 sets as many as possible",
        "Bent Over Row: 3 sets as many as possible",
        "Calph Raises: 4 sets as many as possible",
        "Push-ups: 4 sets as many as possible"
      ],
      description: "Push yourself, be inventive if you need more weight."
    }
  ];

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-500';
      case 'Intermediate': return 'bg-yellow-500';
      case 'Advanced': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  const getTypeColor = (type) => {
    switch (type) {
      case 'Strength': return 'bg-blue-500';
      case 'HIIT': return 'bg-red-500';
      case 'Endurance': return 'bg-green-500';
      case 'Intense': return 'bg-purple-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-white py-20">
        <div className="container mx-auto px-4">
          <div className={`text-center max-w-4xl mx-auto transition-all duration-1000 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
            <Dumbbell className="w-16 h-16 mx-auto mb-6 animate-bounce-gentle" />
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              FITNESS
            </h1>
            <p className="text-xl lg:text-2xl mb-8 opacity-90">
              Build the body and mindset of a champion. No gym? No problem.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-lg">
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5" />
                <span>Quick Workouts</span>
              </div>
              <div className="flex items-center gap-2">
                <Target className="w-5 h-5" />
                <span>Proven Results</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                <span>Expert Guidance</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="bullyjuice" className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-2 mb-12 h-14">
              <TabsTrigger value="bullyjuice" className="text-lg font-semibold">
                BullyJuice Videos
              </TabsTrigger>
              <TabsTrigger value="josh" className="text-lg font-semibold">
                Josh&apos;s Routines
              </TabsTrigger>
            </TabsList>

            {/* BullyJuice Videos Section */}
            <TabsContent value="bullyjuice">
              <div className={`transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
                <div className="text-center mb-12">
                  <h2 className="text-4xl font-bold mb-4 text-gradient">
                    BullyJuice Quick Routines
                  </h2>
                  <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                    High-energy, time-efficient workouts that deliver maximum results with minimal time investment.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {bullyJuiceVideos.map((video, index) => (
                    <Card key={video.id} className={`overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 ${isVisible ? `animate-slide-up delay-${(index + 1) * 100}` : 'opacity-0'}`}>
                      <div className="relative">
                        <div className="aspect-video bg-gradient-to-br from-gray-900 to-gray-700 flex items-center justify-center">
                          <Play className="w-16 h-16 text-white opacity-80" />
                        </div>
                        <Badge className={`absolute top-2 right-2 ${getDifficultyColor(video.difficulty)} text-white`}>
                          {video.difficulty}
                        </Badge>
                        <div className="absolute bottom-2 left-2 bg-black/70 text-white px-2 py-1 rounded text-sm flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {video.duration}
                        </div>
                      </div>
                      <CardHeader>
                        <CardTitle className="text-xl">{video.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600 mb-4">{video.description}</p>
                        <Button className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-white font-semibold">
                          <Play className="w-4 h-4 mr-2" />
                          Watch Now
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>

            {/* Josh's Routines Section */}
            <TabsContent value="josh">
              <div className={`transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
                <div className="text-center mb-12">
                  <h2 className="text-4xl font-bold mb-4 text-gradient">
                    Josh&apos;s At-Home Routines
                  </h2>
                  <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                    Designed to be done at home, every other day. Help to get into a routine and you will be shocked how quickly
                     you can see changes. Highlighted some cost effective equipment that really helps. 
                  </p>
                </div>

                <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
                  {joshRoutines.map((routine, index) => (
                    <Card key={routine.id} className={`hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 ${isVisible ? `animate-slide-up delay-${(index + 1) * 150}` : 'opacity-0'}`}>
                      <CardHeader>
                        <div className="flex justify-between items-start mb-2">
                          <CardTitle className="text-2xl">{routine.title}</CardTitle>
                          <Badge className={`${getTypeColor(routine.type)} text-white`}>
                            {routine.type}
                          </Badge>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600">
                          <Clock className="w-4 h-4" />
                          <span>{routine.duration}</span>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600 mb-6">{routine.description}</p>
                        <div className="space-y-3 mb-6">
                          <h4 className="font-semibold text-lg">Exercises:</h4>
                          <ul className="space-y-2">
                            {routine.exercises.map((exercise, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <Target className="w-4 h-4 mt-0.5 text-purple-600 flex-shrink-0" />
                                <span className="text-sm">{exercise}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <Button className="w-full bg-black hover:bg-gray-800 text-white font-semibold">
                          Start Routine
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className={`max-w-3xl mx-auto transition-all duration-1000 ${isVisible ? 'animate-scale-in' : 'opacity-0'}`}>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Ready to Transform Your Body?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Consistency beats perfection. Start with any routine above and commit to showing up every day.
            </p>
            <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 font-bold px-8 py-4 rounded-full shadow-lg transform hover:scale-105 transition-all duration-200">
              <Dumbbell className="mr-2 w-5 h-5" />
              Start Your Journey
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}