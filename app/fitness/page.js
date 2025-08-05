'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Dumbbell, Play, Clock, Target, Zap, Users, ExternalLink, X } from 'lucide-react';

export default function FitnessPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [playingVideos, setPlayingVideos] = useState({});

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Function to extract YouTube video ID from URL
  const getYouTubeVideoId = (url) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  // Function to get YouTube thumbnail URL
  const getYouTubeThumbnail = (url) => {
    const videoId = getYouTubeVideoId(url);
    return videoId ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg` : null;
  };

  const bullyJuiceVideos = [
    {
      id: 1,
      title: "10-Minute Morning Power Routine",
      duration: "10:32",
      difficulty: "Beginner",
      url: "https://www.youtube.com/watch?v=uTo2m16eJqI&t=10s",
      description: "Kickstart your day with this high-energy routine that gets your blood flowing."
    },
    {
      id: 2,
      title: "No-Equipment Strength Builder",
      duration: "31:14",
      difficulty: "Intermediate",
      url: "https://www.youtube.com/watch?v=vjH7jcPbtfE",
      description: "Build serious strength using just your bodyweight with these proven exercises."
    },
    {
      id: 3,
      title: "HIIT Fat Burner Challenge with weights",
      duration: "30:46",
      difficulty: "Advanced",
      url: "https://www.youtube.com/watch?v=C9r2LyFkWbI",
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
       "1 to 2 minute rest between sets",
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

  const handleVideoClick = (video) => {
    setSelectedVideo(video);
  };

  const closeVideo = () => {
    setSelectedVideo(null);
  };

  const toggleVideoPlay = (videoId) => {
    setPlayingVideos(prev => ({
      ...prev,
      [videoId]: !prev[videoId]
    }));
  };

  const stopVideo = (videoId) => {
    setPlayingVideos(prev => ({
      ...prev,
      [videoId]: false
    }));
  };

  // Function to render exercise text with Amazon links
  const renderExerciseText = (exercise) => {
    if (exercise.includes("Purchase weights, squat wedge and stands")) {
      return (
        <>
          Purchase{" "}
          <a 
            href="https://www.amazon.co.uk/Yaheetech-Dumbbells-Adjustable-Dumbbell-Strength/dp/B0CHJ69WWD/ref=sr_1_7?crid=ASUK41SMGVBX&dib=eyJ2IjoiMSJ9.9kqQTYtwEaeihJOjAI5KVcJ7gSbBaCuSDmVw7hUZaRlUgIx6Ze0YsdQhZPJRGblfZhOHDC-MetkAvexJbqsTLvTs5EccSHOgfTFQShUsqw7b42nRJTFU681d-dHnkhZUUsvR5hTnsJSjxkVm_T9eEme9Dqm0gPJ_-VnuoWXgawtXKgu5c-ZnR7wu9ZbYt2E_gz-FELUoFhP3cDPpHHLWMrCAh4CghULtwNX9U1h4TmdWhyEBwX8H_tLW_yTx3uPoM8ePJp4qi1PIi0cP0ceoqJPwQoQuRXKF2OO5RqmVQjc.JpQ9EFdMlg45mq3aL3RFq3VSM8YHUpek0EsUgp5OQOg&dib_tag=se&keywords=dumbbells&qid=1754417952&sprefix=dumbells%2Caps%2C84&sr=8-7&th=1" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-purple-600 hover:text-purple-800 underline font-medium"
          >
            weights
          </a>
          ,{" "}
          <a 
            href="https://www.amazon.co.uk/omolly-Stretcher-Balance-Elevated-15x12x5cm/dp/B0DP2JVSNP/ref=sr_1_9?crid=F9VAZXNQ7R10&dib=eyJ2IjoiMSJ9.JdN26wwb1-eKqZYnQdSw2G6Kk41ESeVSQji-2Vyp1ZWnBS7iELk6cz2xO4BJDuP3m1_wWEW4sTDigWfOxv15ximsQjDwIOSOHDsqAdcqRa-7UxGOEfzuPrRB8eetTA9q11irFPQXpPFw8Jq0pk6SRMk2uZABPMsWmpK7VWY4zO8KMTTjxo1HehaxB6400iBM4LNoRq0S58l_33DzaL4nhy18SJ0u2JorWvyPCi-aOMZuYYQ_DfQHoWXf7jRtupI5mRoOnRe2P0U3NY_G_rb5Pix9Xyhw2G1q_586X-XsOns.HTCwb0M1s7hO-FGYRmosa8bpUOyW68bcc1zfb-I5N-s&dib_tag=se&keywords=squat+wedge+block&qid=1754417832&sprefix=squat+wedge%2Caps%2C77&sr=8-9" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-purple-600 hover:text-purple-800 underline font-medium"
          >
            squat wedge
          </a>
          {" "}and{" "}
          <a 
            href="https://www.amazon.co.uk/Readaeer-Pushup-Handles-Workout-Exercise-Training/dp/B07B8LQ6HR/ref=sr_1_6?crid=1MQY834EPYG79&dib=eyJ2IjoiMSJ9.tsEBhpeOt_FtuTtKUW_ytm76KKfQXEQ72eWazuY2rcNjKOaMKjW1E7URNjIcyi300sNk5c0Dvu1f530LX68BHcVsulo6vJ-GHOGLdiLqj9gU4SqudAoWTlfKhUcfRWyST7vVP8_xb_EwJKCEDcXu_SafiRA8vMFXtfLldlsP1qZ2AYoaiRigA2H6QRvPmZVWouNIVtHumZ-49WTXj2MOFjOZ7a0I8FDgP8IJsdmASPhQULtByZcT2x3i9NRe8Re_Rg-1xSs9LWEenmuswYth_yz-aCBLyk1Mud3WMmBENAI.fXOC2sLKsgCZp6iwajw5C7r3_h4coY7grG-ido6mojI&dib_tag=se&keywords=press%2Bup%2Bhandles&qid=1754418100&sprefix=press%2Bup%2Caps%2C97&sr=8-6&th=1" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-purple-600 hover:text-purple-800 underline font-medium"
          >
            stands
          </a>
        </>
      );
    }
    return exercise;
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
                <span>Proven Guidance</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="relative w-full max-w-4xl">
            <button
              onClick={closeVideo}
              className="absolute -top-10 right-0 text-white text-2xl hover:text-gray-300 z-10"
            >
              ×
            </button>
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src={`https://www.youtube.com/embed/${getYouTubeVideoId(selectedVideo.url)}?autoplay=1`}
                title={selectedVideo.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}

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
                    BullyJuice Routines
                  </h2>
                  <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                    High-energy, time-efficient workouts that deliver maximum results with minimal time investment.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {bullyJuiceVideos.map((video, index) => {
                    const videoId = getYouTubeVideoId(video.url);
                    const thumbnailUrl = getYouTubeThumbnail(video.url);
                    const isPlaying = playingVideos[video.id];

                    return (
                      <Card key={video.id} className={`overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 ${isVisible ? `animate-slide-up delay-${(index + 1) * 100}` : 'opacity-0'}`}>
                        <div className="relative">
                          {isPlaying ? (
                            <div className="aspect-video relative">
                              <iframe
                                className="w-full h-full"
                                src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
                                title={video.title}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                              ></iframe>
                              <button
                                onClick={() => stopVideo(video.id)}
                                className="absolute top-2 right-2 bg-black/70 text-white p-1 rounded-full hover:bg-black/90 transition-colors"
                              >
                                <X className="w-4 h-4" />
                              </button>
                            </div>
                          ) : (
                            <div 
                              className="aspect-video bg-cover bg-center cursor-pointer relative group"
                              style={{ backgroundImage: thumbnailUrl ? `url(${thumbnailUrl})` : 'linear-gradient(to bottom right, #1f2937, #374151)' }}
                              onClick={() => toggleVideoPlay(video.id)}
                            >
                              {/* Fallback gradient overlay if thumbnail fails to load */}
                              <div className="absolute inset-0 bg-gradient-to-br from-gray-900/50 to-gray-700/50 group-hover:from-gray-900/30 group-hover:to-gray-700/30 transition-all duration-300"></div>
                              <div className="absolute inset-0 flex items-center justify-center">
                                <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 group-hover:bg-white/30 transition-all duration-300">
                                  <Play className="w-8 h-8 text-white" />
                                </div>
                              </div>
                            </div>
                          )}
                          <Badge className={`absolute top-2 right-2 ${getDifficultyColor(video.difficulty)} text-white z-10`}>
                            {video.difficulty}
                          </Badge>
                          <div className="absolute bottom-2 left-2 bg-black/70 text-white px-2 py-1 rounded text-sm flex items-center gap-1 z-10">
                            <Clock className="w-3 h-3" />
                            {video.duration}
                          </div>
                        </div>
                        <CardHeader>
                          <CardTitle className="text-xl">{video.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-gray-600 mb-4">{video.description}</p>
                          <div className="flex gap-2">
                            <Button 
                              className="flex-1 bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-white font-semibold"
                              onClick={() => isPlaying ? stopVideo(video.id) : toggleVideoPlay(video.id)}
                            >
                              <Play className="w-4 h-4 mr-2" />
                              {isPlaying ? 'Stop Video' : 'Watch Now'}
                            </Button>
                            <Button 
                              variant="outline" 
                              className="flex-shrink-0"
                              onClick={() => window.open(video.url, '_blank')}
                            >
                              <ExternalLink className="w-4 h-4" />
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
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
                                <span className="text-sm">
                                  {renderExerciseText(exercise)}
                                </span>
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
      <section className="py-20 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className={`max-w-3xl mx-auto transition-all duration-1000 ${isVisible ? 'animate-scale-in' : 'opacity-0'}`}>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Ready to Transform Your Body?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Consistency beats perfection. Start with any routine above and commit to showing up every day.
            </p>
            <Button 
              size="lg" 
              className="bg-white text-orange-600 hover:bg-gray-100 font-bold px-8 py-4 rounded-full shadow-lg transform hover:scale-105 transition-all duration-200"
              onClick={() => window.open('https://www.youtube.com/@BullyJuice/videos', '_blank')}
            >
              <Dumbbell className="mr-2 w-5 h-5" />
              Start Your Journey
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}