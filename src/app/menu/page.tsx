"use client";

import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageWrapper } from "@/components/layout";
import Image from "next/image";
import { Zap } from "lucide-react";
import { Star, Droplets, FlaskConical, BadgeCheck, Leaf } from "lucide-react";
import { MenuItemCard, type MenuItemData } from "@/components/ui/MenuItemCard";

type MenuCategory = "matcha" | "drinks" | "desserts" | "seasonal";

interface ExtendedMenuItemData extends MenuItemData {
  categoryId: MenuCategory;
  tags: string[];
}

const menuItems: ExtendedMenuItemData[] = [
  // SIGNATURE MATCHA
  {
    id: "classic-matcha-latte",
    categoryId: "matcha",
    tags: ["favorite", "dairy-free"],
    imageSrc: "/images/classic-matcha.png",
    imageAlt: "Minimalist top view of a classic Japanese ceremonial matcha latte",
    badge: "Core Classic",
    badgeStyle: "bg-white text-content-primary",
    price: "Rp 58.000",
    eyebrowLabel: "Rich Umami",
    eyebrowValue: "Zero Sugar Opt.",
    title: "Classic Matcha Latte",
    description: "First-harvest ceremonial tencha whisked fresh with velvety steamed or iced organic oat milk.",
    progressLabel: "Umami Intensity",
    progressValue: 85,
    actionText: "Add +",
    colSpanClass: "",
    buttonVariant: "primary"
  },
  {
    id: "strawberry-matcha",
    categoryId: "matcha",
    tags: ["favorite", "iced", "dairy-free"],
    imageSrc: "/images/strawberry-matcha.png",
    imageAlt: "Artisanal layered iced strawberry matcha latte",
    badge: "Signature",
    badgeStyle: "bg-surface-cream text-midori-dark",
    price: "Rp 68.000",
    eyebrowLabel: "Berry Sweet",
    eyebrowValue: "Layered Iced",
    title: "Strawberry Matcha",
    description: "Layered slow-macerated fresh Albion strawberries with cold-whisked jade ceremonial matcha.",
    progressLabel: "Sweetness Natural",
    progressValue: 65,
    actionText: "Add +",
    colSpanClass: "",
    buttonVariant: "primary"
  },
  {
    id: "cloud-matcha",
    categoryId: "matcha",
    tags: ["iced"],
    imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuAZNbQhDig2b0Fpa5HkQlhKDwuEXLgF9Hodv2C9zUdN_AWJsp8WuqAqIdCtSRK3fjl42BvXIUrF02Ks5oFOxT5XEjiaWzjOA8vNDwMzSvMakyrRchydnDfDhoplPXXgfz0M9MwOk2UNISO2mEty0cT0DEYMR-yGwokwmaf8WwyFGWt8z24L3uX-sF8gXKtbipdHmZGC_0OOVL-q13XHq26hzFqtIpx6CvReGFdQqDQUboMXK6Bmjg3j",
    imageAlt: "Modern Japanese iced matcha tea glass topped with thick dense aerated sea salt vanilla white cold cream foam",
    badge: "Cold Foam",
    badgeStyle: "bg-white text-content-primary",
    price: "Rp 65.000",
    eyebrowLabel: "Velvety & Salty",
    eyebrowValue: "Cold Whisked",
    title: "Cloud Matcha",
    description: "Aerated sea-salt vanilla cold foam layered gently over stone-ground ceremonial matcha.",
    progressLabel: "Foam Density",
    progressValue: 90,
    actionText: "Add +",
    colSpanClass: "",
    buttonVariant: "primary"
  },
  {
    id: "iced-coconut-matcha",
    categoryId: "matcha",
    tags: ["iced", "dairy-free"],
    imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuBmcy5MscjZJ5yL80-jKQFgvYA5BCCObO-VraWX2tWwy8dZ3kryuOhc8a9JVCdmicpnWCZc2CeNsAuXk2Q-UsozGIU-8zlkSSPJBDUgtEieey3LQBdTRkea12qNe-jHOMdFqDZ0LHMm0VU6Z_RamEC2BoX6YeKINzM8fMZFd51vfFSh9sbW7vE08X2tGUWCzUnR1iqFxN49Ng3CWBsaScTPRrxysVRw9Y3XcIggfIaHu1VSGnUUEwNv",
    imageAlt: "Fluted glass cup filled with clear fresh coconut water and matcha",
    badge: "Electrolyte Hydration",
    badgeStyle: "bg-white text-content-primary",
    price: "Rp 62.000",
    eyebrowLabel: "Crisp Refresh",
    eyebrowValue: "Zero Refined Sugar",
    title: "Iced Coconut Matcha",
    description: "Chilled organic young coconut water topped with vibrant emerald ceremonial matcha float.",
    progressLabel: "Crop Hydration",
    progressValue: 95,
    actionText: "Add +",
    colSpanClass: "",
    buttonVariant: "primary"
  },

  // SIGNATURE DRINKS
  {
    id: "matcha-lemonade",
    categoryId: "drinks",
    tags: ["iced", "dairy-free"],
    imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuBPjYvpCs3NjB5CGTrXtnpU0_drS90dgdEFrLHHZo6sS2U-9m7xNO2AFS8alDblHD5-49tWcigl4An8tQLB6fxUoE3g46CjbZAxMm446UdDFYUnBH9ayPdjv79lmO0MSe_zJ_WNvhtIRdOyFq0YEhYCuLMgygG7MZplrf0LbcPfA7z7CM9muAzZd0s1DBh5cY7LHotDCmgq2QeM_R4LAow4HDwlWPXf7zz0VJj9bNlNW9EUJf2zQT9M",
    imageAlt: "Tall crystal glass filled with effervescent sparkling matcha lemonade",
    badge: "Citrus Tonic",
    badgeStyle: "bg-surface-cream text-midori-dark",
    price: "Rp 55.000",
    eyebrowLabel: "Bright & Crisp",
    eyebrowValue: "Sparkling Spring",
    title: "Matcha Lemonade",
    description: "Cold-pressed Meyer lemon, sparkling mountain spring water, and stone-ground ceremonial matcha.",
    metricPills: ["Low Sweet", "Effervescent"],
    actionText: "Order +",
    colSpanClass: "",
    buttonVariant: "primary"
  },
  {
    id: "brown-sugar-matcha",
    categoryId: "drinks",
    tags: ["favorite"],
    imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuC63X-Fvf8WGB6J3ef0_Gsv69njDQX1rfuTF6c6jtx8W4r6xjCbXv-JjPMTZr83oIGUBGHzzT1JP8RumGIz3mtn9IdFK5IdGI_uGGz2OYuyMCGkV4xeH_ZGsc-GBuFtWiQ1P3REhGhVSMl-owNKGeoaj51cjr8Gp6DcbchpTuSbDvAwXCAXA_VaFNCf8TYx86If7cUEXb7wO_l8xHO-9mur9567LfZIW56GgReC6Wz1OeVVuOMfDsTu",
    imageAlt: "Artisanal glass with deep dark brown sugar boba syrup",
    badge: "Slow Simmered",
    badgeStyle: "bg-surface-cream text-midori-dark",
    price: "Rp 64.000",
    eyebrowLabel: "Rich Umami Caramel",
    eyebrowValue: "Okinawa Kokuto",
    title: "Brown Sugar Matcha",
    description: "Slow-reduced Okinawa black sugar boba syrup swirled with rich oat milk and deep ceremonial matcha.",
    metricPills: ["Tapioca Pearls", "Custard Sweet"],
    actionText: "Order +",
    colSpanClass: "",
    buttonVariant: "primary"
  },
  {
    id: "vanilla-matcha-cream",
    categoryId: "drinks",
    tags: ["favorite", "iced"],
    imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuBKcYqI0HDUrl9PCNWrwDgKDsqzVMJaE3zbkMju5ZFgV1A-J2PW_jmNOEJDQxgDh-RT08RR6Gng2RErlnnlh-aYRTV0z41ydeUd1_Wtv8BW0Nv4nR4mMDdMDhc8QZXur9pS8UO5qsZKcwvUS6QRsxZc5RQSIzLOso2XySptttz8eUmgPqJnBm7dYsbIjLxpJiu0nX9J3pmJ9LPh7YNOjrIaTd1jcYOWSeSp-Ogn1oD6nNJVkbEuMCpy",
    imageAlt: "Short tumbler with luxurious dense vanilla seed specked thick cream",
    badge: "Bourbon Bean",
    badgeStyle: "bg-white text-content-primary",
    price: "Rp 66.000",
    eyebrowLabel: "Creamy Sweet",
    eyebrowValue: "Madagascar Vanilla",
    title: "Vanilla Matcha Cream",
    description: "Madagascar bourbon vanilla bean infused cream layered over dense ceremonial Uji matcha.",
    metricPills: ["House Infused", "Silk Texture"],
    actionText: "Order +",
    colSpanClass: "",
    buttonVariant: "primary"
  },

  // DESSERTS & PAIRINGS
  {
    id: "matcha-basque-cheesecake",
    categoryId: "desserts",
    tags: ["favorite"],
    imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuDyOl7rAJU4NU8QOPug48wKwVkgIZLiEAKX7DnQ_s2Ra9pquY5nOpT0qbndtt01oc4QwlPxjYQvzh_cEnLrHV9-gIO79fbfFi22jN7X-oIbM_Xp0XxnXnlWzDs7ds4l3XqvfrJE7qvcyBw515t1vttMhmxem_RUgNAM0s3L1DDWT0HHroTf3-ZY4lyim3r8gvvMv-7v1HWhHEtXwM6rYBRb6m0kqjov3EDpq1RPZT0aihPRKnCMmxgi",
    imageAlt: "A slice of burnt matcha basque cheesecake",
    badge: "Bakeshop Hero",
    badgeStyle: "bg-midori-dark text-white",
    price: "Rp 65.000",
    eyebrowLabel: "Gluten-Friendly Available",
    eyebrowValue: "Molten Center",
    title: "Matcha Basque Cheesecake",
    description: "Caramelized Basque exterior with an oozing, molten ceremonial Uji matcha center made with fresh cream.",
    actionText: "Add +",
    colSpanClass: "",
    buttonVariant: "primary"
  },
  {
    id: "matcha-cookie",
    categoryId: "desserts",
    tags: [],
    imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuDW4xO2HU4Q7kT_K0TOBY0BVIuHQ-_fcdLtyV11J_SoBF_2OlGQK2LxRhqWenD1Lfk1AU12cpxieP93b-BlyWkQrmdXVJCpj6d6JUmYEmZQtei0S-R6ISMrFDgctcriC7sd_70j1D6E_HiG8IdD5h_f0SVxb7cD_tH1oDrYe1IkSEfdIXCKW3cj819BLJRY-ZuKTjfMZz4JY1YrsrKIHrzhgTrmrorJD7QFmfLNIG0LhojJt_NVGmCH",
    imageAlt: "Thick gourmet soft-baked matcha cookie",
    badge: "Warm from Oven",
    badgeStyle: "bg-white text-content-primary",
    price: "Rp 38.000",
    eyebrowLabel: "Valrhona White Choc",
    eyebrowValue: "Fleur De Sel",
    title: "Matcha Cookie",
    description: "Soft-baked Valrhona white chocolate chunk cookie enriched with stone-ground green tea and sea salt flake.",
    actionText: "Add +",
    colSpanClass: "",
    buttonVariant: "primary"
  },
  {
    id: "matcha-soft-serve",
    categoryId: "desserts",
    tags: ["favorite"],
    imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuAHyIQDeD3fGlYXNn22-v8sCYf7brzYtYg95Im3rCEvNwftZrBTqXjN5hV-h3_kqf_oTiZ3JVrxHAz5zydp_QbC5KxGKLNpAKQp-IV77usaUsQI5srfnPgEBMw0Dd5JJ-Z5gQwYu_j2AssTA70zauf7Ah2ycEMIGg0MeLww3y9Sh9pO66tQ-J8I5QLpDFIlZYacd9pI8xsffN-Oa5ED4g-qZ_EOpOX0KI4nbZw7EWSzh2WSrnxzFjTJ",
    imageAlt: "Swirled double-strength vibrant green matcha soft serve ice cream",
    badge: "Hokkaido Milk",
    badgeStyle: "bg-surface-cream text-midori-dark",
    price: "Rp 45.000",
    eyebrowLabel: "Artisanal Waffle Cone",
    eyebrowValue: "Double Strength",
    title: "Matcha Soft Serve",
    description: "Rich organic Hokkaido milk soft serve infused with double-strength first harvest matcha in waffle cone.",
    actionText: "Add +",
    colSpanClass: "",
    buttonVariant: "primary"
  },
  
  // SEASONAL SPECIAL DROP
  {
    id: "yuzu-blossom",
    categoryId: "seasonal",
    tags: ["iced", "dairy-free"],
    imageSrc: "/images/yuzu-blossom.png",
    imageAlt: "Tall crystal faceted highball glass with yuzu citrus marmalade base",
    badge: "Limited Autumn-Spring Transition Drop",
    badgeStyle: "bg-[#EAE8E0] text-midori-dark",
    badgeIcon: <Zap className="w-3.5 h-3.5" />,
    eyebrowLabel: "Featured Concoction",
    titleNode: (
      <h2 className="font-epilogue text-[3.5rem] md:text-[5rem] tracking-tight text-white mb-2 leading-[0.9] font-bold uppercase">
        GREEN <br />
        <span className="text-[#CAEEA7] italic font-normal">SEASON.</span>
      </h2>
    ),
    subtitle: "YUZU BLOSSOM SPARKLING MATCHA",
    description: "Candied Kochi yuzu citrus preserves, sparkling volcanic mineral water, and ceremonial Okumidori cold-whisked tencha poured over crystalline crushed ice with wild edible blossoms.",
    splitMetrics: {
      label1: "Limited Reserve",
      value1: "Rp 72.000",
      label2: "Availability",
      value2: "Until First Harvest Sold Out"
    },
    actionText: "Order Seasonal Drop",
    secondaryActionText: "Learn About The Harvest",
    colSpanClass: "lg:col-span-12",
    buttonVariant: "primary",
    layout: "horizontal",
    theme: "dark"
  }
];

