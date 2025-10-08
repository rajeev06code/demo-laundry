"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Sparkles, Menu } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navigation = [
    { name: "Services", href: "#services" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "Features", href: "#features" },
    { name: "Reviews", href: "#reviews" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/90 backdrop-blur-lg shadow-sm">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="h-10 w-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
              <Sparkles className="h-5 w-5 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              FreshFold
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="relative text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200 after:absolute after:w-0 after:h-0.5 after:bg-blue-600 after:left-0 after:-bottom-1 after:transition-all after:duration-200 hover:after:w-full"
              >
                {item.name}
              </Link>
            ))}
            <Link href="/order/new">
              <Button
                size="sm"
                className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                Book Now
              </Button>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <button className="p-2 rounded-lg hover:bg-gray-100 transition-colors group">
                <Menu className="h-6 w-6 text-gray-700 group-hover:text-blue-600 transition-colors" />
              </button>
            </SheetTrigger>

            <SheetContent side="left" className="w-80 bg-white/95 backdrop-blur-lg border-r border-gray-200">
              <SheetHeader className="text-left pb-6 border-b border-gray-100">
                <SheetTitle className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                    <Sparkles className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                    FreshFold
                  </span>
                </SheetTitle>
              </SheetHeader>

              <nav className="flex flex-col gap-2 mt-8">
                {navigation.map((item, index) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="group relative"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200 group-hover:translate-x-1">
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {item.name}
                    </div>
                  </Link>
                ))}

                <div className="mt-6 px-4">
                  <Link href="/order/new" onClick={() => setIsOpen(false)}>
                    <Button
                      size="sm"
                      className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      Book Now
                    </Button>
                  </Link>
                </div>
              </nav>

              {/* Decorative elements */}
              <div className="absolute top-20 right-4 w-20 h-20 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-full opacity-50 blur-xl" />
              <div className="absolute bottom-20 left-4 w-16 h-16 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-full opacity-40 blur-xl" />
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
