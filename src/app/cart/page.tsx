"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageWrapper } from "@/components/layout";
import { useCartStore, CartItem } from "@/store/useCartStore";
import { toast } from "sonner";
import { PaymentModal } from "@/components/ui/PaymentModal";
import { 
  Coffee, Timer, Store, TreePine, Truck, Trash2, X, Minus, Plus, 
  FlaskConical, Tag, CheckCircle2, Leaf, BadgeCheck, QrCode, 
  Landmark, CreditCard, Lock, ArrowLeft, ShieldCheck, Headset, Zap, AlertCircle
} from "lucide-react";

export default function CartPage() {
  const [fulfillment, setFulfillment] = useState<"pickup" | "delivery">("pickup");
  const [sanctuary, setSanctuary] = useState<string>("Senopati Suites");
  const [paymentMethod, setPaymentMethod] = useState<"qris" | "va" | "card">("qris");
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  
  // Hydration safety
  const [mounted, setMounted] = useState(false);
  const { items, updateQuantity, removeItem, clearCart, addItem } = useCartStore();

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleQuickAdd = (title: string, price: number, imageSrc: string) => {
    addItem({
      id: title.toLowerCase().replace(/\s+/g, '-'),
      title,
      price,
      imageSrc,
      categoryLabel: "Bakery & Accessories",
      badge: "Quick Add"
    });
    toast.success(`${title} added to your basket`);
  };

  if (!mounted) return null; // Prevent hydration mismatch

  // Calculations
  const cartCount = items.reduce((total, item) => total + item.quantity, 0);
  const subtotal = items.reduce((total, item) => total + (item.price * item.quantity), 0);
  const packagingFee = cartCount > 0 ? 5000 : 0;
  const deliveryFee = fulfillment === "delivery" ? 18000 : 0;
  const discount = subtotal * 0.1; // 10% club member discount
  const taxableAmount = Math.max(0, subtotal + packagingFee - discount);
  const tax = taxableAmount * 0.1; // 10% PB1
  const grandTotal = taxableAmount + tax + deliveryFee;

  const formatIDR = (value: number) => {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(Math.floor(value));
  };

  return (
    <>
      <Navbar />
      <PageWrapper>
        {/* Content Container */}
        <section className="w-full px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="max-w-7xl mx-auto">
            {/* Breadcrumb & Top Bar */}
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex items-center gap-2 font-jakarta text-sm text-muted-text">
                <li>
                  <Link href="/" className="hover:text-midori-green transition-colors">Home</Link>
                </li>
                <li className="opacity-40">/</li>
                <li>
                  <Link href="/menu" className="hover:text-midori-green transition-colors">Menu</Link>
                </li>
                <li className="opacity-40">/</li>
                <li className="text-content-primary font-semibold flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-midori-green inline-block"></span>
                  Your Cart ({cartCount} items)
                </li>
              </ol>
            </nav>

            {/* Editorial Header Section */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
              <div className="space-y-3 max-w-2xl">
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface-sand text-midori-dark font-epilogue text-xs tracking-widest uppercase font-bold">
                  <Coffee className="w-4 h-4" />
                  Teahouse Batch No. 048
                </span>
                <h1 className="font-epilogue text-4xl md:text-5xl lg:text-[3.5rem] text-content-primary tracking-tight font-bold uppercase leading-none">
                  YOUR MATCHA ORDER <br />
                  <span className="font-serif italic font-normal text-midori-green">Freshly Whisked &amp; Crafted.</span>
                </h1>
                <p className="font-jakarta text-base text-muted-text max-w-lg mt-4">
                  Curated ceremonial-grade botanicals and fresh Japanese bakes prepared to order for mindful savoring.
                </p>
              </div>

              {/* Live Barista Preparation Status Notification */}
              {cartCount > 0 && (
                <div className="flex items-center gap-3 p-4 bg-surface-sand/50 rounded-2xl border border-border-subtle max-w-sm shrink-0">
                  <div className="w-10 h-10 rounded-full bg-midori-light flex items-center justify-center text-midori-dark flex-shrink-0 animate-pulse">
                    <Timer className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-jakarta text-sm font-bold text-content-primary">Queue Time: ~12-15 mins</p>
                    <p className="font-jakarta text-xs text-muted-text">{sanctuary.split(',')[0]} baristas are actively whisking</p>
                  </div>
                </div>
              )}
            </div>

            {/* Main Two-Column Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              
              {/* LEFT COLUMN: Items, Fulfillment & Recommendations */}
              <div className="lg:col-span-7 space-y-12">
                
                {/* Fulfillment Mode Selector Card */}
                <div className="p-6 md:p-8 bg-white rounded-3xl border border-border-subtle shadow-sm space-y-6">
                  <div className="flex items-center justify-between">
                    <h2 className="font-jakarta text-xl font-bold text-content-primary flex items-center gap-2">
                      <Store className="w-6 h-6 text-midori-green" />
                      Fulfillment Method
                    </h2>
                    <span className="font-epilogue text-[0.6875rem] text-midori-green uppercase font-bold tracking-widest">Select Mode</span>
                  </div>

                  {/* Pickup / Delivery Tabs */}
                  <div className="grid grid-cols-2 p-1.5 bg-surface-sand rounded-full gap-1.5">
                    <button 
                      onClick={() => setFulfillment("pickup")}
                      className={`flex items-center justify-center gap-2 py-2 px-4 rounded-full font-jakarta text-sm transition-all font-bold ${fulfillment === "pickup" ? "bg-midori-dark text-white shadow-md" : "text-muted-text hover:text-content-primary"}`}
                    >
                      <TreePine className="w-4 h-4" />
                      <span>Sanctuary Pickup (Free)</span>
                    </button>
                    <button 
                      onClick={() => setFulfillment("delivery")}
                      className={`flex items-center justify-center gap-2 py-2 px-4 rounded-full font-jakarta text-sm transition-all font-bold ${fulfillment === "delivery" ? "bg-midori-dark text-white shadow-md" : "text-muted-text hover:text-content-primary"}`}
                    >
                      <Truck className="w-4 h-4" />
                      <span>Express Delivery</span>
                    </button>
                  </div>

                  {/* Sanctuary Location Switcher Pills */}
                  {fulfillment === "pickup" && (
                    <div className="space-y-3 pt-2">
                      <p className="font-jakarta text-sm text-muted-text font-semibold">Choose your pickup teahouse sanctuary:</p>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        <button 
                          onClick={() => setSanctuary("Senopati Suites")}
                          className={`text-left p-4 rounded-2xl transition-all border ${sanctuary === "Senopati Suites" ? "bg-midori-light border-midori-green" : "bg-surface-sand border-transparent hover:bg-surface-cream"}`}
                        >
                          <span className={`font-epilogue text-[0.625rem] font-bold uppercase block mb-1 ${sanctuary === "Senopati Suites" ? "text-midori-green" : "text-muted-text"}`}>Most Popular</span>
                          <span className="font-jakarta text-sm font-bold block text-content-primary">Senopati Suites</span>
                          <span className="font-jakarta text-xs text-muted-text block mt-1">Ready in 15 mins</span>
                        </button>
                        <button 
                          onClick={() => setSanctuary("The Breeze, BSD")}
                          className={`text-left p-4 rounded-2xl transition-all border ${sanctuary === "The Breeze, BSD" ? "bg-midori-light border-midori-green" : "bg-surface-sand border-transparent hover:bg-surface-cream"}`}
                        >
                          <span className={`font-epilogue text-[0.625rem] font-bold uppercase block mb-1 ${sanctuary === "The Breeze, BSD" ? "text-midori-green" : "text-muted-text"}`}>Lakefront</span>
                          <span className="font-jakarta text-sm font-bold block text-content-primary">The Breeze, BSD</span>
                          <span className="font-jakarta text-xs text-muted-text block mt-1">Ready in 25 mins</span>
                        </button>
                        <button 
                          onClick={() => setSanctuary("Royal Baroe")}
                          className={`text-left p-4 rounded-2xl transition-all border ${sanctuary === "Royal Baroe" ? "bg-midori-light border-midori-green" : "bg-surface-sand border-transparent hover:bg-surface-cream"}`}
                        >
                          <span className={`font-epilogue text-[0.625rem] font-bold uppercase block mb-1 ${sanctuary === "Royal Baroe" ? "text-midori-green" : "text-muted-text"}`}>Heritage Branch</span>
                          <span className="font-jakarta text-sm font-bold block text-content-primary">Royal Baroe</span>
                          <span className="font-jakarta text-xs text-muted-text block mt-1">Ready in 20 mins</span>
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Express Delivery Options */}
                  {fulfillment === "delivery" && (
                    <div className="space-y-3 pt-2">
                      <div className="p-4 rounded-2xl bg-surface-sand border border-border-subtle flex items-start gap-4">
                        <Zap className="w-6 h-6 text-midori-green shrink-0" />
                        <div className="flex-1 space-y-1">
                          <p className="font-jakarta text-sm font-bold text-content-primary">Instant Insulated Delivery (GrabExpress / GoSend)</p>
                          <p className="font-jakarta text-xs text-muted-text leading-relaxed">Includes dry ice pouch and temperature-sealed biodegradable cups to preserve foam head.</p>
                          <div className="pt-2 flex items-center justify-between">
                            <span className="font-epilogue text-[0.625rem] font-bold bg-midori-light text-midori-dark px-2 py-0.5 rounded-full uppercase">Flat Rate Sanctuary Radius</span>
                            <span className="font-jakarta text-sm font-bold text-midori-green">{formatIDR(18000)}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Cart Items List Container */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between px-2">
                    <h2 className="font-jakarta text-xl font-bold text-content-primary">Crafted Items in Basket</h2>
                    {items.length > 0 && (
                      <button onClick={clearCart} className="font-jakarta text-sm text-red-500 hover:underline flex items-center gap-1 font-semibold">
                        <Trash2 className="w-4 h-4" />
                        Empty Basket
                      </button>
                    )}
                  </div>

                  {items.length === 0 ? (
                    <div className="p-10 md:p-16 bg-white rounded-3xl border border-border-subtle shadow-sm flex flex-col items-center justify-center text-center space-y-4">
                      <div className="w-16 h-16 rounded-full bg-surface-sand flex items-center justify-center text-muted-text">
                        <Coffee className="w-8 h-8" />
                      </div>
                      <div>
                        <h3 className="font-jakarta text-xl font-bold text-content-primary">Your basket is empty</h3>
                        <p className="font-jakarta text-sm text-muted-text mt-1 max-w-sm mx-auto">Explore our menu of ceremonial matcha and seasonal crafted drinks.</p>
                      </div>
                      <Link href="/menu" className="mt-4 px-6 py-3 rounded-full bg-midori-green text-white font-epilogue font-bold text-sm hover:bg-midori-dark transition-colors inline-block">
                        Browse Menu
                      </Link>
                    </div>
                  ) : (
                    items.map((item) => (
                      <div key={item.id} className="p-4 md:p-6 bg-white rounded-3xl border border-border-subtle shadow-sm flex flex-col sm:flex-row items-start sm:items-center gap-6">
                        <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden flex-shrink-0 bg-surface-sand">
                          <Image className="object-cover" src={item.imageSrc} alt={item.title} fill unoptimized />
                          {item.badge && (
                            <span className="absolute bottom-2 right-2 px-2 py-0.5 bg-midori-green/90 backdrop-blur-sm text-white font-epilogue text-[0.625rem] font-bold uppercase rounded-full">
                              {item.badge}
                            </span>
                          )}
                        </div>
                        <div className="flex-1 space-y-2 min-w-0 w-full">
                          <div className="flex items-start justify-between gap-4">
                            <div>
                              {item.categoryLabel && (
                                <span className="font-epilogue text-[0.625rem] text-midori-green uppercase font-bold tracking-wider">{item.categoryLabel}</span>
                              )}
                              <h3 className="font-jakarta text-lg font-bold text-content-primary">{item.title}</h3>
                            </div>
                            <button onClick={() => removeItem(item.id)} className="text-muted-text hover:text-red-500 transition-colors p-1 shrink-0" aria-label="Remove item">
                              <X className="w-5 h-5" />
                            </button>
                          </div>
                          
                          {/* Mock dynamic tags based on logic or static fallbacks */}
                          <div className="flex flex-wrap items-center gap-1.5 pt-1">
                            {item.title.toLowerCase().includes('latte') && (
                              <>
                                <span className="px-2.5 py-1 rounded-full bg-surface-sand text-muted-text font-jakarta text-[0.6875rem] font-semibold">Oatside Barista Blend</span>
                                <span className="px-2.5 py-1 rounded-full bg-surface-sand text-muted-text font-jakarta text-[0.6875rem] font-semibold">Less Ice (50%)</span>
                                <span className="px-2.5 py-1 rounded-full bg-midori-light text-midori-dark font-jakarta text-[0.6875rem] font-semibold">Extra cold foam</span>
                              </>
                            )}
                            {item.title.toLowerCase().includes('strawberry') && (
                              <>
                                <span className="px-2.5 py-1 rounded-full bg-surface-sand text-muted-text font-jakarta text-[0.6875rem] font-semibold">Albion Strawberry Compote</span>
                                <span className="px-2.5 py-1 rounded-full bg-midori-light text-midori-dark font-jakarta text-[0.6875rem] font-semibold">Normal Sweetness (70%)</span>
                              </>
                            )}
                          </div>
                          
                          <div className="flex items-center justify-between pt-3">
                            <div className="flex items-center gap-3">
                              <div className="flex items-center bg-surface-sand rounded-full p-1 border border-border-subtle">
                                <button onClick={() => updateQuantity(item.id, -1)} className="w-7 h-7 rounded-full bg-white flex items-center justify-center hover:bg-surface-cream transition-colors text-content-primary shadow-sm">
                                  <Minus className="w-3.5 h-3.5" />
                                </button>
                                <span className="w-8 text-center font-jakarta text-sm font-bold text-content-primary">{item.quantity}</span>
                                <button onClick={() => updateQuantity(item.id, 1)} className="w-7 h-7 rounded-full bg-white flex items-center justify-center hover:bg-surface-cream transition-colors text-content-primary shadow-sm">
                                  <Plus className="w-3.5 h-3.5" />
                                </button>
                              </div>
                              <span className="font-jakarta text-xs text-muted-text font-semibold">{formatIDR(item.price)} / qty</span>
                            </div>
                            <p className="font-jakarta text-base font-bold text-content-primary">{formatIDR(item.price * item.quantity)}</p>
                          </div>
                        </div>
                      </div>
                    ))
                  )}
                </div>

                {/* Pair With Your Ritual (Upsell recommendations strip) */}
                <div className="p-6 md:p-8 bg-surface-sand rounded-3xl border border-border-subtle space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="font-epilogue text-[0.625rem] text-midori-green uppercase font-bold tracking-widest">Barista Recommendation</span>
                      <h3 className="font-jakarta text-xl font-bold text-content-primary mt-1">Pair With Your Ritual</h3>
                    </div>
                    <span className="font-jakarta text-sm text-muted-text font-semibold hidden sm:inline">Quick Add</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    {/* Recommendation 1 */}
                    <div className="bg-white p-4 rounded-2xl flex flex-col justify-between space-y-3 shadow-sm hover:shadow-md transition-shadow border border-border-subtle group">
                      <div className="w-full h-32 rounded-xl overflow-hidden relative bg-surface-sand">
                        <Image className="object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBBejnpHjZPbock7M45Tr1e3cs7zEfnuDdnjg1BdA73nkaoonDFjTCY8Q_77MgBg6P2BV8z_ieTOIoKVfb4cgAAb2b9dwVYEoe1SUkbLxCWUb52HQ9FgiF9tVbKQLpXU8Arx3Evc-m6vrjWy6YhQ-LPOr_POoaPzXwGToJUQi_94cCuxe5XIlXjRVmatnpFFtCI9TkYuqBm1wjXr8LKQL67X2dXyp-jz9Mmf82Hx4EoR3TCh88UiFiN" alt="Hojicha Canelé" fill unoptimized />
                      </div>
                      <div>
                        <p className="font-jakarta text-sm font-bold text-content-primary line-clamp-1">Hojicha Canelé</p>
                        <p className="font-jakarta text-xs text-muted-text">Roasted tea custard</p>
                      </div>
                      <div className="flex items-center justify-between pt-1">
                        <span className="font-jakarta text-sm font-bold text-midori-green">{formatIDR(38000)}</span>
                        <button 
                          onClick={() => handleQuickAdd("Hojicha Canelé", 38000, "https://lh3.googleusercontent.com/aida-public/AB6AXuBBejnpHjZPbock7M45Tr1e3cs7zEfnuDdnjg1BdA73nkaoonDFjTCY8Q_77MgBg6P2BV8z_ieTOIoKVfb4cgAAb2b9dwVYEoe1SUkbLxCWUb52HQ9FgiF9tVbKQLpXU8Arx3Evc-m6vrjWy6YhQ-LPOr_POoaPzXwGToJUQi_94cCuxe5XIlXjRVmatnpFFtCI9TkYuqBm1wjXr8LKQL67X2dXyp-jz9Mmf82Hx4EoR3TCh88UiFiN")}
                          className="px-3 py-1.5 rounded-full bg-surface-sand hover:bg-midori-green hover:text-white transition-colors font-jakarta text-[0.6875rem] font-bold text-content-primary"
                        >
                          + Add
                        </button>
                      </div>
                    </div>
                    {/* Recommendation 2 */}
                    <div className="bg-white p-4 rounded-2xl flex flex-col justify-between space-y-3 shadow-sm hover:shadow-md transition-shadow border border-border-subtle group">
                      <div className="w-full h-32 rounded-xl overflow-hidden relative bg-surface-sand">
                        <Image className="object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB59hreEJsvochGFbkm33bmXh5WEOpDMK8qPQIx6LS-WE18F738IlbIppO43O-RxCy8aW5rQ6vVGHQTJlzvjB4tZdP6_TLH6lU_HWf8-He5e6YbxjVpnWzN7fqQb9C-5W53NgDWn38iX2J4S7Hr8jwzAP2pJ5uQgPgZzC3WRIOnEqua-EwQktApUm6iaiSrAwreoz9UVrhKwf6JTwpzYV_ltBB96egK_O0RK1gJqeCYoFGbBC94j6Rj" alt="Bamboo Chasen" fill unoptimized />
                      </div>
                      <div>
                        <p className="font-jakarta text-sm font-bold text-content-primary line-clamp-1">Bamboo Chasen</p>
                        <p className="font-jakarta text-xs text-muted-text">100-prong artisanal</p>
                      </div>
                      <div className="flex items-center justify-between pt-1">
                        <span className="font-jakarta text-sm font-bold text-midori-green">{formatIDR(185000)}</span>
                        <button 
                          onClick={() => handleQuickAdd("Bamboo Chasen", 185000, "https://lh3.googleusercontent.com/aida-public/AB6AXuB59hreEJsvochGFbkm33bmXh5WEOpDMK8qPQIx6LS-WE18F738IlbIppO43O-RxCy8aW5rQ6vVGHQTJlzvjB4tZdP6_TLH6lU_HWf8-He5e6YbxjVpnWzN7fqQb9C-5W53NgDWn38iX2J4S7Hr8jwzAP2pJ5uQgPgZzC3WRIOnEqua-EwQktApUm6iaiSrAwreoz9UVrhKwf6JTwpzYV_ltBB96egK_O0RK1gJqeCYoFGbBC94j6Rj")}
                          className="px-3 py-1.5 rounded-full bg-surface-sand hover:bg-midori-green hover:text-white transition-colors font-jakarta text-[0.6875rem] font-bold text-content-primary"
                        >
                          + Add
                        </button>
                      </div>
                    </div>
                    {/* Recommendation 3 */}
                    <div className="bg-white p-4 rounded-2xl flex flex-col justify-between space-y-3 shadow-sm hover:shadow-md transition-shadow border border-border-subtle group">
                      <div className="w-full h-32 rounded-xl overflow-hidden relative bg-surface-sand">
                        <Image className="object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAGFjCaVIuel_o9PlNXQ_YrlBjrVNDUUiInsjVciKeaRQ_dXAlNbsXQKlJLdVWf0RaMXYhXaV9KAmrKPTE4_n2qbX-o4RH0AbW6096SFMp6c70eGjgsyt1dNaPF2J9LeLkuuya5ttGViL36SNIyoe2NnQujG0Kn79avfLCGQpXm7ogy1C5AQ2mcWAKP8Wv7I8jmNiF5YegyN-1mP2A9nkNz3o8R4lb8bJ0UVNpT0b4weJIDw--OG0BS" alt="Matcha Soft Serve" fill unoptimized />
                      </div>
                      <div>
                        <p className="font-jakarta text-sm font-bold text-content-primary line-clamp-1">Matcha Soft Serve</p>
                        <p className="font-jakarta text-xs text-muted-text">Hokkaido milk base</p>
                      </div>
                      <div className="flex items-center justify-between pt-1">
                        <span className="font-jakarta text-sm font-bold text-midori-green">{formatIDR(45000)}</span>
                        <button 
                          onClick={() => handleQuickAdd("Matcha Soft Serve", 45000, "https://lh3.googleusercontent.com/aida-public/AB6AXuAGFjCaVIuel_o9PlNXQ_YrlBjrVNDUUiInsjVciKeaRQ_dXAlNbsXQKlJLdVWf0RaMXYhXaV9KAmrKPTE4_n2qbX-o4RH0AbW6096SFMp6c70eGjgsyt1dNaPF2J9LeLkuuya5ttGViL36SNIyoe2NnQujG0Kn79avfLCGQpXm7ogy1C5AQ2mcWAKP8Wv7I8jmNiF5YegyN-1mP2A9nkNz3o8R4lb8bJ0UVNpT0b4weJIDw--OG0BS")}
                          className="px-3 py-1.5 rounded-full bg-surface-sand hover:bg-midori-green hover:text-white transition-colors font-jakarta text-[0.6875rem] font-bold text-content-primary"
                        >
                          + Add
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Sensory Flavor & Cultivar Matrix Visualization */}
                {cartCount > 0 && (
                  <div className="p-6 md:p-8 bg-white rounded-3xl border border-border-subtle shadow-sm space-y-6">
                    <div className="flex items-center justify-between">
                      <h3 className="font-jakarta text-xl font-bold text-content-primary flex items-center gap-2">
                        <FlaskConical className="w-5 h-5 text-midori-green" />
                        Cart Batch Sensory Profile
                      </h3>
                      <span className="font-epilogue text-[0.625rem] text-muted-text uppercase font-bold tracking-widest hidden sm:inline">Uji First Flush 2025</span>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between font-jakarta text-sm font-semibold mb-2">
                          <span className="text-content-primary">Umami Depth (L-Theanine richness)</span>
                          <span className="font-bold text-midori-green">94%</span>
                        </div>
                        <div className="w-full h-2.5 bg-surface-sand rounded-full overflow-hidden">
                          <div className="h-full bg-midori-dark rounded-full" style={{ width: "94%" }}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between font-jakarta text-sm font-semibold mb-2">
                          <span className="text-content-primary">Bitterness Subtlety (Shade-grown smoothness)</span>
                          <span className="font-bold text-midori-green">18%</span>
                        </div>
                        <div className="w-full h-2.5 bg-surface-sand rounded-full overflow-hidden">
                          <div className="h-full bg-midori-green rounded-full" style={{ width: "18%" }}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between font-jakarta text-sm font-semibold mb-2">
                          <span className="text-content-primary">Froth Density &amp; Micro-bubbles</span>
                          <span className="font-bold text-midori-green">88%</span>
                        </div>
                        <div className="w-full h-2.5 bg-surface-sand rounded-full overflow-hidden">
                          <div className="h-full bg-[#87A86F] rounded-full" style={{ width: "88%" }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* RIGHT COLUMN: Sticky Order Summary & Receipt Checkout */}
              <div className="lg:col-span-5 lg:sticky lg:top-[120px] space-y-6 mt-12 lg:mt-0">
                <div className="p-6 md:p-8 bg-surface-sand rounded-3xl border border-border-subtle shadow-sm space-y-6">
                  <div className="border-b border-border-subtle/50 pb-4">
                    <span className="font-epilogue text-[0.625rem] text-midori-green uppercase font-bold tracking-widest block mb-1">Teahouse Check</span>
                    <h2 className="font-epilogue text-2xl font-bold text-content-primary">Order Summary</h2>
                    <p className="font-jakarta text-sm text-muted-text mt-1">
                      Fulfillment: {fulfillment === "pickup" ? `Pickup at ${sanctuary.split(',')[0]}` : "Express Delivery"}
                    </p>
                  </div>

                  {/* Promo Code Input Form */}
                  <div className="space-y-2">
                    <label className="font-jakarta text-[0.6875rem] uppercase text-muted-text tracking-wider font-bold block">Club Member Voucher</label>
                    <div className="flex items-center gap-2">
                      <div className="relative flex-1">
                        <Tag className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-text" />
                        <input 
                          type="text" 
                          className="w-full pl-9 pr-4 py-2.5 rounded-full bg-white font-jakarta text-sm text-content-primary border border-border-subtle focus:outline-none focus:ring-2 focus:ring-midori-green/40 uppercase font-semibold"
                          placeholder="Enter voucher code"
                          defaultValue="CLUBMIDORI"
                        />
                      </div>
                      <button className="px-5 py-2.5 rounded-full bg-midori-light text-midori-dark hover:bg-midori-green hover:text-white transition-colors font-jakarta text-sm font-bold shrink-0 border border-transparent">
                        Applied
                      </button>
                    </div>
                    {cartCount > 0 && (
                      <p className="font-jakarta text-xs text-midori-green flex items-center gap-1.5 font-bold pt-1">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        'CLUBMIDORI' applied: 10% First Flush Welcome Discount
                      </p>
                    )}
                  </div>

                  {/* Line items calculation breakdown */}
                  <div className="py-4 bg-white px-5 rounded-2xl border border-border-subtle space-y-3">
                    <div className="flex justify-between font-jakarta text-sm text-muted-text">
                      <span>Items Subtotal</span>
                      <span className="text-content-primary font-bold">{formatIDR(subtotal)}</span>
                    </div>
                    {cartCount > 0 && (
                      <div className="flex justify-between font-jakarta text-sm text-muted-text">
                        <span className="flex items-center gap-1.5 cursor-help" title="Compostable plant starch seal">
                          Teahouse Eco Packaging
                          <Leaf className="w-3.5 h-3.5 text-midori-green" />
                        </span>
                        <span className="text-content-primary font-bold">{formatIDR(packagingFee)}</span>
                      </div>
                    )}
                    {fulfillment === "delivery" && cartCount > 0 && (
                      <div className="flex justify-between font-jakarta text-sm text-muted-text">
                        <span>Express Delivery Fee</span>
                        <span className="text-content-primary font-bold">{formatIDR(deliveryFee)}</span>
                      </div>
                    )}
                    {cartCount > 0 && (
                      <>
                        <div className="flex justify-between font-jakarta text-sm text-midori-green">
                          <span className="flex items-center gap-1.5 font-bold">
                            Club Member Benefit (10%)
                            <BadgeCheck className="w-3.5 h-3.5" />
                          </span>
                          <span className="font-bold">-{formatIDR(discount)}</span>
                        </div>
                        <div className="flex justify-between font-jakarta text-sm text-muted-text">
                          <span>Local Tax (PB1 10%)</span>
                          <span className="text-content-primary font-bold">{formatIDR(tax)}</span>
                        </div>
                      </>
                    )}
                    <div className="pt-3 border-t border-border-subtle/50 flex justify-between items-baseline mt-2">
                      <div>
                        <span className="font-jakarta text-base font-bold text-content-primary block">Total Due</span>
                        <span className="font-jakarta text-[0.6875rem] text-muted-text font-semibold">Includes all taxes &amp; duties</span>
                      </div>
                      <span className="font-epilogue text-2xl font-bold text-midori-dark">
                        {cartCount === 0 ? "Rp 0" : formatIDR(grandTotal)}
                      </span>
                    </div>
                  </div>

                  {/* Payment Options Selector */}
                  <div className="space-y-3">
                    <span className="font-jakarta text-[0.6875rem] uppercase text-muted-text tracking-wider font-bold block">Select Payment</span>
                    <div className="grid grid-cols-3 gap-2">
                      <label className={`cursor-pointer ${cartCount === 0 ? 'opacity-50 pointer-events-none' : ''}`}>
                        <input 
                          type="radio" 
                          name="payment-method" 
                          value="qris" 
                          className="peer sr-only" 
                          checked={paymentMethod === "qris"}
                          onChange={() => setPaymentMethod("qris")}
                          disabled={cartCount === 0}
                        />
                        <div className="p-3 text-center rounded-2xl bg-white border border-border-subtle peer-checked:bg-midori-dark peer-checked:text-white peer-checked:border-midori-dark hover:bg-surface-cream transition-all h-full flex flex-col items-center justify-center gap-1.5 text-muted-text">
                          <QrCode className="w-5 h-5" />
                          <span className="font-epilogue text-[0.625rem] uppercase font-bold tracking-wider leading-tight">QRIS<br/>Instant</span>
                        </div>
                      </label>
                      <label className={`cursor-pointer ${cartCount === 0 ? 'opacity-50 pointer-events-none' : ''}`}>
                        <input 
                          type="radio" 
                          name="payment-method" 
                          value="va" 
                          className="peer sr-only"
                          checked={paymentMethod === "va"}
                          onChange={() => setPaymentMethod("va")}
                          disabled={cartCount === 0}
                        />
                        <div className="p-3 text-center rounded-2xl bg-white border border-border-subtle peer-checked:bg-midori-dark peer-checked:text-white peer-checked:border-midori-dark hover:bg-surface-cream transition-all h-full flex flex-col items-center justify-center gap-1.5 text-muted-text">
                          <Landmark className="w-5 h-5" />
                          <span className="font-epilogue text-[0.625rem] uppercase font-bold tracking-wider leading-tight">Virtual<br/>Acc</span>
                        </div>
                      </label>
                      <label className={`cursor-pointer ${cartCount === 0 ? 'opacity-50 pointer-events-none' : ''}`}>
                        <input 
                          type="radio" 
                          name="payment-method" 
                          value="card" 
                          className="peer sr-only"
                          checked={paymentMethod === "card"}
                          onChange={() => setPaymentMethod("card")}
                          disabled={cartCount === 0}
                        />
                        <div className="p-3 text-center rounded-2xl bg-white border border-border-subtle peer-checked:bg-midori-dark peer-checked:text-white peer-checked:border-midori-dark hover:bg-surface-cream transition-all h-full flex flex-col items-center justify-center gap-1.5 text-muted-text">
                          <CreditCard className="w-5 h-5" />
                          <span className="font-epilogue text-[0.625rem] uppercase font-bold tracking-wider leading-tight">Credit<br/>Card</span>
                        </div>
                      </label>
                    </div>
                  </div>

                  {/* Checkout Trigger CTA Button */}
                  <button 
                    onClick={() => setIsPaymentModalOpen(true)}
                    disabled={cartCount === 0}
                    className="w-full py-4 px-6 rounded-full bg-midori-green text-white hover:bg-midori-dark transition-colors disabled:opacity-50 disabled:pointer-events-none font-epilogue text-base font-bold tracking-wide flex items-center justify-center gap-2 shadow-lg hover:shadow-xl active:scale-[0.98]"
                  >
                    {cartCount === 0 ? (
                      <>
                        <AlertCircle className="w-5 h-5" />
                        <span>Basket is Empty</span>
                      </>
                    ) : (
                      <>
                        <Lock className="w-5 h-5" />
                        <span>Proceed to Checkout — {formatIDR(grandTotal)}</span>
                      </>
                    )}
                  </button>

                  {/* Back to menu link */}
                  <div className="text-center pt-2">
                    <Link href="/menu" className="inline-flex items-center gap-1.5 font-jakarta text-sm text-muted-text hover:text-midori-green transition-colors font-bold">
                      <ArrowLeft className="w-4 h-4" />
                      Continue Browsing Menu
                    </Link>
                  </div>

                  {/* Reassurance Badges Pill Grid */}
                  <div className="pt-4 space-y-2.5 border-t border-border-subtle/50">
                    <div className="flex items-center gap-2 text-muted-text font-jakarta text-xs font-semibold">
                      <ShieldCheck className="w-4 h-4 text-midori-green" />
                      <span>256-bit secure encrypted checkout</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-text font-jakarta text-xs font-semibold">
                      <Headset className="w-4 h-4 text-midori-green" />
                      <span>Priority support for club members</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </PageWrapper>
      <Footer />

      <PaymentModal 
        isOpen={isPaymentModalOpen}
        onClose={() => setIsPaymentModalOpen(false)}
        method={paymentMethod}
        amount={grandTotal}
        fulfillment={fulfillment}
        sanctuary={sanctuary}
        onSuccess={() => {
          clearCart();
          setIsPaymentModalOpen(false);
        }}
      />
    </>
  );
}