export default function MenuPage() {
  const [activeTab, setActiveTab] = useState<string>("all");
  const [activeFilters, setActiveFilters] = useState<string[]>([]);

  const toggleFilter = (filter: string) => {
    setActiveFilters((prev) =>
      prev.includes(filter) ? prev.filter((f) => f !== filter) : [...prev, filter]
    );
  };

  const scrollToSection = (id: string) => {
    setActiveTab(id);
    if (id === "all") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 150;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const filteredItems = (categoryId: MenuCategory) => {
    return menuItems.filter((item) => {
      if (item.categoryId !== categoryId) return false;
      if (activeFilters.length === 0) return true;
      return activeFilters.every((filter) => item.tags.includes(filter));
    });
  };

  const matchaItems = filteredItems("matcha");
  const drinksItems = filteredItems("drinks");
  const dessertsItems = filteredItems("desserts");
  const seasonalItems = filteredItems("seasonal");

  return (
    <>
      <Navbar />
      <PageWrapper>
        {/* HERO SECTION */}
        <section className="relative w-full px-4 sm:px-6 lg:px-8 py-16 md:py-24 overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Hero Text */}
              <div className="lg:col-span-7 flex flex-col items-start space-y-6 z-10">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-midori-green/20 text-midori-dark">
                  <span className="w-2 h-2 rounded-full bg-midori-green animate-pulse"></span>
                  <span className="font-epilogue text-[0.6875rem] uppercase tracking-wider font-bold">Made Fresh, Served With Good Energy</span>
                </div>
                <h1 className="font-epilogue text-5xl md:text-7xl lg:text-[5rem] text-content-primary tracking-tight uppercase leading-none font-bold">
                  Find Your <br />
                  <span className="text-midori-green italic font-serif font-normal">Green.</span>
                </h1>
                <p className="font-jakarta text-lg text-muted-text max-w-xl">
                  From smooth single-origin ceremonial matcha to playful seasonal botanical creations, explore handcrafted elixirs prepared with deliberate mindful pacing.
                </p>
                {/* Badges */}
                <div className="pt-2 flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-1 font-jakarta text-[0.75rem] px-4 py-1.5 rounded-full bg-surface-sand text-muted-text font-semibold border border-border-subtle/50">
                    <Leaf className="w-4 h-4 text-midori-green" />
                    100% Ceremonial Grade
                  </span>
                  <span className="inline-flex items-center gap-1 font-jakarta text-[0.75rem] px-4 py-1.5 rounded-full bg-surface-sand text-muted-text font-semibold border border-border-subtle/50">
                    <Droplets className="w-4 h-4 text-midori-green" />
                    Plant-Based Milks
                  </span>
                  <span className="inline-flex items-center gap-1 font-jakarta text-[0.75rem] px-4 py-1.5 rounded-full bg-surface-sand text-muted-text font-semibold border border-border-subtle/50">
                    <FlaskConical className="w-4 h-4 text-midori-green" />
                    Artisanal House Syrups
                  </span>
                  <span className="inline-flex items-center gap-1 font-jakarta text-[0.75rem] px-4 py-1.5 rounded-full bg-surface-sand text-muted-text font-semibold border border-border-subtle/50">
                    <BadgeCheck className="w-4 h-4 text-midori-green" />
                    Zero Preservatives
                  </span>
                </div>
              </div>
              {/* Hero Visual */}
              <div className="lg:col-span-5 relative">
                <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden bg-surface-sand shadow-xl">
                  <Image 
                    alt="Two glasses of velvety ceremonial iced matcha latte on a sunlit natural travertine counter next to a handcrafted bamboo chasen whisk" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" 
                    src="/images/hero.png"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                  {/* Floating Origin Tag */}
                  <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-white/90 backdrop-blur-md shadow-lg flex items-center justify-between border border-border-subtle/50">
                    <div className="flex flex-col">
                      <span className="font-epilogue text-[0.6875rem] font-bold text-muted-text uppercase tracking-wider">Single Cultivar Origin</span>
                      <span className="font-jakarta text-lg text-content-primary font-bold">Uji Gokou &amp; Samidori</span>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-midori-green flex items-center justify-center text-white shadow-sm">
                      <Leaf className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CATEGORY SELECTOR & QUICK FILTERS */}
        <section className="sticky top-[72px] z-40 w-full bg-white/95 backdrop-blur-md py-4 px-4 sm:px-6 lg:px-8 shadow-sm border-b border-border-subtle/30">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Main Category Tabs */}
            <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 hide-scrollbar">
              <button 
                onClick={() => scrollToSection("all")}
                className={`px-5 py-2 rounded-full font-jakarta text-sm font-semibold transition-all whitespace-nowrap ${activeTab === "all" ? "bg-midori-dark text-white" : "bg-surface-sand text-muted-text hover:text-content-primary hover:bg-surface-cream"}`}
              >
                All
              </button>
              <button 
                onClick={() => scrollToSection("signature-matcha")}
                className={`px-5 py-2 rounded-full font-jakarta text-sm font-semibold transition-all whitespace-nowrap ${activeTab === "signature-matcha" ? "bg-midori-dark text-white" : "bg-surface-sand text-muted-text hover:text-content-primary hover:bg-surface-cream"}`}
              >
                Matcha
              </button>
              <button 
                onClick={() => scrollToSection("signature-drinks")}
                className={`px-5 py-2 rounded-full font-jakarta text-sm font-semibold transition-all whitespace-nowrap ${activeTab === "signature-drinks" ? "bg-midori-dark text-white" : "bg-surface-sand text-muted-text hover:text-content-primary hover:bg-surface-cream"}`}
              >
                Signature Drinks
              </button>
              <button 
                onClick={() => scrollToSection("desserts")}
                className={`px-5 py-2 rounded-full font-jakarta text-sm font-semibold transition-all whitespace-nowrap ${activeTab === "desserts" ? "bg-midori-dark text-white" : "bg-surface-sand text-muted-text hover:text-content-primary hover:bg-surface-cream"}`}
              >
                Desserts
              </button>
              <button 
                onClick={() => scrollToSection("seasonal")}
                className={`px-5 py-2 rounded-full font-jakarta text-sm font-semibold transition-all whitespace-nowrap ${activeTab === "seasonal" ? "bg-midori-dark text-white" : "bg-surface-sand text-muted-text hover:text-content-primary hover:bg-surface-cream"}`}
              >
                Seasonal
              </button>
            </div>
            
            {/* Quick Characteristic Filters */}
            <div className="flex items-center gap-4 w-full md:w-auto justify-end overflow-x-auto hide-scrollbar">
              <button 
                onClick={() => toggleFilter("iced")}
                className={`inline-flex items-center gap-1.5 font-jakarta text-xs font-semibold px-2 py-1.5 transition-colors whitespace-nowrap ${activeFilters.includes("iced") ? "text-midori-dark font-bold" : "text-muted-text hover:text-content-primary"}`}
              >
                <span className={`w-1.5 h-1.5 rounded-full ${activeFilters.includes("iced") ? "bg-midori-dark" : "bg-muted-text"}`}></span>
                Iced Only
              </button>
              <button 
                onClick={() => toggleFilter("dairy-free")}
                className={`inline-flex items-center gap-1.5 font-jakarta text-xs font-semibold px-2 py-1.5 transition-colors whitespace-nowrap ${activeFilters.includes("dairy-free") ? "text-midori-dark font-bold" : "text-muted-text hover:text-content-primary"}`}
              >
                <span className={`w-1.5 h-1.5 rounded-full ${activeFilters.includes("dairy-free") ? "bg-midori-dark" : "bg-muted-text"}`}></span>
                Dairy-Free
              </button>
              <button 
                onClick={() => toggleFilter("favorite")}
                className={`inline-flex items-center gap-1.5 font-jakarta text-xs font-semibold px-2 py-1.5 transition-colors whitespace-nowrap ${activeFilters.includes("favorite") ? "text-midori-dark font-bold" : "text-muted-text hover:text-content-primary"}`}
              >
                <Star className={`w-3.5 h-3.5 ${activeFilters.includes("favorite") ? "text-midori-dark fill-midori-dark" : "text-muted-text"}`} />
                House Favorite
              </button>
            </div>
          </div>
        </section>

        {/* SIGNATURE MATCHA */}
        <section id="signature-matcha" className="w-full px-4 sm:px-6 lg:px-8 py-16 md:py-24 scroll-mt-24">
          <div className="max-w-7xl mx-auto space-y-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-4">
              <div>
                <span className="font-epilogue text-xs uppercase text-muted-text font-bold tracking-widest block mb-2">Cultivar Pure Reserve</span>
                <h2 className="font-epilogue text-4xl lg:text-5xl text-content-primary font-bold tracking-tight uppercase">SIGNATURE MATCHA</h2>
              </div>
              <p className="font-jakarta text-base md:text-lg text-muted-text max-w-md">
                Pure ceremonial single-origin Uji harvest paired with modern velvety textures and house stone-milled technique.
              </p>
            </div>
            
            {matchaItems.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {matchaItems.map((item) => (
                  <MenuItemCard key={item.id} data={item} />
                ))}
              </div>
            ) : (
              <div className="py-12 text-center text-muted-text font-jakarta bg-surface-sand rounded-3xl border border-border-subtle/50">
                No signature matcha items match your selected filters.
              </div>
            )}
          </div>
        </section>

        {/* SIGNATURE DRINKS */}
        <section id="signature-drinks" className="w-full px-4 sm:px-6 lg:px-8 py-16 md:py-24 bg-surface-sand scroll-mt-24">
          <div className="max-w-7xl mx-auto space-y-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-4">
              <div>
                <span className="font-epilogue text-xs uppercase text-muted-text font-bold tracking-widest block mb-2">House Confections &amp; Elixirs</span>
                <h2 className="font-epilogue text-4xl lg:text-5xl text-content-primary font-bold tracking-tight uppercase">SIGNATURE DRINKS</h2>
              </div>
              <p className="font-jakarta text-base md:text-lg text-muted-text max-w-md">
                Creative botanical infusions and elevated house concoctions designed for sustained vitality and restorative calm.
              </p>
            </div>
            
            {drinksItems.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {drinksItems.map((item) => (
                  <MenuItemCard key={item.id} data={item} />
                ))}
              </div>
            ) : (
              <div className="py-12 text-center text-muted-text font-jakarta bg-white rounded-3xl border border-border-subtle/50">
                No signature drinks match your selected filters.
              </div>
            )}
          </div>
        </section>

        {/* DESSERTS & PAIRINGS */}
        <section id="desserts" className="w-full px-4 sm:px-6 lg:px-8 py-16 md:py-24 scroll-mt-24">
          <div className="max-w-7xl mx-auto space-y-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-epilogue text-xs uppercase text-muted-text font-bold tracking-widest">Midori Bakeshop</span>
                  <span className="px-2 py-0.5 rounded-full bg-midori-green/20 text-midori-dark font-epilogue text-[0.625rem] font-bold uppercase">Baked Fresh Daily</span>
                </div>
                <h2 className="font-epilogue text-4xl lg:text-5xl text-content-primary font-bold tracking-tight uppercase">DESSERTS &amp; PAIRINGS</h2>
              </div>
              <p className="font-jakarta text-base md:text-lg text-muted-text max-w-md">
                Crafted daily in our bakeshop using Japanese culinary precision to harmonize with ceremonial green tea notes.
              </p>
            </div>
            
            {dessertsItems.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {dessertsItems.map((item) => (
                  <MenuItemCard key={item.id} data={item} />
                ))}
              </div>
            ) : (
              <div className="py-12 text-center text-muted-text font-jakarta bg-surface-sand rounded-3xl border border-border-subtle/50">
                No desserts match your selected filters.
              </div>
            )}
          </div>
        </section>

        {/* SEASONAL SPECIAL DROP */}
        <section id="seasonal" className="w-full px-4 sm:px-6 lg:px-8 py-16 md:py-24 scroll-mt-24">
          <div className="max-w-7xl mx-auto space-y-10">
            {seasonalItems.length > 0 ? (
              seasonalItems.map((item) => (
                <MenuItemCard key={item.id} data={item} />
              ))
            ) : (
              <div className="py-12 text-center text-muted-text font-jakarta bg-surface-sand rounded-3xl border border-border-subtle/50">
                No seasonal items match your selected filters.
              </div>
            )}
          </div>
        </section>

      </PageWrapper>
      <Footer />
    </>
  );
}
