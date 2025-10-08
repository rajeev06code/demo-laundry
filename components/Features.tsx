"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, TruckIcon, Sparkles, MapPin, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function Features() {
  const features = [
    {
      icon: Clock,
      title: "Quick Turnaround",
      description: "Get your clothes back fresh in 24-48 hours",
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-50 to-cyan-50",
      textColor: "text-blue-600",
      delay: "0ms"
    },
    {
      icon: TruckIcon,
      title: "Free Pickup & Delivery",
      description: "Convenient doorstep service at no extra cost",
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-50 to-cyan-50",
      textColor: "text-blue-600",
      delay: "100ms"
    },
    {
      icon: Sparkles,
      title: "Premium Quality",
      description: "Professional care with premium detergents",
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-50 to-cyan-50",
      textColor: "text-blue-600",
      delay: "200ms"
    },
    {
      icon: MapPin,
      title: "Track Your Order",
      description: "Real-time updates on your laundry status",
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-50 to-cyan-50",
      textColor: "text-blue-600",
      delay: "300ms"
    }
  ];

  return (
    <section id="features" className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 right-10 w-40 h-40 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-32 h-32 bg-cyan-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-blue-200 text-blue-600 px-4 py-2">
            <Star className="h-4 w-4 mr-2" />
            Why Choose Us?
          </Badge>
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
            Why Choose FreshFold?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Experience the difference with our premium laundry service
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group text-center hover:shadow-xl transition-all duration-500 border-0 bg-white hover:bg-gradient-to-br hover:from-white hover:to-gray-50 hover:-translate-y-2 relative overflow-hidden"
              style={{ animationDelay: feature.delay }}
            >
              {/* Background gradient overlay */}
              <div className={`absolute -top-1 -right-1 w-16 h-16 bg-gradient-to-br ${feature.color} rounded-full opacity-10 group-hover:opacity-20 transition-opacity`}></div>

              <CardHeader className="pb-4 relative z-10">
                {/* Icon container */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.bgColor} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-all duration-300 shadow-lg group-hover:shadow-xl`}>
                  <feature.icon className={`h-8 w-8 ${feature.textColor}`} />
                </div>

                <CardTitle className="text-lg font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                  {feature.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="relative z-10">
                <p className="text-sm text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
                  {feature.description}
                </p>
              </CardContent>

              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg"></div>

              {/* Animated border */}
              <div className={`absolute inset-0 rounded-lg bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-sm`}></div>
            </Card>
          ))}
        </div>

        {/* Bottom stats or testimonial */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-8 bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl px-8 py-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">10k+</div>
              <div className="text-sm text-gray-600">Happy Customers</div>
            </div>
            <div className="w-px h-8 bg-gray-300"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">4.9★</div>
              <div className="text-sm text-gray-600">Average Rating</div>
            </div>
            <div className="w-px h-8 bg-gray-300"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">24/7</div>
              <div className="text-sm text-gray-600">Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
