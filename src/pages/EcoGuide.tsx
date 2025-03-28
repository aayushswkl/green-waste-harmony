
import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import { Recycle, Trash2, LeafyGreen, AlertTriangle, PackagePlus, Loader2, BatteryCharging, Newspaper, Utensils, Bottles, Coffee, Gift } from 'lucide-react';
import { Button } from '@/components/ui/button';

const wasteTypes = [
  {
    id: 'recyclables',
    name: 'Recyclables',
    icon: Recycle,
    color: 'text-blue-500',
    bgColor: 'bg-blue-100',
    description: 'Materials that can be processed and reused',
    items: [
      { icon: Newspaper, name: 'Paper & Cardboard', examples: 'Newspapers, magazines, office paper, cardboard boxes, paper bags' },
      { icon: Bottles, name: 'Glass', examples: 'Bottles, jars, clear or colored glass containers' },
      { icon: PackagePlus, name: 'Plastic', examples: 'Bottles, containers with recycling symbols 1-7, clean food containers' },
      { icon: Coffee, name: 'Metal', examples: 'Aluminum cans, steel cans, clean foil, metal lids' },
    ],
    tips: [
      'Rinse containers before recycling',
      'Remove plastic caps from bottles',
      'Flatten cardboard boxes',
      'Keep materials dry and clean',
    ]
  },
  {
    id: 'organic',
    name: 'Organic Waste',
    icon: LeafyGreen,
    color: 'text-green-500',
    bgColor: 'bg-green-100',
    description: 'Biodegradable materials that can be composted',
    items: [
      { icon: Utensils, name: 'Food Scraps', examples: 'Fruit & vegetable scraps, eggshells, coffee grounds, tea bags' },
      { icon: LeafyGreen, name: 'Garden Waste', examples: 'Grass clippings, leaves, small branches, plant trimmings' },
      { icon: Gift, name: 'Compostable Products', examples: 'Uncoated paper plates, certified compostable bags, wooden utensils' },
    ],
    tips: [
      'Avoid putting meat, dairy, or oily foods in home compost',
      'Mix green (fresh) materials with brown (dry) materials',
      'Break down large pieces to speed decomposition',
      'Keep compost moist but not soggy',
    ]
  },
  {
    id: 'general',
    name: 'General Waste',
    icon: Trash2,
    color: 'text-red-500',
    bgColor: 'bg-red-100',
    description: 'Non-recyclable and non-hazardous waste for landfill',
    items: [
      { icon: Trash2, name: 'Non-Recyclable Plastics', examples: 'Plastic wrap, bubble wrap, styrofoam, plastic bags' },
      { icon: Trash2, name: 'Contaminated Paper', examples: 'Used paper towels, napkins, tissues' },
      { icon: Trash2, name: 'Miscellaneous', examples: 'Broken ceramics, diapers, hygiene products, vacuum cleaner contents' },
    ],
    tips: [
      'Try to minimize general waste through reuse and reduction',
      'Use reusable alternatives when possible',
      'Check for recycling symbols before discarding',
      'Consider donating usable items instead of discarding',
    ]
  },
  {
    id: 'hazardous',
    name: 'Hazardous Waste',
    icon: AlertTriangle,
    color: 'text-amber-500',
    bgColor: 'bg-amber-100',
    description: 'Waste requiring special handling due to toxicity',
    items: [
      { icon: BatteryCharging, name: 'Electronics', examples: 'Batteries, computers, phones, televisions, electronic devices' },
      { icon: AlertTriangle, name: 'Chemicals', examples: 'Paint, solvents, pesticides, cleaning products' },
      { icon: AlertTriangle, name: 'Medical Waste', examples: 'Expired medications, syringes, first aid items' },
      { icon: Loader2, name: 'Other', examples: 'Light bulbs, thermometers, aerosol cans, automotive fluids' },
    ],
    tips: [
      'Never mix hazardous materials together',
      'Keep in original containers with labels',
      'Take to designated hazardous waste collection points',
      'Check with local authorities for proper disposal methods',
    ]
  },
];

const reductionTips = [
  {
    title: 'Reduce Single-Use Plastics',
    description: 'Replace disposable items with reusable alternatives like water bottles, grocery bags, and food containers.',
    icon: Bottles,
    color: 'text-blue-500',
    bgColor: 'bg-blue-100',
  },
  {
    title: 'Smart Food Shopping',
    description: 'Plan meals, buy only what you need, and store food properly to prevent waste. Use shopping lists to avoid impulse purchases.',
    icon: Utensils,
    color: 'text-green-500',
    bgColor: 'bg-green-100',
  },
  {
    title: 'Choose Minimal Packaging',
    description: 'Select products with less packaging or packaging that can be easily recycled. Buy in bulk when appropriate.',
    icon: Gift,
    color: 'text-purple-500',
    bgColor: 'bg-purple-100',
  },
  {
    title: 'Repair and Reuse',
    description: 'Fix items instead of replacing them, repurpose old items for new uses, and donate usable goods instead of discarding them.',
    icon: Recycle,
    color: 'text-amber-500',
    bgColor: 'bg-amber-100',
  },
  {
    title: 'Go Digital',
    description: 'Reduce paper waste by opting for digital receipts, bills, and documents. Cancel unwanted mail and catalogs.',
    icon: Newspaper,
    color: 'text-indigo-500',
    bgColor: 'bg-indigo-100',
  },
  {
    title: 'Compost Organic Waste',
    description: 'Turn food scraps and yard waste into valuable compost for your garden, reducing methane emissions from landfills.',
    icon: LeafyGreen,
    color: 'text-green-700',
    bgColor: 'bg-green-200',
  },
];

