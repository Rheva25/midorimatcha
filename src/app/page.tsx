import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageWrapper } from "@/components/layout";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { ArrowRight, MapPin, Timer, Leaf, Quote, Handshake, Zap, Thermometer, Wind, Filter } from "lucide-react";
import { MenuItemCard, type MenuItemData } from "@/components/ui/MenuItemCard";
import { ClosingCtaBanner } from "@/components/ui/ClosingCtaBanner";

const signatureDrinks: MenuItemData[] = [
  {
    id: "strawberry-cloud",
    colSpanClass: "lg:col-span-5 md:col-span-6",
    imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuDyLOrtxULbLvC6wxckgeZvVx6S7j5WmRa7VhXVkyWD7VH-ek17LTCr-IZ08xM_EFua4Jj8JG17JsFVfCO5_r3IFOB3MZEXWVo9lWNs0_KVhUzGhXAo_QbPUil12GQk_R5Z0gDfLsgX6LRHO6Xp63GMKMXeq-9bgIFMS6wdSDAGKR0CF0CLo4A7Kof9lMR3M21KarWRz6eJRtrqFYeGOMN10Lzz183YPa2i9qwxrq857IpPpEWRgTEw",
    imageAlt: "Artisanal layered strawberry matcha iced drink",
    badge: "Seasonal Drop",
    badgeStyle: "bg-surface-sand text-midori-dark",
    price: "Rp 68.000",
    eyebrowLabel: "House Favorite",
    eyebrowValue: "Velvety & Tart Sweet",
    title: "Iced Strawberry Cloud Matcha",
    description: "Layered Uji Okumidori matcha hand-poured over slow-macerated organic Albion strawberries, steeped vanilla bean, and cold aerated oat cream foam.",
    metrics: "140 kcal • Plant Based",
    actionText: "Order Sip",
    buttonVariant: "primary"
  },
  {
    id: "ceremonial-cold-whisk",
    colSpanClass: "lg:col-span-3 md:col-span-6",
    imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuBg5u_OuqFFb90Lx2LZfhzAr8Qjw0pdNWALvLy-ve09jaTlyKbhtBDekz75ih0vsiyq7Dzdv-ccn6n6tcR5yKrO2HuJ_35zw7dISK2OMV9zRSPPx7-nPuFbmbakUiZYApeS-Ns9lsRJ1-2ppgXTvIYKU8FIxsmi5JsCZPv_JcsAappxMsyFbZWBdAVOMxe6y-2drsFqxhrBfsPPdnFfaolkWxt-P9BigBXHX7bk5hfwxaWICw9kw1kb",
    imageAlt: "Minimalist top-down photograph of ceremonial matcha tea",
    badge: "Pure Origin",
    badgeStyle: "bg-midori-green/20 text-midori-dark",
    price: "Rp 58.000",
    eyebrowLabel: "Floral & Crisp Umami",
    eyebrowValue: "",
    title: "Midori Ceremonial Cold Whisk",
    description: "Pure single-cultivar Okumidori vigorously aerated over chilled structured alkaline water with an optional drop of raw wildflower blossom honey.",
    metrics: "15 kcal • Zero Sugar",
    actionText: "Add",
    buttonVariant: "secondary"
  },
  {
    id: "sesame-pistachio",
    colSpanClass: "lg:col-span-4 md:col-span-6",
    imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuAxuo8Q2Ovh7gs3zgTkorMqwj7p4YX-ei9EtSNcJQkMO-NCGUTqC-qsSROi85bF5jvjY5aTWu6TWwpxA1WssiTogDn2EBr18WgaQGt3H4S3-ZHjRpqHMGFYZ4yz4_cj27Hsj8vMVQeUn9ajzW9U1hB9y_5EuNHOmL3St3jxOYNtlQVYfs0REw3X67XEtctZclpC4KmtluPkwLp1R7B9_hHdmD6E1P3_gkd3nSD1RamkBfjek9APLYsZ",
    imageAlt: "Editorial dessert beverage showcasing a layered pistachio cream matcha latte",
    badge: "Chef Selection",
    badgeStyle: "bg-midori-dark text-white",
    price: "Rp 72.000",
    eyebrowLabel: "Nutty & Decadent",
    eyebrowValue: "Warm/Iced",
    title: "Toasted Sesame & Pistachio Matcha",
    description: "Ceremonial grade matcha folded into house-roasted Sicilian pistachio milk, crowned with roasted black sesame tahini coulis and sea salt flakes.",
    metrics: "190 kcal • House Nut Milk",
    actionText: "Add",
    buttonVariant: "secondary"
  }
];

