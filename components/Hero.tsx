"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { Sparkles, ArrowRight, Check, Star, Clock, Truck } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50">
      <div className="container mx-auto px-4 py-8 md:py-16 relative">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent leading-tight">
              Fresh Clothes,
              <br className="hidden md:block"/>
              Delivered
            </h1>

            <p className="hidden md:block text-lg md:text-xl text-gray-600 mb-6 max-w-2xl leading-relaxed">
              Professional laundry and dry cleaning service with free pickup and delivery.
              Get your clothes fresh, clean, and perfectly folded in 24-48 hours.
            </p>

            {/* Feature highlights */}
            <div className="grid grid-cols-2 gap-3 mb-6 text-sm">
              <div className="flex items-center gap-2">
                <div className="h-7 w-7 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                  <Check className="h-4 w-4 text-green-600" />
                </div>
                <span className="text-gray-700 font-medium">24-48 Hour Service</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-7 w-7 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                  <Check className="h-4 w-4 text-green-600" />
                </div>
                <span className="text-gray-700 font-medium">Eco-Friendly</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-7 w-7 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                  <Check className="h-4 w-4 text-green-600" />
                </div>
                <span className="text-gray-700 font-medium">Quality Assured</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-7 w-7 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                  <Check className="h-4 w-4 text-green-600" />
                </div>
                <span className="text-gray-700 font-medium">Safe & Hygienic</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-start items-center">
              <Link href="/order/new">
                <Button size="lg" className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-6 py-3 text-base font-semibold shadow-lg hover:shadow-xl transition-all group">
                  Get Started Today
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="#services">
                <Button size="lg" variant="outline" className="border-2 px-6 py-3 text-base font-semibold hover:bg-blue-50 transition-colors">
                  View Services
                </Button>
              </Link>
            </div>

            {/* Trust indicators */}
            <div className="flex items-center gap-4 mt-6 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="font-medium">4.9/5 Rating</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span className="font-medium">10k+ Happy Customers</span>
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 z-10" />
              <video
                src="https://www.pexels.com/download/video/5592513/"
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-[200px] md:h-[400px] object-cover"
                style={{ filter: 'brightness(1.1) contrast(1.05)' }}
              />

              {/* Special offer badge */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm rounded-xl p-3 z-20 shadow-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xl font-bold text-blue-600">20% OFF</div>
                    <div className="text-xs text-gray-600">First Order</div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-gray-500">Use Code</div>
                    <div className="font-mono font-bold text-sm bg-blue-100 px-2 py-1 rounded">WELCOME20</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating elements for visual appeal */}
            <div className="absolute -bottom-3 -left-3 w-24 h-24 bg-blue-200 rounded-full blur-2xl opacity-50" />
            <div className="absolute -top-3 -right-3 w-24 h-24 bg-cyan-200 rounded-full blur-2xl opacity-50" />
            <div className="absolute top-1/2 -left-6 w-12 h-12 bg-purple-200 rounded-full blur-xl opacity-40" />
          </div>
        </div>
      </div>
    </section>
  );
}
