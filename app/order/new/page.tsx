"use client";

import { useState, useRef,useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import Image from "next/image";
import {
  Sparkles,
  Wind,
  Flame,
  Droplet,
  Shirt,
  Heart,
  ArrowLeft,
  ArrowRight,
  CalendarIcon,
  Clock,
  MapPin,
  Plus,
  Minus,
  Trash2,
  Tag,
  CheckCircle2,
  Package,
} from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

const services = [
  {
    id: 1,
    name: "Regular Wash",
    description: "Standard washing for everyday clothes",
    price: 2.50,
    image: "https://media.istockphoto.com/id/542303516/photo/worker-laundry-ironed-clothes-iron-dry.jpg?s=612x612&w=0&k=20&c=lcI-9Caxcqd-ZI9vwAPmHAl76cB_T205hB8tFr2Iclg=",
    icon: Shirt,
    color: "bg-blue-100 text-blue-600",
    popular: false
  },
  {
    id: 2,
    name: "Premium Wash",
    description: "Delicate washing with premium care",
    price: 4.00,
    image: "https://plus.unsplash.com/premium_photo-1682129249054-b0aeef5ae1fe?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZHJ5JTIwY2xlYW5pbmd8ZW58MHx8MHx8fDA%3D",
    icon: Sparkles,
    color: "bg-cyan-100 text-cyan-600",
    popular: true
  },
  {
    id: 3,
    name: "Dry Cleaning",
    description: "Professional dry cleaning",
    price: 8.00,
    image: "https://images.unsplash.com/photo-1624372635310-01d078c05dd9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGxhdW5kcnl8ZW58MHx8MHx8fDA%3D",
    icon: Wind,
    color: "bg-teal-100 text-teal-600",
    popular: false
  },
  {
    id: 4,
    name: "Steam Iron",
    description: "Crisp professional ironing",
    price: 1.50,
    image: "https://media.istockphoto.com/id/542303516/photo/worker-laundry-ironed-clothes-iron-dry.jpg?s=612x612&w=0&k=20&c=lcI-9Caxcqd-ZI9vwAPmHAl76cB_T205hB8tFr2Iclg=",
    icon: Flame,
    color: "bg-orange-100 text-orange-600",
    popular: false
  },
  {
    id: 5,
    name: "Stain Removal",
    description: "Specialized stain treatment",
    price: 5.00,
    image: "https://plus.unsplash.com/premium_photo-1682129249054-b0aeef5ae1fe?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZHJ5JTIwY2xlYW5pbmd8ZW58MHx8MHx8fDA%3D",
    icon: Droplet,
    color: "bg-blue-100 text-blue-600",
    popular: false
  },
  {
    id: 6,
    name: "Delicate Care",
    description: "Special care for delicate fabrics",
    price: 6.00,
    image: "https://images.unsplash.com/photo-1624372635310-01d078c05dd9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGxhdW5kcnl8ZW58MHx8MHx8fDA%3D",
    icon: Heart,
    color: "bg-pink-100 text-pink-600",
    popular: false
  },
  {
    id: 7,
    name: "Traditional Wear",
    description: "Expert care for traditional garments",
    price: 7.00,
    image: "https://media.istockphoto.com/id/542303516/photo/worker-laundry-ironed-clothes-iron-dry.jpg?s=612x612&w=0&k=20&c=lcI-9Caxcqd-ZI9vwAPmHAl76cB_T205hB8tFr2Iclg=",
    icon: Package,
    color: "bg-purple-100 text-purple-600",
    popular: false
  }
];

const timeSlots = [
  "9:00 AM - 12:00 PM",
  "12:00 PM - 3:00 PM",
  "3:00 PM - 6:00 PM",
  "6:00 PM - 9:00 PM"
];

const itemTypes = [
  "Shirt", "T-Shirt", "Pants", "Jeans", "Dress", "Suit", "Saree",
  "Kurta", "Bedsheet", "Towel", "Jacket", "Sweater", "Other"
];

export default function NewOrderPage() {
  const router = useRouter();
  const itemsSectionRef = useRef<HTMLDivElement>(null);
  const [selectedService, setSelectedService] = useState<number | null>(null);
  const [items, setItems] = useState<Array<{ itemName: string; quantity: number }>>([]);
  const [newItemName, setNewItemName] = useState("");
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  // Modal state for booking flow
  const [modalStep, setModalStep] = useState(1);
  const [pickupDate, setPickupDate] = useState<Date>();
  const [pickupTimeSlot, setPickupTimeSlot] = useState("");
  const [deliveryDate, setDeliveryDate] = useState<Date>();
  const [deliveryTimeSlot, setDeliveryTimeSlot] = useState("");
  const [pickupAddress, setPickupAddress] = useState("");
  const [deliveryAddress, setDeliveryAddress] = useState("");
  const [specialInstructions, setSpecialInstructions] = useState("");
  const [promoCode, setPromoCode] = useState("");
  const [appliedPromo, setAppliedPromo] = useState<{ code: string; discount: number } | null>(null);

  const selectedServiceData = services.find(s => s.id === selectedService);

  const addItem = (itemName: string) => {
    const existingItem = items.find(item => item.itemName === itemName);
    if (existingItem) {
      setItems(items.map(item =>
        item.itemName === itemName
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setItems([...items, { itemName, quantity: 1 }]);
    }
    setNewItemName("");
  };

  const updateQuantity = (itemName: string, delta: number) => {
    setItems(items.map(item => {
      if (item.itemName === itemName) {
        const newQuantity = item.quantity + delta;
        return newQuantity > 0 ? { ...item, quantity: newQuantity } : item;
      }
      return item;
    }).filter(item => item.quantity > 0));
  };

  const removeItem = (itemName: string) => {
    setItems(items.filter(item => item.itemName !== itemName));
  };

  const calculateTotal = () => {
    if (!selectedServiceData) return 0;
    const itemsTotal = items.reduce((sum, item) => sum + (item.quantity * selectedServiceData.price), 0);
    return itemsTotal;
  };

  const calculateDiscount = () => {
    if (!appliedPromo) return 0;
    return (calculateTotal() * appliedPromo.discount) / 100;
  };

  const calculateFinal = () => {
    return calculateTotal() - calculateDiscount();
  };

  const applyPromoCode = () => {
    if (promoCode.toUpperCase() === "WELCOME20") {
      setAppliedPromo({ code: "WELCOME20", discount: 20 });
    } else if (promoCode.toUpperCase() === "FRESH10") {
      setAppliedPromo({ code: "FRESH10", discount: 10 });
    } else {
      alert("Invalid promo code");
    }
  };

  const handleModalSubmit = () => {
    const orderData = {
      service: selectedServiceData?.name,
      items,
      pickupDate,
      pickupTimeSlot,
      deliveryDate,
      deliveryTimeSlot,
      pickupAddress,
      deliveryAddress,
      specialInstructions,
      promoCode: appliedPromo?.code,
      total: calculateTotal(),
      discount: calculateDiscount(),
      final: calculateFinal()
    };

    console.log("Order submitted:", orderData);
    setIsBookingModalOpen(false);
    router.push("/order/confirmation");
  };

  const canProceedToModal = selectedService && items.length > 0;
  const canProceedToModalStep2 = pickupDate && pickupTimeSlot && deliveryDate && deliveryTimeSlot;
  const canSubmitModal = pickupAddress && deliveryAddress;

  useEffect(() => {
    if (selectedService && itemsSectionRef.current) {
      itemsSectionRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  }, [selectedService]);
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/90 backdrop-blur-lg shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="h-10 w-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
              <Sparkles className="h-5 w-5 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              FreshFold
            </span>
          </Link>
          <Link href="/">
            <Button variant="ghost" size="sm" className="hover:bg-blue-50">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Page Header */}
        <div className="text-center mb-6">
          
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
            Book Your Laundry Service
          </h1>
       
        </div>

        {/* Service Selection - Modern Horizontal Scroll */}
        <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm mb-8">
          <CardHeader className="text-center pb-6">

            <CardDescription className="text-lg">
              Select the perfect laundry service for your needs
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="relative">
              <div className="flex gap-4 overflow-x-auto pb-4 pt-4 snap-x snap-mandatory scrollbar-hide">
                {services.map((service, index) => {
                  const Icon = service.icon;
                  return (
                    <div
                      key={service.id}
                      className="flex-shrink-0 w-48 snap-start group cursor-pointer"
                      onClick={() => setSelectedService(service.id)}
                    >
                      <div className={cn(
                        "bg-white rounded-2xl border-2 p-4 h-full transition-all duration-300 hover:shadow-xl group-hover:-translate-y-1 relative overflow-hidden",
                        selectedService === service.id
                          ? "border-blue-500 bg-blue-50/50"
                          : "border-gray-100 hover:border-blue-200"
                      )}>
                        {/* Popular Badge */}
                        {service.popular && (
                          <div className="absolute -top-2 -right-2 z-10">
                            <Badge className="bg-gradient-to-r from-orange-400 to-pink-400 text-white text-xs px-2 py-1 rounded-full shadow-sm">
                              POPULAR
                            </Badge>
                          </div>
                        )}

                        {/* Service Image */}
                        <div className="w-full h-24 rounded-lg overflow-hidden mb-3 bg-gray-100">
                          <Image
                            src={service.image}
                            alt={service.name}
                            width={200}
                            height={100}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>

                        {/* Service Icon & Name */}
                        <div className="flex items-center gap-3 mb-2">
                          <div className={`h-10 w-10 rounded-lg ${service.color} flex items-center justify-center`}>
                            <Icon className="h-5 w-5" />
                          </div>
                          <h3 className="font-bold text-sm text-gray-800 group-hover:text-blue-600 transition-colors">
                            {service.name}
                          </h3>
                        </div>

                        {/* Description */}
                        <p className="text-xs text-gray-600 mb-2 leading-relaxed">
                          {service.description}
                        </p>

                        {/* Price */}
                        <div className="text-center">
                          <Badge variant="secondary" className="text-sm font-bold px-3 py-1 bg-blue-50 text-blue-700">
                            ₹{service.price.toFixed(2)}/item
                          </Badge>
                        </div>

                        {/* Selection Indicator */}
                        {selectedService === service.id && (
                          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 pointer-events-none" />
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Scroll Indicator */}
              <div className="flex justify-center mt-4">
                <div className="flex gap-1">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="w-2 h-2 rounded-full bg-blue-200"></div>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Items Management */}
        {selectedService && (

          <Card ref={itemsSectionRef} className="border-0 shadow-xl bg-white/80 backdrop-blur-sm mb-8">
            <CardHeader>
              <CardTitle className="text-xl text-gray-800">Add Items</CardTitle>
              <CardDescription>Select the items you want to {selectedServiceData?.name.toLowerCase()}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex gap-3">
                <select
                  value={newItemName}
                  onChange={(e) => setNewItemName(e.target.value)}
                  className="flex h-12 w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                >
                  <option value="">Select item type...</option>
                  {itemTypes.map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
                <Button
                  onClick={() => newItemName && addItem(newItemName)}
                  disabled={!newItemName}
                  className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 px-6"
                >
                  <Plus className="h-4 w-4 mr-2" />
                  Add Item
                </Button>
              </div>

              {items.length > 0 && (
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-800">Selected Items</h4>
                  {items.map((item) => (
                    <div key={item.itemName} className="flex items-center justify-between bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                      <div className="flex items-center gap-3">
                        <div className="h-8 w-8 rounded-lg bg-gradient-to-r from-blue-100 to-cyan-100 flex items-center justify-center">
                          <Shirt className="h-4 w-4 text-blue-600" />
                        </div>
                        <span className="font-medium text-gray-800">{item.itemName}</span>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2">
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => updateQuantity(item.itemName, -1)}
                            className="h-8 w-8 p-0"
                          >
                            <Minus className="h-3 w-3" />
                          </Button>
                          <span className="w-8 text-center font-semibold text-sm">{item.quantity}</span>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => updateQuantity(item.itemName, 1)}
                            className="h-8 w-8 p-0"
                          >
                            <Plus className="h-3 w-3" />
                          </Button>
                        </div>
                        <span className="font-bold text-blue-600 w-20 text-right">
                          ₹{(item.quantity * (selectedServiceData?.price || 0)).toFixed(2)}
                        </span>
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => removeItem(item.itemName)}
                          className="text-red-500 hover:text-red-700 hover:bg-red-50"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        )}

        {/* Continue to Booking Button */}
        {canProceedToModal && (
          <div className="flex justify-center">
            <Dialog open={isBookingModalOpen} onOpenChange={setIsBookingModalOpen}>
              <DialogTrigger asChild>
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-12 py-4 text-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Continue to Booking
                  <ArrowRight className="ml-2 h-6 w-6" />
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
              

                <div className="mt-6">
                  {/* Modal Step Progress */}
                  <div className="flex items-center justify-center mb-8 gap-4">
                    {[1, 2, 3].map((s) => (
                      <div key={s} className="flex items-center">
                        <div className={cn(
                          "h-10 w-10 rounded-full flex items-center justify-center font-bold transition-all duration-300",
                          modalStep >= s
                            ? "bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg"
                            : "bg-gray-200 text-gray-500"
                        )}>
                          {s}
                        </div>
                        {s < 3 && (
                          <div className={cn(
                            "h-1 w-16 transition-all duration-300",
                            modalStep > s ? "bg-gradient-to-r from-blue-600 to-cyan-600" : "bg-gray-200"
                          )} />
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Modal Step 1: Schedule */}
                  {modalStep === 1 && (
                    <div className="space-y-6">
                      <div className="text-center mb-6">
                        <h3 className="text-xl font-bold text-gray-800 mb-2">Schedule Pickup & Delivery</h3>
                        <p className="text-gray-600">Choose convenient time slots</p>
                      </div>

                      <div className="grid md:grid-cols-2 gap-8">
                        {/* Pickup Section */}
                        <div className="space-y-4">
                          {/* <div className="text-center">
                            <div className="h-12 w-12 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center mx-auto mb-2">
                              <ArrowRight className="h-6 w-6 text-white rotate-180" />
                            </div>
                            <Label className="text-lg font-semibold text-gray-800">Pickup Details</Label>
                          </div> */}

                          <div className="space-y-4">
                            <Label className="text-base font-semibold flex items-center gap-2">
                              <CalendarIcon className="h-5 w-5 text-blue-600" />
                              Pickup Date
                            </Label>
                            <Popover>
                              <PopoverTrigger asChild>
                                <Button
                                  variant="outline"
                                  className={cn(
                                    "w-full h-12 justify-start text-left font-normal border-2",
                                    !pickupDate && "text-muted-foreground"
                                  )}
                                >
                                  <CalendarIcon className="mr-2 h-4 w-4" />
                                  {pickupDate ? format(pickupDate, "PPP") : "Select pickup date"}
                                </Button>
                              </PopoverTrigger>
                              <PopoverContent className="w-auto p-0">
                                <Calendar
                                  mode="single"
                                  selected={pickupDate}
                                  onSelect={setPickupDate}
                                  initialFocus
                                  disabled={(date) => date < new Date()}
                                />
                              </PopoverContent>
                            </Popover>

                            <Label className="text-base font-semibold flex items-center gap-2">
                              <Clock className="h-5 w-5 text-blue-600" />
                              Pickup Time Slot
                            </Label>
                            <div className="grid grid-cols-1 gap-2">
                              {timeSlots.map((slot) => (
                                <Button
                                  key={slot}
                                  variant={pickupTimeSlot === slot ? "default" : "outline"}
                                  className={cn(
                                    "h-12 justify-center text-sm font-medium border-2 transition-all",
                                    pickupTimeSlot === slot
                                      ? "bg-gradient-to-r from-blue-600 to-cyan-600 text-white border-blue-600"
                                      : "hover:border-blue-300 hover:bg-blue-50"
                                  )}
                                  onClick={() => setPickupTimeSlot(slot)}
                                >
                                  {slot}
                                </Button>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Delivery Section */}
                        <div className="space-y-4">
                          {/* <div className="text-center">
                            <div className="h-12 w-12 rounded-full bg-gradient-to-r from-green-500 to-blue-500 flex items-center justify-center mx-auto mb-2">
                              <ArrowRight className="h-6 w-6 text-white" />
                            </div>
                            <Label className="text-lg font-semibold text-gray-800">Delivery Details</Label>
                          </div> */}

                          <div className="space-y-4">
                            <Label className="text-base font-semibold flex items-center gap-2">
                              <CalendarIcon className="h-5 w-5 text-green-600" />
                              Delivery Date
                            </Label>
                            <Popover>
                              <PopoverTrigger asChild>
                                <Button
                                  variant="outline"
                                  className={cn(
                                    "w-full h-12 justify-start text-left font-normal border-2",
                                    !deliveryDate && "text-muted-foreground"
                                  )}
                                >
                                  <CalendarIcon className="mr-2 h-4 w-4" />
                                  {deliveryDate ? format(deliveryDate, "PPP") : "Select delivery date"}
                                </Button>
                              </PopoverTrigger>
                              <PopoverContent className="w-auto p-0">
                                <Calendar
                                  mode="single"
                                  selected={deliveryDate}
                                  onSelect={setDeliveryDate}
                                  initialFocus
                                  disabled={(date) => {
                                    const minDate = pickupDate ? new Date(pickupDate.getTime() + 24 * 60 * 60 * 1000) : new Date();
                                    return date < minDate;
                                  }}
                                />
                              </PopoverContent>
                            </Popover>

                            <Label className="text-base font-semibold flex items-center gap-2">
                              <Clock className="h-5 w-5 text-green-600" />
                              Delivery Time Slot
                            </Label>
                            <div className="grid grid-cols-1 gap-2">
                              {timeSlots.map((slot) => (
                                <Button
                                  key={slot}
                                  variant={deliveryTimeSlot === slot ? "default" : "outline"}
                                  className={cn(
                                    "h-12 justify-center text-sm font-medium border-2 transition-all",
                                    deliveryTimeSlot === slot
                                      ? "bg-gradient-to-r from-green-600 to-blue-600 text-white border-green-600"
                                      : "hover:border-green-300 hover:bg-green-50"
                                  )}
                                  onClick={() => setDeliveryTimeSlot(slot)}
                                >
                                  {slot}
                                </Button>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="flex justify-end">
                        <Button
                          size="lg"
                          disabled={!canProceedToModalStep2}
                          onClick={() => setModalStep(2)}
                          className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-3"
                        >
                          Continue to Address
                          <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                      </div>
                    </div>
                  )}

                  {/* Modal Step 2: Address */}
                  {modalStep === 2 && (
                    <div className="space-y-6">
                      <div className="text-center mb-6">
                        <h3 className="text-xl font-bold text-gray-800 mb-2">Address Details</h3>
                        <p className="text-gray-600">Enter your pickup and delivery addresses</p>
                      </div>

                      <div className="space-y-6">
                        {/* Pickup Address */}
                        <div className="space-y-3">
                          <Label className="text-base font-semibold flex items-center gap-2">
                            <MapPin className="h-5 w-5 text-blue-600" />
                            Pickup Address
                          </Label>
                          <Textarea
                            placeholder="Enter your complete pickup address with landmarks..."
                            value={pickupAddress}
                            onChange={(e) => setPickupAddress(e.target.value)}
                            rows={3}
                            className="border-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                          />
                        </div>

                        {/* Delivery Address */}
                        <div className="space-y-3">
                          <div className="flex items-center justify-between">
                            <Label className="text-base font-semibold flex items-center gap-2">
                              <MapPin className="h-5 w-5 text-green-600" />
                              Delivery Address
                            </Label>
                            <Button
                              variant="link"
                              size="sm"
                              onClick={() => setDeliveryAddress(pickupAddress)}
                              className="text-blue-600 hover:text-blue-800"
                            >
                              Same as pickup
                            </Button>
                          </div>
                          <Textarea
                            placeholder="Enter your complete delivery address with landmarks..."
                            value={deliveryAddress}
                            onChange={(e) => setDeliveryAddress(e.target.value)}
                            rows={3}
                            className="border-2 focus:border-green-500 focus:ring-2 focus:ring-green-500/20"
                          />
                        </div>

                        {/* Special Instructions */}
                        <div className="space-y-3">
                          <Label className="text-base font-semibold">Special Instructions (Optional)</Label>
                          <Textarea
                            placeholder="Any special care requirements for your clothes..."
                            value={specialInstructions}
                            onChange={(e) => setSpecialInstructions(e.target.value)}
                            rows={3}
                            className="border-2 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20"
                          />
                        </div>
                      </div>

                      <div className="flex justify-between">
                        <Button
                          variant="outline"
                          onClick={() => setModalStep(1)}
                          className="px-8 py-3 border-2 hover:border-blue-300 hover:bg-blue-50"
                        >
                          <ArrowLeft className="mr-2 h-4 w-4" />
                          Back
                        </Button>
                        <Button
                          size="lg"
                          disabled={!canSubmitModal}
                          onClick={() => setModalStep(3)}
                          className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-3"
                        >
                          Review Order
                          <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                      </div>
                    </div>
                  )}

                  {/* Modal Step 3: Review & Submit */}
                  {modalStep === 3 && (
                    <div className="space-y-6">
                      <div className="text-center mb-6">
                        <h3 className="text-xl font-bold text-gray-800 mb-2">Review Your Order</h3>
                        <p className="text-gray-600">Confirm all details before submitting</p>
                      </div>

                      <div className="space-y-6">
                        {/* Service & Items Summary */}
                        <div>
                          <div className="flex items-center gap-3 mb-4">
                            <div className="h-8 w-8 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center">
                              <Sparkles className="h-4 w-4 text-white" />
                            </div>
                            <h4 className="text-lg font-bold text-gray-800">Service & Items</h4>
                          </div>
                          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-4 rounded-xl space-y-2">
                            <div className="font-semibold text-blue-900">{selectedServiceData?.name}</div>
                            {items.map((item) => (
                              <div key={item.itemName} className="flex justify-between text-sm">
                                <span>{item.itemName} x {item.quantity}</span>
                                <span>₹{(item.quantity * (selectedServiceData?.price || 0)).toFixed(2)}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <Separator />

                        {/* Schedule Summary */}
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="bg-blue-50 p-4 rounded-lg">
                            <h5 className="font-semibold text-blue-900 mb-2">Pickup</h5>
                            <div className="text-sm space-y-1">
                              <div><strong>Date:</strong> {pickupDate && format(pickupDate, "PPP")}</div>
                              <div><strong>Time:</strong> {pickupTimeSlot}</div>
                              <div><strong>Address:</strong> {pickupAddress}</div>
                            </div>
                          </div>

                          <div className="bg-green-50 p-4 rounded-lg">
                            <h5 className="font-semibold text-green-900 mb-2">Delivery</h5>
                            <div className="text-sm space-y-1">
                              <div><strong>Date:</strong> {deliveryDate && format(deliveryDate, "PPP")}</div>
                              <div><strong>Time:</strong> {deliveryTimeSlot}</div>
                              <div><strong>Address:</strong> {deliveryAddress}</div>
                            </div>
                          </div>
                        </div>

                        {/* Promo Code */}
                        <div>
                          <Label className="text-base font-semibold mb-3 block">Promo Code (Optional)</Label>
                          <div className="flex gap-2">
                            <Input
                              placeholder="Enter promo code"
                              value={promoCode}
                              onChange={(e) => setPromoCode(e.target.value.toUpperCase())}
                              disabled={!!appliedPromo}
                              className="border-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                            />
                            {!appliedPromo ? (
                              <Button
                                onClick={applyPromoCode}
                                disabled={!promoCode}
                                className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700"
                              >
                                Apply
                              </Button>
                            ) : (
                              <Button
                                variant="outline"
                                onClick={() => { setAppliedPromo(null); setPromoCode(""); }}
                                className="border-red-300 text-red-600 hover:bg-red-50"
                              >
                                Remove
                              </Button>
                            )}
                          </div>
                          {appliedPromo && (
                            <div className="mt-2 flex items-center gap-2 text-green-600 bg-green-50 p-3 rounded-lg">
                              <CheckCircle2 className="h-4 w-4" />
                              <span className="font-medium">Promo code "{appliedPromo.code}" applied! {appliedPromo.discount}% off</span>
                            </div>
                          )}
                        </div>

                        <Separator />

                        {/* Order Summary */}
                        <div className="bg-gradient-to-r from-blue-50 via-cyan-50 to-green-50 p-6 rounded-xl border border-blue-200">
                          <h3 className="font-bold text-xl mb-4 text-gray-800 text-center">Order Summary</h3>
                          <div className="space-y-3">
                            <div className="flex justify-between text-lg">
                              <span className="text-gray-700">Subtotal</span>
                              <span className="font-semibold">₹{calculateTotal().toFixed(2)}</span>
                            </div>
                            {appliedPromo && (
                              <div className="flex justify-between text-lg text-green-600">
                                <span>Discount ({appliedPromo.discount}%)</span>
                                <span className="font-semibold">-₹{calculateDiscount().toFixed(2)}</span>
                              </div>
                            )}
                            <Separator />
                            <div className="flex justify-between text-2xl font-bold">
                              <span className="text-gray-800">Total Amount</span>
                              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                                ₹{calculateFinal().toFixed(2)}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="flex justify-between">
                        <Button
                          variant="outline"
                          onClick={() => setModalStep(2)}
                          className="px-8 py-3 border-2 hover:border-blue-300 hover:bg-blue-50"
                        >
                          <ArrowLeft className="mr-2 h-4 w-4" />
                          Back
                        </Button>
                        <Button
                          size="lg"
                          onClick={handleModalSubmit}
                          className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white px-8 py-3"
                        >
                          Confirm Order
                          <CheckCircle2 className="ml-2 h-5 w-5" />
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
              </DialogContent>
            </Dialog>
          </div>
        )}

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
      </div>
    </div>
  );
}