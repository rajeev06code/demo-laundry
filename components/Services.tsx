"use client";

import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { Shirt, Sparkles, Wind, Flame, Droplet, Heart, Package } from "lucide-react";

export default function Services() {
    const services = [
        {
          name: "Regular Wash",
          description: "Standard washing for everyday clothes",
          price: "₹2.50/item",
          image: "https://media.istockphoto.com/id/542303516/photo/worker-laundry-ironed-clothes-iron-dry.jpg?s=612x612&w=0&k=20&c=lcI-9Caxcqd-ZI9vwAPmHAl76cB_T205hB8tFr2Iclg=",
          popular: false
        },
        {
          name: "Premium Wash",
          description: "Delicate washing with premium care",
          price: "₹4.00/item",
          image: "https://plus.unsplash.com/premium_photo-1682129249054-b0aeef5ae1fe?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZHJ5JTIwY2xlYW5pbmd8ZW58MHx8MHx8fDA%3D",
          popular: true
        },
        {
          name: "Dry Cleaning",
          description: "Professional dry cleaning",
          price: "₹8.00/item",
          image: "https://images.unsplash.com/photo-1624372635310-01d078c05dd9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGxhdW5kcnl8ZW58MHx8MHx8fDA%3D",
          popular: false
        },
        {
          name: "Steam Iron",
          description: "Crisp professional ironing",
          price: "₹1.50/item",
          image: "https://media.istockphoto.com/id/542303516/photo/worker-laundry-ironed-clothes-iron-dry.jpg?s=612x612&w=0&k=20&c=lcI-9Caxcqd-ZI9vwAPmHAl76cB_T205hB8tFr2Iclg=",
          popular: false
        },
        {
          name: "Stain Removal",
          description: "Specialized stain treatment",
          price: "₹5.00/item",
          image: "https://plus.unsplash.com/premium_photo-1682129249054-b0aeef5ae1fe?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZHJ5JTIwY2xlYW5pbmd8ZW58MHx8MHx8fDA%3D",
          popular: false
        },
        {
          name: "Delicate Care",
          description: "Special care for delicate fabrics",
          price: "₹6.00/item",
          image: "https://images.unsplash.com/photo-1624372635310-01d078c05dd9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGxhdW5kcnl8ZW58MHx8MHx8fDA%3D",
          popular: false
        },
        {
          name: "Traditional Wear",
          description: "Expert care for traditional garments",
          price: "₹7.00/item",
          image: "https://media.istockphoto.com/id/542303516/photo/worker-laundry-ironed-clothes-iron-dry.jpg?s=612x612&w=0&k=20&c=lcI-9Caxcqd-ZI9vwAPmHAl76cB_T205hB8tFr2Iclg=",
          popular: false
        }
      ];

  return (
    <section id="services" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-3 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
            Our Services
          </h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            Professional laundry services tailored to your needs
          </p>
        </div>

        {/* Horizontal Scrolling Services - Modern Card Layout */}
        <div className="relative">
          <div className="flex gap-3 overflow-x-auto pb-4 pt-4 snap-x snap-mandatory scrollbar-hide">
            {services.map((service, index) => (
              <Link
                key={index}
                href="/order/new"
                className="flex-shrink-0 w-40 snap-start group first:ml-4 last:mr-8 md:first:ml-8 md:last:mr-16"
              >
                <div className="bg-white rounded-2xl border border-gray-100 p-3 hover:border-blue-200 hover:shadow-lg transition-all duration-300 h-full group-hover:-translate-y-1 relative overflow-hidden">
                  {/* Popular Badge */}
                  {service.popular && (
                    <div className="absolute -top-1 -right-1 z-10">
                      <Badge className="bg-gradient-to-r from-orange-400 to-pink-400 text-white text-xs px-1.5 py-0.5 rounded-full shadow-sm">
                        POP
                      </Badge>
                    </div>
                  )}

                  {/* Service Image */}
                  <div className="w-full h-20 rounded-lg overflow-hidden mb-2 bg-gray-100">
                    <Image
                      src={service.image}
                      alt={service.name}
                      width={100}
                      height={100}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Service Name */}
                  <h3 className="font-semibold text-xs text-center mb-1 text-gray-800 group-hover:text-blue-600 transition-colors line-clamp-2 leading-tight">
                    {service.name}
                  </h3>

                  {/* Price */}
                  <div className="text-center">
                    <Badge variant="secondary" className="text-xs font-bold px-2 py-0.5 bg-gray-50 text-gray-700">
                      {service.price}
                    </Badge>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Scroll Indicator Dots */}
          <div className="flex justify-center mt-6">
            <div className="flex gap-1">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="w-1.5 h-1.5 rounded-full bg-gray-300"></div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS for scrollbar hide */}
      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}