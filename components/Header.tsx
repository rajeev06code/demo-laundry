"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Sparkles, Menu } from "lucide-react";
import { theme, gradients, backgrounds, text, styles, shadows, borders, animations } from "@/lib/theme";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navigation = [
    { name: "Services", href: "#services" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "Features", href: "#features" },
    { name: "Reviews", href: "#reviews" },
  ];

  return (
    <header className={`sticky top-0 z-50 w-full border-b ${styles.glassmorphism} ${shadows.card}`}>
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className={`h-10 w-10 rounded-full bg-gradient-to-br ${gradients.primary} flex items-center justify-center ${shadows.button} group-hover:${shadows.buttonHover} ${animations.fast} group-hover:scale-105`}>
              <Sparkles className="h-5 w-5 text-white" />
            </div>
            <span className={`text-2xl font-bold ${text.gradient}`}>
              FreshFold
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`relative text-sm font-medium ${text.primary} ${text.accent.replace('text-', 'hover:text-')} ${animations.fast} after:absolute after:w-0 after:h-0.5 after:left-0 after:-bottom-1 after:${animations.fast} hover:after:w-full`}
                style={{
                  '--tw-gradient-from': `${theme.colors.primary[600]} !important`,
                  '--tw-gradient-to': `${theme.colors.cyan[600]} !important`
                } as React.CSSProperties}
              >
                {item.name}
              </Link>
            ))}
            <Link href="/order/new">
              <Button
                size="sm"
                className={`bg-gradient-to-r ${gradients.button} hover:${gradients.buttonHover} text-white border-0 ${shadows.button} hover:${shadows.buttonHover} ${animations.fast} hover:scale-105`}
              >
                Book Now
              </Button>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <button className={`p-2 rounded-lg hover:bg-gray-50 ${animations.fast} group ${text.primary} ${text.accent.replace('text-', 'group-hover:text-')}`}>
                <Menu className="h-6 w-6 transition-colors" />
              </button>
            </SheetTrigger>

            <SheetContent side="left" className={`w-80 ${styles.glassmorphism} ${borders.primary}`}>
              <SheetHeader className={`text-left pb-6 ${borders.secondary}`}>
                <SheetTitle className="flex items-center gap-3">
                  <div className={`h-8 w-8 rounded-full bg-gradient-to-br ${gradients.primary} flex items-center justify-center`}>
                    <Sparkles className="h-4 w-4 text-white" />
                  </div>
                  <span className={`text-xl font-bold ${text.gradient}`}>
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
                    <div className={`flex items-center gap-3 px-4 py-3 text-sm font-medium ${text.primary} ${text.accent.replace('text-', 'hover:text-')} hover:bg-blue-50/50 rounded-lg ${animations.fast} group-hover:translate-x-1`}>
                      <div
                        className={`w-2 h-2 rounded-full bg-gradient-to-r opacity-0 group-hover:opacity-100 ${animations.fast}`}
                        style={{background: `linear-gradient(to right, ${theme.colors.primary[400]}, ${theme.colors.cyan[400]})`}}
                      />
                      {item.name}
                    </div>
                  </Link>
                ))}

                <div className="mt-6 px-4">
                  <Link href="/order/new" onClick={() => setIsOpen(false)}>
                    <Button
                      size="sm"
                      className={`w-full bg-gradient-to-r ${gradients.button} hover:${gradients.buttonHover} text-white border-0 ${shadows.button} hover:${shadows.buttonHover} ${animations.fast}`}
                    >
                      Book Now
                    </Button>
                  </Link>
                </div>
              </nav>

              {/* Decorative elements */}
              <div
                className="absolute top-20 right-4 w-20 h-20 bg-gradient-to-br opacity-30 blur-xl rounded-full"
                style={{
                  background: `linear-gradient(135deg, ${theme.colors.primary[100]}33, ${theme.colors.cyan[100]}33)`
                }}
              />
              <div
                className="absolute bottom-20 left-4 w-16 h-16 bg-gradient-to-br opacity-25 blur-xl rounded-full"
                style={{
                  background: `linear-gradient(135deg, ${theme.colors.cyan[100]}33, ${theme.colors.primary[100]}33)`
                }}
              />
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
