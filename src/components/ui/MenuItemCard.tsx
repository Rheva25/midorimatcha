"use client";

import * as React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { useCartStore } from "@/store/useCartStore";
import { toast } from "sonner";

export interface MenuItemData {
  id: string;
  badge?: string;
  badgeStyle?: string;
  badgeIcon?: React.ReactNode;
  price?: string;
  eyebrowLabel: string;
  eyebrowValue?: string;
  title?: string;
  titleNode?: React.ReactNode;
  subtitle?: string;
  description: string;
  metrics?: string;
  metricPills?: string[];
  progressLabel?: string;
  progressValue?: number;
  imageSrc: string;
  imageAlt: string;
  actionText: string;
  secondaryActionText?: string;
  colSpanClass: string;
  buttonVariant: "primary" | "secondary" | "ghost";
  layout?: "vertical" | "horizontal";
  theme?: "light" | "dark";
  splitMetrics?: {
    label1: string;
    value1: string;
    label2: string;
    value2: string;
  };
}

interface MenuItemCardProps {
  data: MenuItemData;
}

export function MenuItemCard({ data }: MenuItemCardProps) {
  const isDark = data.theme === "dark";
  const isHorizontal = data.layout === "horizontal";
  
  const addItem = useCartStore(state => state.addItem);

  const handleAddToCart = () => {
    // Parse price string like "Rp 58.000" to 58000
    const numericPrice = data.price 
      ? parseInt(data.price.replace(/[^\d]/g, ''), 10) 
      : 50000; // fallback price
      
    addItem({
      id: data.id,
      title: data.title || data.eyebrowLabel,
      price: numericPrice,
      imageSrc: data.imageSrc,
      categoryLabel: data.eyebrowLabel,
      badge: data.badge,
    });
    
    toast.success(`${data.title || data.eyebrowLabel} added to your basket`);
  };

  if (isHorizontal) {
    return (
      <div className={`${data.colSpanClass} bg-midori-dark text-white rounded-[1.5rem] lg:rounded-[2rem] shadow-xl flex flex-col lg:flex-row overflow-hidden border border-midori-dark/50 group hover:shadow-2xl transition-all duration-300`}>
        {/* Horizontal - Content Left */}
        <div className="w-full lg:w-1/2 p-8 md:p-12 lg:p-16 flex flex-col justify-center items-start">
          {data.badge && (
            <div className={`inline-flex items-center gap-1.5 font-epilogue text-[0.625rem] font-bold uppercase px-3 py-1.5 rounded-full mb-6 ${data.badgeStyle || "bg-surface-cream text-midori-dark"}`}>
              {data.badgeIcon}
              <span>{data.badge}</span>
            </div>
          )}
          
          <div className="mb-2">
            <span className="font-epilogue text-[0.6875rem] font-bold uppercase text-midori-green tracking-wider block mb-1">
              {data.eyebrowLabel}
            </span>
            {data.titleNode ? data.titleNode : (
              <h2 className="font-epilogue text-4xl md:text-5xl uppercase tracking-tight font-bold text-white mb-2 leading-none">
                {data.title}
              </h2>
            )}
            {data.subtitle && (
              <h3 className="font-epilogue text-lg md:text-xl font-semibold text-surface-cream mt-2 mb-4">
                {data.subtitle}
              </h3>
            )}
          </div>
          
          <p className="font-jakarta text-sm md:text-base text-white/80 max-w-lg mb-8">
            {data.description}
          </p>

          {data.splitMetrics && (
            <div className="flex items-center gap-6 mb-8">
              <div className="flex flex-col gap-1">
                <span className="font-epilogue text-[0.625rem] font-bold uppercase text-white/60 tracking-wider">
                  {data.splitMetrics.label1}
                </span>
                <span className="font-jakarta text-2xl md:text-3xl font-bold text-white leading-none">
                  {data.splitMetrics.value1}
                </span>
              </div>
              <div className="w-px h-10 bg-white/20"></div>
              <div className="flex flex-col gap-1">
                <span className="font-epilogue text-[0.625rem] font-bold uppercase text-white/60 tracking-wider">
                  {data.splitMetrics.label2}
                </span>
                <span className="font-jakarta text-sm font-bold text-midori-green">
                  {data.splitMetrics.value2}
                </span>
              </div>
            </div>
          )}

          <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto mt-auto pt-4">
            <Button onClick={handleAddToCart} variant="primary" className="w-full sm:w-auto bg-midori-green text-white hover:bg-midori-green/90 py-3.5 px-6 rounded-full font-epilogue text-[0.875rem] font-bold inline-flex items-center justify-center gap-2">
              {data.actionText}
            </Button>
            {data.secondaryActionText && (
              <Button variant="ghost" className="w-full sm:w-auto bg-white/10 text-white hover:bg-white/20 py-3.5 px-6 rounded-full font-epilogue text-[0.875rem] font-bold inline-flex items-center justify-center text-center">
                {data.secondaryActionText}
              </Button>
            )}
          </div>
        </div>
        
        {/* Horizontal - Image Right */}
        <div className="w-full lg:w-1/2 relative min-h-[320px] md:min-h-[460px] bg-midori-dark">
          <Image
            alt={data.imageAlt}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            src={data.imageSrc}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-t from-midori-dark/80 via-transparent to-transparent lg:bg-gradient-to-r lg:from-midori-dark lg:via-transparent lg:to-transparent"></div>
        </div>
      </div>
    );
  }

  // Vertical (Standard Card) Layout
  return (
    <div className={`${data.colSpanClass} bg-white rounded-3xl flex flex-col shadow-sm hover:shadow-xl transition-all duration-300 border border-border-subtle group overflow-hidden`}>
      {/* Image container (flush with top) */}
      <div className="relative w-full aspect-[4/3] bg-surface-sand overflow-hidden shrink-0">
        <Image
          alt={data.imageAlt}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          src={data.imageSrc}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          unoptimized
        />
        {data.badge && (
          <span className={`absolute top-4 left-4 font-epilogue text-[0.625rem] font-bold uppercase px-3 py-1.5 rounded-full shadow-sm ${data.badgeStyle || "bg-white text-content-primary"}`}>
            {data.badge}
          </span>
        )}
      </div>
      
      {/* Content box */}
      <div className="p-6 md:p-7 flex flex-col flex-1">
        {/* Eyebrow */}
        <div className="flex items-center gap-1.5 mb-2">
          <span className="font-epilogue text-[0.625rem] font-bold uppercase text-midori-green tracking-wider">{data.eyebrowLabel}</span>
          {data.eyebrowValue && (
            <>
              <span className="text-border-subtle opacity-50">•</span>
              <span className="font-epilogue text-[0.625rem] font-bold uppercase text-muted-text tracking-wider">{data.eyebrowValue}</span>
            </>
          )}
        </div>
        
        {/* Title & Desc */}
        <h3 className="font-jakarta text-xl font-semibold text-content-primary mb-2 leading-tight group-hover:text-midori-green transition-colors">{data.title}</h3>
        <p className="font-jakarta text-[0.875rem] text-muted-text mb-6 flex-1 leading-relaxed">
          {data.description}
        </p>
        
        {/* Metrics/Progress bar row */}
        {data.progressLabel && data.progressValue !== undefined && (
          <div className="mb-4 space-y-1.5">
            <div className="flex justify-between items-center text-[0.625rem] font-epilogue uppercase font-bold text-muted-text tracking-wider">
              <span>{data.progressLabel}</span>
              <span>{data.progressValue}%</span>
            </div>
            <div className="w-full h-[3px] bg-surface-sand rounded-full overflow-hidden">
              <div 
                className="h-full bg-midori-green rounded-full" 
                style={{ width: `${data.progressValue}%` }}
              ></div>
            </div>
          </div>
        )}
        
        {data.metricPills && data.metricPills.length > 0 && (
          <div className="flex flex-wrap items-center gap-2 mb-4">
            {data.metricPills.map((pill, i) => (
              <span key={i} className="font-epilogue text-[0.625rem] font-bold uppercase px-2.5 py-1 rounded-md bg-surface-sand text-muted-text">
                {pill}
              </span>
            ))}
          </div>
        )}

        {/* Footer row (Price & Add Button) */}
        <div className="flex items-center justify-between pt-4 mt-auto">
          <span className="font-jakarta text-lg font-bold text-content-primary">
            {data.price}
          </span>
          <Button onClick={handleAddToCart} variant="primary" className="py-2 px-5 text-sm rounded-full bg-midori-dark text-white hover:bg-midori-green font-epilogue font-semibold inline-flex items-center gap-1">
            {data.actionText}
          </Button>
        </div>
      </div>
    </div>
  );
}
