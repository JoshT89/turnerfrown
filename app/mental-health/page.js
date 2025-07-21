'use client';

import { useState, useEffect, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Brain, Target, Zap, Shield, Heart, ArrowRight, CheckCircle } from 'lucide-react';

export default function MentalHealthPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const joshStory = {
    title: "From Struggle to Strength: Josh's Journey",
    sections: [
      {
        title: "The Root of My Anxiety",
        content: "In 2018, my mum was diagnosed with cancer for the second time. Thankfully, she's now healthy and happily retired, but the experience left me with something I didn't expect, crippling anxiety about the future. After she got the all-clear, I realised I wasn't clear at all. I couldn't stop thinking about what might come next for my family. For the next two years, I lived in a constant state of worry, hating my work, feeling unaccomplished, and even breaking down in tears. When I sought help, doctors immediately wanted to prescribe medication, which wasn't the path I wanted to take. I tried CBT therapy, but being told to write my worries on a 'worry tree' made me feel infantilised. Nothing seemed to work, and the constant 'Are you okay?' questions from loved ones only made me feel more broken.",
        emotion: "struggle"
      },
      {
        title: "The Turning Point",
        content: "Everything changed when my mum introduced me to a life coach named Carmen. She was the first person in three years to tell me I wasn't broken—that what I was experiencing was normal and fixable. This validation was the breakthrough I needed. I began reading mental health books and returning to exercise. Most importantly, I developed a simple but effective coping mechanism: whenever a negative thought entered my mind, I would immediately recognise it as negative and replace it with something positive. Sometimes this meant simply repeating a positive word in my head to interrupt the spiral before it could take control.",
        emotion: "realization"
      },
      {
        title: "Building My Foundation",
        content: "I immersed myself in mental health literature, finding immense relief in relatable information. I committed to exercising at least every other day and improving my nutrition. I was fortunate enough to retrain in software development, which not only gave me a career I enjoy but also enabled me to create this platform. Finding a supportive boss made an incredible difference. I incorporated cold showers into my morning routine and focused on eating well, but most importantly, I learnt to prioritise what makes me happy. In those early days, I kept myself busy with activities like cleaning, cooking, gardening, gaming, walks, learning and exercise—anything to keep my mind occupied. When negative thoughts surfaced, I acted quickly to replace them with positive alternatives.",
        emotion: "progress"
      },
      {
        title: "The Transformation",
        content: "Today, I wake up genuinely excited about life. The tools I learnt didn't just help me survive—they helped me thrive. Now I share these same strategies that essentially saved my life. Understanding the difference between depression and anxiety was crucial: depression typically involves uncontrollable thoughts about the past, whilst anxiety focuses on uncontrollable thoughts about the future. My advice is to reach out for help and support, and keep reaching until you find the right person. Surround yourself with positive people and learn to enjoy your own company—this is both key and incredibly powerful. Finally, step outside your comfort zone regularly, it builds confidence in ways you can't imagine.",
        emotion: "triumph"
      }
    ]
  };

  const stepGuide = [
    {
      step: 1,
      title: "Acknowledge the Truth",
      description: "Stop pretending everything is fine. Your mental health matters, and admitting you need help is the most masculine thing you can do.",
      actionItems: [
        "Write down how you're really feeling",
        "Identify your main stressors",
        "Recognize negative thought patterns",
        "Accept that change is necessary"
      ],
      timeframe: "Week 1-2",
      difficulty: "Medium"
    },
    {
      step: 2,
      title: "Build Your Foundation",
      description: "Create the basic structure that supports mental wellness. These fundamentals will carry you through the tough times.",
      actionItems: [
        "Establish a consistent sleep schedule",
        "Start a daily morning routine",
        "Remove toxic influences",
        "Set healthy boundaries"
      ],
      timeframe: "Week 3-6",
      difficulty: "Hard"
    },
    {
      step: 3,
      title: "Develop Your Toolkit",
      description: "Learn practical strategies to manage stress, anxiety, and negative emotions. These are your weapons against mental struggles.",
      actionItems: [
        "Practice daily meditation (5-10 minutes)",
        "Learn breathing techniques",
        "Start journaling regularly",
        "Develop a support network"
      ],
      timeframe: "Week 7-12",
      difficulty: "Medium"
    },
    {
      step: 4,
      title: "Strengthen Your Mind",
      description: "Build mental resilience through challenge and growth. This is where you develop unshakeable confidence.",
      actionItems: [
        "Take on meaningful challenges",
        "Practice gratitude daily",
        "Set and achieve small goals",
        "Help others in their journey"
      ],
      timeframe: "Week 13+",
      difficulty: "Easy"
    },
    {
      step: 5,
      title: "Maintain and Grow",
      description: "Mental health is not a destination—it's a lifestyle. Keep growing, keep improving, keep turning frowns around.",
      actionItems: [
        "Regular self-assessment",
        "Continue learning new strategies",
        "Share your story with others",
        "Never stop improving"
      ],
      timeframe: "Ongoing",
      difficulty: "Easy"
    }
  ];

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Easy': return 'bg-green-500';
      case 'Medium': return 'bg-yellow-500';
      case 'Hard': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  const getEmotionColor = (emotion) => {
    switch (emotion) {
      case 'struggle': return 'border-l-red-500 bg-red-50';
      case 'realization': return 'border-l-yellow-500 bg-yellow-50';
      case 'progress': return 'border-l-blue-500 bg-blue-50';
      case 'triumph': return 'border-l-green-500 bg-green-50';
      default: return 'border-l-gray-500 bg-gray-50';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 via-blue-600 to-teal-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className={`text-center max-w-4xl mx-auto transition-all duration-1000 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
            <Brain className="w-16 h-16 mx-auto mb-6 animate-bounce-gentle" />
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              MENTAL HEALTH
            </h1>
            <p className="text-xl lg:text-2xl mb-8 opacity-90">
              Your mind is your most powerful tool. Train it like you train your body.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-lg">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5" />
                <span>Build Resilience</span>
              </div>
              <div className="flex items-center gap-2">
                <Target className="w-5 h-5" />
                <span>Clear Direction</span>
              </div>
              <div className="flex items-center gap-2">
                <Heart className="w-5 h-5" />
                <span>Real Results</span>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Josh's Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <h2 className="text-4xl font-bold mb-4 text-gradient">
              {joshStory.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              This is my real story. The struggles, the breakthroughs, and the transformation that changed everything.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {joshStory.sections.map((section, index) => (
              <Card key={index} className={`border-l-4 ${getEmotionColor(section.emotion)} hover:shadow-lg transition-all duration-300 ${isVisible ? `animate-slide-in-left delay-${(index + 1) * 200}` : 'opacity-0'}`}>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4">{section.title}</h3>
                  <p className="text-lg text-gray-700 leading-relaxed">{section.content}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Step-by-Step Guide */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <h2 className="text-4xl font-bold mb-4 text-gradient">
              The 5-Step Transformation
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              This is the exact roadmap I used to transform my mental health. Follow it step by step.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            {stepGuide.map((guide, index) => (
              <div key={guide.step} className={`mb-12 transition-all duration-1000 ${isVisible ? `animate-slide-up delay-${(index + 1) * 100}` : 'opacity-0'}`}>
                <Card className="overflow-hidden hover:shadow-xl transition-all duration-300">
                  <CardHeader className="bg-gradient-to-r from-purple-600 to-blue-600 text-white">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                          <span className="text-2xl font-bold">{guide.step}</span>
                        </div>
                        <div>
                          <CardTitle className="text-2xl">{guide.title}</CardTitle>
                          <div className="flex items-center gap-4 mt-2">
                            <Badge className="bg-white/20 text-white">{guide.timeframe}</Badge>
                            <Badge className={`${getDifficultyColor(guide.difficulty)} text-white`}>
                              {guide.difficulty}
                            </Badge>
                          </div>
                        </div>
                      </div>
                      <Target className="w-8 h-8 opacity-80" />
                    </div>
                  </CardHeader>
                  <CardContent className="p-8">
                    <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                      {guide.description}
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-lg mb-3">Action Items:</h4>
                        <ul className="space-y-2">
                          {guide.actionItems.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-700">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="flex items-center justify-center">
                        <div className="text-center">
                          <div className="text-6xl font-bold text-purple-600 mb-2">
                            {Math.round((guide.step / stepGuide.length) * 100)}%
                          </div>
                          <p className="text-gray-600">Complete</p>
                          <Progress value={(guide.step / stepGuide.length) * 100} className="mt-2 w-32" />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className={`max-w-3xl mx-auto transition-all duration-1000 ${isVisible ? 'animate-scale-in' : 'opacity-0'}`}>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Your Transformation Starts Now
            </h2>
            <p className="text-xl mb-8 opacity-90">
              You have everything you need to turn your mental health around. The only question is: will you start today?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 font-bold px-8 py-4 rounded-full shadow-lg transform hover:scale-105 transition-all duration-200">
                <Brain className="mr-2 w-5 h-5" />
                Begin Step 1
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-600 font-bold px-8 py-4 rounded-full">
                Share Your Story
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}