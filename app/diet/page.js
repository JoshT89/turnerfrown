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
      title: "Budget Power Breakfast Bowl",
      category: "Breakfast",
      prepTime: "10 min",
      servings: 1,
      difficulty: "Easy",
      description: "A cheap and healthy breakfast using Aldi & Lidl ingredients. High protein, high fibre, and under £2 per serving!",
      ingredients: [
        { item: "Aldi Brooklea Greek Style Natural Yoghurt (500g)", amount: "150g", category: "Protein", price: "£0.89", pricePerServing: "£0.27" },
        { item: "Lidl Crownfield Porridge Oats (1kg)", amount: "50g", category: "Carbs", price: "£0.95", pricePerServing: "£0.05" },
        { item: "Aldi Bramwells Frozen Mixed Berries (1kg)", amount: "75g", category: "Fruits", price: "£2.49", pricePerServing: "£0.19" },
        { item: "Lidl Crownfield Mixed Nuts (200g)", amount: "25g", category: "Healthy Fats", price: "£1.99", pricePerServing: "£0.25" },
        { item: "Aldi Bramwells Clear Honey (340g)", amount: "15g", category: "Natural Sweetener", price: "£1.29", pricePerServing: "£0.06" },
        { item: "Lidl Crownfield Chia Seeds (200g)", amount: "10g", category: "Superfoods", price: "£1.99", pricePerServing: "£0.10" }
      ],
      instructions: [
        "Mix Greek yoghurt with honey in a bowl",
        "Add porridge oats and chia seeds, stir well",
        "Top with frozen berries (thawed or microwaved for 30 seconds) and mixed nuts",
        "Let sit for 5 minutes to allow oats to soften",
        "Enjoy immediately for best texture"
      ],
      macros: { protein: "22g", carbs: "42g", fat: "16g", calories: "380" },
      totalCost: "£1.92",
      costBreakdown: "Total cost per serving: £1.92 (vs £4-6 at cafes!)"
    },
    {
      id: 2,
      title: "Quick Turkey & Sweet Potato Bowl",
      category: "Post-Workout",
      prepTime: "15 min",
      servings: 1,
      difficulty: "Easy",
      description: "A protein-packed meal using lean turkey and sweet potato. Perfect post-workout fuel under £3!",
      ingredients: [
        { item: "Lidl Crownfield Turkey Breast Fillets (400g)", amount: "150g", category: "Protein", price: "£2.99", pricePerServing: "£1.12" },
        { item: "Aldi Bramwells Sweet Potatoes (1kg)", amount: "200g", category: "Carbs", price: "£1.29", pricePerServing: "£0.26" },
        { item: "Aldi Bramwells Frozen Broccoli (1kg)", amount: "100g", category: "Vegetables", price: "£1.49", pricePerServing: "£0.15" },
        { item: "Lidl Crownfield Olive Oil (500ml)", amount: "1 tbsp", category: "Healthy Fats", price: "£2.99", pricePerServing: "£0.06" },
        { item: "Aldi Bramwells Garlic (3 pack)", amount: "2 cloves", category: "Flavour", price: "£0.45", pricePerServing: "£0.03" },
        { item: "Lidl Crownfield Mixed Herbs (25g)", amount: "1 tsp", category: "Spices", price: "£0.85", pricePerServing: "£0.01" }
      ],
      instructions: [
        "Dice sweet potato into 1cm cubes and microwave for 4-5 minutes until tender",
        "Season turkey breast with mixed herbs and garlic",
        "Heat olive oil in a pan over medium-high heat",
        "Cook turkey for 4-5 minutes per side until golden and cooked through",
        "Steam broccoli for 3-4 minutes until bright green",
        "Slice turkey and serve over sweet potato with broccoli"
      ],
      macros: { protein: "38g", carbs: "35g", fat: "14g", calories: "420" },
      totalCost: "£2.63",
      costBreakdown: "Total cost per serving: £2.63 (vs £8-12 at meal prep services!)"
    },
    {
      id: 3,
      title: "Champion's Chicken & Couscous",
      category: "Lunch/Dinner",
      prepTime: "25 min",
      servings: 4,
      difficulty: "Medium",
      description: "A classic combination that builds champions. Simple, effective, and delicious with budget-friendly ingredients.",
      ingredients: [
        { item: "Aldi Ashfield Farm Chicken Breast Fillets (650g)", amount: "400g", category: "Protein", price: "£3.99", pricePerServing: "£2.46" },
        { item: "Lidl Crownfield Couscous (500g)", amount: "200g", category: "Carbs", price: "£1.25", pricePerServing: "£0.50" },
        { item: "Aldi Bramwells Frozen Broccoli (1kg)", amount: "300g", category: "Vegetables", price: "£1.49", pricePerServing: "£0.45" },
        { item: "Lidl Crownfield Olive Oil (500ml)", amount: "2 tbsp", category: "Healthy Fats", price: "£2.99", pricePerServing: "£0.12" },
        { item: "Aldi Bramwells Garlic (3 pack)", amount: "3 cloves", category: "Flavour", price: "£0.45", pricePerServing: "£0.05" },
        { item: "Lidl Crownfield Mixed Herbs (25g)", amount: "2 tsp", category: "Spices", price: "£0.85", pricePerServing: "£0.02" }
      ],
      instructions: [
        "Cook couscous according to package directions (usually 1:1 ratio with boiling water)",
        "Season chicken breast with mixed herbs and garlic",
        "Heat olive oil in a large pan over medium-high heat",
        "Cook chicken for 6-7 minutes per side until done",
        "Steam broccoli until tender-crisp",
        "Slice chicken and serve over couscous with broccoli"
      ],
      macros: { protein: "40g", carbs: "35g", fat: "12g", calories: "395" },
      totalCost: "£3.60",
      costBreakdown: "Total cost per serving: £3.60 (vs £10-15 at restaurants!)"
    },
    {
      id: 4,
      title: "Simple Protein Smoothie",
      category: "Post-Workout",
      prepTime: "5 min",
      servings: 1,
      difficulty: "Easy",
      description: "A quick and affordable protein smoothie using Aldi & Lidl ingredients. Perfect for post-workout recovery under £2!",
      ingredients: [
        { item: "Lidl Crownfield Whey Protein Powder (1kg)", amount: "30g", category: "Protein", price: "£19.99", pricePerServing: "£0.60" },
        { item: "Aldi Bramwells Bananas (6 pack)", amount: "1 medium", category: "Fruits", price: "£0.89", pricePerServing: "£0.15" },
        { item: "Aldi Bramwells Frozen Spinach (1kg)", amount: "50g", category: "Vegetables", price: "£1.49", pricePerServing: "£0.07" },
        { item: "Lidl Crownfield Almond Milk (1L)", amount: "250ml", category: "Liquid Base", price: "£1.25", pricePerServing: "£0.31" },
        { item: "Lidl Crownfield Peanut Butter (340g)", amount: "15g", category: "Healthy Fats", price: "£1.99", pricePerServing: "£0.09" },
        { item: "Ice cubes", amount: "6 cubes", category: "Other", price: "Free", pricePerServing: "£0.00" }
      ],
      instructions: [
        "Add almond milk and ice cubes to blender first",
        "Add frozen spinach, banana, and peanut butter",
        "Finally add protein powder on top",
        "Blend on high for 60-90 seconds until smooth",
        "Pour into a large glass and enjoy immediately"
      ],
      macros: { protein: "32g", carbs: "28g", fat: "12g", calories: "340" },
      totalCost: "£1.22",
      costBreakdown: "Total cost per serving: £1.22 (vs £4-6 at smoothie bars!)"
    },
    {
      id: 5,
      title: "Protein-Packed Scrambled Eggs",
      category: "Breakfast",
      prepTime: "12 min",
      servings: 1,
      difficulty: "Easy",
      description: "A high-protein breakfast scramble with mushrooms and spinach. Quick, healthy, and under £2 per serving!",
      ingredients: [
        { item: "Aldi Ashfield Farm Large Eggs (6 pack)", amount: "3 eggs", category: "Protein", price: "£1.25", pricePerServing: "£0.63" },
        { item: "Aldi Bramwells Mushrooms (250g)", amount: "100g", category: "Vegetables", price: "£0.89", pricePerServing: "£0.36" },
        { item: "Aldi Bramwells Frozen Spinach (1kg)", amount: "50g", category: "Vegetables", price: "£1.49", pricePerServing: "£0.07" },
        { item: "Lidl Crownfield Olive Oil (500ml)", amount: "1 tsp", category: "Healthy Fats", price: "£2.99", pricePerServing: "£0.03" },
        { item: "Aldi Bramwells Garlic (3 pack)", amount: "1 clove", category: "Flavour", price: "£0.45", pricePerServing: "£0.02" },
        { item: "Lidl Crownfield Mixed Herbs (25g)", amount: "1/2 tsp", category: "Spices", price: "£0.85", pricePerServing: "£0.01" },
        { item: "Lidl Crownfield Wholemeal Bread (800g)", amount: "1 slice", category: "Carbs", price: "£0.95", pricePerServing: "£0.12" }
      ],
      instructions: [
        "Heat olive oil in a non-stick pan over medium heat",
        "Add sliced mushrooms and garlic, cook for 3-4 minutes until golden",
        "Add frozen spinach and cook for 1-2 minutes until wilted",
        "Crack eggs into a bowl, add mixed herbs and whisk lightly",
        "Pour eggs over vegetables and scramble gently for 2-3 minutes",
        "Serve hot with toasted wholemeal bread"
      ],
      macros: { protein: "24g", carbs: "18g", fat: "16g", calories: "320" },
      totalCost: "£1.24",
      costBreakdown: "Total cost per serving: £1.24 (vs £6-8 at cafes!)"
    },
    {
      id: 6,
      title: "Healthy Snack Alternatives",
      category: "Snacks",
      prepTime: "5 min",
      servings: 1,
      difficulty: "Easy",
      description: "Delicious healthy snacks to replace chocolate, crisps, and other unhealthy treats. Sweet and savoury options under £1!",
      ingredients: [
        { item: "Aldi Brooklea Greek Style Natural Yoghurt (500g)", amount: "150g", category: "Protein", price: "£0.89", pricePerServing: "£0.27" },
        { item: "Lidl Crownfield Honey Nut Cereal (500g)", amount: "30g", category: "Carbs", price: "£1.25", pricePerServing: "£0.08" },
        { item: "Aldi Bramwells Mixed Berries (1kg frozen)", amount: "50g", category: "Fruits", price: "£2.49", pricePerServing: "£0.12" },
        { item: "Lidl Crownfield Mixed Nuts (200g)", amount: "25g", category: "Healthy Fats", price: "£1.99", pricePerServing: "£0.25" },
        { item: "Aldi Ashfield Farm Chicken Breast Strips (400g)", amount: "50g", category: "Protein", price: "£3.99", pricePerServing: "£0.50" },
        { item: "Lidl Crownfield Popcorn Kernels (500g)", amount: "30g", category: "Snacks", price: "£0.95", pricePerServing: "£0.06" },
        { item: "Aldi Bramwells Dark Chocolate (70% cocoa, 100g)", amount: "15g", category: "Sweet Treat", price: "£1.29", pricePerServing: "£0.19" }
      ],
      instructions: [
        "Sweet Option 1: Mix yoghurt with berries and honey cereal for a protein-packed parfait",
        "Sweet Option 2: Melt dark chocolate and drizzle over mixed nuts for healthy chocolate nuts",
        "Savory Option 1: Air-fry chicken strips with mixed herbs for protein bites",
        "Savory Option 2: Pop popcorn kernels and season with mixed herbs instead of salt",
        "Quick Option: Grab a handful of mixed nuts and berries for instant energy",
        "All snacks are ready in under 5 minutes and much healthier than processed treats"
      ],
      macros: { protein: "18g", carbs: "25g", fat: "14g", calories: "280" },
      totalCost: "£1.47",
      costBreakdown: "Total cost per serving: £1.47 (vs £3-5 for unhealthy snacks!)"
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
      <section className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-20">
        <div className="container mx-auto px-4">
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
              Simple, effective meals that fuel champions. No complicated ingredients, just results. Used Aldi and Lidl ingredients
               as suggested by the Aldi and Lidl websites with rough prices. Use common sense when cooking or ask a professional. 
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
                            <div className="flex-1">
                              <span className="text-sm">{ingredient.item}</span>
                              {ingredient.price && (
                                <div className="text-xs text-gray-500">
                                  {ingredient.price} • {ingredient.pricePerServing} per serving
                                </div>
                              )}
                            </div>
                            <span className="text-sm font-semibold">{ingredient.amount}</span>
                          </div>
                        ))}
                        {recipe.totalCost && (
                          <div className="mt-3 p-2 bg-green-50 border border-green-200 rounded">
                            <div className="text-sm font-semibold text-green-800">{recipe.costBreakdown}</div>
                          </div>
                        )}
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
            <Button 
              size="lg" 
              className="bg-white text-green-600 hover:bg-gray-100 font-bold px-8 py-4 rounded-full shadow-lg transform hover:scale-105 transition-all duration-200"
              onClick={() => window.open('https://www.nutrition.org.uk/creating-a-healthy-diet/eating-healthily-on-a-budget/', '_blank')}
            >
              <Apple className="mr-2 w-5 h-5" />
              Start Eating Better
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}