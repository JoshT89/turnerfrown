'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, FileText, AlertTriangle, Shield, Heart, Scale, Info } from 'lucide-react';

export default function TermsAndConditions() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const lastUpdated = "December 2024";

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
              Terms and Conditions
            </h1>
            <p className="text-lg text-gray-600">
              The rules and guidelines for using Turner Frown
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Last updated: {lastUpdated}
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {/* Important Notice */}
          <Card className="border-red-200 bg-red-50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-red-800">
                <AlertTriangle className="h-5 w-5 text-red-600" />
                ⚠️ IMPORTANT NOTICE
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <p className="text-red-800 font-semibold">
                  Turner Frown is a personal platform sharing Josh's personal experiences and journey. 
                  This website is NOT a substitute for professional medical, mental health, or fitness advice.
                </p>
                <ul className="list-disc list-inside space-y-1 text-red-700 ml-4">
                  <li>We are NOT medical professionals, therapists, or certified fitness trainers</li>
                  <li>All content is based on personal experience and should not be considered medical advice</li>
                  <li>Always consult qualified healthcare professionals for medical concerns</li>
                  <li>Use common sense and seek professional guidance when needed</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Introduction */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-blue-600" />
                Introduction
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                Welcome to Turner Frown ("we," "our," or "us"). These Terms and Conditions govern your use of 
                our website turnerfrown.com and any related services.
              </p>
              <p>
                By accessing or using our website, you agree to be bound by these Terms and Conditions. 
                If you disagree with any part of these terms, please do not use our website.
              </p>
              <p>
                <strong>About Turner Frown:</strong> This is a personal platform created by Josh to share his 
                experiences with fitness, diet, and mental health. The content reflects personal journeys and 
                should be viewed as inspirational rather than prescriptive.
              </p>
            </CardContent>
          </Card>

          {/* Service Description */}
          <Card>
            <CardHeader>
              <CardTitle>What We Provide</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>Turner Frown offers the following content and services:</p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-gradient-to-br from-yellow-50 to-orange-50 rounded-lg">
                  <h4 className="font-semibold text-yellow-800 mb-2">Fitness Guidance</h4>
                  <p className="text-sm text-yellow-700">
                    Personal workout routines and fitness experiences that helped Josh
                  </p>
                </div>
                <div className="text-center p-4 bg-gradient-to-br from-green-50 to-blue-50 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2">Diet Information</h4>
                  <p className="text-sm text-green-700">
                    Personal nutrition experiences and meal planning approaches
                  </p>
                </div>
                <div className="text-center p-4 bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg">
                  <h4 className="font-semibold text-purple-800 mb-2">Mental Health Support</h4>
                  <p className="text-sm text-purple-700">
                    Personal journey through anxiety and mental health challenges
                  </p>
                </div>
              </div>
              <p className="text-sm text-gray-600 mt-4">
                <strong>Remember:</strong> All content is based on personal experience and should be used 
                as inspiration, not as professional advice.
              </p>
            </CardContent>
          </Card>

          {/* Medical Disclaimer */}
          <Card className="border-orange-200 bg-orange-50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-orange-800">
                <Heart className="h-5 w-5 text-orange-600" />
                Medical and Health Disclaimer
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-orange-800 font-semibold">
                The information provided on Turner Frown is for general informational and educational purposes only.
              </p>
              <div className="space-y-3">
                <h4 className="font-semibold text-orange-700">Not Medical Advice</h4>
                <ul className="list-disc list-inside space-y-1 text-orange-700 ml-4">
                  <li>We are NOT medical professionals, doctors, or healthcare providers</li>
                  <li>Content is NOT intended to diagnose, treat, cure, or prevent any disease</li>
                  <li>Information should NOT replace professional medical consultation</li>
                  <li>Always consult qualified healthcare professionals for medical decisions</li>
                </ul>
                
                <h4 className="font-semibold text-orange-700">Mental Health Disclaimer</h4>
                <ul className="list-disc list-inside space-y-1 text-orange-700 ml-4">
                  <li>We are NOT licensed therapists, psychologists, or mental health professionals</li>
                  <li>Personal experiences shared are NOT professional mental health treatment</li>
                  <li>If you're experiencing mental health crisis, contact emergency services immediately</li>
                  <li>Seek professional help for serious mental health concerns</li>
                </ul>
                
                <h4 className="font-semibold text-orange-700">Fitness and Diet Disclaimer</h4>
                <ul className="list-disc list-inside space-y-1 text-orange-700 ml-4">
                  <li>We are NOT certified personal trainers or nutritionists</li>
                  <li>Exercise and diet advice is based on personal experience only</li>
                  <li>Consult fitness professionals before starting new exercise programs</li>
                  <li>Consult nutritionists for personalized dietary advice</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* User Responsibilities */}
          <Card>
            <CardHeader>
              <CardTitle>Your Responsibilities</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>By using our website, you agree to:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li><strong>Use Common Sense:</strong> Apply critical thinking to all information provided</li>
                <li><strong>Seek Professional Advice:</strong> Consult qualified professionals for serious concerns</li>
                <li><strong>Personal Responsibility:</strong> Take responsibility for your own health and wellbeing</li>
                <li><strong>Respectful Behavior:</strong> Be respectful in any interactions or comments</li>
                <li><strong>Age Requirements:</strong> Be at least 16 years old to use this website</li>
                <li><strong>Legal Compliance:</strong> Use the website in accordance with applicable laws</li>
              </ul>
            </CardContent>
          </Card>

          {/* Limitation of Liability */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Scale className="h-5 w-5 text-gray-600" />
                Limitation of Liability
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <p>
                  To the maximum extent permitted by law, Turner Frown and Josh shall not be liable for any 
                  direct, indirect, incidental, special, consequential, or punitive damages arising from your 
                  use of this website.
                </p>
                
                <h4 className="font-semibold">What We're Not Liable For:</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>Any injuries or health issues resulting from following content on this site</li>
                  <li>Financial losses or damages of any kind</li>
                  <li>Emotional distress or mental health complications</li>
                  <li>Any actions taken based on information provided on this website</li>
                  <li>Third-party content or external links</li>
                </ul>
                
                <p className="text-sm text-gray-600">
                  <strong>Maximum Liability:</strong> Our total liability to you for any claims shall not exceed 
                  the amount you paid to access our services (if any), or £50, whichever is greater.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Intellectual Property */}
          <Card>
            <CardHeader>
              <CardTitle>Intellectual Property Rights</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                All content on Turner Frown, including but not limited to text, graphics, images, logos, 
                and software, is the property of Josh and is protected by copyright and other intellectual property laws.
              </p>
              
              <h4 className="font-semibold">What You Can Do:</h4>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                <li>Read and use content for personal, non-commercial purposes</li>
                <li>Share content with proper attribution to Turner Frown</li>
                <li>Use content as inspiration for your own personal development</li>
              </ul>
              
              <h4 className="font-semibold">What You Cannot Do:</h4>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                <li>Copy, reproduce, or distribute content without permission</li>
                <li>Use content for commercial purposes</li>
                <li>Modify or create derivative works</li>
                <li>Remove copyright notices or attribution</li>
              </ul>
              
              <p className="text-sm text-gray-600">
                <strong>Fair Use:</strong> You may quote small portions of our content for educational or 
                review purposes, provided you give proper credit to Turner Frown.
              </p>
            </CardContent>
          </Card>

          {/* User-Generated Content */}
          <Card>
            <CardHeader>
              <CardTitle>User-Generated Content</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                If you submit comments, feedback, or other content to our website, you retain ownership 
                of your content but grant us a license to use it.
              </p>
              
              <h4 className="font-semibold">By submitting content, you:</h4>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                <li>Grant us a worldwide, non-exclusive license to use your content</li>
                <li>Confirm you have the right to share this content</li>
                <li>Agree not to submit harmful, offensive, or illegal content</li>
                <li>Understand we may remove content at our discretion</li>
              </ul>
              
              <p className="text-sm text-gray-600">
                <strong>Content Standards:</strong> All user-generated content must be respectful, 
                non-harmful, and comply with applicable laws.
              </p>
            </CardContent>
          </Card>

          {/* External Links */}
          <Card>
            <CardHeader>
              <CardTitle>External Links and Third-Party Content</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                Our website may contain links to external websites and third-party content. We do not 
                endorse, control, or take responsibility for these external resources.
              </p>
              
              <h4 className="font-semibold">External Links Include:</h4>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                <li>Mental health resources and crisis helplines</li>
                <li>Fitness and nutrition websites</li>
                <li>Professional organizations and services</li>
                <li>Social media platforms</li>
              </ul>
              
              <p className="text-sm text-gray-600">
                <strong>Disclaimer:</strong> We provide these links for informational purposes only. 
                You access external websites at your own risk and should review their terms and policies.
              </p>
            </CardContent>
          </Card>

          {/* Privacy and Data */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-blue-600" />
                Privacy and Data Protection
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                Your privacy is important to us. Our collection and use of personal information is 
                governed by our Privacy Policy.
              </p>
              <p>
                By using our website, you consent to the collection and use of information as described 
                in our Privacy Policy, which is incorporated into these Terms and Conditions.
              </p>
              <p className="text-sm text-gray-600">
                <strong>Data Protection:</strong> We comply with UK data protection laws, including the 
                UK GDPR and Data Protection Act 2018.
              </p>
            </CardContent>
          </Card>

          {/* Termination */}
          <Card>
            <CardHeader>
              <CardTitle>Termination of Access</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                We reserve the right to terminate or suspend your access to our website at any time, 
                without prior notice, for any reason, including but not limited to:
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                <li>Violation of these Terms and Conditions</li>
                <li>Inappropriate or harmful behavior</li>
                <li>Technical issues or website maintenance</li>
                <li>Legal or regulatory requirements</li>
              </ul>
              <p>
                Upon termination, your right to use the website will cease immediately, and we may 
                delete any user-generated content you have submitted.
              </p>
            </CardContent>
          </Card>

          {/* Changes to Terms */}
          <Card>
            <CardHeader>
              <CardTitle>Changes to These Terms</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                We may update these Terms and Conditions from time to time to reflect changes in our 
                practices, legal requirements, or website functionality.
              </p>
              <p>
                We will notify you of any material changes by:
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                <li>Posting the updated terms on this page</li>
                <li>Updating the "Last updated" date</li>
                <li>Providing notice on our website homepage</li>
              </ul>
              <p>
                Your continued use of the website after any changes constitutes acceptance of the new terms.
              </p>
            </CardContent>
          </Card>

          {/* Governing Law */}
          <Card>
            <CardHeader>
              <CardTitle>Governing Law and Jurisdiction</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                These Terms and Conditions are governed by and construed in accordance with the laws of 
                England and Wales.
              </p>
              <p>
                Any disputes arising from these terms or your use of the website shall be subject to 
                the exclusive jurisdiction of the courts of England and Wales.
              </p>
              <p className="text-sm text-gray-600">
                <strong>Note:</strong> If you are a consumer, you may have additional rights under 
                consumer protection laws that cannot be excluded by these terms.
              </p>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Info className="h-5 w-5 text-blue-600" />
                Contact Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                If you have any questions about these Terms and Conditions, please contact us:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p><strong>Contact:</strong> Josh (Turner Frown)</p>
                <p><strong>Email:</strong> [josh@turnerfrown.co.uk]</p>
                <p><strong>Website:</strong> turnerfrown.co.uk</p>
              </div>
              <p className="text-sm text-gray-600">
                For legal matters, please provide detailed information about your concern so we can 
                address it appropriately.
              </p>
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
