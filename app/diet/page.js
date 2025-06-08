'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Apple, Droplets, Clock, Users, Zap, ChefHat } from 'lucide-react';

export default function DietPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const recipes = [
    {
      id: 1,
      title: "Power Breakfast Bowl",
      category: "Breakfast",
      prepTime: "10 min",
      servings: 1,
      difficulty: "Easy",
      description: "Fuel your morning with this protein-packed bowl that keeps you satisfied for hours.",
      ingredients: [
        { item: "Greek yogurt", amount: "1 cup", category: "Protein" },
        { item: "Rolled oats", amount: "1/2 cup", category: "Carbs" },
        { item: "Mixed berries", amount: "1/2 cup", category: "Fruits" },
        { item: "Almonds", amount: "1/4 cup", category: "Healthy Fats" },
        { item: "Honey", amount: "1 tbsp", category: "Natural Sweetener" },
        { item: "Chia seeds", amount: "1 tbsp", category: "Superfoods" }
      ],
      instructions: [
        "Mix Greek yogurt with honey in a bowl",
        "Add rolled oats and chia seeds, stir well",
        "Top with fresh berries and sliced almonds",
        "Let sit for 5 minutes to allow oats to soften",
        "Enjoy immediately for best texture"
      ],
      macros: { protein: "25g", carbs: "45g", fat: "18g", calories: "420" }
    },
    {
      id: 2,
      title: "Warrior's Protein Smoothie",
      category: "Post-Workout",
      prepTime: "5 min",
      servings: 1,
      difficulty: "Easy",
      description: "The ultimate recovery drink to rebuild and refuel your muscles after intense training.",
      ingredients: [
        { item: "Protein powder", amount: "1 scoop", category: "Protein" },
        { item: "Banana", amount: "1 medium", category: "Fruits" },
        { item: "Spinach", amount: "1 cup", category: "Vegetables" },
        { item: "Almond milk", amount: "1 cup", category: "Liquid Base" },
        { item: "Peanut butter", amount: "2 tbsp", category: "Healthy Fats" },
        { item: "Ice cubes", amount: "1/2 cup", category: "Other" }
      ],
      instructions: [
        "Add all ingredients to a high-speed blender",
        "Blend on high for 60-90 seconds until smooth",
        "Check consistency and add more liquid if needed",
        "Pour into a large glass or shaker bottle",
        "Consume within 30 minutes post-workout for optimal benefits"
      ],
      macros: { protein: "35g", carbs: "32g", fat: "16g", calories: "380" }
    },
    {
      id: 3,
      title: "Champion's Chicken & Rice",
      category: "Lunch/Dinner",
      prepTime: "30 min",
      servings: 4,
      difficulty: "Medium",
      description: "A classic combination that builds champions. Simple, effective, and delicious.",
      ingredients: [
        { item: "Chicken breast", amount: "1 lb", category: "Protein" },
        { item: "Brown rice", amount: "1 cup dry", category: "Carbs" },
        { item: "Broccoli", amount: "2 cups", category: "Vegetables" },
        { item: "Olive oil", amount: "2 tbsp", category: "Healthy Fats" },
        { item: "Garlic", amount: "3 cloves", category: "Flavor" },
        { item: "Seasoning blend", amount: "2 tsp", category: "Spices" }
      ],
      instructions: [
        "Cook brown rice according to package directions",
        "Season chicken breast with spice blend",
        "Heat olive oil in a large pan over medium-high heat",
        "Cook chicken for 6-7 minutes per side until done",
        "Steam broccoli until tender-crisp",
        "Slice chicken and serve over rice with broccoli"
      ],
      macros: { protein: "42g", carbs: "38g", fat: "12g", calories: "410" }
    }
  ];

  const nutritionTips = [
    {
      title: "Hydration is King",
      description: "Drink at least 1 gallon of water daily. Your performance depends on it.",
      icon: Droplets,
      color: "from-blue-400 to-cyan-500"
    },
    {
      title: "Protein Priority",
      description: "Aim for 1g per pound of body weight. Build and maintain that muscle.",
      icon: Zap,
      color: "from-red-400 to-pink-500"
    },
    {
      title: "Meal Timing Matters",
      description: "Eat protein within 30 minutes post-workout for optimal recovery.",
      icon: Clock,
      color: "from-green-400 to-emerald-500"
    },
    {
      title: "Quality Over Quantity",
      description: "Choose whole, unprocessed foods. Your body knows the difference.",
      icon: ChefHat,
      color: "from-purple-400 to-violet-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section with Water Flow Background */}
      <section className="relative water-flow text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative container mx-auto px-4">
          <div className={`text-center max-w-4xl mx-auto transition-all duration-1000 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
            <Apple className="w-16 h-16 mx-auto mb-6 animate-bounce-gentle" />
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              NUTRITION
            </h1>
            <p className="text-xl lg:text-2xl mb-8 opacity-90">
              Fuel your body like the machine it is. Every meal is an opportunity to get stronger.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-lg">
              <div className="flex items-center gap-2">
                <ChefHat className="w-5 h-5" />
                <span>Simple Recipes</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5" />
                <span>High Protein</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                <span>Proven Results</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nutrition Tips */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <h2 className="text-4xl font-bold mb-4 text-gradient">
              Nutrition Fundamentals
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Master these basics and watch your performance skyrocket.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {nutritionTips.map((tip, index) => {
              const IconComponent = tip.icon;
              return (
                <Card key={tip.title} className={`text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 ${isVisible ? `animate-slide-up delay-${(index + 1) * 100}` : 'opacity-0'}`}>
                  <CardContent className="p-6">
                    <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${tip.color} flex items-center justify-center`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{tip.title}</h3>
                    <p className="text-gray-600">{tip.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Recipes Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <h2 className="text-4xl font-bold mb-4 text-gradient">
              Power Recipes
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Simple, effective meals that fuel champions. No complicated ingredients, just results.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {recipes.map((recipe, index) => (
              <Card key={recipe.id} className={`overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 ${isVisible ? `animate-slide-up delay-${(index + 1) * 150}` : 'opacity-0'}`}>
                <CardHeader className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-2xl mb-2">{recipe.title}</CardTitle>
                      <Badge className="bg-white/20 text-white">{recipe.category}</Badge>
                    </div>
                    <div className="text-right text-sm opacity-90">
                      <div className="flex items-center gap-1 mb-1">
                        <Clock className="w-3 h-3" />
                        {recipe.prepTime}
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="w-3 h-3" />
                        {recipe.servings} serving{recipe.servings > 1 ? 's' : ''}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <p className="text-gray-600 mb-4">{recipe.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">Macros per serving:</h4>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div>Calories: <span className="font-semibold">{recipe.macros.calories}</span></div>
                      <div>Protein: <span className="font-semibold">{recipe.macros.protein}</span></div>
                      <div>Carbs: <span className="font-semibold">{recipe.macros.carbs}</span></div>
                      <div>Fat: <span className="font-semibold">{recipe.macros.fat}</span></div>
                    </div>
                  </div>

                  <Tabs defaultValue="ingredients" className="w-full">
                    <TabsList className="grid w-full grid-cols-2">
                      <TabsTrigger value="ingredients">Ingredients</TabsTrigger>
                      <TabsTrigger value="instructions">Method</TabsTrigger>
                    </TabsList>
                    <TabsContent value="ingredients">
                      <div className="space-y-2 max-h-48 overflow-y-auto">
                        {recipe.ingredients.map((ingredient, idx) => (
                          <div key={idx} className="flex justify-between items-center py-1 border-b border-gray-100">
                            <span className="text-sm">{ingredient.item}</span>
                            <span className="text-sm font-semibold">{ingredient.amount}</span>
                          </div>
                        ))}
                      </div>
                    </TabsContent>
                    <TabsContent value="instructions">
                      <ol className="space-y-2 max-h-48 overflow-y-auto">
                        {recipe.instructions.map((step, idx) => (
                          <li key={idx} className="text-sm flex gap-2">
                            <span className="bg-purple-100 text-purple-600 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                              {idx + 1}
                            </span>
                            <span>{step}</span>
                          </li>
                        ))}
                      </ol>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className={`max-w-3xl mx-auto transition-all duration-1000 ${isVisible ? 'animate-scale-in' : 'opacity-0'}`}>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Ready to Fuel Success?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Your body is your vehicle to greatness. Start feeding it like the champion you are.
            </p>
            <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100 font-bold px-8 py-4 rounded-full shadow-lg transform hover:scale-105 transition-all duration-200">
              <Apple className="mr-2 w-5 h-5" />
              Start Eating Better
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}