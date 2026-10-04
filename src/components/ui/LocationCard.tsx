import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Clock, ArrowRight } from "lucide-react";

export interface LocationData {
  id: string;
  region: string;
  imageSrc: string;
  imageAlt: string;
  title: string;
  address: string;
  schedule: string;
  amenities: string;
  typeBadge: string;
}

interface LocationCardProps {
  location: LocationData;
  onMapClick?: (id: string) => void;
}

export function LocationCard({ location, onMapClick }: LocationCardProps) {
  return (
    <article className="flex flex-col rounded-3xl overflow-hidden bg-white border border-border-subtle/50 shadow-md hover:shadow-xl group transition-all duration-300">
      <div className="relative w-full aspect-[4/3] overflow-hidden bg-surface-sand">
        <Image
          alt={location.imageAlt}
          className="object-cover group-hover:scale-105 transition-transform duration-700"
          src={location.imageSrc}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <span className="absolute top-4 left-4 font-epilogue text-[0.6875rem] font-bold uppercase tracking-wider px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-sm text-content-primary shadow-sm">
          {location.region}
        </span>
      </div>
      <div className="p-6 md:p-8 flex flex-col flex-1 justify-between gap-6">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-jakarta text-xl text-content-primary font-bold uppercase">{location.title}</h3>
            <span className="w-2.5 h-2.5 rounded-full bg-midori-green"></span>
          </div>
          
          <div className="space-y-2">
            <p className="font-jakarta text-sm text-muted-text flex items-start gap-2">
              <MapPin className="w-4 h-4 text-midori-green shrink-0 mt-0.5" />
              {location.address}
            </p>
            <p className="font-jakarta text-sm text-muted-text flex items-start gap-2">
              <Clock className="w-4 h-4 text-muted-text shrink-0 mt-0.5" />
              {location.schedule}
            </p>
          </div>

          <div className="pt-2 border-t border-border-subtle border-dashed">
            <p className="font-epilogue text-[0.6875rem] font-bold uppercase text-muted-text tracking-wider mb-1">
              Amenities
            </p>
            <p className="font-jakarta text-sm text-content-primary">
              {location.amenities}
            </p>
          </div>
        </div>

        <div className="pt-2 flex items-center justify-between">
          {onMapClick ? (
            <button
              onClick={() => onMapClick(location.id)}
              className="font-jakarta text-sm text-midori-green hover:text-midori-dark font-semibold inline-flex items-center gap-1 transition-colors"
            >
              View on Map <ArrowRight className="w-4 h-4" />
            </button>
          ) : (
            <Link
              href="#locator-section"
              className="font-jakarta text-sm text-midori-green hover:text-midori-dark font-semibold inline-flex items-center gap-1 transition-colors"
            >
              View on Map <ArrowRight className="w-4 h-4" />
            </Link>
          )}
          <span className="font-epilogue text-[0.6875rem] font-bold uppercase text-muted-text bg-surface-sand px-3 py-1 rounded-full">
            {location.typeBadge}
          </span>
        </div>
      </div>
    </article>
  );
}
