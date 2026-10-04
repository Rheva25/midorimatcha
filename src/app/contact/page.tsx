"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageWrapper } from "@/components/layout/PageWrapper";
import { 
  Clock, 
  Mail, 
  MessageCircle, 
  Store, 
  Camera, 
  PlayCircle, 
  ChevronDown, 
  Lock, 
  ArrowRight, 
  CheckCircle, 
  Download, 
  MapPin, 
  Navigation,
  Loader2,
  X,
  ChevronLeft,
  ChevronRight
} from "lucide-react";

const instagramFeed = [
  {
    id: 1,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAGTlUAOijIKLmU6E9ncE4NRyLMOw9aBREg48K-IP3Nx7rWFVUr-v5Z0iATnbEudfjqK46nQecXAr49YB9NvU2jOcdLn1BBbIuriNPdfLI4D8d020BDvLSTRbWNHAtoljU_EKb5AVPwqRJVmIvZ7QU5J2eDQgg-eHY3AtoMe7GrIhmaR_bd-TyTvdFnwxj0Z6CngJUjSRpOrDyOj-9G9WMta8MdwzSlWx-RhRVTmiiFJiQBV7VXETYb",
    tag: "#MidoriMoments • Strawberry Cloud",
    alt: "Strawberry Cloud Matcha"
  },
  {
    id: 2,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDdJSX-VxiZQuKTPyOSsFMIfesEAlEP7gkARLUy9l0m_rFREydWEI4pt9tfsK6COd4D_aghQm-kPUk-R74fCsXITkhAPUvXd6FjXikbx1VU4NfWzxU2wIWa_zQMzi4HpFbWtIe2iYE6DtubtFXmrQAYnnUCcjD7HfWzlIRv0ysOZJR00Hd2bUSrHRmcHikwtY3NOKww5PTE8CkdF5-hIjXIvZ9NjWfVXWCfOqy0g_-vUDQxKej1482J",
    tag: "#CeremonialCraft • 100-prong Chasen",
    alt: "Chasen Whisking"
  },
  {
    id: 3,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBsIG7u8pZvoCQcmZGdr6r_Gj7rjoRGWf2ExNyOfFZ0Cnp8Dpahfc87bZoxfnVkrLTEeaOx-83jQoePgopYB8sH9KeL5f4DbgCK3TJp28Ox3sszzbD9NYyPa1VPOsVNl_Sqljg4Ge3PK5PAmURDv2bvt7P2qmKPJj10dLJ7M5veMpZWgcwyI0vyFlAV7Ynz_ATiy75J02Q-uWB6RR8OxNZPfnCDMJHDH0gSMiIKS_vpqxC9Kbe30QD6",
    tag: "#SeasonalFlushes • Coconut Foam",
    alt: "Matcha Spread"
  },
  {
    id: 4,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDTgAaDdsNjLl4OnjVsA-1XpUu4swcRwpAyH4h4VUGkdJRJir5D7pNrzKOB1KaNdhU-7hPZyeaOeS3J2xPZN3UHe4qDEFn6IkcX5jpW-geCYkILIxjUbm-a1aaUjv3h9c1HIM1OLeWWw4yNf3OPV9sbW2dkoXoRsu1jVe1v4LuJUA0A41LY32IWrxp1eSEGcHNFMCWgCQYGxYHKhRcZsYmz8-mtkVz-5lXE7Hm391tcl3XlO66JSOOk",
    tag: "#SanctuaryVibe • Senopati Central",
    alt: "Tranquil Interior"
  }
];

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (index: number) => {
    setSelectedImageIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const nextImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setSelectedImageIndex((selectedImageIndex + 1) % instagramFeed.length);
  };

  const prevImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setSelectedImageIndex((selectedImageIndex - 1 + instagramFeed.length) % instagramFeed.length);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  return (
    <>
      <Navbar />
      <PageWrapper>
        {/* BREADCRUMBS */}
        <section className="w-full px-4 md:px-8 lg:px-16 pt-8 pb-2">
          <nav className="flex items-center gap-2 text-jakarta text-xs font-bold text-muted-text">
            <Link href="/" className="hover:text-midori-green transition-colors">Home</Link>
            <span className="text-border-subtle">/</span>
            <span className="text-content-primary font-bold">Contact</span>
          </nav>
        </section>

        {/* CONTACT HERO */}
        <section className="w-full px-4 md:px-8 lg:px-16 pt-8 pb-14">
          <div className="max-w-4xl">
            {/* Eyebrow Pill Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface-cream text-midori-green font-epilogue text-[0.6875rem] tracking-widest uppercase mb-6 shadow-sm font-bold border border-border-subtle">
              <span className="w-2 h-2 rounded-full bg-midori-green animate-pulse"></span>
              WE'D LOVE TO HEAR FROM YOU
            </div>
            {/* Main Headline */}
            <h1 className="font-epilogue text-5xl md:text-7xl text-content-primary tracking-tight mb-6 font-bold uppercase">
              LET'S TALK <span className="italic font-normal text-midori-green normal-case">over matcha.</span>
            </h1>
            <p className="font-jakarta text-lg text-muted-text max-w-2xl mb-4 leading-relaxed">
              Questions, collaborations, or just want to say hello? Our team is always happy to connect and share a quiet moment of hospitality.
            </p>
            {/* Response Time Indicator */}
            <div className="flex items-center gap-2.5 font-jakarta text-xs font-bold text-muted-text bg-surface-cream border border-border-subtle w-fit px-4 py-2 rounded-full">
              <Clock className="text-midori-green w-4 h-4" />
              <span>Average response time: within 24 hours (Monday – Friday)</span>
            </div>
          </div>
        </section>

        {/* MAIN TWO-COLUMN CONTACT & INQUIRY SECTION */}
        <section className="w-full px-4 md:px-8 lg:px-16 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left Column: Contact Channels & Sanctuary Details */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              <div>
                <span className="font-epilogue text-[0.6875rem] font-bold tracking-[0.2em] text-midori-green uppercase block mb-3">Direct Channels</span>
                <h2 className="font-epilogue text-2xl font-bold text-content-primary mb-6">Ways to reach our tea house</h2>
              </div>
              
              {/* Channel 1: General Inquiries */}
              <div className="bg-white border border-border-subtle p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-surface-sand flex items-center justify-center text-midori-green shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-epilogue text-[0.625rem] font-bold text-muted-text tracking-wider uppercase mb-1">General Inquiries</span>
                    <a className="font-jakarta text-xl text-content-primary hover:text-midori-green transition-colors font-bold" href="mailto:hello@midorimatchaclub.com">
                      hello@midorimatchaclub.com
                    </a>
                    <p className="font-jakarta text-sm text-muted-text mt-1.5 leading-normal">
                      For general questions, menu inquiries, and guest feedback.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Channel 2: Phone & WhatsApp */}
              <div className="bg-white border border-border-subtle p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-midori-light flex items-center justify-center text-midori-dark shrink-0">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-epilogue text-[0.625rem] font-bold text-muted-text tracking-wider uppercase mb-1">Phone & WhatsApp Converse</span>
                    <a className="font-jakarta text-xl text-content-primary hover:text-midori-green transition-colors font-bold" href="tel:+622155501234">
                      +62 21 5550 1234
                    </a>
                    <p className="font-jakarta text-sm text-muted-text mt-1.5 leading-normal">
                      Monday – Sunday: 08:00 AM – 10:00 PM WIB
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Channel 3: Sanctuary Headquarters */}
              <div className="bg-white border border-border-subtle p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-surface-sand flex items-center justify-center text-midori-green shrink-0">
                    <Store className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-epilogue text-[0.625rem] font-bold text-muted-text tracking-wider uppercase mb-1">Sanctuary Headquarters</span>
                    <p className="font-jakarta text-base text-content-primary font-bold">
                      Jl. Senopati No. 45, Kebayoran Baru
                    </p>
                    <p className="font-jakarta text-sm text-muted-text mt-1">
                      Jakarta Selatan 12190, Indonesia
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Channel 4: Social Community & Press Note */}
              <div className="bg-surface-cream border border-border-subtle p-6 rounded-2xl">
                <span className="font-epilogue text-[0.6875rem] font-bold text-midori-green tracking-wider uppercase block mb-2">Social Community</span>
                <p className="font-jakarta text-sm text-muted-text mb-4">Follow us for seasonal flushes, daily whisking rituals & private drops:</p>
                <div className="flex flex-wrap items-center gap-3 mb-6">
                  <a className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-border-subtle text-content-primary hover:bg-midori-green hover:border-midori-green hover:text-white font-jakarta text-xs font-bold transition-colors shadow-sm" href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    <Camera className="w-4 h-4" />
                    <span>@midorimatchaclub</span>
                  </a>
                  <a className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-border-subtle text-content-primary hover:bg-midori-green hover:border-midori-green hover:text-white font-jakarta text-xs font-bold transition-colors shadow-sm" href="https://tiktok.com" target="_blank" rel="noopener noreferrer">
                    <PlayCircle className="w-4 h-4" />
                    <span>@midorimatcha</span>
                  </a>
                </div>
                <div className="pt-4 border-t border-border-subtle">
                  <p className="font-jakarta text-sm text-muted-text italic">
                    Press & Media: For editorial features and high-res asset kits, contact <a className="text-midori-green underline font-bold hover:text-midori-dark" href="mailto:press@midorimatchaclub.com">press@midorimatchaclub.com</a>
                  </p>
                </div>
              </div>
            </div>
            
            {/* Right Column: Premium Inquiry Form Card */}
            <div className="lg:col-span-7 bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-border-subtle">
              <div className="mb-8">
                <span className="font-epilogue text-[0.6875rem] font-bold text-midori-green uppercase tracking-widest block mb-2">Direct Message</span>
                <h2 className="font-epilogue text-3xl font-bold text-content-primary mb-2">Send us a message</h2>
                <p className="font-jakarta text-base text-muted-text">Fill out the form below and our hospitality team will respond shortly.</p>
              </div>
              
              {!isSuccess ? (
                <form className="flex flex-col gap-6" onSubmit={handleFormSubmit}>
                  {/* Full Name */}
                  <div className="flex flex-col gap-2">
                    <label className="font-jakarta text-xs font-bold text-content-primary uppercase tracking-wider" htmlFor="fullName">Full Name</label>
                    <input className="w-full bg-surface-cream px-5 py-4 rounded-2xl font-jakarta text-base text-content-primary placeholder:text-muted-text/50 focus:outline-none focus:ring-2 focus:ring-midori-green/40 border border-border-subtle transition-all" id="fullName" placeholder="e.g. Kenji Takahashi" required type="text" />
                  </div>
                  
                  {/* Email Address */}
                  <div className="flex flex-col gap-2">
                    <label className="font-jakarta text-xs font-bold text-content-primary uppercase tracking-wider" htmlFor="email">Email Address</label>
                    <input className="w-full bg-surface-cream px-5 py-4 rounded-2xl font-jakarta text-base text-content-primary placeholder:text-muted-text/50 focus:outline-none focus:ring-2 focus:ring-midori-green/40 border border-border-subtle transition-all" id="email" placeholder="e.g. kenji@example.com" required type="email" />
                  </div>
                  
                  {/* Inquiry Type Selector */}
                  <div className="flex flex-col gap-2">
                    <label className="font-jakarta text-xs font-bold text-content-primary uppercase tracking-wider" htmlFor="inquiryType">Inquiry Type</label>
                    <div className="relative w-full">
                      <select className="w-full appearance-none bg-surface-cream px-5 py-4 pr-12 rounded-2xl font-jakarta text-base text-content-primary focus:outline-none focus:ring-2 focus:ring-midori-green/40 border border-border-subtle transition-all cursor-pointer" id="inquiryType">
                        <option value="General Inquiry">General Inquiry</option>
                        <option value="Collaboration">Collaboration</option>
                        <option value="Partnership">Partnership</option>
                        <option value="Feedback">Feedback</option>
                        <option value="Other">Other</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-muted-text">
                        <ChevronDown className="w-5 h-5" />
                      </div>
                    </div>
                  </div>
                  
                  {/* Subject */}
                  <div className="flex flex-col gap-2">
                    <label className="font-jakarta text-xs font-bold text-content-primary uppercase tracking-wider" htmlFor="subject">Subject</label>
                    <input className="w-full bg-surface-cream px-5 py-4 rounded-2xl font-jakarta text-base text-content-primary placeholder:text-muted-text/50 focus:outline-none focus:ring-2 focus:ring-midori-green/40 border border-border-subtle transition-all" id="subject" placeholder="What is this regarding?" required type="text" />
                  </div>
                  
                  {/* Message */}
                  <div className="flex flex-col gap-2">
                    <label className="font-jakarta text-xs font-bold text-content-primary uppercase tracking-wider" htmlFor="message">Message</label>
                    <textarea className="w-full bg-surface-cream p-5 rounded-2xl font-jakarta text-base text-content-primary placeholder:text-muted-text/50 focus:outline-none focus:ring-2 focus:ring-midori-green/40 border border-border-subtle transition-all resize-y" id="message" placeholder="Tell us more about how we can help or collaborate..." required rows={4}></textarea>
                  </div>
                  
                  {/* Privacy Note */}
                  <div className="flex items-center gap-2 text-muted-text font-jakarta text-sm">
                    <Lock className="w-4 h-4 text-midori-green" />
                    <span>We respect your privacy. Your information is kept strictly confidential.</span>
                  </div>
                  
                  {/* Submit Button */}
                  <div className="pt-2">
                    <button 
                      disabled={isSubmitting}
                      className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-midori-green text-white font-jakarta text-sm font-bold hover:bg-midori-dark transition-all shadow-sm cursor-pointer group disabled:opacity-70 disabled:cursor-not-allowed" 
                      type="submit"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>Sending note...</span>
                        </>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              ) : (
                /* Success Message */
                <div className="p-6 rounded-2xl bg-midori-light text-midori-dark font-jakarta text-sm font-bold flex items-start sm:items-center gap-3 border border-midori-green/20">
                  <CheckCircle className="w-5 h-5 shrink-0 mt-0.5 sm:mt-0" />
                  <span>Thank you for your message. Our hospitality team has received your note and will reach out shortly.</span>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* COLLABORATION FEATURE SECTION */}
        <section className="w-full px-4 md:px-8 lg:px-16 pb-20">
          <div className="bg-surface-cream rounded-3xl p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-sm border border-border-subtle">
            {/* Decorative Travertine Warmth Background Accent */}
            <div className="absolute -right-20 -bottom-20 w-96 h-96 rounded-full bg-midori-light/50 blur-3xl pointer-events-none"></div>
            
            <div className="relative z-10 max-w-3xl">
              <span className="font-epilogue text-[0.6875rem] font-bold tracking-[0.2em] text-midori-green uppercase block mb-3">
                Partnerships & Creative Ventures
              </span>
              <h2 className="font-epilogue text-4xl md:text-5xl font-bold text-content-primary mb-6 leading-tight">
                GOOD THINGS HAPPEN <span className="italic font-normal text-midori-green normal-case">when we connect.</span>
              </h2>
              <p className="font-jakarta text-lg text-muted-text mb-8 leading-relaxed">
                Have an idea for a collaboration, event, or creative project? Let's make something meaningful together. We partner with mindful brands, ceramists, architects, pastry chefs, and cultural curators.
              </p>
              
              {/* Feature Badges */}
              <div className="flex flex-wrap gap-3 mb-10">
                <span className="px-5 py-2 rounded-full bg-white border border-border-subtle text-content-primary font-jakarta text-sm font-bold shadow-sm">
                  Brand Pop-ups
                </span>
                <span className="px-5 py-2 rounded-full bg-white border border-border-subtle text-content-primary font-jakarta text-sm font-bold shadow-sm">
                  Artisanal Pairings
                </span>
                <span className="px-5 py-2 rounded-full bg-white border border-border-subtle text-content-primary font-jakarta text-sm font-bold shadow-sm">
                  Private Tea Ceremonies
                </span>
                <span className="px-5 py-2 rounded-full bg-white border border-border-subtle text-content-primary font-jakarta text-sm font-bold shadow-sm">
                  Corporate Wellness
                </span>
              </div>
              
              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4">
                <a className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-midori-green text-white font-jakarta text-sm font-bold hover:bg-midori-dark transition-colors shadow-sm" href="#contact-form" onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#fullName')?.scrollIntoView({ behavior: 'smooth' });
                }}>
                  Start a Conversation
                </a>
                <a className="inline-flex items-center gap-2 px-6 py-4 rounded-full bg-white border border-border-subtle text-content-primary hover:text-midori-green font-jakarta text-sm font-bold transition-colors shadow-sm" href="#">
                  <Download className="w-4 h-4" />
                  <span>Download Brand Deck (PDF)</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* VISIT OUR CAFÉ: COMPACT SANCTUARY HIGHLIGHT */}
        <section className="w-full px-4 md:px-8 lg:px-16 pb-20">
          <div className="bg-white rounded-3xl overflow-hidden shadow-sm grid grid-cols-1 lg:grid-cols-12 border border-border-subtle">
            {/* Sanctuary Image */}
            <div className="lg:col-span-6 relative min-h-[320px] lg:min-h-[460px] bg-surface-sand">
              <Image 
                className="object-cover" 
                alt="Modern Japanese tea salon interior" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAX0jsyz7Fcwh344SQVu042vnL4qT18RZaZcPytI4YKzyZP3F48nF06UUsKIAOYAT2lAff9Ui_aBek1iZhaH6AKk7fISz2KX2W8IV2Nfhz9m4SJGH76K1_NljYEb32A1aR3CWJ4nVBXP6FalZ2BI6YuckyopcKmRef3QDamU-Mpzar1gPWFhuKpz2Zte-INeWIeCbwSqIQTaO3cCH4GQuCnzSHgEsQ6L7N1ELsY1GK4S8-aIyyOjjKv"
                fill
                unoptimized
              />
              <div className="absolute top-4 left-4">
                <span className="px-4 py-2 rounded-full bg-white/90 backdrop-blur-md text-midori-dark font-epilogue text-[0.625rem] font-bold uppercase tracking-wider shadow-sm border border-white/50">
                  Flagship Sanctuary
                </span>
              </div>
            </div>
            
            {/* Sanctuary Details */}
            <div className="lg:col-span-6 p-8 sm:p-12 lg:p-14 flex flex-col justify-between">
              <div>
                <span className="font-epilogue text-[0.6875rem] font-bold tracking-[0.2em] text-midori-green uppercase block mb-3">Sanctuary Presence</span>
                <h3 className="font-epilogue text-3xl font-bold text-content-primary mb-6">VISIT OUR FLAGSHIP SANCTUARY</h3>
                
                <div className="space-y-6 mb-8">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-surface-cream flex items-center justify-center text-midori-green shrink-0 mt-0.5">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-jakarta text-lg text-content-primary font-bold">Jl. Senopati No. 45, Jakarta Selatan</p>
                      <p className="font-jakarta text-sm text-muted-text mt-1">Kebayoran Baru, DKI Jakarta 12190</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-surface-cream flex items-center justify-center text-midori-green shrink-0 mt-0.5">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-jakarta text-base text-content-primary font-bold">Monday – Sunday: 08:00 AM – 10:00 PM</p>
                      <p className="font-jakarta text-sm text-muted-text mt-1">Last beverage & wagashi order at 09:30 PM</p>
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t border-border-subtle">
                    <p className="font-jakarta text-xs font-bold text-muted-text uppercase tracking-wider mb-3">Space Highlights</p>
                    <div className="flex flex-wrap gap-2 text-content-primary font-jakarta text-sm font-bold">
                      <span className="px-4 py-1.5 rounded-full bg-surface-cream border border-border-subtle">Tatami Lounge</span>
                      <span className="px-4 py-1.5 rounded-full bg-surface-cream border border-border-subtle">Slow-Brew Chasen Bar</span>
                      <span className="px-4 py-1.5 rounded-full bg-surface-cream border border-border-subtle">Valet Parking</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-wrap items-center gap-4 pt-6 border-t border-border-subtle">
                <a className="inline-flex items-center gap-2 px-6 py-4 rounded-full bg-midori-green text-white font-jakarta text-sm font-bold hover:bg-midori-dark transition-colors shadow-sm" href="https://www.google.com/maps/dir/?api=1&destination=-6.234394,106.808027" target="_blank" rel="noopener noreferrer">
                  <Navigation className="w-4 h-4" />
                  <span>Get Directions</span>
                </a>
                <Link className="inline-flex items-center gap-2 font-jakarta text-sm text-content-primary hover:text-midori-green font-bold transition-colors group px-4 py-2" href="/locations">
                  <span>Explore All 3 Sanctuaries</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* SOCIAL CONNECTION: INSTAGRAM-STYLE EDITORIAL TILES */}
        <section className="w-full px-4 md:px-8 lg:px-16 pb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="font-epilogue text-[0.6875rem] font-bold tracking-[0.2em] text-midori-green uppercase block mb-2">Moments of Stillness</span>
            <h2 className="font-epilogue text-3xl font-bold text-content-primary mb-3">FOLLOW ALONG @MIDORIMATCHACLUB</h2>
            <p className="font-jakarta text-base text-muted-text">Daily dispatches, seasonal pairings, and glimpses inside our sanctuaries.</p>
          </div>
          
          {/* 4 Aesthetic Square Tiles */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {instagramFeed.map((post, index) => (
              <div 
                key={post.id} 
                className="group relative aspect-square rounded-2xl overflow-hidden bg-surface-sand shadow-sm cursor-pointer"
                onClick={() => openModal(index)}
              >
                <Image 
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out" 
                  alt={post.alt} 
                  src={post.image}
                  fill
                  unoptimized
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
                  <span className="font-epilogue text-[0.625rem] font-bold text-white uppercase tracking-widest">
                    {post.tag}
                  </span>
                </div>
              </div>
            ))}
          </div>
          
          {/* Center CTA Button */}
          <div className="flex justify-center">
            <a className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-surface-cream hover:bg-surface-sand border border-border-subtle text-content-primary font-jakarta text-sm font-bold transition-colors shadow-sm" href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <Camera className="w-5 h-5 text-midori-green" />
              <span>Follow @MIDORIMATCHACLUB</span>
            </a>
          </div>
        </section>

        {/* FINAL CTA BANNER */}
        <section className="w-full px-4 md:px-8 lg:px-16 pb-24">
          <div className="bg-midori-dark text-white rounded-3xl p-10 sm:p-14 lg:p-16 text-center relative overflow-hidden shadow-lg border border-midori-dark/50">
            {/* Ambient subtle glow */}
            <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-white/10 blur-3xl pointer-events-none"></div>
            
            <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
              <span className="font-epilogue text-[0.6875rem] font-bold uppercase tracking-[0.2em] text-midori-light mb-3">
                Taste the Craft
              </span>
              <h2 className="font-epilogue text-4xl md:text-5xl font-bold text-white mb-6 leading-tight uppercase">
                SEE YOU OVER A MATCHA.
              </h2>
              <p className="font-jakarta text-lg text-white/80 mb-10 max-w-lg leading-relaxed">
                Drop by our sanctuaries or explore our seasonal menu and single-cultivar Uji reserve.
              </p>
              
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link className="px-8 py-4 rounded-full bg-white text-midori-dark hover:bg-surface-cream font-jakarta text-sm font-bold transition-colors shadow-sm" href="/menu">
                  Explore Our Menu
                </Link>
                <Link className="px-8 py-4 rounded-full bg-transparent hover:bg-white/10 text-white border border-white/40 font-jakarta text-sm font-bold transition-colors" href="/locations">
                  Find a Teahouse
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* IMAGE CAROUSEL OVERLAY */}
        <div 
          className={`fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm transition-opacity duration-300 ease-out ${isModalOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`} 
          onClick={closeModal}
        >
          {/* Close Button */}
          <button 
            className="absolute top-6 right-6 md:top-8 md:right-8 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors z-[110]"
            onClick={(e) => { e.stopPropagation(); closeModal(); }}
          >
            <X className="w-6 h-6" />
          </button>

          {/* Previous Button */}
          <button 
            className="absolute left-4 md:left-8 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors z-[110]"
            onClick={prevImage}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next Button */}
          <button 
            className="absolute right-4 md:right-8 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors z-[110]"
            onClick={nextImage}
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Main Image View */}
          <div 
            className={`relative w-[90%] max-w-4xl max-h-[85vh] flex flex-col items-center transition-all duration-500 ease-out transform ${isModalOpen ? 'scale-100 translate-y-0 opacity-100' : 'scale-95 translate-y-8 opacity-0'}`} 
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden bg-black shadow-2xl">
              <Image 
                src={instagramFeed[selectedImageIndex].image}
                alt={instagramFeed[selectedImageIndex].alt}
                fill
                unoptimized
                className="object-contain"
              />
            </div>
            <div className="mt-6 text-center">
              <span className="inline-block px-4 py-2 rounded-full bg-white/10 text-white font-epilogue text-[0.625rem] font-bold uppercase tracking-widest backdrop-blur-sm">
                {instagramFeed[selectedImageIndex].tag}
              </span>
            </div>
            <div className="mt-4 flex gap-2">
              {instagramFeed.map((_, idx) => (
                <div 
                  key={idx} 
                  className={`w-2 h-2 rounded-full transition-colors cursor-pointer ${idx === selectedImageIndex ? 'bg-white' : 'bg-white/30'}`}
                  onClick={() => setSelectedImageIndex(idx)}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </PageWrapper>
      <Footer />
    </>
  );
}
