"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Sparkles,
  ArrowLeft,
  Search,
  Package,
  Clock,
  CheckCircle2,
  TruckIcon,
  Home,
  Star,
  MessageSquare,
  User
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function TrackOrderPage() {
  const [orderNumber, setOrderNumber] = useState("");
  const [trackedOrder, setTrackedOrder] = useState<any>(null);
  const [userOrders, setUserOrders] = useState<any[]>([]);
  const [showReview, setShowReview] = useState(false);
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");
  const [showOrderList, setShowOrderList] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // Check if user is logged in
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    if (!isLoggedIn) {
      router.push("/login");
      return;
    }

    // Load user's orders
    const orders = JSON.parse(localStorage.getItem("userOrders") || "[]");
    setUserOrders(orders);
  }, [router]);

  const handleTrackOrder = () => {
    const order = userOrders.find(order => order.orderNumber === orderNumber);
    if (order) {
      setTrackedOrder(order);
      setShowOrderList(false);
    } else {
      alert("Order not found. Please check your order number.");
    }
  };

  const handleSelectOrder = (order: any) => {
    setTrackedOrder(order);
    setShowOrderList(false);
  };

  const handleBackToList = () => {
    setTrackedOrder(null);
    setShowOrderList(true);
    setOrderNumber("");
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "pending": return "bg-yellow-100 text-yellow-800";
      case "confirmed": return "bg-blue-100 text-blue-800";
      case "picked_up": return "bg-purple-100 text-purple-800";
      case "processing": return "bg-orange-100 text-orange-800";
      case "ready": return "bg-cyan-100 text-cyan-800";
      case "out_for_delivery": return "bg-indigo-100 text-indigo-800";
      case "delivered": return "bg-green-100 text-green-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusIcon = (index: number) => {
    switch (index) {
      case 0: return Package;
      case 1: return CheckCircle2;
      case 2: return TruckIcon;
      case 3: return Clock;
      case 4: return CheckCircle2;
      case 5: return TruckIcon;
      case 6: return Home;
      default: return Package;
    }
  };

  const handleSubmitReview = () => {
    console.log("Review submitted:", { rating, review });
    alert("Thank you for your feedback!");
    setShowReview(false);
    setRating(0);
    setReview("");
  };

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
          <Link href="/">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">My Bookings</h1>
         
        </div>

        {/* Order Search - Only show when not viewing order list */}
        {!showOrderList && (
          <Card className="mb-8">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Track Specific Order</CardTitle>
                  <CardDescription>Enter your order number to see detailed status</CardDescription>
                </div>
                <Button variant="outline" onClick={handleBackToList} className="flex items-center gap-2">
                  <ArrowLeft className="h-4 w-4" />
                  Back to Orders
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex gap-2">
                <div className="flex-1">
                  <Input
                    placeholder="e.g., ORD-2025-001"
                    value={orderNumber}
                    onChange={(e) => setOrderNumber(e.target.value.toUpperCase())}
                    onKeyPress={(e) => e.key === "Enter" && handleTrackOrder()}
                  />
                </div>
                <Button onClick={handleTrackOrder} className="bg-gradient-to-r from-blue-600 to-cyan-600">
                  <Search className="mr-2 h-4 w-4" />
                  Track
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* My Bookings List */}
        {showOrderList && userOrders.length > 0 && (
          <Card className="mb-8">
            <CardHeader>
         
              <CardDescription>Your recent laundry service orders</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {userOrders.map((order, index) => (
                  <div key={order.orderNumber || index} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer" onClick={() => handleSelectOrder(order)}>
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="font-semibold text-gray-800">{order.orderNumber}</h3>
                        <p className="text-sm text-gray-600">{order.service}</p>
                      </div>
                      <Badge className={cn("text-xs px-2 py-1", getStatusColor(order.status))}>
                        {order.status.split("_").map((word: string) =>
                          word.charAt(0).toUpperCase() + word.slice(1)
                        ).join(" ")}
                      </Badge>
                    </div>

                    <div className="grid md:grid-cols-3 gap-4 mb-3">
                      <div className="bg-blue-50 p-3 rounded-lg">
                        <div className="text-xs text-gray-600 mb-1">Pickup Date</div>
                        <div className="font-medium text-sm">{order.pickupDate}</div>
                      </div>
                      <div className="bg-green-50 p-3 rounded-lg">
                        <div className="text-xs text-gray-600 mb-1">Delivery Date</div>
                        <div className="font-medium text-sm">{order.deliveryDate}</div>
                      </div>
                      <div className="bg-purple-50 p-3 rounded-lg">
                        <div className="text-xs text-gray-600 mb-1">Total Amount</div>
                        <div className="font-medium text-sm text-blue-600">₹{order.total?.toFixed(2) || order.final?.toFixed(2)}</div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="text-xs text-gray-500">
                        Ordered on: {new Date(order.createdAt).toLocaleDateString()}
                      </div>
                      <Button size="sm" variant="outline" className="text-blue-600 border-blue-200 hover:bg-blue-50">
                        Track This Order
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* No Orders State */}
        {showOrderList && userOrders.length === 0 && (
          <Card className="mb-8">
            <CardContent className="text-center py-12">
              <Package className="h-16 w-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-800 mb-2">No Orders Yet</h3>
              <p className="text-gray-600 mb-6">You haven't placed any orders yet. Start by booking your first laundry service!</p>
              <Link href="/order/new">
                <Button className="bg-gradient-to-r from-blue-600 to-cyan-600">
                  Book Your First Order
                </Button>
              </Link>
            </CardContent>
          </Card>
        )}

        {trackedOrder && (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-2xl mb-2">{trackedOrder.orderNumber}</CardTitle>
                    <CardDescription className="text-base">{trackedOrder.service}</CardDescription>
                  </div>
                  <Badge className={cn("text-sm px-3 py-1", getStatusColor(trackedOrder.status))}>
                    {trackedOrder.status.split("_").map((word: string) =>
                      word.charAt(0).toUpperCase() + word.slice(1)
                    ).join(" ")}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <div className="text-sm text-gray-600 mb-1">Pickup Date</div>
                    <div className="font-semibold">{trackedOrder.pickupDate}</div>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <div className="text-sm text-gray-600 mb-1">Delivery Date</div>
                    <div className="font-semibold">{trackedOrder.deliveryDate}</div>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <div className="text-sm text-gray-600 mb-1">Total Amount</div>
                    <div className="font-semibold text-blue-600">₹{trackedOrder.total.toFixed(2)}</div>
                  </div>
                </div>

                <Separator />

                <div>
                  <h3 className="font-semibold mb-3">Items</h3>
                  <div className="space-y-2">
                    {trackedOrder.items.map((item: any, index: number) => (
                      <div key={index} className="flex justify-between items-center bg-gray-50 p-3 rounded-lg">
                        <span>{item.name}</span>
                        <Badge variant="outline">Qty: {item.quantity}</Badge>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Order Timeline</CardTitle>
                <CardDescription>Track your order progress in real-time</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="relative">
                  {trackedOrder.timeline.map((step: any, index: number) => {
                    const Icon = getStatusIcon(index);
                    const isLast = index === trackedOrder.timeline.length - 1;

                    return (
                      <div key={index} className="relative pb-8">
                        {!isLast && (
                          <div className={cn(
                            "absolute left-6 top-12 w-0.5 h-full -ml-px",
                            step.completed ? "bg-gradient-to-b from-blue-600 to-cyan-600" : "bg-gray-200"
                          )} />
                        )}
                        <div className="flex items-start gap-4">
                          <div className={cn(
                            "h-12 w-12 rounded-full flex items-center justify-center flex-shrink-0 transition-all",
                            step.completed
                              ? "bg-gradient-to-br from-blue-600 to-cyan-600 text-white shadow-lg"
                              : "bg-gray-200 text-gray-400"
                          )}>
                            <Icon className="h-6 w-6" />
                          </div>
                          <div className="flex-1 pt-2">
                            <div className="flex items-center justify-between">
                              <h4 className={cn(
                                "font-semibold",
                                step.completed ? "text-gray-900" : "text-gray-400"
                              )}>
                                {step.label}
                              </h4>
                              {step.completed && (
                                <CheckCircle2 className="h-5 w-5 text-green-600" />
                              )}
                            </div>
                            {step.time && (
                              <p className="text-sm text-gray-600 mt-1">{step.time}</p>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            {trackedOrder.status === "delivered" && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Star className="h-5 w-5 text-yellow-500" />
                    Rate Your Experience
                  </CardTitle>
                  <CardDescription>Help us improve our service by sharing your feedback</CardDescription>
                </CardHeader>
                <CardContent>
                  {!showReview ? (
                    <Button onClick={() => setShowReview(true)} className="w-full">
                      <MessageSquare className="mr-2 h-4 w-4" />
                      Write a Review
                    </Button>
                  ) : (
                    <div className="space-y-4">
                      <div>
                        <Label className="mb-2 block">Rating</Label>
                        <div className="flex gap-2">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <button
                              key={star}
                              onClick={() => setRating(star)}
                              className="transition-transform hover:scale-110"
                            >
                              <Star
                                className={cn(
                                  "h-8 w-8",
                                  star <= rating
                                    ? "fill-yellow-400 text-yellow-400"
                                    : "text-gray-300"
                                )}
                              />
                            </button>
                          ))}
                        </div>
                      </div>
                      <div>
                        <Label className="mb-2 block">Your Review</Label>
                        <textarea
                          value={review}
                          onChange={(e) => setReview(e.target.value)}
                          placeholder="Share your experience with our service..."
                          className="w-full min-h-[100px] p-3 rounded-md border border-input bg-background"
                        />
                      </div>
                      <div className="flex gap-2">
                        <Button
                          onClick={handleSubmitReview}
                          disabled={!rating || !review}
                          className="flex-1 bg-gradient-to-r from-blue-600 to-cyan-600"
                        >
                          Submit Review
                        </Button>
                        <Button variant="outline" onClick={() => setShowReview(false)}>
                          Cancel
                        </Button>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
