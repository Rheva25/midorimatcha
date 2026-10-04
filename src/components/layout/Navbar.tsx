"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ShoppingBag, Menu, X } from "lucide-react";
import { Button } from "../ui/Button";
import { useCartStore } from "@/store/useCartStore";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/our-story", label: "Our Story" },
  { href: "/locations", label: "Locations" },
  { href: "/journal", label: "Journal" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  
  // Wait for hydration before rendering real cart count to avoid SSR mismatch
  const [mounted, setMounted] = React.useState(false);
  const items = useCartStore(state => state.items);
  const cartCount = mounted ? items.reduce((total, item) => total + item.quantity, 0) : 0;

  React.useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-surface-cream/90 backdrop-blur-md border-b border-border-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand */}
          <Link href="/" className="flex items-center gap-4 flex-shrink-0" aria-label="Midori Matcha Club Home">
            <Image 
              src="/images/logo.png" 
              alt="MIDORI MATCHA CLUB Logo" 
              width={32} 
              height={32} 
              className="h-8 w-auto object-contain"
              unoptimized
            />
            <div className="hidden xs:flex sm:flex flex-col">
              <span className="font-epilogue text-[0.6875rem] uppercase tracking-widest font-bold leading-none mb-1 text-content-primary">
                Midori
              </span>
              <span className="font-jakarta text-[0.65rem] text-muted-text font-bold leading-none">
                Matcha Club
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-2 xl:gap-6" aria-label="Main Navigation">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-semibold transition-colors rounded-full px-4 py-2 ${
                    isActive
                      ? "bg-midori-green text-white"
                      : "text-muted-text hover:text-content-primary"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <Link
              href="/cart"
              className="relative p-2 text-content-primary hover:text-midori-green transition-colors"
              aria-label={`Cart with ${cartCount} items`}
            >
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 inline-flex items-center justify-center w-4 h-4 text-[0.6rem] font-bold text-white bg-midori-dark rounded-full">
                  {cartCount}
                </span>
              )}
            </Link>
            <Button variant="primary" className="hidden sm:flex px-4 py-2 text-sm" asChild>
              <Link href="/menu">Order Now</Link>
            </Button>
            
            {/* Mobile Menu Toggle */}
            <button
              className="lg:hidden p-2 text-content-primary"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-expanded={isMobileMenuOpen}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-surface-cream border-b border-border-subtle shadow-sm">
          <nav className="px-4 pt-2 pb-4 space-y-1 flex flex-col">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block px-3 py-2 rounded-md text-base font-semibold ${
                    isActive
                      ? "bg-surface-sand text-midori-green"
                      : "text-content-primary hover:bg-surface-sand hover:text-midori-green"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  aria-current={isActive ? "page" : undefined}
                >
                  {link.label}
                </Link>
              );
            })}
            <div className="mt-4 pt-4 border-t border-border-subtle px-3">
              <Button variant="primary" className="w-full justify-center" asChild>
                <Link href="/menu" onClick={() => setIsMobileMenuOpen(false)}>Order Now</Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
