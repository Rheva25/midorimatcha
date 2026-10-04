"use client";

import React, { useState, useEffect } from "react";
import { 
  X, QrCode, Copy, ShieldCheck, 
  CreditCard, Loader2, Info, Lock, 
  Smartphone, Monitor, Building, Zap, 
  ArrowLeftRight
} from "lucide-react";
import { Button } from "./Button";
import { toast } from "sonner";
import Image from "next/image";
import { QRCodeSVG } from "qrcode.react";

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  method: "qris" | "va" | "card";
  amount: number;
  fulfillment: "pickup" | "delivery";
  sanctuary: string;
  onSuccess: () => void;
}

export function PaymentModal({ isOpen, onClose, method, amount, fulfillment, sanctuary, onSuccess }: PaymentModalProps) {
  const [isProcessing, setIsProcessing] = useState(false);
  const [timeLeft, setTimeLeft] = useState(900); // 15 minutes
  const [selectedBank, setSelectedBank] = useState<"bca" | "mandiri" | "bni">("bca");
  const [showBreakdown, setShowBreakdown] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      setIsProcessing(false);
      setTimeLeft(900);
      setShowBreakdown(false);
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, [isOpen]);

  if (!isOpen) return null;

  const formatIDR = (value: number) => {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(Math.floor(value));
  };

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const handleSimulatePayment = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      toast.success("Payment successful! Preparing your order.");
      onSuccess();
    }, 2000);
  };

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    toast.success(`${label} copied to clipboard!`);
  };

  const vaNumbers = {
    bca: "80777 0812 9482 1042",
    mandiri: "89012 0812 9482 1042",
    bni: "82140 0812 9482 1042"
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-[#142016]/65 backdrop-blur-md overflow-y-auto">
      {/* Modal Card Dialog */}
      <div 
        className="relative w-full max-w-2xl bg-surface-cream rounded-2xl shadow-2xl overflow-hidden my-auto animate-in fade-in zoom-in-95 duration-200"
        role="dialog"
      >
        {/* Top Subtle Decorative Matcha Tint Bar */}
        <div className="h-2 w-full bg-gradient-to-r from-midori-dark via-midori-green to-[#87A86F]"></div>

        {/* Modal Header */}
        <div className="px-6 sm:px-8 pt-8 pb-6 flex items-start justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-midori-light flex items-center justify-center text-midori-dark flex-shrink-0 shadow-sm border border-border-subtle">
              {method === "qris" && <QrCode className="w-6 h-6" />}
              {method === "va" && <Building className="w-6 h-6" />}
              {method === "card" && <CreditCard className="w-6 h-6" />}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="font-epilogue text-xl sm:text-2xl font-bold text-content-primary tracking-tight">
                  {method === "qris" && "Pembayaran QRIS Instant"}
                  {method === "va" && "Bank Transfer (Virtual Account)"}
                  {method === "card" && "Kartu Kredit / Debit"}
                </h2>
                <span className="inline-flex items-center px-2 py-0.5 rounded-full font-epilogue text-[0.625rem] bg-midori-light text-midori-dark uppercase font-bold tracking-widest">LIVE</span>
              </div>
              <p className="font-jakarta text-sm text-muted-text flex items-center gap-1.5 mt-1 font-semibold">
                <span>Midori Matcha Club</span>
                <span>•</span>
                <span className="font-mono font-bold text-midori-green">Order #MMC-8291</span>
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            {/* Pulsating Countdown Timer Badge */}
            <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-surface-sand text-content-primary shadow-sm border border-border-subtle">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-midori-green opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-midori-green"></span>
              </span>
              <span className="font-jakarta text-xs font-bold tracking-wide">
                Bayar dalam <span className="font-mono text-midori-green ml-1">{formatTime(timeLeft)}</span>
              </span>
            </div>
            {/* Close Modal Trigger */}
            <button 
              onClick={onClose}
              disabled={isProcessing}
              className="w-10 h-10 rounded-full bg-surface-sand hover:bg-white transition-colors flex items-center justify-center text-muted-text hover:text-content-primary border border-transparent hover:border-border-subtle disabled:opacity-50"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Main Body Container */}
        <div className="px-6 sm:px-8 pb-8 space-y-6">
          
          {/* Order & Amount Highlight Card */}
          <div className="bg-white rounded-2xl p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-sm border border-border-subtle">
            <div>
              <span className="font-epilogue text-[0.6875rem] text-muted-text uppercase font-bold tracking-widest block mb-1">Total Tagihan Pembayaran</span>
              <div className="flex items-baseline gap-2">
                <span className="font-epilogue text-3xl text-midori-dark font-bold tracking-tight">{formatIDR(amount)}</span>
                <span className="font-epilogue text-[0.625rem] text-midori-dark bg-midori-light px-2 py-0.5 rounded-full font-bold uppercase tracking-widest">Bebas Biaya Admin</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-surface-sand text-muted-text font-jakarta text-xs font-bold border border-border-subtle">
                <Building className="w-4 h-4 text-midori-green" />
                <span>{fulfillment === "delivery" ? "Express Delivery" : `${sanctuary.split(',')[0]} Pickup`}</span>
              </div>
              <button 
                onClick={() => setShowBreakdown(!showBreakdown)}
                className="w-8 h-8 rounded-full bg-surface-sand hover:bg-white transition-colors flex items-center justify-center text-muted-text border border-transparent hover:border-border-subtle" 
                title="Lihat rincian tagihan"
              >
                <Info className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Collapsible Quick Breakdown */}
          {showBreakdown && (
            <div className="bg-surface-sand rounded-2xl p-5 text-sm font-jakarta text-muted-text space-y-2 border border-border-subtle animate-in slide-in-from-top-2">
              <div className="flex justify-between"><span>Subtotal Item (Keranjang)</span><span className="text-content-primary font-bold">{formatIDR(amount - 24300 - 5000 + 5390)}</span></div>
              <div className="flex justify-between"><span>Kemasan Ramah Lingkungan</span><span className="text-content-primary font-bold">Rp 5.000</span></div>
              <div className="flex justify-between"><span>Pajak Restoran (PB1 10%)</span><span className="text-content-primary font-bold">Rp 24.300</span></div>
              <div className="flex justify-between text-midori-green font-bold"><span>Apresiasi Komunitas Matcha</span><span>-Rp 5.390</span></div>
            </div>
          )}

          {/* QRIS Specific Content */}
          {method === "qris" && (
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 animate-in fade-in slide-in-from-right-4 duration-300">
              <div className="md:col-span-6 bg-white rounded-2xl p-6 flex flex-col items-center justify-center shadow-sm border border-border-subtle">
                <div className="w-full flex items-center justify-between pb-4 mb-4 border-b border-border-subtle">
                  <div className="flex items-center gap-2">
                    <span className="font-epilogue text-xl font-bold tracking-tighter text-content-primary">QRIS</span>
                    <span className="font-epilogue text-[0.625rem] uppercase font-bold text-red-600 bg-red-100 px-1.5 py-0.5 rounded">GPN</span>
                  </div>
                  <span className="font-epilogue text-[0.625rem] tracking-widest text-muted-text uppercase font-bold">Pembayaran Nasional</span>
                </div>
                
                {/* QR Code Graphic */}
                <div className="relative p-4 bg-white rounded-xl shadow-inner border border-border-subtle flex flex-col items-center">
                  <div className="w-48 h-48 bg-white flex items-center justify-center p-2 rounded-lg">
                    <QRCodeSVG 
                      value={`https://midorimatchaclub.com/pay/qris?order=MMC-8291&amount=${amount}`}
                      size={180}
                      bgColor={"#ffffff"}
                      fgColor={"#2A3F1F"} // midori-dark
                      level={"H"} // high error correction to allow center icon
                      imageSettings={{
                        src: "/images/logo.png",
                        x: undefined,
                        y: undefined,
                        height: 36,
                        width: 36,
                        excavate: true, // clear background behind logo
                      }}
                    />
                  </div>
                </div>

                <p className="font-jakarta text-xs font-bold text-content-primary uppercase tracking-wider mt-4">MIDORI MATCHA CLUB INDONESIA</p>
                <p className="font-mono text-[0.6875rem] text-muted-text font-semibold mt-1">NMID : ID1024883921049 • A01</p>
              </div>

              <div className="md:col-span-6 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <span className="font-epilogue text-[0.6875rem] uppercase text-midori-green tracking-widest font-bold block">Cara Pembayaran Mudah</span>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-midori-light text-midori-dark font-epilogue text-[0.625rem] font-bold flex items-center justify-center flex-shrink-0 mt-0.5">1</div>
                      <p className="font-jakarta text-sm text-muted-text leading-snug">
                        Buka aplikasi <span className="text-content-primary font-bold">e-wallet</span> atau <span className="text-content-primary font-bold">mobile banking</span> favoritmu.
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-midori-light text-midori-dark font-epilogue text-[0.625rem] font-bold flex items-center justify-center flex-shrink-0 mt-0.5">2</div>
                      <p className="font-jakarta text-sm text-muted-text leading-snug">
                        Scan kode QRIS di samping dan pastikan nama <span className="text-content-primary font-bold">MIDORI MATCHA</span> & nominal <span className="text-midori-green font-bold">{formatIDR(amount)}</span> sesuai.
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-midori-light text-midori-dark font-epilogue text-[0.625rem] font-bold flex items-center justify-center flex-shrink-0 mt-0.5">3</div>
                      <p className="font-jakarta text-sm text-muted-text leading-snug">
                        Masukkan PIN transaksi. Pembayaran akan terverifikasi secara <span className="text-content-primary font-bold">otomatis instan</span>.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-surface-sand rounded-xl p-4 space-y-2 border border-border-subtle">
                  <span className="font-epilogue text-[0.625rem] text-muted-text uppercase tracking-widest font-bold block">Mendukung Semua Dompet & Bank</span>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {['GoPay', 'OVO', 'DANA', 'BCA Mobile', 'Livin', 'ShopeePay'].map(brand => (
                      <span key={brand} className="bg-white px-2.5 py-1 rounded-md text-[0.625rem] font-bold text-content-primary border border-border-subtle shadow-sm uppercase tracking-wider">{brand}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* VA Specific Content */}
          {method === "va" && (
            <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
              <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-sm border border-border-subtle space-y-6">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-epilogue text-[0.6875rem] uppercase tracking-widest text-muted-text font-bold">Pilih Institusi Perbankan</span>
                    <span className="font-epilogue text-[0.625rem] text-midori-green font-bold uppercase tracking-widest">24 Jam Verifikasi</span>
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    {['bca', 'mandiri', 'bni'].map((bank) => (
                      <button 
                        key={bank}
                        onClick={() => setSelectedBank(bank as any)}
                        className={`p-3 rounded-xl border flex flex-col items-center justify-center gap-1 transition-all ${
                          selectedBank === bank 
                            ? 'bg-midori-light border-midori-green text-midori-dark' 
                            : 'bg-surface-sand border-transparent hover:bg-surface-cream text-muted-text'
                        }`}
                      >
                        <span className={`font-epilogue text-lg font-bold tracking-tighter uppercase ${selectedBank === bank ? 'text-midori-dark' : 'text-content-primary'}`}>{bank}</span>
                        <span className="font-epilogue text-[0.625rem] uppercase font-bold tracking-widest opacity-80">Virtual Acc</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="bg-surface-sand rounded-xl p-5 flex flex-col md:flex-row md:items-center justify-between gap-4 border border-border-subtle">
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-midori-green animate-ping"></span>
                      <span className="font-epilogue text-[0.6875rem] uppercase tracking-widest text-midori-green font-bold">{selectedBank.toUpperCase()} Virtual Account</span>
                    </div>
                    <div className="font-mono text-2xl sm:text-3xl font-bold tracking-widest text-content-primary select-all">
                      {vaNumbers[selectedBank]}
                    </div>
                    <p className="font-jakarta text-sm text-muted-text">Atas Nama: <span className="font-bold text-content-primary uppercase">MIDORI MATCHA - {fulfillment === "delivery" ? "ONLINE" : sanctuary.split(',')[0].toUpperCase()}</span></p>
                  </div>
                  <button 
                    onClick={() => copyToClipboard(vaNumbers[selectedBank], 'VA Number')}
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-midori-green hover:bg-midori-dark text-white transition-all font-jakarta text-sm font-bold shadow-md flex-shrink-0"
                  >
                    <Copy className="w-4 h-4" />
                    Salin Nomor
                  </button>
                </div>

                <div className="flex items-center gap-3 p-4 rounded-xl bg-midori-light/50 border border-midori-light text-midori-dark">
                  <ShieldCheck className="w-6 h-6 flex-shrink-0" />
                  <p className="font-jakarta text-xs font-semibold leading-relaxed">
                    <span className="font-bold">Otomatis terverifikasi:</span> Pesanan langsung diracik tim teahouse tanpa perlu unggah bukti transfer manual.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Credit Card Content */}
          {method === "card" && (
            <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-border-subtle space-y-5">
                <div className="space-y-1.5">
                  <label className="font-epilogue text-[0.6875rem] uppercase font-bold text-muted-text tracking-widest">Card Number</label>
                  <div className="relative">
                    <input type="text" placeholder="0000 0000 0000 0000" className="w-full pl-10 pr-4 py-3.5 bg-surface-sand border border-border-subtle rounded-xl font-mono text-sm focus:outline-none focus:ring-2 focus:ring-midori-green/50 focus:border-midori-green transition-all" />
                    <CreditCard className="w-5 h-5 text-muted-text absolute left-3 top-1/2 -translate-y-1/2" />
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="font-epilogue text-[0.6875rem] uppercase font-bold text-muted-text tracking-widest">Expiry Date</label>
                    <input type="text" placeholder="MM/YY" className="w-full px-4 py-3.5 bg-surface-sand border border-border-subtle rounded-xl font-mono text-sm focus:outline-none focus:ring-2 focus:ring-midori-green/50 focus:border-midori-green transition-all" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="font-epilogue text-[0.6875rem] uppercase font-bold text-muted-text tracking-widest">CVV</label>
                    <input type="password" placeholder="•••" className="w-full px-4 py-3.5 bg-surface-sand border border-border-subtle rounded-xl font-mono text-sm focus:outline-none focus:ring-2 focus:ring-midori-green/50 focus:border-midori-green transition-all" />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="font-epilogue text-[0.6875rem] uppercase font-bold text-muted-text tracking-widest">Cardholder Name</label>
                  <input type="text" placeholder="Name as it appears on card" className="w-full px-4 py-3.5 bg-surface-sand border border-border-subtle rounded-xl font-jakarta text-sm focus:outline-none focus:ring-2 focus:ring-midori-green/50 focus:border-midori-green transition-all uppercase" />
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer Action Bar */}
        <div className="px-6 sm:px-8 py-5 bg-white border-t border-border-subtle flex flex-col sm:flex-row items-center justify-between gap-4">
          <button 
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-3 rounded-full bg-surface-sand hover:bg-surface-cream transition-colors text-content-primary font-jakarta text-sm font-bold flex items-center justify-center gap-2 border border-border-subtle"
          >
            <ArrowLeftRight className="w-4 h-4" />
            <span>Ganti Metode Pembayaran</span>
          </button>
          
          <Button 
            variant="primary" 
            className="w-full sm:w-auto bg-midori-green hover:bg-midori-dark text-white px-8 py-3 rounded-full font-epilogue font-bold flex items-center justify-center gap-2 shadow-md transition-all disabled:opacity-50"
            onClick={handleSimulatePayment}
            disabled={isProcessing || timeLeft === 0}
          >
            {isProcessing ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Memverifikasi...
              </>
            ) : (
              <>
                <Lock className="w-4 h-4" />
                Cek Status Pembayaran
              </>
            )}
          </Button>
        </div>

        {/* Trust Note Sub-Footer */}
        <div className="px-6 sm:px-8 py-2.5 bg-surface-sand text-center border-t border-border-subtle">
          <p className="font-jakarta text-[0.6875rem] font-semibold text-muted-text flex items-center justify-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-midori-green" />
            Enkripsi 256-bit standar Bank Indonesia. Dana Anda terlindungi secara penuh.
          </p>
        </div>
      </div>
    </div>
  );
}
