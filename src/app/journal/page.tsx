"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageWrapper } from "@/components/layout/PageWrapper";
import { ArrowUpRight, ArrowRight } from "lucide-react";

const filterCategories = [
  { id: "all", label: "All Stories (7)" },
  { id: "culture", label: "Matcha Culture" },
  { id: "behind", label: "Behind The Scenes" },
  { id: "food-drink", label: "Food & Drink" },
  { id: "lifestyle", label: "Lifestyle" },
  { id: "community", label: "Community" },
  { id: "guide", label: "Matcha Guide" }
];

const articlesData = [
  {
    id: 1,
    title: "Why We Love Ceremonial Matcha",
    category: "guide",
    categoryLabel: "Matcha Guide",
    date: "October 12, 2024",
    readTime: "4 Min Read",
    excerpt: "From carefully selected first-harvest leaves in Uji to a beautifully balanced, vibrant jade cup that delivers natural l-theanine focus.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCUHfpvT8b71Dgwv8x2DK3ezagpoCkxoj9I3mZp3c3tMTTP2a5ESj6wX_teaBfnNYqX-4xmosiwhhc7hmHjiawglYHw6V2Fo76YiFykeXT4QVTzDGS0OL7L5zKxoyUVslV6QCdXTkeuADMrjT0f-bhpKZLSBL1ug_S5G-VacRjvBQ8bT-o0wcILz8ylUwdtHZ5aQ-GvUy1RIouSL9Q6e1v8lPNV5WxLcVKz_wZk-l2GvjGxTiN71ej-"
  },
  {
    id: 2,
    title: "Inside the Midori Kitchen",
    category: "behind",
    categoryLabel: "Behind The Scenes",
    date: "October 05, 2024",
    readTime: "6 Min Read",
    excerpt: "A closer look at the craft, ingredients, and seasonal creativity behind our signature teahouse menu and dairy-free emulsions.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuATlYFDewx-GzZzUczjZ9bF5tWqU7nduMx72vddmsEw8Tx3-XLrNsmrCmvVrbiKVFqj5PEABFDtE7dkxNkiZKszUWnJBCEaBCrPDZCAVNGK2IGzLdgVoJVAvITdx7U4KToQWjpDeHzHhixGK154h1Cj4GSMDMnBh4Bkf-fmEXzPYBb8PInMMLIDkp_WBN_t-OjKTL1YzzY4uC8cPjMeO4Y9n5lxoaL0q6gE8-nGdaaykfU_ZO3fq4th"
  },
  {
    id: 3,
    title: "The Perfect Matcha Pairing",
    category: "food-drink",
    categoryLabel: "Food & Drink",
    date: "September 28, 2024",
    readTime: "3 Min Read",
    excerpt: "Sweet, earthy, and just the right amount of indulgence. Pairing single-cultivar brews with French-Japanese baked confections.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC4cI9H3fJa3_JmQYrBHCYqPBaQVEFkzbZCKVrUZFKCAuNvnDAxXf9FyHOc0Eotzw6RwNrdqX25oLy5GALtbuFfDSGAprrYZhJ7NtFzxqXddVioVP7d7bPNfOgS2xWXrSKjG5-wR_myI0sND-dtNDByb7TxZm67Scbntub0V9o0PbhIfa2jxqhj1Nc7GsHqyVl6Lr14Cb4y3law_kqYqFbWRkyTFqmHp4rWlnZglMwJeF0bx97hR78J"
  },
  {
    id: 4,
    title: "A Little Green Every Day",
    category: "lifestyle",
    categoryLabel: "Lifestyle",
    date: "September 20, 2024",
    readTime: "5 Min Read",
    excerpt: "Small rituals that make everyday moments feel more intentional. Integrating bamboo chasen whisking into your mid-day work flow.",
    image: "https://lh3.googleusercontent.com/aida/AEtjO1WBwEeD0EDwPYbzxAxEwR3RzJNJb7T1CC1QbYbembPdVw0NeE-FmkjP1yFmBdb2o7mWa8G8TC5Up861byeictdEzdL3lJzlfyJe3dOn7S8ytby277t0euc0gm_gOvat74s9z4GK69c5Y6C_PXB2zdibon8mI2hi_L-uzhu06MCrTq8aNDadOG8YYezWFwud414BFI4upUTJS6exkIjIcTCHyg1VUT0-dGqbriCBvOxE3D3V38keqlGezQM"
  },
  {
    id: 5,
    title: "Meet Your New Favorite Spot",
    category: "community",
    categoryLabel: "Community",
    date: "September 14, 2024",
    readTime: "4 Min Read",
    excerpt: "Exploring the light-filled sanctuaries and thoughtful patrons that make MIDORI special — from Senopati to BSD City and Serang.",
    image: "https://lh3.googleusercontent.com/aida/AEtjO1XoHE8KQdqrH99Ne69dy6CTnRnJSfvxmMPgSrJxr0DhnYdCvI6cp27qgg6LC-s3NDZ8EZE_Bwnrck4PdpxDw-e6h9WGByPZinx4fIBPD42KTTDBVVBDN381bOykCsX67qvQTKeEeLrAUz2Jf8PyVMp_NpUtzPD7oqg0VHLxxxud36heIY4HdDGmYfrjugB90sB6tZ6_N3Gbp0CpiEBgSL0QXAC74EKkn4pkIhrRWxSsrvlann2dhNixEF4"
  },
  {
    id: 6,
    title: "The Beauty of a Better Brew",
    category: "guide",
    categoryLabel: "Matcha Guide",
    date: "September 08, 2024",
    readTime: "5 Min Read",
    excerpt: "Understanding water temperature, bamboo whisk posture, and the details behind a smooth, silky micro-foamed bowl of matcha.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCpM9_y0StnCsVx1DWJb3kibc0dGCkFS8aa21zGmp1YwUV1KXIrjH_ABgWiPGBqUSg9JdOIgugCGW6k5pzGpW_02ROc29A0ycZpw68A4aBUc6RhChS6WsHX58kdSgd-c3Ub_oWa8VmSC2jBORRzFAnuDOQERel2NNUWAqgwLVWXBCqDWPEApck3RvZY2HTg0P-67WewTmEFd48SIFEgPKTAPIKGZhxTX-9ZJfAjqqgThUf-EosvK1Cw"
  }
];

