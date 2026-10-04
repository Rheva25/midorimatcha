import * as React from "react";
import { Navigation, Search, LocateFixed } from "lucide-react";

export function JavaSanctuaryMap() {
  return (
    <div className="flex flex-col gap-6 w-full">
      {/* Search & Distance Controls Bar */}
      <div className="flex flex-col md:flex-row items-center gap-4 bg-white p-3 rounded-full shadow-sm border border-border-subtle/50">
        <div className="flex-1 flex items-center gap-2 w-full px-4">
          <Search className="w-5 h-5 text-muted-text" />
          <input 
            className="w-full bg-transparent font-jakarta text-sm text-content-primary placeholder:text-muted-text focus:outline-none" 
            placeholder="Enter your city, neighborhood, or postal code (e.g. Senopati, BSD, Serang)..." 
            type="text" 
          />
        </div>
        <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto px-2 pb-2 md:pb-0 hide-scrollbar">
          <button className="font-jakarta text-sm font-semibold px-4 py-2 rounded-full bg-midori-green text-white whitespace-nowrap transition-colors">
            Jakarta Selatan (1.2 km)
          </button>
          <button className="font-jakarta text-sm font-semibold px-4 py-2 rounded-full bg-surface-sand text-content-primary whitespace-nowrap hover:bg-surface-cream transition-colors">
            BSD City, Tangerang (28 km)
          </button>
          <button className="font-jakarta text-sm font-semibold px-4 py-2 rounded-full bg-surface-sand text-content-primary whitespace-nowrap hover:bg-surface-cream transition-colors">
            Kota Serang, Banten (78 km)
          </button>
          <button className="font-jakarta text-sm font-semibold px-5 py-2 rounded-full bg-midori-dark text-white whitespace-nowrap hover:bg-midori-dark/90 transition-colors flex items-center gap-2">
            <LocateFixed className="w-4 h-4" />
            Locate Me
          </button>
        </div>
      </div>

      {/* Stylized Cartographic Canvas */}
      <div className="relative w-full h-[460px] rounded-3xl overflow-hidden bg-surface-sand shadow-inner flex items-center justify-center p-6 border border-border-subtle/20">
        {/* SVG Stylized Topographical / Java Arc Illustration */}
        <svg className="absolute inset-0 w-full h-full text-midori-green/15" fill="none" preserveAspectRatio="none" viewBox="0 0 1000 500">
          {/* Ambient Contours */}
          <path d="M 50,150 C 200,80 400,220 600,120 C 750,50 850,200 950,140" stroke="currentColor" strokeDasharray="4 6" strokeWidth="1.5"></path>
          <path d="M 80,240 C 250,180 450,300 700,210 C 820,170 900,310 980,260" stroke="currentColor" strokeDasharray="4 6" strokeWidth="1.5"></path>
          <path d="M 30,360 C 220,290 380,410 650,320 C 800,280 880,420 960,370" stroke="currentColor" strokeDasharray="4 6" strokeWidth="1.5"></path>
          {/* Regional Coastline Silhouettes */}
          <path d="M 0,220 Q 250,140 500,200 T 1000,180" stroke="currentColor" strokeWidth="2"></path>
          <path d="M 150,0 V 500" stroke="currentColor" strokeDasharray="2 8" strokeWidth="0.5"></path>
          <path d="M 450,0 V 500" stroke="currentColor" strokeDasharray="2 8" strokeWidth="0.5"></path>
          <path d="M 750,0 V 500" stroke="currentColor" strokeDasharray="2 8" strokeWidth="0.5"></path>
        </svg>

        {/* Pin 1: Senopati (Active with Floating Tooltip) */}
        <div className="absolute left-[38%] top-[42%] transform -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center transition-all duration-300">
          <div className="mb-2 p-4 rounded-xl bg-white text-content-primary shadow-xl flex flex-col gap-2 min-w-[220px] transition-transform duration-300 border border-border-subtle/50">
            <div className="flex items-center justify-between">
              <span className="font-epilogue text-[0.6875rem] font-bold uppercase text-midori-green">Midori Senopati</span>
              <span className="w-2 h-2 rounded-full bg-midori-green"></span>
            </div>
            <p className="font-jakarta text-sm text-muted-text">South Jakarta • 1.2 km away</p>
            <div className="flex items-center justify-between pt-2 border-t border-border-subtle/50">
              <span className="font-epilogue text-[0.6875rem] font-bold uppercase text-muted-text">Flagship Vibe</span>
              <button className="font-jakarta text-sm font-semibold text-midori-green hover:underline">
                Directions &rarr;
              </button>
            </div>
          </div>
          <div className="relative flex items-center justify-center cursor-pointer">
            <div className="w-8 h-8 rounded-full bg-midori-green/20 animate-ping absolute"></div>
            <div className="w-4 h-4 rounded-full bg-midori-green border-2 border-white shadow-md"></div>
          </div>
        </div>

        {/* Pin 2: BSD (Tangerang / Banten) */}
        <div className="absolute left-[32%] top-[24%] transform -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center group cursor-pointer transition-all duration-300">
          <div className="hidden group-hover:flex mb-2 p-3 rounded-xl bg-white text-content-primary shadow-xl flex-col gap-1 min-w-[200px] border border-border-subtle/50">
            <div className="flex items-center justify-between">
              <span className="font-epilogue text-[0.6875rem] font-bold uppercase text-midori-green">Midori BSD</span>
              <span className="w-2 h-2 rounded-full bg-midori-green"></span>
            </div>
            <span className="font-jakarta text-sm text-muted-text">The Breeze BSD • Lakefront</span>
          </div>
          <div className="relative flex items-center justify-center">
            <div className="w-3.5 h-3.5 rounded-full bg-midori-green/80 border-2 border-white shadow"></div>
          </div>
          <span className="font-epilogue text-[0.6875rem] font-bold uppercase text-muted-text mt-1 tracking-wider bg-white/80 px-2 py-0.5 rounded shadow-sm">BSD</span>
        </div>

        {/* Pin 3: Serang (Royal Baroe / Banten) */}
        <div className="absolute left-[68%] top-[65%] transform -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center group cursor-pointer transition-all duration-300">
          <div className="hidden group-hover:flex mb-2 p-3 rounded-xl bg-white text-content-primary shadow-xl flex-col gap-1 min-w-[200px] border border-border-subtle/50">
            <div className="flex items-center justify-between">
              <span className="font-epilogue text-[0.6875rem] font-bold uppercase text-midori-green">Midori Royal Baroe</span>
              <span className="w-2 h-2 rounded-full bg-midori-green"></span>
            </div>
            <span className="font-jakarta text-sm text-muted-text">Kota Serang • Heritage Salon</span>
          </div>
          <div className="relative flex items-center justify-center">
            <div className="w-3.5 h-3.5 rounded-full bg-midori-green/80 border-2 border-white shadow"></div>
          </div>
          <span className="font-epilogue text-[0.6875rem] font-bold uppercase text-muted-text mt-1 tracking-wider bg-white/80 px-2 py-0.5 rounded shadow-sm">SERANG</span>
        </div>

        {/* Compass Rose Accent */}
        <div className="absolute bottom-6 right-6 flex flex-col items-center text-muted-text/60">
          <span className="font-epilogue text-sm font-bold uppercase">N</span>
          <Navigation className="w-6 h-6" />
          <span className="font-epilogue text-[0.5rem] font-bold uppercase tracking-widest mt-1">Java Sanctuaries</span>
        </div>
      </div>
    </div>
  );
}
