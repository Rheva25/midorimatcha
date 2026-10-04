"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageWrapper } from "@/components/layout/PageWrapper";
import { Search, MapPin, Navigation, ChevronLeft, ChevronRight, Clock, Compass, Camera, ArrowRight, Phone, Mail } from "lucide-react";

const locationsData = [
  {
    id: "senopati",
    region: "jakarta",
    name: "Midori Senopati",
    type: "Flagship",
    image: "https://lh3.googleusercontent.com/aida/AEtjO1V2RW2ivxAcjo0Ksz0R5zVAjL34fbk-JFiYL9exHWADTG6CNwz5XgSuaKd3G2rtpnl0Z1pM283YfJgVT3QzQ9-YuayckqH1R1bs9oZII1ViR3K5LxBH905v2L-jaZqf3BrV-X9LSUMv013OFG0oZtKvpMZj32KAKoXBfSSZ7vUTyc15i8DveRY8CQDpxKq13sFlYc3_-9VxiP03Spv6ZSMJtyGgCW9dNzufMvuSdAbS6B2620C-ocoRQa4",
    address: "Jl. Senopati No. 45, Jakarta Selatan",
    hours: "08:00 AM – 10:00 PM (Daily)",
    amenities: "Tatami Lounge • Outdoor Courtyard • Ceremonial Bar",
    tag: "South Jakarta",
    defaultDistance: "1.2 km",
    lat: -6.234394,
    lng: 106.808027
  },
  {
    id: "bsd",
    region: "banten",
    name: "Midori BSD",
    type: "Lakefront Pavilion",
    image: "https://lh3.googleusercontent.com/aida/AEtjO1WFbzqb800RSkVF4op3EfZqk8le8_Zz42Nbi2eDTfP6nTxV6UwaD77wxN-o1unPKdH2hc6g8TJ1r38evRshFU0DEcv9slod9FehTK34j6ctOr8hGx6obF3QmWTXYOM_RJfGaTlWrQauEoXiR6atdorlUBcjVXuL_cCI3p622y-M04xcRmn6fXSrzT6wz1mtLNXRjfk85Hk0KSVC_YoAJnVLQ9Ac7r5JEMumbqmbG47s3QVZnlHX32u7srg",
    address: "The Breeze BSD City, Jl. Grand Boulevard, Tangerang",
    hours: "07:30 AM – 22:00 PM (Daily)",
    amenities: "Lakefront Deck • Sunset Breeze • Botanical Brew Bar",
    tag: "BSD City, Tangerang",
    defaultDistance: "28 km",
    lat: -6.302213,
    lng: 106.652136
  },
  {
    id: "serang",
    region: "banten",
    name: "Midori Royal Baroe",
    type: "Heritage Salon",
    image: "https://lh3.googleusercontent.com/aida/AEtjO1XoHE8KQdqrH99Ne69dy6CTnRnJSfvxmMPgSrJxr0DhnYdCvI6cp27qgg6LC-s3NDZ8EZE_Bwnrck4PdpxDw-e6h9WGByPZinx4fIBPD42KTTDBVVBDN381bOykCsX67qvQTKeEeLrAUz2Jf8PyVMp_NpUtzPD7oqg0VHLxxxud36heIY4HdDGmYfrjugB90sB6tZ6_N3Gbp0CpiEBgSL0QXAC74EKkn4pkIhrRWxSsrvlann2dhNixEF4",
    address: "Jl. Veteran No. 12, Royal Baroe, Kota Serang",
    hours: "09:00 AM – 21:00 PM (Daily)",
    amenities: "Heritage Colonial Salon • Hinoki Wood Accents • Hojicha Bar",
    tag: "Kota Serang, Banten",
    defaultDistance: "78 km",
    lat: -6.115201,
    lng: 106.151121
  }
];

function getDistanceFromLatLonInKm(lat1: number, lon1: number, lat2: number, lon2: number) {
  const R = 6371; // Radius of the earth in km
  const dLat = (lat2 - lat1) * (Math.PI / 180);
  const dLon = (lon2 - lon1) * (Math.PI / 180); 
  const a = 
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) * 
    Math.sin(dLon / 2) * Math.sin(dLon / 2); 
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a)); 
  return R * c; // Distance in km
}