export default function JournalPage() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredArticles = articlesData.filter(article => 
    activeCategory === "all" || article.category === activeCategory
  );

  return (
    <>
      <Navbar />
      <PageWrapper>
        {/* BREADCRUMB & CATEGORY FILTER BAR */}
        <section className="w-full px-4 md:px-8 lg:px-16 pt-8 pb-4">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-2 text-muted-text font-jakarta text-xs">
              <Link href="/" className="hover:text-midori-green transition-colors">Home</Link>
              <span className="text-border-subtle">/</span>
              <span className="text-content-primary font-bold">Journal</span>
            </div>
            
            {/* Category Filter Pills */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 hide-scrollbar">
              {filterCategories.map(cat => (
                <button 
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-5 py-2 rounded-full font-jakarta text-sm font-bold whitespace-nowrap transition-all shadow-sm ${
                    activeCategory === cat.id 
                      ? "bg-midori-green text-white" 
                      : "bg-surface-cream text-muted-text hover:bg-surface-sand hover:text-content-primary"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* JOURNAL HERO EDITORIAL HEADER */}
        <section className="w-full px-4 md:px-8 lg:px-16 py-12 md:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-midori-light text-midori-dark font-epilogue text-[0.6875rem] uppercase tracking-widest font-bold">
                <span className="w-1.5 h-1.5 rounded-full bg-midori-green animate-pulse"></span>
                Notes from the green side
              </div>
              <h1 className="font-epilogue text-5xl md:text-7xl text-content-primary tracking-tight leading-[1.05] font-bold">
                Good things to <span className="italic font-normal text-midori-green">sip & read.</span>
              </h1>
              <p className="font-jakarta text-lg text-muted-text max-w-xl">
                Stories, slow rituals, and quiet discoveries harvested from the misty tea fields of Uji to modern sanctuary counters.
              </p>
            </div>
            <div className="lg:col-span-4 flex flex-col justify-end items-start lg:items-end">
              <div className="bg-surface-cream p-6 rounded-2xl max-w-xs space-y-2 border border-border-subtle">
                <span className="font-epilogue text-[0.625rem] uppercase tracking-wider text-muted-text block font-bold">Quarterly Dispatch</span>
                <p className="font-jakarta text-sm text-content-primary font-bold">Issue Vol. 04 — Autumn Harvest & Stillness in the City</p>
                <div className="pt-2 flex items-center gap-2 font-jakarta text-sm text-midori-green font-bold">
                  <span>Archived Prints (24)</span>
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FEATURED STORY (LARGE ASYMMETRIC EDITORIAL SPREAD) */}
        {(activeCategory === "all" || activeCategory === "culture") && (
          <section className="w-full px-4 md:px-8 lg:px-16 pb-20">
            <article className="group relative bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-border-subtle">
              <div className="grid grid-cols-1 lg:grid-cols-12">
                {/* Visual Column */}
                <div className="lg:col-span-7 relative h-[420px] lg:h-[580px] overflow-hidden bg-surface-sand">
                  <Image 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" 
                    alt="Editorial close-up of a tea master"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCWutjPVViZaPGcRlO7eV7FgbZjYEc4vyBGRf_pPLEBfhqY8n97nZ3GWPt7xR4aDFKLEhewS7Uc9dhNLtw1xA8IXzGxEKecJkAgpB5XhCsPCioNI6iNWL0ouMwZ-7iAJV6rrz5sbaHspFJcu2GwgOW6INGsS_swm9PFa96ZJoLNHm5boAZNcd3o3UkGQQI6gy0LBw_GCT4XJNoqx1wzzPyp23lNNq0chi27MyY8eI9vlE57f8x8HA3-"
                    fill
                    unoptimized
                  />
                  <div className="absolute top-6 left-6 flex items-center gap-2">
                    <span className="px-4 py-2 rounded-full bg-white/90 backdrop-blur-md font-epilogue text-[0.6875rem] uppercase tracking-widest text-content-primary shadow-sm font-bold">
                      Featured Ritual
                    </span>
                  </div>
                  <div className="absolute bottom-6 left-6 right-6 lg:hidden">
                    <span className="font-epilogue text-[0.625rem] font-bold uppercase tracking-wider text-white bg-black/60 backdrop-blur-sm px-4 py-2 rounded-full">
                      October 18, 2024 • 5 Min Read
                    </span>
                  </div>
                </div>
                {/* Content Column */}
                <div className="lg:col-span-5 p-8 lg:p-14 flex flex-col justify-between bg-surface-cream/60">
                  <div className="space-y-6">
                    <div className="hidden lg:flex items-center gap-3">
                      <span className="px-3 py-1 rounded-full bg-midori-light text-midori-dark font-epilogue text-[0.625rem] font-bold uppercase tracking-wider">
                        Matcha Culture
                      </span>
                      <span className="text-border-subtle text-[0.625rem]">•</span>
                      <span className="font-epilogue text-[0.625rem] font-bold uppercase text-muted-text tracking-wider">
                        October 18, 2024
                      </span>
                      <span className="text-border-subtle text-[0.625rem]">•</span>
                      <span className="font-epilogue text-[0.625rem] font-bold uppercase text-muted-text tracking-wider">
                        5 Min Read
                      </span>
                    </div>
                    <h2 className="font-epilogue text-4xl text-content-primary tracking-tight group-hover:text-midori-green transition-colors font-bold">
                      The Art of Slowing Down
                    </h2>
                    <p className="font-jakarta text-base text-muted-text leading-relaxed">
                      Discover how a simple matcha ritual can turn an ordinary moment into something worth remembering. We explore the meditative cadence of Japanese chasen whisking, intentional morning routines, and finding stillness amidst Jakarta’s rapid pulse.
                    </p>
                    {/* Cultivar / Sensory Note Pill Strip */}
                    <div className="pt-4 flex flex-wrap items-center gap-2">
                      <span className="font-epilogue text-[0.625rem] uppercase tracking-wider text-muted-text block w-full mb-1 font-bold">Keywords</span>
                      <span className="px-3 py-1.5 rounded-full bg-white font-jakarta text-xs font-bold text-midori-dark border border-border-subtle">Mindfulness</span>
                      <span className="px-3 py-1.5 rounded-full bg-white font-jakarta text-xs font-bold text-midori-dark border border-border-subtle">Uji Ceremony</span>
                      <span className="px-3 py-1.5 rounded-full bg-white font-jakarta text-xs font-bold text-midori-dark border border-border-subtle">Chasen Whisking</span>
                    </div>
                  </div>
                  <div className="pt-8 mt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <p className="font-epilogue text-[0.625rem] uppercase tracking-wider text-muted-text font-bold">Authored By</p>
                      <p className="font-jakarta text-sm font-bold text-content-primary">Kenji Takahashi & Nabila Rahman</p>
                      <p className="font-epilogue text-[0.625rem] font-bold text-midori-dark mt-0.5">Resident Tea Masters</p>
                    </div>
                    <a className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-midori-green text-white hover:bg-midori-dark transition-all font-jakarta text-sm font-bold group/btn shadow-sm" href="#">
                      <span>Read Full Story</span>
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            </article>
          </section>
        )}

        {/* LATEST STORIES GRID */}
        <section className="w-full px-4 md:px-8 lg:px-16 pb-24">
          <div className="flex items-center justify-between mb-10">
            <div className="space-y-1">
              <span className="font-epilogue text-[0.625rem] font-bold uppercase tracking-widest text-midori-green block">Curated Archive</span>
              <h2 className="font-epilogue text-3xl font-bold text-content-primary">Latest Dispatches</h2>
            </div>
            <div className="hidden md:flex items-center gap-3 text-muted-text font-epilogue text-[0.625rem] font-bold uppercase tracking-wider">
              <span>{filteredArticles.length} Selected Entries</span>
              <span className="text-border-subtle text-[0.625rem]">•</span>
              <span>Updated Fortnightly</span>
            </div>
          </div>

          {/* Editorial 3-Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map(article => (
              <article key={article.id} className="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-border-subtle">
                <div className="relative h-64 overflow-hidden bg-surface-sand">
                  <Image 
                    src={article.image}
                    alt={article.title}
                    fill
                    unoptimized
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-md font-epilogue text-[0.625rem] font-bold uppercase tracking-wider text-content-primary shadow-sm">
                      {article.categoryLabel}
                    </span>
                  </div>
                </div>
                <div className="p-6 lg:p-7 flex flex-col flex-1 justify-between space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-muted-text font-epilogue text-[0.625rem] font-bold uppercase tracking-wider">
                      <span>{article.date}</span>
                      <span className="text-border-subtle text-[0.625rem]">•</span>
                      <span>{article.readTime}</span>
                    </div>
                    <h3 className="font-jakarta text-xl font-bold text-content-primary group-hover:text-midori-green transition-colors line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="font-jakarta text-sm text-muted-text line-clamp-2">
                      {article.excerpt}
                    </p>
                  </div>
                  <div className="pt-2 border-t border-border-subtle mt-4">
                    <a className="inline-flex items-center gap-2 font-jakarta text-sm font-bold text-midori-green group/link pt-4" href="#">
                      <span>Read Article</span>
                      <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </article>
            ))}
            
            {filteredArticles.length === 0 && (
              <div className="col-span-full py-16 text-center text-muted-text font-jakarta text-sm font-bold">
                No articles found in this category.
              </div>
            )}
          </div>
        </section>

        {/* EDITORIAL SENSORY ACCENT SECTION */}
        <section className="w-full px-4 md:px-8 lg:px-16 pb-24">
          <div className="bg-surface-cream rounded-3xl p-8 lg:p-12 relative overflow-hidden border border-border-subtle shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-5 space-y-4">
                <span className="font-epilogue text-[0.625rem] font-bold uppercase tracking-widest text-midori-green">Tea Master’s Tasting Notes</span>
                <h3 className="font-epilogue text-3xl font-bold text-content-primary">The Anatomy of First-Harvest Okumidori</h3>
                <p className="font-jakarta text-base text-muted-text">
                  Our current single-cultivar reserve from Kyoto possesses a rare sweetness balanced by zero astringency. Here is the sensory profile captured by our laboratory tasters.
                </p>
              </div>
              <div className="lg:col-span-7 bg-white p-6 lg:p-8 rounded-2xl space-y-6 shadow-sm border border-border-subtle">
                {/* Metric 1 */}
                <div className="space-y-2">
                  <div className="flex justify-between font-jakarta text-sm font-bold">
                    <span className="text-content-primary">Umami Richness</span>
                    <span className="text-midori-green">92% • Deep Savory</span>
                  </div>
                  <div className="w-full h-2.5 rounded-full bg-surface-sand overflow-hidden">
                    <div className="h-full bg-midori-green rounded-full transition-all duration-1000" style={{ width: '92%' }}></div>
                  </div>
                </div>
                {/* Metric 2 */}
                <div className="space-y-2">
                  <div className="flex justify-between font-jakarta text-sm font-bold">
                    <span className="text-content-primary">Astringency / Bitterness</span>
                    <span className="text-midori-dark">14% • Silky Smooth</span>
                  </div>
                  <div className="w-full h-2.5 rounded-full bg-surface-sand overflow-hidden">
                    <div className="h-full bg-midori-dark rounded-full transition-all duration-1000" style={{ width: '14%' }}></div>
                  </div>
                </div>
                {/* Metric 3 */}
                <div className="space-y-2">
                  <div className="flex justify-between font-jakarta text-sm font-bold">
                    <span className="text-content-primary">Natural Sweet Finish</span>
                    <span className="text-midori-green">88% • Edamame & Cream</span>
                  </div>
                  <div className="w-full h-2.5 rounded-full bg-surface-sand overflow-hidden">
                    <div className="h-full bg-midori-green rounded-full transition-all duration-1000" style={{ width: '88%' }}></div>
                  </div>
                </div>
                {/* Metric 4 */}
                <div className="space-y-2">
                  <div className="flex justify-between font-jakarta text-sm font-bold">
                    <span className="text-content-primary">Micro-Foam Crema Density</span>
                    <span className="text-content-primary">96% • Velvety</span>
                  </div>
                  <div className="w-full h-2.5 rounded-full bg-surface-sand overflow-hidden">
                    <div className="h-full bg-content-primary rounded-full transition-all duration-1000" style={{ width: '96%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* EDITORIAL NEWSLETTER DISPATCH */}
        <section className="w-full px-4 md:px-8 lg:px-16 pb-24">
          <div className="bg-surface-sand rounded-3xl p-8 lg:p-16 text-center max-w-4xl mx-auto shadow-sm border border-border-subtle">
            <div className="max-w-2xl mx-auto space-y-4">
              <span className="font-epilogue text-[0.625rem] font-bold uppercase tracking-widest text-midori-green block">Fortnightly Letters</span>
              <h2 className="font-epilogue text-3xl font-bold text-content-primary">A little goodness in your inbox.</h2>
              <p className="font-jakarta text-base text-muted-text">
                Get new culinary essays, seasonal cultivar arrivals, and tranquil inspiration from MIDORI delivered quietly to your reader.
              </p>
              <form className="pt-6 flex flex-col sm:flex-row items-center gap-3 max-w-lg mx-auto" onSubmit={(e) => { e.preventDefault(); alert('Thank you for subscribing to The Midori Dispatch.'); }}>
                <input 
                  type="email" 
                  placeholder="Enter your email for the dispatch..." 
                  required 
                  className="w-full px-6 py-4 rounded-full bg-white text-content-primary placeholder:text-muted-text/60 font-jakarta text-sm focus:outline-none focus:ring-2 focus:ring-midori-green shadow-sm border border-border-subtle" 
                />
                <button type="submit" className="w-full sm:w-auto px-8 py-4 rounded-full bg-midori-green text-white hover:bg-midori-dark transition-all font-jakarta text-sm font-bold whitespace-nowrap shadow-sm">
                  Join Dispatch
                </button>
              </form>
              <p className="font-jakarta text-xs text-muted-text pt-2 font-bold">
                No noise. No spam. Unsubscribe anytime with a single click.
              </p>
            </div>
          </div>
        </section>

        {/* FINAL CALL TO ACTION BANNER */}
        <section className="w-full px-4 md:px-8 lg:px-16 pb-12">
          <div className="bg-midori-green text-white rounded-3xl p-8 lg:p-16 relative overflow-hidden flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 shadow-md">
            <div className="absolute -left-16 -top-16 w-64 h-64 rounded-full bg-white/10 pointer-events-none blur-3xl"></div>
            <div className="space-y-4 max-w-xl relative z-10">
              <span className="font-epilogue text-[0.625rem] font-bold uppercase tracking-widest text-midori-light">From Screen to Cup</span>
              <h2 className="font-epilogue text-4xl md:text-5xl font-bold leading-tight">Read a little. Sip a little.</h2>
              <p className="font-jakarta text-lg text-white/90">
                Take your tea ritual from the screen to the cup. Explore our curated seasonal menu and signature single-cultivar drinks today.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto relative z-10">
              <Link href="/menu" className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-full bg-white text-midori-dark hover:bg-surface-cream transition-all font-jakarta text-sm font-bold shadow-md">
                Explore Our Menu
              </Link>
              <Link href="/locations" className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-full bg-transparent border border-white/40 text-white hover:bg-white/10 transition-all font-jakarta text-sm font-bold">
                Find a Teahouse
              </Link>
            </div>
          </div>
        </section>
      </PageWrapper>
      <Footer />
    </>
  );
}
