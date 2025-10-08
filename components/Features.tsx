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
      cardBg: "from-blue-50/80 to-cyan-50/80",
      textColor: "text-blue-600",
      delay: "0ms"
    },
    {
      icon: TruckIcon,
      title: "Free Pickup & Delivery",
      description: "Convenient doorstep service at no extra cost",
      color: "from-cyan-500 to-teal-500",
      bgColor: "from-cyan-50 to-teal-50",
      cardBg: "from-cyan-50/80 to-teal-50/80",
      textColor: "text-cyan-600",
      delay: "100ms"
    },
    {
      icon: Sparkles,
      title: "Premium Quality",
      description: "Professional care with premium detergents",
      color: "from-teal-500 to-green-500",
      bgColor: "from-teal-50 to-green-50",
      cardBg: "from-teal-50/80 to-green-50/80",
      textColor: "text-teal-600",
      delay: "200ms"
    },
    {
      icon: MapPin,
      title: "Track Your Order",
      description: "Real-time updates on your laundry status",
      color: "from-green-500 to-blue-500",
      bgColor: "from-green-50 to-blue-50",
      cardBg: "from-green-50/80 to-blue-50/80",
      textColor: "text-green-600",
      delay: "300ms"
    }
  ];

  return (
    <section id="features" className="py-24 bg-gradient-to-br from-slate-50 via-blue-50/30 to-cyan-50/50 relative overflow-hidden">
      {/* Enhanced Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-400/10 to-cyan-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-cyan-400/10 to-teal-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-gradient-to-r from-purple-400/5 to-pink-400/5 rounded-full blur-3xl animate-pulse delay-500"></div>

        {/* Geometric patterns */}
        <div className="absolute top-10 right-1/4 w-32 h-32 bg-gradient-to-br from-blue-200/20 to-cyan-200/20 rotate-45 rounded-2xl blur-2xl"></div>
        <div className="absolute bottom-10 left-1/3 w-24 h-24 bg-gradient-to-br from-teal-200/20 to-green-200/20 rotate-12 rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-20">
          <Badge variant="outline" className="mb-6 border-blue-200 text-blue-600 px-6 py-3 text-sm font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
            <Star className="h-5 w-5 mr-2 animate-pulse" />
            Why Choose Us?
          </Badge>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 bg-clip-text text-transparent leading-tight">
            Why Choose FreshFold?
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Experience the difference with our premium laundry service that cares for your clothes
          </p>

          {/* Decorative elements */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <div className="h-1 w-16 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full"></div>
            <Star className="h-6 w-6 text-yellow-400 animate-bounce" />
            <div className="h-1 w-16 bg-gradient-to-r from-cyan-400 to-teal-400 rounded-full"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Card
              key={index}
              className={`group text-center hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br ${feature.cardBg} hover:${feature.cardBg} hover:from-white/90 hover:to-white/70 hover:-translate-y-3 hover:scale-[1.02] relative overflow-hidden backdrop-blur-sm`}
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
