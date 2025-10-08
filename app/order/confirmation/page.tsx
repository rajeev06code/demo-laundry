"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Sparkles,
  CheckCircle2,
  Home,
  Package,
  Download,
  Mail,
  Phone
} from "lucide-react";

export default function OrderConfirmationPage() {
  const orderNumber = "ORD-2025-" + Math.floor(Math.random() * 1000).toString().padStart(3, "0");

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-cyan-50">
      <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-lg">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="h-10 w-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
              <Sparkles className="h-5 w-5 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              FreshFold
            </span>
          </Link>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12 max-w-3xl">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 mb-6 shadow-lg">
            <CheckCircle2 className="h-10 w-10 text-white" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-3 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
            Order Confirmed!
          </h1>
          <p className="text-lg text-gray-600 mb-4">
            Thank you for choosing FreshFold
          </p>
          <Badge className="text-base px-4 py-2 bg-blue-100 text-blue-700 border-blue-200">
            Order Number: {orderNumber}
          </Badge>
        </div>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>What Happens Next?</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex gap-4 items-start">
              <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                <Mail className="h-5 w-5 text-blue-600" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold mb-1">Confirmation Email</h3>
                <p className="text-sm text-gray-600">
                  We've sent a confirmation email with your order details and tracking information.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="h-10 w-10 rounded-full bg-cyan-100 flex items-center justify-center flex-shrink-0">
                <Package className="h-5 w-5 text-cyan-600" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold mb-1">Pickup Scheduled</h3>
                <p className="text-sm text-gray-600">
                  Our team will arrive at your location during the scheduled time slot to collect your items.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                <CheckCircle2 className="h-5 w-5 text-green-600" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold mb-1">Professional Care</h3>
                <p className="text-sm text-gray-600">
                  Your clothes will be cleaned with premium products and handled with care by our experts.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                <Home className="h-5 w-5 text-purple-600" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold mb-1">Delivery to Your Door</h3>
                <p className="text-sm text-gray-600">
                  Clean, fresh clothes will be delivered back to you at your chosen time slot.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-6 bg-gradient-to-r from-blue-50 to-cyan-50 border-2 border-blue-200">
          <CardContent className="pt-6">
            <div className="flex items-center gap-3 mb-4">
              <Phone className="h-6 w-6 text-blue-600" />
              <div>
                <h3 className="font-semibold">Need Help?</h3>
                <p className="text-sm text-gray-600">Our support team is here for you</p>
              </div>
            </div>
            <div className="space-y-2 text-sm">
              <div>
                <span className="text-gray-600">Phone:</span>{" "}
                <a href="tel:+919876543210" className="text-blue-600 font-medium hover:underline">
                  +91 98765 43210
                </a>
              </div>
              <div>
                <span className="text-gray-600">Email:</span>{" "}
                <a href="mailto:support@freshfold.com" className="text-blue-600 font-medium hover:underline">
                  support@freshfold.com
                </a>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-3 gap-4">
          <Link href="/" className="block">
            <Button variant="outline" className="w-full h-auto py-4 flex-col gap-2">
              <Home className="h-5 w-5" />
              <span>Back to Home</span>
            </Button>
          </Link>
          <Link href="/order/track" className="block">
            <Button variant="outline" className="w-full h-auto py-4 flex-col gap-2">
              <Package className="h-5 w-5" />
              <span>Track Order</span>
            </Button>
          </Link>
          <Button variant="outline" className="w-full h-auto py-4 flex-col gap-2">
            <Download className="h-5 w-5" />
            <span>Download Receipt</span>
          </Button>
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-600 mb-2">Share your experience with us!</p>
          <div className="flex justify-center gap-2">
            <Button size="sm" variant="outline">Facebook</Button>
            <Button size="sm" variant="outline">Twitter</Button>
            <Button size="sm" variant="outline">Instagram</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
