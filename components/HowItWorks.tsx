"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Package, TruckIcon, Check, ArrowRight, Sparkles, Clock, Shield, Star } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      step: "1",
      title: "Place Your Order",
      description: "Book online or call us to schedule pickup",
      icon: Package,
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-50 to-cyan-50",
      textColor: "text-blue-600"
    },
    {
      step: "2",
      title: "We Pick Up",
      description: "Free pickup from your doorstep at scheduled time",
      icon: TruckIcon,
      color: "from-cyan-500 to-teal-500",
      bgColor: "from-cyan-50 to-teal-50",
      textColor: "text-cyan-600"
    },
    {
      step: "3",
      title: "We Clean",
      description: "Professional cleaning with premium care",
      icon: Check,
      color: "from-teal-500 to-green-500",
      bgColor: "from-teal-50 to-green-50",
      textColor: "text-teal-600"
    },
    {
      step: "4",
      title: "We Deliver",
      description: "Fresh, folded clothes delivered back to you",
      icon: TruckIcon,
      color: "from-green-500 to-blue-500",
      bgColor: "from-green-50 to-blue-50",
      textColor: "text-green-600"
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-gradient-to-br from-slate-50 via-blue-50/30 to-cyan-50/50 relative overflow-hidden">
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
      <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Sparkles className="h-4 w-4" />
            Simple Process
          </div>
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Simple, convenient process from booking to delivery in just 4 easy steps
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto relative">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              <Card className={`text-center p-8 h-full hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br ${step.bgColor} hover:${step.bgColor} hover:from-white/80 hover:to-white/60 hover:-translate-y-3 hover:scale-[1.02] relative overflow-hidden backdrop-blur-sm`}>
                {/* Step number background */}
                <div className={`absolute -top-2 -right-2 w-16 h-16 bg-gradient-to-br ${step.color} rounded-full opacity-10 group-hover:opacity-20 transition-opacity`}></div>

                <CardContent className="p-0 relative z-10">
                  {/* Step circle */}
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg shadow-lg group-hover:shadow-xl transition-all group-hover:scale-110`}>
                    {step.step}
                  </div>

                  {/* Icon */}
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${step.bgColor} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                    <step.icon className={`h-6 w-6 ${step.textColor}`} />
                  </div>

                  <h3 className="text-lg font-bold mb-3 text-gray-800 group-hover:text-blue-700 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-700 leading-relaxed font-medium">
                    {step.description}
                  </p>
                </CardContent>

                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg"></div>
              </Card>

              {/* Connecting arrow (except for last item) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:flex absolute top-1/2 -right-3 transform -translate-y-1/2 z-20">
                  <ArrowRight className="h-6 w-6 text-gray-300 group-hover:text-blue-400 transition-colors" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Ready to experience our service?</p>
          <div className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-colors cursor-pointer group">
            <span>Start Your Order</span>
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </div>
    </section>
  );
}
