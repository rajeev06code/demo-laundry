"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Star, Quote, CheckCircle, Send } from "lucide-react";

export default function Reviews() {
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
  const [newReview, setNewReview] = useState({
    name: "",
    rating: 5,
    comment: "",
    location: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const reviews = [
    {
      name: "Priya Sharma",
      rating: 5,
      comment: "Excellent service! My delicate sarees were handled with great care. Highly recommend!",
      date: "2 days ago",
      verified: true,
      initials: "PS",
      location: "Mumbai"
    },
    {
      name: "Rahul Verma",
      rating: 5,
      comment: "Very professional and punctual. The pickup and delivery were right on time.",
      date: "1 week ago",
      verified: true,
      initials: "RV",
      location: "Delhi"
    },
    {
      name: "Anjali Patel",
      rating: 5,
      comment: "Best laundry service in town! My clothes came back spotless and smelling fresh.",
      date: "2 weeks ago",
      verified: true,
      initials: "AP",
      location: "Ahmedabad"
    }
  ];

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < rating
            ? "fill-yellow-400 text-yellow-400"
            : "text-gray-300"
        } transition-colors`}
      />
    ));
  };

  const handleReviewSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    console.log("New review submitted:", newReview);
    
    // Reset form
    setNewReview({
      name: "",
      rating: 5,
      comment: "",
      location: ""
    });
    setIsSubmitting(false);
    setIsReviewModalOpen(false);
    
    // Show success message
    alert("Thank you for your review! It has been submitted successfully.");
  };

  const handleStarClick = (rating: number) => {
    setNewReview(prev => ({ ...prev, rating }));
  };

  return (
    <section id="reviews" className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.05),transparent_50%)] opacity-60" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.8),transparent_50%)]" />

      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-blue-200 text-blue-600">
            Customer Reviews
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
            Join thousands of satisfied customers who trust us with their laundry.
            <span className="font-semibold text-blue-600"> 4.9/5</span> average rating from over
            <span className="font-semibold text-blue-600"> 10,000+ </span> reviews.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {reviews.map((review, index) => (
            <Card
              key={index}
              className="group relative bg-white/90 backdrop-blur-sm border border-gray-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden"
            >
              {/* Quote decoration */}
              <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Quote className="h-8 w-8 text-blue-500" />
              </div>

              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <Avatar className="h-12 w-12 ring-2 ring-blue-100">
                      <AvatarFallback className="bg-gradient-to-br from-blue-500 to-cyan-600 text-white font-semibold">
                        {review.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <CardTitle className="text-lg font-semibold text-gray-800">
                          {review.name}
                        </CardTitle>
                        {review.verified && (
                          <CheckCircle className="h-4 w-4 text-green-500" />
                        )}
                      </div>
                      <p className="text-sm text-gray-500">{review.location}</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3 mb-2">
                  <div className="flex gap-1">
                    {renderStars(review.rating)}
                  </div>
                  <span className="text-sm font-medium text-amber-600">
                    {review.rating}.0
                  </span>
                </div>

                <CardDescription className="text-xs text-gray-400 flex items-center gap-1">
                  <div className="w-1 h-1 bg-gray-300 rounded-full" />
                  {review.date}
                </CardDescription>
              </CardHeader>

              <CardContent className="pt-0">
                <p className="text-gray-700 leading-relaxed italic">
                  "{review.comment}"
                </p>
              </CardContent>

              {/* Blue accent on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Dialog open={isReviewModalOpen} onOpenChange={setIsReviewModalOpen}>
              <DialogTrigger asChild>
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Share Your Experience
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl">
                <DialogHeader>
                  <DialogTitle className="text-2xl bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                    Share Your Experience
                  </DialogTitle>
                  <DialogDescription className="text-lg">
                    Help other customers by sharing your experience with FreshFold Laundry Services
                  </DialogDescription>
                </DialogHeader>

                <form onSubmit={handleReviewSubmit} className="space-y-6 mt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-base font-semibold">Your Name</Label>
                      <Input
                        id="name"
                        placeholder="Enter your full name"
                        value={newReview.name}
                        onChange={(e) => setNewReview(prev => ({ ...prev, name: e.target.value }))}
                        required
                        className="h-12"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="location" className="text-base font-semibold">Location</Label>
                      <Input
                        id="location"
                        placeholder="Enter your city"
                        value={newReview.location}
                        onChange={(e) => setNewReview(prev => ({ ...prev, location: e.target.value }))}
                        required
                        className="h-12"
                      />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Label className="text-base font-semibold">Your Rating</Label>
                    <div className="flex items-center gap-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onClick={() => handleStarClick(star)}
                          className="focus:outline-none transition-transform hover:scale-110"
                        >
                          <Star
                            className={`h-8 w-8 ${
                              star <= newReview.rating
                                ? "fill-yellow-400 text-yellow-400"
                                : "text-gray-300 hover:text-yellow-300"
                            } transition-colors`}
                          />
                        </button>
                      ))}
                      <span className="ml-3 text-lg font-semibold text-gray-700">
                        {newReview.rating}/5
                      </span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="comment" className="text-base font-semibold">Your Review</Label>
                    <Textarea
                      id="comment"
                      placeholder="Tell others about your experience with our laundry service..."
                      value={newReview.comment}
                      onChange={(e) => setNewReview(prev => ({ ...prev, comment: e.target.value }))}
                      required
                      rows={4}
                      className="resize-none"
                    />
                  </div>

                  <div className="flex justify-end gap-3 pt-4">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => setIsReviewModalOpen(false)}
                      className="px-6"
                    >
                      Cancel
                    </Button>
                    <Button
                      type="submit"
                      disabled={isSubmitting || !newReview.name || !newReview.comment || !newReview.location}
                      className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 px-6"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                          Submitting...
                        </>
                      ) : (
                        <>
                          <Send className="h-4 w-4 mr-2" />
                          Submit Review
                        </>
                      )}
                    </Button>
                  </div>
                </form>
              </DialogContent>
            </Dialog>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-gray-200 hover:border-blue-300 text-gray-700 hover:text-blue-600 px-8 py-3 text-lg font-semibold transition-all duration-300"
            >
              View All Reviews
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}