"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Sparkles,
  Wind,
  Flame,
  Droplet,
  Package,
  Clock,
  MapPin,
  Star,
  Shirt,
  Heart,
  Check,
  ArrowRight,
  Phone,
  Mail,
  TruckIcon
} from "lucide-react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import Reviews from "@/components/Reviews";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-cyan-50">
      <Header />
      <Hero />
      <Services />
      <HowItWorks />
      <Features />
      <Reviews />
      <Footer />
    </div>
  );
}
