"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Sparkles, Menu, User, LogOut, Settings, ChevronDown, Package, History } from "lucide-react";
import { theme, gradients, backgrounds, text, styles, shadows, borders, animations } from "@/lib/theme";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Check authentication status on component mount
    const loggedIn = localStorage.getItem("isLoggedIn") === "true";
    const email = localStorage.getItem("userEmail") || "";
    const name = localStorage.getItem("userName") || "";

    setIsLoggedIn(loggedIn);
    setUserEmail(email);
    setUserName(name);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isDropdownOpen && !(event.target as Element).closest('.user-dropdown')) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isDropdownOpen]);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userEmail");
    localStorage.removeItem("userName");
    setIsLoggedIn(false);
    setUserEmail("");
    setUserName("");
    router.push("/");
  };

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
          <div className="hidden md:flex items-center gap-6">
            <nav className="flex items-center gap-8">
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
            </nav>

            <div className="flex items-center gap-3">
              {/* Book Now Button - Always Visible */}
              <Link href="/order/new">
                <Button
                  size="sm"
                  className={`bg-gradient-to-r ${gradients.button} hover:${gradients.buttonHover} text-white border-0 ${shadows.button} hover:${shadows.buttonHover} ${animations.fast} hover:scale-105`}
                >
                  Book Now
                </Button>
              </Link>

              {isLoggedIn ? (
                /* User Profile Dropdown */
                <div className="relative user-dropdown">
                  <button
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-50 transition-colors duration-200 group"
                  >
                    <div className="h-8 w-8 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
                      <User className="h-4 w-4 text-white" />
                    </div>
                    <ChevronDown className={`h-4 w-4 text-gray-600 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {/* Dropdown Menu */}
                  {isDropdownOpen && (
                    <div className="absolute right-0 mt-2 w-64 bg-white rounded-xl shadow-2xl border border-gray-100 py-2 z-50 animate-in slide-in-from-top-2 duration-200">
                      {/* User Info Header */}
                      <div className="px-4 py-3 border-b border-gray-100">
                        <div className="flex items-center gap-3">
                          <div className="h-10 w-10 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center">
                            <User className="h-5 w-5 text-white" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-semibold text-gray-800 truncate">{userName}</p>
                            <p className="text-xs text-gray-500 truncate">{userEmail}</p>
                          </div>
                        </div>
                      </div>

                      {/* Menu Items */}
                      <div className="py-2">
                        <Link
                          href="/order/track"
                          onClick={() => setIsDropdownOpen(false)}
                          className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200 flex items-center gap-3"
                        >
                          <Package className="h-4 w-4" />
                          Track Order
                        </Link>

                        <Link
                          href="/order/track"
                          onClick={() => setIsDropdownOpen(false)}
                          className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200 flex items-center gap-3"
                        >
                          <History className="h-4 w-4" />
                          My Bookings
                        </Link>

                        <button className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200 flex items-center gap-3">
                          <Settings className="h-4 w-4" />
                          Account Settings
                        </button>

                        <button className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200 flex items-center gap-3">
                          <User className="h-4 w-4" />
                          Profile
                        </button>
                      </div>

                      {/* Logout */}
                      <div className="border-t border-gray-100 pt-2">
                        <button
                          onClick={() => {
                            handleLogout();
                            setIsDropdownOpen(false);
                          }}
                          className="w-full px-4 py-2 text-left text-sm text-red-600 hover:bg-red-50 transition-colors duration-200 flex items-center gap-3"
                        >
                          <LogOut className="h-4 w-4" />
                          Sign Out
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                /* Sign In Button */
                <Link href="/login">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-blue-200 text-blue-600 hover:bg-blue-50"
                  >
                    Sign In
                  </Button>
                </Link>
              )}
            </div>
          </div>

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

              <div className="flex flex-col h-full">
                <div className="flex-1 space-y-4">
                  {/* User Info Section */}
                  {isLoggedIn && (
                    <div className="px-4 py-3 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg border border-blue-100">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="h-10 w-10 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center">
                          <User className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-gray-800">{userName}</p>
                          <p className="text-xs text-gray-500">{userEmail}</p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Navigation Menu */}
                  <nav className="flex flex-col gap-2">
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
                  </nav>
                  {isLoggedIn?(<>  <div className="space-y-2">
                     <Link
                     
                     href="/order/track"
                        onClick={() => setIsOpen(false)}
                        className="group relative"
                     
                      >
                        <div className={`flex items-center gap-3 px-4 py-3 text-sm font-medium ${text.primary} ${text.accent.replace('text-', 'hover:text-')} hover:bg-blue-50/50 rounded-lg ${animations.fast} group-hover:translate-x-1`}>
                          <div
                            className={`w-2 h-2 rounded-full bg-gradient-to-r opacity-0 group-hover:opacity-100 ${animations.fast}`}
                            style={{background: `linear-gradient(to right, ${theme.colors.primary[400]}, ${theme.colors.cyan[400]})`}}
                          />
                      My bookings
                        </div>
                      </Link>
                       

                        </div></>):null}
                </div>

                {/* Bottom Action Buttons */}
                <div className="mt-auto pt-6 pb-16 border-t border-gray-200">
                  <div className="space-y-3 px-4">
                    <Link href="/order/new" onClick={() => setIsOpen(false)}>
                      <Button
                        size="sm"
                        className={`w-full bg-gradient-to-r ${gradients.button} hover:${gradients.buttonHover} text-white border-0 ${shadows.button} hover:${shadows.buttonHover} ${animations.fast}`}
                      >
                        Book Now
                      </Button>
                    </Link>

                    {isLoggedIn ? (
                      <>
                      

                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => {
                            handleLogout();
                            setIsOpen(false);
                          }}
                          className="w-full border-red-200 text-red-600 hover:bg-red-50 hover:border-red-300"
                        >
                          <LogOut className="h-4 w-4 mr-2" />
                          Sign Out
                        </Button>
                      </>
                    ) : (
                      <Link  href="/login" onClick={() => setIsOpen(false)}>
                        <Button
                          variant="outline"
                          size="sm"
                          className="w-full mt-2 border-blue-200 text-blue-600 hover:bg-blue-50"
                        >
                          Sign In
                        </Button>
                      </Link>
                    )}
                  </div>
                </div>
              </div>

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
