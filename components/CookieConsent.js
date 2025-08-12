'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Cookie, Settings, X, Check, AlertTriangle, Info } from 'lucide-react';
import Link from 'next/link';

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [cookiePreferences, setCookiePreferences] = useState({
    essential: true, // Always true, cannot be disabled
    analytics: false,
    preferences: false
  });

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem('cookie_consent');
    if (!consent) {
      setShowBanner(true);
    } else {
      const preferences = JSON.parse(consent);
      setCookiePreferences(preferences);
    }
  }, []);

  const acceptAll = () => {
    const preferences = {
      essential: true,
      analytics: true,
      preferences: true
    };
    setCookiePreferences(preferences);
    localStorage.setItem('cookie_consent', JSON.stringify(preferences));
    setShowBanner(false);
    
    // Enable Google Analytics if it exists
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('consent', 'update', {
        'analytics_storage': 'granted'
      });
    }
  };

  const acceptEssential = () => {
    const preferences = {
      essential: true,
      analytics: false,
      preferences: false
    };
    setCookiePreferences(preferences);
    localStorage.setItem('cookie_consent', JSON.stringify(preferences));
    setShowBanner(false);
    
    // Disable Google Analytics
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('consent', 'update', {
        'analytics_storage': 'denied'
      });
    }
  };

  const savePreferences = () => {
    localStorage.setItem('cookie_consent', JSON.stringify(cookiePreferences));
    setShowBanner(false);
    setShowSettings(false);
    
    // Update Google Analytics consent based on preferences
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('consent', 'update', {
        'analytics_storage': cookiePreferences.analytics ? 'granted' : 'denied'
      });
    }
  };

  const togglePreference = (type) => {
    if (type === 'essential') return; // Essential cookies cannot be disabled
    
    setCookiePreferences(prev => ({
      ...prev,
      [type]: !prev[type]
    }));
  };

  if (!showBanner) return null;

  return (
    <>
      {/* Main Cookie Banner */}
      {!showSettings && (
        <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-white border-t border-gray-200 shadow-lg">
          <Card className="max-w-4xl mx-auto">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <Cookie className="h-8 w-8 text-orange-600" />
                </div>
                
                <div className="flex-1 space-y-3">
                  <div className="flex items-start justify-between">
                    <h3 className="text-lg font-semibold text-gray-900">
                      We use cookies to enhance your experience
                    </h3>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setShowBanner(false)}
                      className="text-gray-400 hover:text-gray-600"
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                  
                  <p className="text-gray-600">
                    Turner Frown uses cookies to improve website functionality and provide analytics. 
                    We respect your privacy and only use essential cookies by default.
                  </p>
                  
                  <div className="flex flex-wrap gap-3">
                    <Button
                      onClick={acceptEssential}
                      variant="outline"
                      className="border-gray-300 hover:border-gray-400"
                    >
                      Accept Essential Only
                    </Button>
                    
                    <Button
                      onClick={acceptAll}
                      className="bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700"
                    >
                      Accept All Cookies
                    </Button>
                    
                    <Button
                      onClick={() => setShowSettings(true)}
                      variant="ghost"
                      className="text-gray-600 hover:text-gray-800"
                    >
                      <Settings className="h-4 w-4 mr-2" />
                      Customize
                    </Button>
                  </div>
                  
                  <p className="text-xs text-gray-500">
                    By continuing to use this site, you consent to our use of cookies. 
                    Learn more in our{' '}
                    <Link href="/cookie-policy" className="text-blue-600 hover:underline">
                      Cookie Policy
                    </Link>.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Cookie Settings Modal */}
      {showSettings && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
          <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-gray-900">
                  Cookie Preferences
                </h3>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowSettings(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>

              <div className="space-y-6">
                {/* Essential Cookies */}
                <div className="border-l-4 border-green-500 pl-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold text-green-700">🍪 Essential Cookies</h4>
                      <p className="text-sm text-green-600">
                        Required for the website to function properly
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-green-600" />
                      <span className="text-sm text-green-600 font-medium">Always Active</span>
                    </div>
                  </div>
                  <p className="text-xs text-gray-500 mt-2">
                    Session management, security, and basic functionality
                  </p>
                </div>

                {/* Analytics Cookies */}
                <div className="border-l-4 border-blue-500 pl-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold text-blue-700">📊 Analytics Cookies</h4>
                      <p className="text-sm text-blue-600">
                        Help us understand how visitors use our website
                      </p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={cookiePreferences.analytics}
                        onChange={() => togglePreference('analytics')}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>
                  <p className="text-xs text-gray-500 mt-2">
                    Google Analytics for website improvement insights
                  </p>
                </div>

                {/* Preference Cookies */}
                <div className="border-l-4 border-purple-500 pl-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold text-purple-700">⚙️ Preference Cookies</h4>
                      <p className="text-sm text-purple-600">
                        Remember your choices and preferences
                      </p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={cookiePreferences.preferences}
                        onChange={() => togglePreference('preferences')}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
                    </label>
                  </div>
                  <p className="text-xs text-gray-500 mt-2">
                    Language preferences, cookie consent choices, and UI customizations
                  </p>
                </div>

                {/* Information */}
                <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded">
                  <div className="flex items-start gap-3">
                    <Info className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <div className="text-sm text-blue-800">
                      <p className="font-medium mb-1">About Your Choices</p>
                      <p>
                        You can change these preferences at any time. Essential cookies are always active 
                        as they're necessary for the website to function. Analytics and preference cookies 
                        help us improve your experience but are optional.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 pt-4">
                  <Button
                    onClick={savePreferences}
                    className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700"
                  >
                    Save Preferences
                  </Button>
                  
                  <Button
                    onClick={() => setShowSettings(false)}
                    variant="outline"
                    className="flex-1"
                  >
                    Cancel
                  </Button>
                </div>

                <p className="text-xs text-gray-500 text-center">
                  Learn more about our cookie usage in our{' '}
                  <Link href="/cookie-policy" className="text-blue-600 hover:underline">
                    Cookie Policy
                  </Link>.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  );
}