export default function LocationsPage() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [activePin, setActivePin] = useState("senopati");
  const [userCoords, setUserCoords] = useState<{lat: number, lng: number} | null>(null);
  const [isLocating, setIsLocating] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);

  const filteredLocations = locationsData.filter(loc => activeFilter === "all" || loc.region === activeFilter);

  const getDisplayDist = (locId: string) => {
    const loc = locationsData.find(l => l.id === locId);
    if (!loc) return "";
    if (!userCoords) return loc.defaultDistance;
    const d = getDistanceFromLatLonInKm(userCoords.lat, userCoords.lng, loc.lat, loc.lng);
    return d < 1 ? `${(d * 1000).toFixed(0)} m` : `${d.toFixed(1)} km`;
  };

  const handleScrollCarousel = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = 350;
      carouselRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const getStatusText = () => {
    if (activeFilter === 'all') return 'Showing 3 of 3 Sanctuaries';
    if (activeFilter === 'jakarta') return 'Showing 1 Jakarta Sanctuary';
    if (activeFilter === 'banten') return 'Showing 2 Banten Sanctuaries';
    return '';
  };

  const handleViewOnMap = (id: string) => {
    setActivePin(id);
    document.getElementById('locator-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleLocateMe = () => {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser");
      return;
    }
    setIsLocating(true);
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;
        setUserCoords({ lat, lng });
        setIsLocating(false);

        // Find nearest location
        let nearestId = locationsData[0].id;
        let minDistance = Infinity;
        locationsData.forEach(loc => {
          const d = getDistanceFromLatLonInKm(lat, lng, loc.lat, loc.lng);
          if (d < minDistance) {
            minDistance = d;
            nearestId = loc.id;
          }
        });
        setActivePin(nearestId);
        document.getElementById('locator-section')?.scrollIntoView({ behavior: 'smooth' });
      },
      (err) => {
        console.error(err);
        alert("Unable to retrieve your location. Please check your browser permissions.");
        setIsLocating(false);
      }
    );
  };

  return (
    <>
      <Navbar />
      <PageWrapper>
        {/* 1. BREADCRUMBS & EDITORIAL HERO */}
        <section className="w-full px-4 md:px-8 lg:px-16 py-12 md:py-16">
          <div className="max-w-7xl mx-auto flex flex-col gap-8">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <nav aria-label="Breadcrumb" className="flex items-center gap-2 font-jakarta text-xs text-muted-text">
                <Link href="/" className="hover:text-midori-green transition-colors">Home</Link>
                <span className="text-border-subtle">/</span>
                <span className="text-content-primary font-semibold">Locations</span>
              </nav>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-midori-light text-midori-dark font-epilogue text-[0.6875rem] uppercase tracking-widest shadow-sm font-bold">
                <span className="w-1.5 h-1.5 rounded-full bg-midori-green animate-pulse"></span>
                Come Find Your Green
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center pt-2">
              <div className="lg:col-span-7 flex flex-col gap-6">
                <h1 className="font-epilogue text-5xl md:text-7xl text-content-primary tracking-tight leading-none font-bold">
                  GOOD MATCHA.<br />
                  <span className="italic text-midori-green font-normal">GOOD PLACES.</span>
                </h1>
                <p className="font-jakarta text-lg text-muted-text max-w-xl">
                  Your favorite matcha moments are closer than you think. Step into architectural stillness designed around natural travertine, sunlit Hinoki timber, and mindful chasen whisking.
                </p>
                
                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <div className="flex items-center gap-2 px-4 py-2 bg-surface-sand rounded-full text-content-primary font-jakarta text-sm">
                    <span className="text-midori-green font-bold">⛩️</span>
                    <span>3 Sanctuaries</span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 bg-surface-sand rounded-full text-content-primary font-jakarta text-sm">
                    <span className="text-midori-green font-bold">🌿</span>
                    <span>100% Ceremonial Uji Grade</span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 bg-surface-sand rounded-full text-content-primary font-jakarta text-sm">
                    <span className="text-midori-green font-bold">🍵</span>
                    <span>Single-Cultivar Brews</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 relative">
                <div className="relative overflow-hidden rounded-2xl bg-surface-sand shadow-xl aspect-[4/5] group">
                  <Image 
                    src="https://lh3.googleusercontent.com/aida/AEtjO1V2RW2ivxAcjo0Ksz0R5zVAjL34fbk-JFiYL9exHWADTG6CNwz5XgSuaKd3G2rtpnl0Z1pM283YfJgVT3QzQ9-YuayckqH1R1bs9oZII1ViR3K5LxBH905v2L-jaZqf3BrV-X9LSUMv013OFG0oZtKvpMZj32KAKoXBfSSZ7vUTyc15i8DveRY8CQDpxKq13sFlYc3_-9VxiP03Spv6ZSMJtyGgCW9dNzufMvuSdAbS6B2620C-ocoRQa4"
                    alt="Midori Matcha Club Senopati Interior"
                    fill
                    unoptimized
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-8 left-8 right-8 text-white">
                    <span className="font-epilogue text-[0.625rem] uppercase tracking-widest text-midori-light block mb-1 font-bold">
                      Archival Sanctuary #01
                    </span>
                    <p className="font-jakarta text-xl font-bold">Senopati Travertine House</p>
                    <p className="font-jakarta text-sm text-white/80">South Jakarta • Natural Light Courtyard</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. FEATURED LOCATION (MIDORI CENTRAL FLAGSHIP) */}
        <section className="w-full px-4 md:px-8 lg:px-16 py-16 bg-surface-cream">
          <div className="max-w-7xl mx-auto flex flex-col gap-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <span className="font-epilogue text-[0.625rem] uppercase tracking-wider text-muted-text block mb-1 font-bold">Flagship Sanctuary</span>
                <h2 className="font-epilogue text-3xl font-bold text-content-primary">MIDORI MATCHA CLUB — CENTRAL</h2>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-midori-light text-midori-dark font-jakarta text-sm font-bold self-start md:self-auto">
                <span className="w-2 h-2 rounded-full bg-midori-green"></span>
                <span>Open Now until 10:00 PM</span>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-white rounded-2xl p-6 md:p-12 shadow-sm border border-border-subtle">
              <div className="lg:col-span-7 relative rounded-xl overflow-hidden min-h-[360px] lg:min-h-[460px]">
                <Image 
                  src="https://lh3.googleusercontent.com/aida/AEtjO1V2RW2ivxAcjo0Ksz0R5zVAjL34fbk-JFiYL9exHWADTG6CNwz5XgSuaKd3G2rtpnl0Z1pM283YfJgVT3QzQ9-YuayckqH1R1bs9oZII1ViR3K5LxBH905v2L-jaZqf3BrV-X9LSUMv013OFG0oZtKvpMZj32KAKoXBfSSZ7vUTyc15i8DveRY8CQDpxKq13sFlYc3_-9VxiP03Spv6ZSMJtyGgCW9dNzufMvuSdAbS6B2620C-ocoRQa4"
                  alt="Midori Matcha Club Central Flagship"
                  fill
                  unoptimized
                  className="object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md text-content-primary font-epilogue text-[0.6875rem] uppercase shadow-sm font-bold">
                    Senopati Flagship
                  </span>
                </div>
              </div>

              <div className="lg:col-span-5 flex flex-col justify-between gap-8 py-2">
                <div className="space-y-6">
                  <div className="space-y-1">
                    <span className="font-epilogue text-[0.625rem] uppercase text-muted-text tracking-widest font-bold">Sanctuary Address</span>
                    <p className="font-jakarta text-lg font-bold text-content-primary">Jl. Senopati No. 45, Jakarta Selatan</p>
                    <p className="font-jakarta text-sm text-muted-text">DKI Jakarta 12190, Indonesia</p>
                  </div>
                  <div className="space-y-1">
                    <span className="font-epilogue text-[0.625rem] uppercase text-muted-text tracking-widest font-bold">Ritual Operating Hours</span>
                    <p className="font-jakarta text-sm text-content-primary font-bold">Monday – Sunday: 08:00 AM – 10:00 PM</p>
                    <p className="font-jakarta text-xs text-muted-text">Last orders for chasen whisked sets at 09:30 PM</p>
                  </div>
                  <div className="space-y-2">
                    <span className="font-epilogue text-[0.625rem] uppercase text-muted-text tracking-widest font-bold">Converse & Inquiries</span>
                    <p className="font-jakarta text-sm text-muted-text flex items-center gap-2">
                      <Phone className="w-4 h-4 text-midori-green" /> +62 21 5790 8821
                    </p>
                    <p className="font-jakarta text-sm text-muted-text flex items-center gap-2">
                      <Mail className="w-4 h-4 text-midori-green" /> central@midorimatcha.id
                    </p>
                  </div>
                  <div className="space-y-2 pt-2">
                    <span className="font-epilogue text-[0.625rem] uppercase text-muted-text tracking-widest font-bold">House Craft & Amenities</span>
                    <div className="flex flex-wrap gap-2 pt-1">
                      <span className="font-jakarta text-xs font-semibold px-3 py-1.5 rounded-full bg-surface-sand text-content-primary border border-border-subtle">Tatami Seating Area</span>
                      <span className="font-jakarta text-xs font-semibold px-3 py-1.5 rounded-full bg-surface-sand text-content-primary border border-border-subtle">Slow-Brew Chasen Bar</span>
                      <span className="font-jakarta text-xs font-semibold px-3 py-1.5 rounded-full bg-surface-sand text-content-primary border border-border-subtle">Valet Parking</span>
                      <span className="font-jakarta text-xs font-semibold px-3 py-1.5 rounded-full bg-surface-sand text-content-primary border border-border-subtle">Ceramic Ware</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-4">
                  <a href="https://www.google.com/maps/dir/?api=1&destination=-6.234394,106.808027" target="_blank" rel="noopener noreferrer" className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-midori-green text-white font-epilogue text-sm font-bold hover:bg-midori-dark transition-all shadow-sm">
                    <Compass className="w-4 h-4" /> Get Directions
                  </a>
                  <a href="#" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-surface-sand hover:bg-surface-cream border border-border-subtle text-content-primary font-epilogue text-sm font-bold transition-colors">
                    <Camera className="w-4 h-4" /> Instagram
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. ALL LOCATIONS (RESPONSIVE GALLERY GRID) */}
        <section className="w-full px-4 md:px-8 lg:px-16 py-16" id="sanctuaries-section">
          <div className="max-w-7xl mx-auto flex flex-col gap-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div className="max-w-2xl space-y-2">
                <div className="flex items-center gap-2">
                  <span className="font-epilogue text-[0.625rem] uppercase tracking-wider text-muted-text font-bold">Our Sanctuaries</span>
                  <span className="text-border-subtle text-[0.625rem]">•</span>
                  <span className="font-epilogue text-[0.625rem] uppercase text-midori-green font-bold">{getStatusText()}</span>
                </div>
                <h2 className="font-epilogue text-3xl font-bold text-content-primary">DISCOVER EVERY TEAHOUSE</h2>
                <p className="font-jakarta text-base text-muted-text">
                  Thoughtfully designed spaces across Indonesia rooted in tranquility, natural illumination, and traditional Japanese craftsmanship.
                </p>
              </div>

              <div className="flex items-center gap-2 overflow-x-auto pb-2 -mx-4 px-4 md:mx-0 md:px-0 hide-scrollbar">
                <button 
                  onClick={() => setActiveFilter("all")}
                  className={`px-4 py-2 rounded-full font-jakarta text-sm font-bold whitespace-nowrap transition-all duration-300 ${activeFilter === "all" ? "bg-midori-green text-white shadow-sm" : "bg-surface-sand text-content-primary hover:bg-surface-cream"}`}
                >
                  All Locations (3)
                </button>
                <button 
                  onClick={() => setActiveFilter("jakarta")}
                  className={`px-4 py-2 rounded-full font-jakarta text-sm font-bold whitespace-nowrap transition-all duration-300 ${activeFilter === "jakarta" ? "bg-midori-green text-white shadow-sm" : "bg-surface-sand text-content-primary hover:bg-surface-cream"}`}
                >
                  Jakarta (1)
                </button>
                <button 
                  onClick={() => setActiveFilter("banten")}
                  className={`px-4 py-2 rounded-full font-jakarta text-sm font-bold whitespace-nowrap transition-all duration-300 ${activeFilter === "banten" ? "bg-midori-green text-white shadow-sm" : "bg-surface-sand text-content-primary hover:bg-surface-cream"}`}
                >
                  Banten (2)
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
              {filteredLocations.map((loc) => (
                <article key={loc.id} className="flex flex-col rounded-2xl overflow-hidden bg-white border border-border-subtle shadow-sm hover:shadow-md transition-shadow group">
                  <div className="relative w-full aspect-[4/3] overflow-hidden bg-surface-sand">
                    <Image 
                      src={loc.image}
                      alt={loc.name}
                      fill
                      unoptimized
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <span className="absolute top-4 left-4 font-epilogue text-[0.625rem] font-bold uppercase px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-sm text-content-primary shadow-sm">
                      {loc.tag}
                    </span>
                  </div>
                  <div className="p-6 flex flex-col flex-1 justify-between gap-4">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <h3 className="font-jakarta text-lg font-bold text-content-primary">{loc.name}</h3>
                        <span className="w-2 h-2 rounded-full bg-midori-green"></span>
                      </div>
                      <p className="font-jakarta text-sm text-muted-text flex items-start gap-2">
                        <MapPin className="w-4 h-4 text-midori-green shrink-0 mt-0.5" />
                        {loc.address}
                      </p>
                      <p className="font-jakarta text-sm text-muted-text flex items-center gap-2">
                        <Clock className="w-4 h-4 shrink-0" />
                        {loc.hours}
                      </p>
                      <div className="pt-2">
                        <p className="font-epilogue text-[0.625rem] uppercase text-border-subtle tracking-wider mb-1 font-bold">Amenities</p>
                        <p className="font-jakarta text-xs font-semibold text-muted-text">{loc.amenities}</p>
                      </div>
                    </div>
                    <div className="pt-4 flex items-center justify-between border-t border-border-subtle">
                      <button 
                        onClick={() => handleViewOnMap(loc.id)}
                        className="font-jakarta text-sm font-bold text-midori-green hover:text-midori-dark inline-flex items-center gap-1"
                      >
                        View on Map <ArrowRight className="w-4 h-4" />
                      </button>
                      <span className="font-epilogue text-[0.625rem] font-bold uppercase text-muted-text">{loc.type}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 4. FIND YOUR SPOT (MAP SECTION) */}
        <section className="w-full px-4 md:px-8 lg:px-16 py-16 bg-surface-cream" id="locator-section">
          <div className="max-w-7xl mx-auto flex flex-col gap-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div className="space-y-2">
                <span className="font-epilogue text-[0.625rem] uppercase tracking-wider text-muted-text font-bold">Spatial Navigation</span>
                <h2 className="font-epilogue text-3xl font-bold text-content-primary">FIND YOUR NEAREST SANCTUARY</h2>
                <p className="font-jakarta text-base text-muted-text max-w-xl">
                  Locate our tea houses, check live capacity, or plan your contemplative visit from anywhere in Java.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-4 bg-white p-3 rounded-2xl md:rounded-full shadow-sm border border-border-subtle">
              <div className="flex-1 flex items-center gap-2 w-full px-4">
                <Search className="w-5 h-5 text-border-subtle" />
                <input 
                  type="text" 
                  placeholder="Enter your city, neighborhood, or postal code..." 
                  className="w-full bg-transparent font-jakarta text-sm text-content-primary placeholder:text-muted-text/50 focus:outline-none"
                />
              </div>
              <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto px-2 hide-scrollbar pb-2 md:pb-0">
                {locationsData.map(loc => {
                  return (
                    <button 
                      key={loc.id}
                      onClick={() => setActivePin(loc.id)}
                      className={`font-jakarta text-xs font-bold px-4 py-2 rounded-full whitespace-nowrap transition-colors border ${activePin === loc.id ? 'bg-midori-green text-white border-transparent' : 'bg-surface-sand text-content-primary border-border-subtle hover:bg-surface-cream'}`}
                    >
                      {loc.tag} ({getDisplayDist(loc.id)})
                    </button>
                  );
                })}
                <button 
                  onClick={handleLocateMe}
                  disabled={isLocating}
                  className="font-jakarta text-xs font-bold px-5 py-2 rounded-full bg-midori-dark text-white whitespace-nowrap hover:bg-black transition-colors flex items-center gap-2 shadow-sm disabled:opacity-70"
                >
                  <Navigation className={`w-3 h-3 ${isLocating ? 'animate-spin' : ''}`} /> 
                  {isLocating ? 'Locating...' : 'Locate Me'}
                </button>
              </div>
            </div>

            {/* Stylized Map Area */}
            <div className="relative w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden bg-surface-sand shadow-inner flex items-center justify-center p-4 border border-border-subtle">
              <svg className="absolute inset-0 w-full h-full text-border-subtle/40" fill="none" preserveAspectRatio="none" viewBox="0 0 1000 500">
                <path d="M 50,150 C 200,80 400,220 600,120 C 750,50 850,200 950,140" stroke="currentColor" strokeDasharray="4 6" strokeWidth="1.5" />
                <path d="M 80,240 C 250,180 450,300 700,210 C 820,170 900,310 980,260" stroke="currentColor" strokeDasharray="4 6" strokeWidth="1.5" />
                <path d="M 30,360 C 220,290 380,410 650,320 C 800,280 880,420 960,370" stroke="currentColor" strokeDasharray="4 6" strokeWidth="1.5" />
                <path d="M 0,220 Q 250,140 500,200 T 1000,180" stroke="currentColor" strokeWidth="2" />
                <path d="M 150,0 V 500" stroke="currentColor" strokeDasharray="2 8" strokeWidth="0.5" />
                <path d="M 450,0 V 500" stroke="currentColor" strokeDasharray="2 8" strokeWidth="0.5" />
                <path d="M 750,0 V 500" stroke="currentColor" strokeDasharray="2 8" strokeWidth="0.5" />
              </svg>

              {/* Pin 1: Senopati */}
              <div className={`absolute left-[38%] top-[42%] transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center transition-all duration-300 cursor-pointer ${activePin === 'senopati' ? 'z-30 scale-110' : 'z-10 opacity-50 hover:opacity-80'}`} onClick={() => setActivePin('senopati')}>
                <div className={`mb-2 p-3 rounded-xl bg-white text-content-primary shadow-lg flex-col gap-1 min-w-[200px] border border-border-subtle transition-all duration-300 ${activePin === 'senopati' ? 'flex' : 'hidden'}`}>
                  <div className="flex items-center justify-between">
                    <span className="font-epilogue text-[0.625rem] uppercase text-midori-green font-bold">Midori Senopati</span>
                    <span className="w-2 h-2 rounded-full bg-midori-green"></span>
                  </div>
                  <p className="font-jakarta text-xs text-muted-text">South Jakarta • {getDisplayDist('senopati')} away</p>
                  <div className="flex items-center justify-between pt-1">
                    <span className="font-epilogue text-[0.625rem] text-muted-text uppercase font-bold">Flagship Vibe</span>
                    <a href="https://www.google.com/maps/dir/?api=1&destination=-6.234394,106.808027" target="_blank" rel="noopener noreferrer" className="font-jakarta text-xs text-midori-green font-bold hover:underline">Directions →</a>
                  </div>
                </div>
                <div className="relative flex items-center justify-center">
                  {activePin === 'senopati' && <div className="w-8 h-8 rounded-full bg-midori-green/20 animate-ping absolute"></div>}
                  <div className={`w-4 h-4 rounded-full border-2 border-white shadow-md ${activePin === 'senopati' ? 'bg-midori-green' : 'bg-midori-light'}`}></div>
                </div>
              </div>

              {/* Pin 2: BSD */}
              <div className={`absolute left-[32%] top-[24%] transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center transition-all duration-300 cursor-pointer ${activePin === 'bsd' ? 'z-30 scale-110' : 'z-10 opacity-50 hover:opacity-80'}`} onClick={() => setActivePin('bsd')}>
                <div className={`mb-2 p-3 rounded-xl bg-white text-content-primary shadow-lg flex-col gap-1 min-w-[200px] border border-border-subtle transition-all duration-300 ${activePin === 'bsd' ? 'flex' : 'hidden'}`}>
                  <div className="flex items-center justify-between">
                    <span className="font-epilogue text-[0.625rem] uppercase text-midori-green font-bold">Midori BSD</span>
                    <span className="w-2 h-2 rounded-full bg-midori-green"></span>
                  </div>
                  <p className="font-jakarta text-xs text-muted-text">The Breeze BSD • {getDisplayDist('bsd')} away</p>
                  <div className="flex items-center justify-between pt-1">
                    <span className="font-epilogue text-[0.625rem] text-muted-text uppercase font-bold">Lakefront Pavilion</span>
                    <a href="https://www.google.com/maps/dir/?api=1&destination=-6.302213,106.652136" target="_blank" rel="noopener noreferrer" className="font-jakarta text-xs text-midori-green font-bold hover:underline">Directions →</a>
                  </div>
                </div>
                <div className="relative flex items-center justify-center">
                  {activePin === 'bsd' && <div className="w-8 h-8 rounded-full bg-midori-green/20 animate-ping absolute"></div>}
                  <div className={`w-4 h-4 rounded-full border-2 border-white shadow-md ${activePin === 'bsd' ? 'bg-midori-green' : 'bg-midori-light'}`}></div>
                </div>
                <span className={`font-epilogue text-[0.5rem] uppercase mt-1 font-bold bg-white/80 px-1 rounded ${activePin === 'bsd' ? 'text-midori-green' : 'text-muted-text'}`}>BSD</span>
              </div>

              {/* Pin 3: Serang */}
              <div className={`absolute left-[68%] top-[65%] transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center transition-all duration-300 cursor-pointer ${activePin === 'serang' ? 'z-30 scale-110' : 'z-10 opacity-50 hover:opacity-80'}`} onClick={() => setActivePin('serang')}>
                <div className={`mb-2 p-3 rounded-xl bg-white text-content-primary shadow-lg flex-col gap-1 min-w-[200px] border border-border-subtle transition-all duration-300 ${activePin === 'serang' ? 'flex' : 'hidden'}`}>
                  <div className="flex items-center justify-between">
                    <span className="font-epilogue text-[0.625rem] uppercase text-midori-green font-bold">Midori Royal Baroe</span>
                    <span className="w-2 h-2 rounded-full bg-midori-green"></span>
                  </div>
                  <p className="font-jakarta text-xs text-muted-text">Kota Serang • {getDisplayDist('serang')} away</p>
                  <div className="flex items-center justify-between pt-1">
                    <span className="font-epilogue text-[0.625rem] text-muted-text uppercase font-bold">Heritage Salon</span>
                    <a href="https://www.google.com/maps/dir/?api=1&destination=-6.115201,106.151121" target="_blank" rel="noopener noreferrer" className="font-jakarta text-xs text-midori-green font-bold hover:underline">Directions →</a>
                  </div>
                </div>
                <div className="relative flex items-center justify-center">
                  {activePin === 'serang' && <div className="w-8 h-8 rounded-full bg-midori-green/20 animate-ping absolute"></div>}
                  <div className={`w-4 h-4 rounded-full border-2 border-white shadow-md ${activePin === 'serang' ? 'bg-midori-green' : 'bg-midori-light'}`}></div>
                </div>
                <span className={`font-epilogue text-[0.5rem] uppercase mt-1 font-bold bg-white/80 px-1 rounded ${activePin === 'serang' ? 'text-midori-green' : 'text-muted-text'}`}>SERANG</span>
              </div>

              {/* Compass */}
              <div className="absolute bottom-6 right-6 flex flex-col items-center text-muted-text/60">
                <span className="font-epilogue text-sm font-bold">N</span>
                <div className="w-px h-6 bg-muted-text/40 my-1 relative">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 border-l-[4px] border-r-[4px] border-b-[8px] border-l-transparent border-r-transparent border-b-muted-text/60"></div>
                </div>
                <span className="font-epilogue text-[0.5rem] uppercase tracking-widest mt-1">Java Sanctuaries</span>
              </div>
            </div>
          </div>
        </section>

        {/* 5. THE MIDORI EXPERIENCE (HORIZONTAL CAROUSEL) */}
        <section className="w-full px-4 md:px-8 lg:px-16 py-16">
          <div className="max-w-7xl mx-auto flex flex-col gap-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div className="space-y-2">
                <span className="font-epilogue text-[0.625rem] uppercase tracking-wider text-muted-text font-bold">Spatial Rituals</span>
                <h2 className="font-epilogue text-3xl font-bold text-content-primary">THE MIDORI EXPERIENCE</h2>
                <p className="font-jakarta text-base text-muted-text max-w-xl">
                  A harmonious marriage of architectural calm, meditative chasen whisking, and honest botanical flavor.
                </p>
              </div>
              <div className="flex items-center gap-2">
                <button onClick={() => handleScrollCarousel('left')} className="w-10 h-10 rounded-full bg-surface-sand hover:bg-surface-cream border border-border-subtle flex items-center justify-center text-content-primary transition-colors">
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button onClick={() => handleScrollCarousel('right')} className="w-10 h-10 rounded-full bg-surface-sand hover:bg-surface-cream border border-border-subtle flex items-center justify-center text-content-primary transition-colors">
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div ref={carouselRef} className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory hide-scrollbar">
              <div className="min-w-[280px] sm:min-w-[340px] md:min-w-[380px] snap-start flex flex-col rounded-2xl overflow-hidden bg-white border border-border-subtle shadow-sm">
                <div className="relative aspect-[4/3] overflow-hidden bg-surface-sand">
                  <Image src="https://lh3.googleusercontent.com/aida/AEtjO1V2RW2ivxAcjo0Ksz0R5zVAjL34fbk-JFiYL9exHWADTG6CNwz5XgSuaKd3G2rtpnl0Z1pM283YfJgVT3QzQ9-YuayckqH1R1bs9oZII1ViR3K5LxBH905v2L-jaZqf3BrV-X9LSUMv013OFG0oZtKvpMZj32KAKoXBfSSZ7vUTyc15i8DveRY8CQDpxKq13sFlYc3_-9VxiP03Spv6ZSMJtyGgCW9dNzufMvuSdAbS6B2620C-ocoRQa4" alt="Architecture" fill unoptimized className="object-cover" />
                </div>
                <div className="p-6 space-y-2">
                  <span className="font-epilogue text-[0.625rem] uppercase text-muted-text font-bold">01 / Architecture</span>
                  <h3 className="font-jakarta text-lg font-bold text-content-primary">Café Interior</h3>
                  <p className="font-jakarta text-sm text-muted-text leading-relaxed">Minimalist travertine stone, natural Hinoki woodwork, and tranquil courtyard pockets built to slow the pulse of modern life.</p>
                </div>
              </div>
              <div className="min-w-[280px] sm:min-w-[340px] md:min-w-[380px] snap-start flex flex-col rounded-2xl overflow-hidden bg-white border border-border-subtle shadow-sm">
                <div className="relative aspect-[4/3] overflow-hidden bg-surface-sand">
                  <Image src="https://lh3.googleusercontent.com/aida/AEtjO1VFGsHXNpxLNR_A5cnOEAW6dpwc1dXR3M9E8xO1iQSo-G5l3u4y6uh5PonackNKVsl3uWIRk7X2zUg6Mjzs7dSCXfqgP7dU9zg3-90y6MpgFY3Z14z3r4Odzg_f3MQ5NNgjtFGDQS8PuJILBY9G1dwiuNGFDRNiJov8uT7KzcwKlsDdE1xmi91cR7zQJFyGpnZ_Vxpw6_cfjYVvnzioW7R2fnH2KvJXE3EGSp7Er8K-HIBq3dpOV7CfQ54" alt="Ceremony" fill unoptimized className="object-cover" />
                </div>
                <div className="p-6 space-y-2">
                  <span className="font-epilogue text-[0.625rem] uppercase text-muted-text font-bold">02 / Ceremony</span>
                  <h3 className="font-jakarta text-lg font-bold text-content-primary">Chasen Bar & Sifting</h3>
                  <p className="font-jakarta text-sm text-muted-text leading-relaxed">Every chawan is prepared fresh to order with authentic 100-prong bamboo whisks, calibrated water temperature, and single-cultivar cultivars.</p>
                </div>
              </div>
              <div className="min-w-[280px] sm:min-w-[340px] md:min-w-[380px] snap-start flex flex-col rounded-2xl overflow-hidden bg-white border border-border-subtle shadow-sm">
                <div className="relative aspect-[4/3] overflow-hidden bg-surface-sand">
                  <Image src="https://lh3.googleusercontent.com/aida-public/AB6AXuCMoN__IBlH3HIlU1g0cCjT89Nhr_XbKfdoFBopl8wn88BxFuo6F0bLIrCPFg5F814HQU_gOf7DWAOofpwWPOZHHUQJPu7FBAhxShx77WI1YxXO6vahq5SrImMAd78vuXmTgcEC8Gw7c3SoE82KhuyjkfXAm9mTyacQbYJVX0KIzrExqJ9pAovJIydoKFKGWnW730rFFI3USXl0_SnAh_ITy9qPUnCoij0Otd8qlxwtcN5TkCEUJl54" alt="Sanctuary" fill unoptimized className="object-cover" />
                </div>
                <div className="p-6 space-y-2">
                  <span className="font-epilogue text-[0.625rem] uppercase text-muted-text font-bold">03 / Sanctuary</span>
                  <h3 className="font-jakarta text-lg font-bold text-content-primary">Verandas & Tatami</h3>
                  <p className="font-jakarta text-sm text-muted-text leading-relaxed">Quiet pine wood nooks, sunken tatami seating, and open colonial verandas enveloped by heritage calm and tropical gardens.</p>
                </div>
              </div>
              <div className="min-w-[280px] sm:min-w-[340px] md:min-w-[380px] snap-start flex flex-col rounded-2xl overflow-hidden bg-white border border-border-subtle shadow-sm">
                <div className="relative aspect-[4/3] overflow-hidden bg-surface-sand">
                  <Image src="https://lh3.googleusercontent.com/aida/AEtjO1XwH91I5xufdUFyYVDeUXe2-ydlqh-8Uv3LrHnFEyAN-wNWm0MF4fIoq0AlITiTsEaab6_f4ZqzF2LhDMNwTHcGTva5O4P9t2tA1Fz3YARaClKEnoT-yk1qkF30tYXkyHWc76f_lfwYqIZznWase4ZTXV1Y43L_3ieYi_hwLzKrsJUTLhD52Pp4jxX1raSzNZlWMjzUXsl1pFmOhcOEaOOim2k1EDvrbZaTPjqxrKoVdvQmwkVjbUnZYw" alt="Libations" fill unoptimized className="object-cover" />
                </div>
                <div className="p-6 space-y-2">
                  <span className="font-epilogue text-[0.625rem] uppercase text-muted-text font-bold">04 / Libations</span>
                  <h3 className="font-jakarta text-lg font-bold text-content-primary">Signature Cold Foams</h3>
                  <p className="font-jakarta text-sm text-muted-text leading-relaxed">Vibrant layered iced ceremonial matcha lattes, seasonal fruit purees, and silky oat cloud creams made exclusively in-house.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6. FINAL CALL TO ACTION */}
        <section className="w-full px-4 md:px-8 lg:px-16 py-16">
          <div className="max-w-7xl mx-auto rounded-3xl bg-surface-sand border border-border-subtle p-8 md:p-16 relative overflow-hidden shadow-sm">
            <div className="absolute -right-16 -bottom-16 w-80 h-80 rounded-full bg-midori-light/50 pointer-events-none blur-3xl"></div>
            <div className="relative z-10 max-w-2xl flex flex-col gap-6">
              <span className="font-epilogue text-[0.625rem] uppercase tracking-widest text-midori-green font-bold">
                Slow Down & Savor
              </span>
              <h2 className="font-epilogue text-4xl md:text-5xl font-bold text-content-primary leading-tight">
                YOUR NEXT MATCHA MOMENT STARTS HERE.
              </h2>
              <p className="font-jakarta text-lg text-muted-text">
                Drop by, take off your shoes, and enjoy a little green in your day. Every sanctuary welcomes you with mindful stillness, honest tea, and artisanal warmth.
              </p>
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <Link href="/menu" className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-midori-green text-white font-epilogue text-sm font-bold hover:bg-midori-dark transition-all shadow-sm">
                  Explore Our Menu
                </Link>
                <button onClick={() => document.getElementById('locator-section')?.scrollIntoView({ behavior: 'smooth' })} className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-white border border-border-subtle hover:bg-surface-cream text-content-primary font-epilogue text-sm font-bold transition-colors">
                  Find Nearest Location
                </button>
              </div>
            </div>
          </div>
        </section>

      </PageWrapper>
      <Footer />
    </>
  );
}
