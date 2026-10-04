import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Container } from "./Container";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-midori-dark text-white pt-16 pb-8 mt-auto">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand & Description */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-4 mb-6" aria-label="Midori Matcha Club Home">
              <Image 
                src="/images/logo.png" 
                alt="MIDORI MATCHA CLUB Logo" 
                width={128} 
                height={128} 
                className="h-8 w-auto object-contain brightness-0 invert"
                unoptimized
              />
              <div className="flex flex-col">
                <span className="font-epilogue text-sm uppercase tracking-widest font-bold leading-none mb-1 text-surface-cream">
                  Midori
                </span>
                <span className="font-jakarta text-lg text-midori-green font-semibold leading-none">
                  Matcha Club
                </span>
              </div>
            </Link>
            <p className="text-surface-sand/80 max-w-sm">
              Your daily matcha ritual, reimagined. Pure Okumidori cultivar hand-whisked to velvety microfoam perfection.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-epilogue font-bold uppercase tracking-wider text-sm mb-4 text-surface-cream">
              Explore
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/menu" className="text-surface-sand/80 hover:text-white transition-colors">
                  Our Menu
                </Link>
              </li>
              <li>
                <Link href="/our-story" className="text-surface-sand/80 hover:text-white transition-colors">
                  Our Story
                </Link>
              </li>
              <li>
                <Link href="/journal" className="text-surface-sand/80 hover:text-white transition-colors">
                  Journal
                </Link>
              </li>
            </ul>
          </div>

          {/* Help & Contact */}
          <div>
            <h3 className="font-epilogue font-bold uppercase tracking-wider text-sm mb-4 text-surface-cream">
              Help
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/locations" className="text-surface-sand/80 hover:text-white transition-colors">
                  Find a Sanctuary
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-surface-sand/80 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <a href="#" className="text-surface-sand/80 hover:text-white transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar with required locations */}
        <div className="border-t border-surface-sand/20 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-surface-sand/60">
          <p>
            {/* Required standardized locations */}
            Senopati Flagship &bull; BSD City Lakefront &bull; Royal Baroe Serang
          </p>
          <p>&copy; {currentYear} Midori Matcha Club. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
}
