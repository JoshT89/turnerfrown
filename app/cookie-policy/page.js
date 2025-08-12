'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Cookie, Settings, Shield, Info, AlertTriangle } from 'lucide-react';

export default function CookiePolicy() {
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
              Cookie Policy
            </h1>
            <p className="text-lg text-gray-600">
              How we use cookies and tracking technologies on Turner Frown
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Last updated: {lastUpdated}
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {/* Introduction */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Cookie className="h-5 w-5 text-orange-600" />
                What Are Cookies?
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                Cookies are small text files that are placed on your device when you visit our website. 
                They help us provide you with a better experience and understand how you use our site.
              </p>
              <p>
                <strong>Important:</strong> Turner Frown is a personal platform sharing Josh's experiences. 
                We use cookies responsibly and only for essential website functionality and basic analytics.
              </p>
            </CardContent>
          </Card>

          {/* Cookie Categories */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Settings className="h-5 w-5 text-blue-600" />
                Types of Cookies We Use
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              
              {/* Essential Cookies */}
              <div className="border-l-4 border-green-500 pl-4">
                <h4 className="font-semibold text-lg text-green-700 mb-2">🍪 Essential Cookies</h4>
                <p className="text-gray-700 mb-2">
                  These cookies are necessary for the website to function properly. They cannot be disabled.
                </p>
                <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 ml-4">
                  <li>Session management and security</li>
                  <li>Basic website functionality</li>
                  <li>User preferences and settings</li>
                </ul>
                <p className="text-xs text-gray-500 mt-2">
                  <strong>Duration:</strong> Session or up to 1 year
                </p>
              </div>

              {/* Analytics Cookies */}
              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-semibold text-lg text-blue-700 mb-2">📊 Analytics Cookies</h4>
                <p className="text-gray-700 mb-2">
                  These cookies help us understand how visitors use our website so we can improve it.
                </p>
                <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 ml-4">
                  <li>Google Analytics (anonymous usage data)</li>
                  <li>Page performance and user behavior</li>
                  <li>Website improvement insights</li>
                </ul>
                <p className="text-xs text-gray-500 mt-2">
                  <strong>Duration:</strong> Up to 26 months
                </p>
              </div>

              {/* Preference Cookies */}
              <div className="border-l-4 border-purple-500 pl-4">
                <h4 className="font-semibold text-lg text-purple-700 mb-2">⚙️ Preference Cookies</h4>
                <p className="text-gray-700 mb-2">
                  These cookies remember your choices and preferences to enhance your experience.
                </p>
                <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 ml-4">
                  <li>Language and region preferences</li>
                  <li>Cookie consent choices</li>
                  <li>User interface customizations</li>
                </ul>
                <p className="text-xs text-gray-500 mt-2">
                  <strong>Duration:</strong> Up to 1 year
                </p>
              </div>

            </CardContent>
          </Card>

          {/* Specific Cookies */}
          <Card>
            <CardHeader>
              <CardTitle>Detailed Cookie Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="border border-gray-300 px-4 py-2 text-left">Cookie Name</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Purpose</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Duration</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Type</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-mono text-sm">cookie_consent</td>
                      <td className="border border-gray-300 px-4 py-2">Remembers your cookie preferences</td>
                      <td className="border border-gray-300 px-4 py-2">1 year</td>
                      <td className="border border-gray-300 px-4 py-2">Essential</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-mono text-sm">_ga</td>
                      <td className="border border-gray-300 px-4 py-2">Google Analytics - distinguishes unique users</td>
                      <td className="border border-gray-300 px-4 py-2">2 years</td>
                      <td className="border border-gray-300 px-4 py-2">Analytics</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-mono text-sm">_gid</td>
                      <td className="border border-gray-300 px-4 py-2">Google Analytics - distinguishes unique users</td>
                      <td className="border border-gray-300 px-4 py-2">24 hours</td>
                      <td className="border border-gray-300 px-4 py-2">Analytics</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-mono text-sm">_gat</td>
                      <td className="border border-gray-300 px-4 py-2">Google Analytics - throttles request rate</td>
                      <td className="border border-gray-300 px-4 py-2">1 minute</td>
                      <td className="border border-gray-300 px-4 py-2">Analytics</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          {/* Third-Party Cookies */}
          <Card>
            <CardHeader>
              <CardTitle>Third-Party Cookies</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                Some cookies on our website are set by third-party services that we use to enhance functionality:
              </p>
              
              <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
                <h4 className="font-semibold text-blue-800 mb-2">Google Analytics</h4>
                <p className="text-blue-700 text-sm mb-2">
                  We use Google Analytics to understand how visitors use our website. This helps us improve 
                  the content and user experience.
                </p>
                <ul className="list-disc list-inside space-y-1 text-sm text-blue-600 ml-4">
                  <li>Anonymous usage statistics</li>
                  <li>Page performance metrics</li>
                  <li>User behavior insights</li>
                </ul>
                <p className="text-xs text-blue-500 mt-2">
                  <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" 
                     className="hover:underline">View Google's Privacy Policy</a>
                </p>
              </div>

              <p className="text-sm text-gray-600">
                These third-party services have their own privacy policies and cookie practices. 
                We encourage you to review them for more information.
              </p>
            </CardContent>
          </Card>

          {/* Cookie Consent */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-green-600" />
                Cookie Consent and Control
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                When you first visit our website, you'll see a cookie consent banner that allows you to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li><strong>Accept all cookies:</strong> Including analytics and preference cookies</li>
                <li><strong>Accept essential only:</strong> Only necessary cookies for website functionality</li>
                <li><strong>Customize preferences:</strong> Choose which types of cookies to accept</li>
              </ul>
              
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                <h4 className="font-semibold text-yellow-800 mb-2">Managing Your Cookie Preferences</h4>
                <p className="text-yellow-700 text-sm">
                  You can change your cookie preferences at any time by clicking the cookie settings link 
                  in our footer or by clearing your browser cookies.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Browser Settings */}
          <Card>
            <CardHeader>
              <CardTitle>Managing Cookies in Your Browser</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                You can control and manage cookies through your browser settings. Here's how to access 
                cookie settings in popular browsers:
              </p>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <h4 className="font-semibold">Chrome</h4>
                  <p className="text-sm text-gray-600">
                    Settings → Privacy and security → Cookies and other site data
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold">Firefox</h4>
                  <p className="text-sm text-gray-600">
                    Options → Privacy & Security → Cookies and Site Data
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold">Safari</h4>
                  <p className="text-sm text-gray-600">
                    Preferences → Privacy → Manage Website Data
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold">Edge</h4>
                  <p className="text-sm text-gray-600">
                    Settings → Cookies and site permissions → Cookies and site data
                  </p>
                </div>
              </div>
              
              <p className="text-sm text-gray-600">
                <strong>Note:</strong> Disabling certain cookies may affect website functionality and user experience.
              </p>
            </CardContent>
          </Card>

          {/* Impact of Disabling */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-orange-600" />
                Impact of Disabling Cookies
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-red-700">Essential Cookies Disabled</h4>
                    <p className="text-sm text-gray-600">
                      Website may not function properly, login issues, preferences not saved
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-yellow-700">Analytics Cookies Disabled</h4>
                    <p className="text-sm text-gray-600">
                      We won't be able to improve the website based on usage patterns
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-green-700">Preference Cookies Disabled</h4>
                    <p className="text-sm text-gray-600">
                      Your settings and preferences won't be remembered between visits
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Updates and Changes */}
          <Card>
            <CardHeader>
              <CardTitle>Updates to This Cookie Policy</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                We may update this Cookie Policy from time to time to reflect changes in our practices 
                or for other operational, legal, or regulatory reasons.
              </p>
              <p>
                We will notify you of any material changes by posting the new Cookie Policy on this page 
                and updating the "Last updated" date.
              </p>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Info className="h-5 w-5 text-blue-600" />
                Questions About Cookies?
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                If you have any questions about our use of cookies or this Cookie Policy, please contact us:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p><strong>Contact:</strong> Josh (Turner Frown)</p>
                <p><strong>Email:</strong> [josh@turnerfrown.co.uk]</p>
                <p><strong>Website:</strong> turnerfrown.co.uk</p>
              </div>
              <p className="text-sm text-gray-600">
                You can also learn more about cookies at{' '}
                <a href="https://www.allaboutcookies.org" target="_blank" rel="noopener noreferrer" 
                   className="text-blue-600 hover:underline">allaboutcookies.org</a>
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
