'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Shield, Cookie, FileText, AlertTriangle, Info, ExternalLink } from 'lucide-react';

export default function Legal() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <Link href="/">
            <Button variant="ghost" className="mb-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
          
          <div className={`transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-gradient">
              Legal Information
            </h1>
            <p className="text-lg text-gray-600">
              Important legal information about Turner Frown
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {/* Important Notice */}
          <Card className="border-red-200 bg-red-50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-red-800">
                <AlertTriangle className="h-5 w-5 text-red-600" />
                ⚠️ CRITICAL DISCLAIMER
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-red-800 font-semibold text-lg">
                Turner Frown is NOT a medical, mental health, or fitness professional service.
              </p>
              <div className="space-y-2">
                <p className="text-red-700">
                  <strong>What we are:</strong> A personal platform sharing Josh's experiences and journey
                </p>
                <p className="text-red-700">
                  <strong>What we are NOT:</strong> Medical professionals, therapists, or certified trainers
                </p>
                <p className="text-red-700">
                  <strong>Our content:</strong> Personal experiences that may help inspire others
                </p>
                <p className="text-red-700">
                  <strong>Your responsibility:</strong> Use common sense and consult professionals when needed
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Legal Documents Overview */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-blue-600" />
                Legal Documents
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                We have created comprehensive legal documents to ensure transparency and compliance 
                with UK laws. Please review these documents carefully:
              </p>
              
              <div className="grid md:grid-cols-3 gap-4">
                <Link href="/privacy-policy">
                  <Card className="hover:shadow-lg transition-shadow cursor-pointer border-blue-200 hover:border-blue-300">
                    <CardContent className="p-4 text-center">
                      <Shield className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                      <h4 className="font-semibold text-blue-800">Privacy Policy</h4>
                      <p className="text-sm text-blue-600 mt-1">
                        How we protect and handle your personal information
                      </p>
                    </CardContent>
                  </Card>
                </Link>
                
                <Link href="/cookie-policy">
                  <Card className="hover:shadow-lg transition-shadow cursor-pointer border-orange-200 hover:border-orange-300">
                    <CardContent className="p-4 text-center">
                      <Cookie className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                      <h4 className="font-semibold text-orange-800">Cookie Policy</h4>
                      <p className="text-sm text-orange-600 mt-1">
                        How we use cookies and tracking technologies
                      </p>
                    </CardContent>
                  </Card>
                </Link>
                
                <Link href="/terms-and-conditions">
                  <Card className="hover:shadow-lg transition-shadow cursor-pointer border-purple-200 hover:border-purple-300">
                    <CardContent className="p-4 text-center">
                      <FileText className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                      <h4 className="font-semibold text-purple-800">Terms & Conditions</h4>
                      <p className="text-sm text-purple-600 mt-1">
                        Rules and guidelines for using our website
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              </div>
            </CardContent>
          </Card>

          {/* Key Legal Points */}
          <Card>
            <CardHeader>
              <CardTitle>Key Legal Points</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-semibold text-green-700">✅ What We Do Right</h4>
                  <ul className="list-disc list-inside space-y-1 text-green-700 ml-4 mt-2">
                    <li>Comply with UK GDPR and Data Protection Act 2018</li>
                    <li>Provide clear disclaimers about our limitations</li>
                    <li>Respect user privacy and cookie preferences</li>
                    <li>Offer transparent information about our services</li>
                    <li>Include appropriate liability limitations</li>
                  </ul>
                </div>
                
                <div className="border-l-4 border-orange-500 pl-4">
                  <h4 className="font-semibold text-orange-700">⚠️ What You Should Know</h4>
                  <ul className="list-disc list-inside space-y-1 text-orange-700 ml-4 mt-2">
                    <li>All content is based on personal experience, not professional advice</li>
                    <li>We encourage you to use common sense and seek professional help</li>
                    <li>Results may vary - what worked for Josh may not work for everyone</li>
                    <li>Mental health content is inspirational, not therapeutic</li>
                    <li>Fitness and diet advice is anecdotal, not scientific</li>
                  </ul>
                </div>
                
                <div className="border-l-4 border-red-500 pl-4">
                  <h4 className="font-semibold text-red-700">🚨 What We're NOT</h4>
                  <ul className="list-disc list-inside space-y-1 text-red-700 ml-4 mt-2">
                    <li>Medical professionals or healthcare providers</li>
                    <li>Licensed therapists or mental health counselors</li>
                    <li>Certified personal trainers or nutritionists</li>
                    <li>A substitute for professional medical advice</li>
                    <li>Responsible for your health decisions or outcomes</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* User Responsibilities */}
          <Card>
            <CardHeader>
              <CardTitle>Your Responsibilities as a User</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                By using Turner Frown, you acknowledge and agree to the following responsibilities:
              </p>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <h4 className="font-semibold text-blue-700">Health & Safety</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-700 ml-4">
                    <li>Consult healthcare professionals for medical concerns</li>
                    <li>Use common sense when applying any advice</li>
                    <li>Stop any activity that causes pain or discomfort</li>
                    <li>Seek emergency help for mental health crises</li>
                  </ul>
                </div>
                
                <div className="space-y-3">
                  <h4 className="font-semibold text-purple-700">Legal & Ethical</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-700 ml-4">
                    <li>Respect our intellectual property rights</li>
                    <li>Use the website for lawful purposes only</li>
                    <li>Be respectful in any interactions</li>
                    <li>Report any concerns or issues</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Crisis Resources */}
          <Card className="border-red-200 bg-red-50">
            <CardHeader>
              <CardTitle className="text-red-800">Mental Health Crisis Resources</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-red-800 font-semibold">
                If you're experiencing a mental health crisis, please seek immediate professional help:
              </p>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <h4 className="font-semibold text-red-700">Emergency Services</h4>
                  <ul className="space-y-1 text-sm text-red-600">
                    <li><strong>999</strong> - Emergency services</li>
                    <li><strong>111</strong> - NHS non-emergency</li>
                    <li><strong>112</strong> - European emergency number</li>
                  </ul>
                </div>
                
                <div className="space-y-2">
                  <h4 className="font-semibold text-red-700">Mental Health Helplines</h4>
                  <ul className="space-y-1 text-sm text-red-600">
                    <li><strong>116 123</strong> - Samaritans (24/7)</li>
                    <li><strong>0800 1111</strong> - Childline</li>
                    <li><strong>0800 58 58 58</strong> - CALM (5pm-midnight)</li>
                  </ul>
                </div>
              </div>
              
              <p className="text-sm text-red-600">
                <strong>Remember:</strong> Turner Frown is not a crisis service. For immediate help, 
                contact the resources above or visit your nearest A&E department.
              </p>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Info className="h-5 w-5 text-blue-600" />
                Contact & Support
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                If you have questions about our legal documents or need clarification on any points, 
                please contact us:
              </p>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <p><strong>Contact:</strong> Josh (Turner Frown)</p>
                <p><strong>Email:</strong> [josh@turnerfrown.co.uk]</p>
                <p><strong>Website:</strong> turnerfrown.co.uk</p>
              </div>
              
              <div className="space-y-2">
                <h4 className="font-semibold">For Legal Matters:</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-gray-700 ml-4">
                  <li>Provide detailed information about your concern</li>
                  <li>Include relevant dates and specific issues</li>
                  <li>Allow reasonable time for response</li>
                  <li>Consider seeking independent legal advice if needed</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Footer */}
          <div className="text-center py-8 space-y-4">
            <div className="flex justify-center gap-4">
              <Link href="/privacy-policy">
                <Button variant="outline">
                  Privacy Policy
                </Button>
              </Link>
              <Link href="/cookie-policy">
                <Button variant="outline">
                  Cookie Policy
                </Button>
              </Link>
              <Link href="/terms-and-conditions">
                <Button variant="outline">
                  Terms & Conditions
                </Button>
              </Link>
            </div>
            <Link href="/">
              <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700">
                Return to Turner Frown
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