const EcoGuide = () => {
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-3xl font-bold text-green-800 mb-4">Eco Guide</h1>
          <p className="text-muted-foreground">
            Learn about proper waste segregation, recycling practices, and tips to reduce your environmental footprint.
          </p>
        </div>
        
        <Tabs defaultValue="waste-segregation" className="mb-12">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="waste-segregation">Waste Segregation</TabsTrigger>
            <TabsTrigger value="reduction-tips">Waste Reduction Tips</TabsTrigger>
          </TabsList>
          
          <TabsContent value="waste-segregation" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {wasteTypes.map((wasteType) => (
                <Card key={wasteType.id} className="overflow-hidden">
                  <CardHeader className={`${wasteType.bgColor}`}>
                    <div className="flex items-center gap-2">
                      <wasteType.icon className={`h-6 w-6 ${wasteType.color}`} />
                      <CardTitle>{wasteType.name}</CardTitle>
                    </div>
                    <CardDescription className="text-gray-700">{wasteType.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-3">Common Items:</h3>
                    <div className="space-y-3">
                      {wasteType.items.map((item, index) => (
                        <div key={index} className="flex gap-2">
                          <item.icon className={`h-5 w-5 flex-shrink-0 ${wasteType.color}`} />
                          <div>
                            <h4 className="font-medium text-sm">{item.name}</h4>
                            <p className="text-xs text-muted-foreground">{item.examples}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <Separator className="my-4" />
                    
                    <h3 className="font-semibold mb-3">Handling Tips:</h3>
                    <ul className="space-y-2 text-sm">
                      {wasteType.tips.map((tip, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <div className={`w-1.5 h-1.5 rounded-full ${wasteType.color.replace('text-', 'bg-')}`}></div>
                          <span>{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="reduction-tips" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {reductionTips.map((tip, index) => (
                <Card key={index} className="h-full flex flex-col">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-full ${tip.bgColor} flex items-center justify-center`}>
                        <tip.icon className={`h-5 w-5 ${tip.color}`} />
                      </div>
                      <CardTitle className="text-lg">{tip.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-muted-foreground">{tip.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <Card className="mt-8 bg-eco-gradient border-0">
              <CardContent className="p-8">
                <div className="max-w-3xl mx-auto text-center">
                  <h3 className="text-2xl font-bold text-green-900 mb-4">Remember the 5 Rs of Waste Management</h3>
                  <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mt-8">
                    <div className="flex flex-col items-center p-4 bg-white/70 backdrop-blur-sm rounded-lg">
                      <div className="font-bold text-xl mb-2 text-green-800">Refuse</div>
                      <p className="text-sm">Say no to unnecessary items</p>
                    </div>
                    <div className="flex flex-col items-center p-4 bg-white/70 backdrop-blur-sm rounded-lg">
                      <div className="font-bold text-xl mb-2 text-green-800">Reduce</div>
                      <p className="text-sm">Minimize what you consume</p>
                    </div>
                    <div className="flex flex-col items-center p-4 bg-white/70 backdrop-blur-sm rounded-lg">
                      <div className="font-bold text-xl mb-2 text-green-800">Reuse</div>
                      <p className="text-sm">Use items multiple times</p>
                    </div>
                    <div className="flex flex-col items-center p-4 bg-white/70 backdrop-blur-sm rounded-lg">
                      <div className="font-bold text-xl mb-2 text-green-800">Repurpose</div>
                      <p className="text-sm">Give items new functions</p>
                    </div>
                    <div className="flex flex-col items-center p-4 bg-white/70 backdrop-blur-sm rounded-lg">
                      <div className="font-bold text-xl mb-2 text-green-800">Recycle</div>
                      <p className="text-sm">Transform into new products</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
        
        <div className="text-center">
          <h2 className="text-2xl font-bold text-green-800 mb-4">Need More Information?</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Our comprehensive resource library contains detailed guides for properly handling all types of waste.
          </p>
          <Button size="lg" className="eco-button">
            Browse Resource Library
          </Button>
        </div>
      </div>
    </MainLayout>
  );
};

export default EcoGuide;
