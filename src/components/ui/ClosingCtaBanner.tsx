import * as React from "react";
import { Leaf } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function ClosingCtaBanner() {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-7xl mx-auto rounded-3xl bg-surface-sand p-8 md:p-16 text-center flex flex-col items-center justify-center space-y-6">
        <div className="w-14 h-14 rounded-full bg-midori-green/10 text-midori-green flex items-center justify-center shadow-sm">
          <Leaf className="w-8 h-8" />
        </div>
        
        <div className="max-w-2xl space-y-2">
          <span className="font-epilogue text-[0.6875rem] font-bold uppercase tracking-[0.2em] text-midori-green">
            Join The Movement
          </span>
          <h2 className="font-epilogue text-4xl md:text-5xl text-content-primary uppercase tracking-tight font-bold">
            Make Room For Green.
          </h2>
          <p className="font-jakarta text-lg text-muted-text mt-4">
            Join Midori Matcha Club for seasonal flush drops, secret bakehouse pastries, private tasting circles, and complimentary home brewing guides.
          </p>
        </div>
        
        <form 
          className="w-full max-w-md flex flex-col sm:flex-row items-center gap-2 mt-6" 
          action="#"
        >
          <input 
            className="w-full px-5 py-3.5 rounded-full bg-white text-content-primary font-jakarta text-sm focus:outline-none focus:ring-2 focus:ring-midori-green/30 shadow-sm border border-border-subtle" 
            placeholder="Enter your email for the ritual" 
            required 
            type="email"
          />
          <Button variant="primary" type="submit" className="w-full sm:w-auto">
            Join The Ritual
          </Button>
        </form>
        
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2 text-muted-text font-epilogue text-[0.6875rem] font-bold uppercase">
          <span className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-midori-green"></span>
            Zero Spam
          </span>
          <span>•</span>
          <span>Monthly Dispatch Only</span>
          <span>•</span>
          <span>Unsubscribe Anytime</span>
        </div>
      </div>
    </section>
  );
}