export default function Home() {
  return (
    <>
      <Navbar />
      <PageWrapper>
        {/* HERO SECTION */}
        <section className="relative w-full px-4 sm:px-6 lg:px-8 pt-8 pb-12 overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-midori-green/20 text-midori-dark font-epilogue text-xs font-bold uppercase tracking-widest">
                  <span className="w-1.5 h-1.5 rounded-full bg-midori-green animate-pulse"></span>
                  First Harvest 2025 Cultivar
                </span>
                <span className="hidden sm:inline-flex items-center px-3 py-1 rounded-full bg-surface-sand text-muted-text font-epilogue text-xs font-bold uppercase tracking-wider border border-border-subtle">
                  Ceremonial Grade • Uji Single Origin
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-epilogue text-xs font-bold text-midori-dark uppercase tracking-wider">Shade Grown 28 Days</span>
                <span className="text-border-subtle">•</span>
                <span className="font-epilogue text-xs font-bold text-midori-green uppercase">Spring Flush</span>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 flex flex-col justify-center space-y-4 pr-0 lg:pr-4">
                <div className="space-y-1">
                  <span className="font-epilogue text-xs font-bold uppercase tracking-[0.2em] text-midori-green block">Midori House • Est. Kyoto & NY</span>
                  <h1 className="font-epilogue text-5xl md:text-7xl text-content-primary tracking-tighter uppercase leading-[0.92] font-bold">
                    Good Mood.<br />
                    <span className="text-midori-green italic font-serif font-normal">Green</span> Energy.
                  </h1>
                </div>
                <p className="font-jakarta text-lg text-muted-text max-w-xl">
                  Your daily matcha ritual, reimagined. Pure Okumidori cultivar hand-whisked to velvety microfoam perfection, paired with slow-crafted botanical milks and modern pastry craft.
                </p>
                
                <div className="flex flex-wrap items-center gap-4 pt-1">
                  <Button variant="primary" asChild>
                    <Link href="/menu">
                      Explore Our Menu
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                  </Button>
                  <Button variant="secondary" asChild className="bg-white">
                    <Link href="/locations">
                      <MapPin className="mr-2 w-5 h-5 text-midori-green" />
                      Find Your Matcha Spot
                    </Link>
                  </Button>
                </div>

                <div className="pt-4 grid grid-cols-3 gap-2 max-w-lg">
                  <div className="p-3 rounded-lg bg-surface-sand">
                    <span className="font-epilogue text-2xl font-medium text-midori-green block">100%</span>
                    <span className="font-epilogue text-[0.6875rem] font-bold uppercase text-muted-text tracking-wider">Organic Uji</span>
                  </div>
                  <div className="p-3 rounded-lg bg-surface-sand">
                    <span className="font-epilogue text-2xl font-medium text-content-primary block">0g</span>
                    <span className="font-epilogue text-[0.6875rem] font-bold uppercase text-muted-text tracking-wider">Refined Sugars</span>
                  </div>
                  <div className="p-3 rounded-lg bg-surface-sand">
                    <span className="font-epilogue text-2xl font-medium text-midori-dark block">3.4x</span>
                    <span className="font-epilogue text-[0.6875rem] font-bold uppercase text-muted-text tracking-wider">Antioxidants</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 relative mt-8 lg:mt-0">
                <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden shadow-xl bg-surface-sand">
                  <Image 
                    alt="Editorial close-up of a barista hand-whisking bright neon green ceremonial matcha" 
                    className="object-cover transition-transform duration-700 hover:scale-105" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCkl_fMfeY32e4QxtX1ZaT9-u6F-vjm2XGO8V37Kr2kumsSgvv3ydUXdttUr-ld6Oj5aEVVMgX6ErnaGSsmufOzsLcISo9MFSgJpMTCMLttjbe5XD0HibQCXBZ8BXiBa4ZgZpAQIJEY2qShSDtyasoTjea5WFXkII--SCl1qZCvCgSHyAx57hFFhWLYJeRkcGQ0JeFKQR_4aC4lkEWJFVWV9r0_nUwwYa0GWxAcTelsh3GsEByaswkU"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  
                  <div className="absolute top-4 left-4 bg-surface-cream/90 backdrop-blur-md px-4 py-2 rounded-full shadow-md flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-midori-green"></span>
                    <span className="font-epilogue text-xs font-bold uppercase text-content-primary tracking-wider">Single Cultivar Okumidori</span>
                  </div>
                  
                  <div className="absolute bottom-4 right-4 bg-surface-sand text-midori-dark px-4 py-2 rounded-full shadow-md flex items-center gap-2">
                    <Timer className="w-4 h-4" />
                    <span className="font-jakarta text-xs font-semibold">Hand-Whisked To Order (60s)</span>
                  </div>

                  <div className="absolute bottom-4 left-4 text-white max-w-[180px]">
                    <span className="font-epilogue text-xs font-bold uppercase tracking-widest text-midori-green block mb-1">Estate Direct</span>
                    <span className="font-jakarta text-xs text-white leading-tight">Shaded beneath straw reeds for intense L-theanine purity.</span>
                  </div>
                </div>

                <div className="hidden sm:flex absolute -bottom-6 -left-8 bg-white p-4 rounded-2xl shadow-lg items-center gap-4 max-w-xs z-10">
                  <div className="w-12 h-12 rounded-full bg-midori-green/10 flex items-center justify-center text-midori-green shrink-0">
                    <Leaf className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-jakarta text-sm font-bold text-content-primary">Calm, Clean Focus</p>
                    <p className="font-jakarta text-xs text-muted-text">L-theanine sustained energy curve without jitters.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TICKER / RUNNING BANNER */}
        <div className="w-full bg-midori-dark text-white py-4 overflow-hidden select-none">
          <div className="flex animate-marquee whitespace-nowrap gap-8 font-epilogue text-sm uppercase tracking-[0.25em] items-center">
            <span>CEREMONIAL GRADE</span>
            <span className="text-midori-green">•</span>
            <span>UJI, KYOTO HARVEST</span>
            <span className="text-midori-green">•</span>
            <span>COLD STONE-GROUND TENCHA</span>
            <span className="text-midori-green">•</span>
            <span>HOUSE OAT & PISTACHIO MILK BLENDS</span>
            <span className="text-midori-green">•</span>
            <span>A LITTLE GREEN, A LOT OF GOOD</span>
            <span className="text-midori-green">•</span>
            <span>HAND-WHISKED WITH TRADITIONAL CHASEN</span>
            <span className="text-midori-green">•</span>
            <span>SLOW LIVING REVOLUTION</span>
            <span className="text-midori-green">•</span>
            <span>CEREMONIAL GRADE</span>
            <span className="text-midori-green">•</span>
            <span>UJI, KYOTO HARVEST</span>
          </div>
        </div>

        {/* SIGNATURE DRINKS SECTION */}
        <section className="w-full px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="font-epilogue text-xs uppercase tracking-widest text-midori-green font-bold">Cold Whisked Craft</span>
                  <span className="w-8 h-[1px] bg-midori-green"></span>
                </div>
                <h2 className="font-epilogue text-4xl md:text-5xl text-content-primary tracking-tight uppercase font-bold">Signature Sips</h2>
                <p className="font-jakarta text-lg text-muted-text max-w-lg mt-2">
                  Curated drinks crafted with single-origin shade-grown tencha, precision cold aeration, and velvety botanical emulsifications.
                </p>
              </div>
              <div className="flex items-center gap-2 flex-wrap">
                <span className="font-jakarta text-sm text-muted-text">Filter Profiles:</span>
                <button className="px-4 py-2 rounded-full bg-midori-dark text-white font-jakarta text-sm font-semibold">All Sips</button>
                <button className="px-4 py-2 rounded-full bg-surface-sand text-muted-text font-jakarta text-sm font-semibold hover:bg-border-subtle transition-colors">Iced Layered</button>
                <button className="px-4 py-2 rounded-full bg-surface-sand text-muted-text font-jakarta text-sm font-semibold hover:bg-border-subtle transition-colors">Pure Ceremonial</button>
                <Link href="/menu" className="px-4 py-2 rounded-full bg-midori-green/20 text-midori-dark font-jakarta text-sm font-semibold hover:bg-midori-green/30 transition-colors inline-flex items-center gap-1">
                  Full Menu <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
              {signatureDrinks.map((drink) => (
                <MenuItemCard key={drink.id} data={drink} />
              ))}
            </div>
          </div>
        </section>

        {/* BRAND PHILOSOPHY / EDITORIAL SPLIT */}
        <section className="w-full bg-surface-sand px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Manifesto */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-content-primary font-epilogue text-xs uppercase font-bold tracking-wider shadow-sm">
                <Leaf className="w-4 h-4 text-midori-green" />
                The Midori Manifesto
              </div>
              
              <h2 className="font-epilogue text-4xl md:text-5xl text-content-primary tracking-tight uppercase leading-[1.05] font-bold">
                A Little Green,<br />
                <span className="text-midori-green italic font-serif">A Lot of Good.</span>
              </h2>
              
              <p className="font-jakarta text-xl text-muted-text leading-relaxed">
                Modern rush trades calmness for urgency. We believe in the restorative alchemy of taking sixty seconds to watch emerald powder dissolve into warm botanical clouds. 
              </p>
              
              <p className="font-jakarta text-base text-muted-text leading-relaxed">
                Sourced exclusively from fifth-generation family estates in Wazuka and Uji, Kyoto, our tencha is shaded under organic tana canopy systems, ensuring unmatched natural theanine density, vibrant chartreuse hues, and a silk-like umami finish with zero bitter astringency.
              </p>

              {/* Quote Block */}
              <div className="p-6 rounded-2xl bg-white shadow-sm flex items-start gap-4">
                <Quote className="text-midori-green w-10 h-10 shrink-0 opacity-50" />
                <div>
                  <p className="font-jakarta text-lg italic text-content-primary font-serif">
                    &quot;We didn&apos;t set out to invent another drink. We created an oasis where stillness is served in a ceramic cup.&quot;
                  </p>
                  <span className="font-epilogue text-[0.6875rem] font-bold uppercase text-muted-text block mt-3 tracking-wider">
                    — Kenji Morimoto, Master Tea Blender
                  </span>
                </div>
              </div>
            </div>

            {/* Right 3-Card Value Mosaic */}
            <div className="lg:col-span-6 space-y-4">
              <div className="bg-white p-6 rounded-2xl shadow-sm flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-midori-green text-white flex items-center justify-center shrink-0 shadow-sm">
                  <Handshake className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-jakarta text-lg text-content-primary font-bold mb-1">Direct-Trade Kyoto Heritage</h4>
                  <p className="font-jakarta text-sm text-muted-text leading-relaxed">
                    We eliminate brokers, paying our Uji farming partners 40% above fair market values to safeguard heirloom single cultivars and soil biodiversity.
                  </p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-sm flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-midori-green/20 text-midori-dark flex items-center justify-center shrink-0 shadow-sm">
                  <Leaf className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-jakarta text-lg text-content-primary font-bold mb-1">Granite Stone-Milling (30g/hr)</h4>
                  <p className="font-jakarta text-sm text-muted-text leading-relaxed">
                    Slow friction-free grinding preserves volatile leaf polyphenols and antioxidants. The resulting particles measure just 5 to 10 microns for flawless suspension.
                  </p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-sm flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-surface-sand text-midori-dark border border-border-subtle flex items-center justify-center shrink-0 shadow-sm">
                  <Zap className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-jakarta text-lg text-content-primary font-bold mb-1">Clean Energy, Absolute Zero Crash</h4>
                  <p className="font-jakarta text-sm text-muted-text leading-relaxed">
                    Natural caffeine binds to amino-acid L-theanine, yielding a smooth 4-to-6 hour alpha wave focus state rather than heart-spiking coffee jitters.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* THE FOUR-STEP RITUAL */}
        <section className="w-full px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-xl mx-auto mb-16 space-y-2">
              <span className="font-epilogue text-xs font-bold uppercase tracking-[0.2em] text-midori-green block">Cereon-Grade Process</span>
              <h2 className="font-epilogue text-4xl md:text-5xl text-content-primary tracking-tight uppercase font-bold">The Four-Step Ritual</h2>
              <p className="font-jakarta text-lg text-muted-text">
                From leaf to chawan, honoring the centuries-old Chanoyu discipline with contemporary culinary temperature control.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Step 1 */}
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-border-subtle/30 flex flex-col justify-between hover:translate-y-[-4px] transition-transform duration-300">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-epilogue text-4xl text-midori-green/30 font-bold">01</span>
                    <span className="px-3 py-1 rounded-full bg-surface-sand font-epilogue text-[0.6875rem] font-bold uppercase text-muted-text">Step One</span>
                  </div>
                  <h3 className="font-jakarta text-xl text-content-primary font-bold mb-2">Sift & Measure</h3>
                  <p className="font-jakarta text-sm text-muted-text leading-relaxed">
                    2.0 grams of stone-ground tencha sifted through ultra-fine mesh to remove static clumps, ensuring airy suspension in water.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-border-subtle flex items-center gap-2 text-midori-green font-epilogue text-[0.6875rem] font-bold uppercase">
                  <Filter className="w-4 h-4" />
                  <span>Zero Agglomeration</span>
                </div>
              </div>

              {/* Step 2 */}
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-border-subtle/30 flex flex-col justify-between hover:translate-y-[-4px] transition-transform duration-300">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-epilogue text-4xl text-midori-green/30 font-bold">02</span>
                    <span className="px-3 py-1 rounded-full bg-surface-sand font-epilogue text-[0.6875rem] font-bold uppercase text-muted-text">Step Two</span>
                  </div>
                  <h3 className="font-jakarta text-xl text-content-primary font-bold mb-2">The 80°C Pour</h3>
                  <p className="font-jakarta text-sm text-muted-text leading-relaxed">
                    60ml of filtered mountain spring water heated strictly to 80°C (176°F). Boiling water burns sensitive catechins and invites harsh tannins.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-border-subtle flex items-center gap-2 text-midori-green font-epilogue text-[0.6875rem] font-bold uppercase">
                  <Thermometer className="w-4 h-4" />
                  <span>Thermal Extraction Precision</span>
                </div>
              </div>

              {/* Step 3 */}
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-border-subtle/30 flex flex-col justify-between hover:translate-y-[-4px] transition-transform duration-300">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-epilogue text-4xl text-midori-green/30 font-bold">03</span>
                    <span className="px-3 py-1 rounded-full bg-surface-sand font-epilogue text-[0.6875rem] font-bold uppercase text-muted-text">Step Three</span>
                  </div>
                  <h3 className="font-jakarta text-xl text-content-primary font-bold mb-2">Chasen Aeration</h3>
                  <p className="font-jakarta text-sm text-muted-text leading-relaxed">
                    A 100-prong golden Takayama bamboo chasen whisks in rapid &apos;W&apos; strokes from the wrist, incorporating air until dense jade foam rises.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-border-subtle flex items-center gap-2 text-midori-green font-epilogue text-[0.6875rem] font-bold uppercase">
                  <Wind className="w-4 h-4" />
                  <span>Velvet Microfoam</span>
                </div>
              </div>

              {/* Step 4 */}
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-border-subtle/30 flex flex-col justify-between hover:translate-y-[-4px] transition-transform duration-300">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-epilogue text-4xl text-midori-green/30 font-bold">04</span>
                    <span className="px-3 py-1 rounded-full bg-surface-sand font-epilogue text-[0.6875rem] font-bold uppercase text-muted-text">Step Four</span>
                  </div>
                  <h3 className="font-jakarta text-xl text-content-primary font-bold mb-2">The Layered Pour</h3>
                  <p className="font-jakarta text-sm text-muted-text leading-relaxed">
                    Decanted smoothly over ice and our house organic botanical milks, or enjoyed unadorned as Usucha for traditional contemplation.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-border-subtle flex items-center gap-2 text-midori-green font-epilogue text-[0.6875rem] font-bold uppercase">
                  <Leaf className="w-4 h-4" />
                  <span>Mindful Immersion</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CLOSING CTA */}
        <ClosingCtaBanner />
      </PageWrapper>
      <Footer />
    </>
  );
}
