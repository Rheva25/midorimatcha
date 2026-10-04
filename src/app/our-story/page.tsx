import React from "react";
import Image from "next/image";
import Link from "next/link";
import { PageWrapper } from "@/components/layout/PageWrapper";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Sun, Hourglass, Waves, Coffee, CheckCircle2, Sprout, Handshake, Recycle, MapPin, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Our Story - Midori Matcha Club",
  description: "Rooted in Uji. Slow-Crafted for Mindful Urban Living. Discover the origins of our ceremonial matcha.",
};

export default function OurStoryPage() {
  return (
    <>
      <Navbar />
      <PageWrapper>
        {/* Top Breadcrumb & Editorial Header */}
        <section className="w-full px-4 md:px-8 lg:px-16 pt-8 pb-16">
        <div className="max-w-6xl mx-auto flex flex-col items-start">
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-muted-text font-jakarta text-xs mb-6">
            <Link href="/" className="hover:text-midori-green transition-colors">Home</Link>
            <span className="text-border-subtle">/</span>
            <span className="text-content-primary font-bold">Our Story</span>
          </nav>
          
          {/* Badge & Overline */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-midori-light text-midori-dark font-epilogue text-[0.6875rem] uppercase font-bold tracking-widest mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-midori-green inline-block"></span>
            The Midori Chronicles • Est. 2023
          </div>
          
          {/* Grand Editorial Title */}
          <h1 className="font-epilogue text-4xl md:text-6xl text-content-primary tracking-tight max-w-4xl leading-[1.05] mb-8 font-bold">
            Rooted in Uji.<br />
            <span className="text-midori-green italic font-medium">Slow-Crafted</span> for Mindful Urban Living.
          </h1>
          
          {/* Indonesian Narrative Manifesto */}
          <p className="font-jakarta text-lg md:text-xl text-muted-text max-w-3xl leading-relaxed">
            Di tengah hiruk-pikuk ritme urban modern, Midori Matcha Club lahir dari sebuah kerinduan mendalam akan ketenangan ritual minum teh Jepang kuno (<em className="italic font-bold text-content-primary">Chanoyu</em>)—yang kami terjemahkan kembali ke dalam ruang santai kontemporer untuk masyarakat Indonesia.
          </p>
        </div>
      </section>

      {/* Hero Story Feature (Split Asymmetric Grid) */}
      <section className="w-full px-4 md:px-8 lg:px-16 py-16 bg-surface-cream">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Visual Hero */}
          <div className="lg:col-span-7 relative group">
            <div className="relative overflow-hidden rounded-2xl bg-surface-sand shadow-xl">
              <Image 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDDnHE-FL2FZkfTb5abZGu0bEUYi-7kKlZXd3H57KXBXwKS15fw-StlQby4W_LwGifBsyCBmTjqfMyWnXuJfqJiF8i7BLV7MJdYF4lzNbOE9DWhRQVplEeFffYwxOaJk4r_d-5VAJp4_X8KgB4BFLSMbzpGpXvIcCZrqncC--cmKvdERvLIzEY7yCxymGuTegq55cyBU2JJbgMUFoQZo_zF1WRAkCXEea9KnVEKzbgAZ5W9qGI-OZKu" 
                alt="Uji Kyoto tea plantation"
                width={800}
                height={560}
                unoptimized
                className="w-full h-[440px] md:h-[560px] object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
              
              {/* Floating Editorial Pill Note */}
              <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-4 rounded-xl bg-white/95 backdrop-blur-md text-content-primary shadow-md border border-border-subtle">
                <div className="flex items-center gap-2">
                  <MapPin className="text-midori-green w-5 h-5" />
                  <span className="font-epilogue text-[0.625rem] uppercase font-bold tracking-widest text-muted-text">Uji River Basin, Kyoto Prefecture</span>
                </div>
                <span className="font-jakarta text-xs text-content-primary font-bold">1st Harvest Single Cultivar Okumidori</span>
              </div>
            </div>
          </div>
          
          {/* Right Narrative Content */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-8">
            <div>
              <span className="font-epilogue text-[0.625rem] uppercase text-midori-green tracking-widest font-bold block mb-2">Asal Usul & Hubungan</span>
              <h2 className="font-epilogue text-3xl text-content-primary tracking-tight font-bold mb-3">
                Perjalanan dari Perbukitan Uji
              </h2>
              <p className="font-jakarta text-base text-muted-text leading-relaxed">
                Kisah kami berawal dari persahabatan langsung (<em>direct-trade</em>) dengan keluarga petani teh generasi ke-6 di lembah Wazuka dan Uji, Kyoto. Wilayah dengan mikroklimat berkabut tebal dan tanah kaya mineral vulkanik yang telah menyuburkan perkebunan teh terbaik dunia sejak era Kamakura.
              </p>
            </div>
            
            {/* Core Tenets List */}
            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-4 p-4 rounded-xl bg-white shadow-sm border border-border-subtle">
                <div className="w-10 h-10 rounded-full bg-midori-light text-midori-dark flex items-center justify-center shrink-0 font-epilogue font-bold text-lg">1</div>
                <div>
                  <h3 className="font-jakarta text-base font-bold text-content-primary mb-1">100% Ceremonial First Harvest</h3>
                  <p className="font-jakarta text-sm text-muted-text leading-relaxed">
                    Hanya menggunakan daun pucuk muda (<em className="italic">Ichibancha</em>) yang dipetik tangan saat musim semi, sarat akan klorofil dan rasa umami.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 rounded-xl bg-white shadow-sm border border-border-subtle">
                <div className="w-10 h-10 rounded-full bg-midori-light text-midori-dark flex items-center justify-center shrink-0 font-epilogue font-bold text-lg">2</div>
                <div>
                  <h3 className="font-jakarta text-base font-bold text-content-primary mb-1">Stone-Ground Precision</h3>
                  <p className="font-jakarta text-sm text-muted-text leading-relaxed">
                    Digiling perlahan dengan batu granit tradisional dengan kecepatan terkontrol sehingga nutrisi tidak teroksidasi, menghasilkan kehalusan 5-10 mikron.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 rounded-xl bg-white shadow-sm border border-border-subtle">
                <div className="w-10 h-10 rounded-full bg-midori-light text-midori-dark flex items-center justify-center shrink-0 font-epilogue font-bold text-lg">3</div>
                <div>
                  <h3 className="font-jakarta text-base font-bold text-content-primary mb-1">Pure Botanical Integrity</h3>
                  <p className="font-jakarta text-sm text-muted-text leading-relaxed">
                    Nol pengawet, bebas pemanis buatan, tanpa pewarna sintesis maupun campuran pengisi (cornstarch). Murni botani teh hijau murni.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Craft & Ritual Breakdown */}
      <section className="w-full px-4 md:px-8 lg:px-16 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="font-epilogue text-[0.625rem] font-bold uppercase text-midori-green tracking-widest block mb-2">The Discipline</span>
              <h2 className="font-epilogue text-3xl md:text-4xl font-bold text-content-primary tracking-tight">
                Empat Tahapan Ritual Seduh Midori
              </h2>
            </div>
            <p className="font-jakarta text-base text-muted-text max-w-md leading-relaxed">
              Dari perkebunan hingga mangkuk <em className="italic font-semibold">Chawan</em> Anda, setiap tahapan dijalankan dengan ketelitian meditatif tanpa jalan pintas industri.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Visual Imagery */}
            <div className="lg:col-span-5 relative">
              <div className="relative overflow-hidden rounded-2xl shadow-lg border border-border-subtle">
                <Image 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD0rZQ_K80pZSw18hqHDO29E1cZf2y8VxWE4s3vIrl-Fjw7_IY46YBL9-MWK_erCAePqN6wLIUjx9KmrLIFtfP7Dcvu8bWKlOxF322diUHwoz-UHPZoXUm_SgH6CN0tvMUXWg0le7Ke05bfnP0P0YFnhphY7zJWSwK7oT2JrIj-bgdmjAbAHlHuUkxPU-bfyP63RiLE8JyYId1UZorq_TaZrtU2uFItIEIHpxkNenZ4h44kKwEIrpdt"
                  alt="Sifting matcha"
                  width={600}
                  height={480}
                  unoptimized
                  className="w-full h-[480px] object-cover"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-xl shadow-md border border-border-subtle">
                  <span className="font-epilogue text-[0.625rem] uppercase font-bold text-midori-green tracking-widest block mb-1">Chasen Aeration</span>
                  <p className="font-jakarta text-xs font-semibold text-content-primary leading-relaxed">Penyaringan manual dengan kawat perak mikro sebelum pembuihan untuk tekstur lembut tanpa gumpalan.</p>
                </div>
              </div>
            </div>

            {/* 4 Step Cards */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-6 rounded-2xl bg-surface-sand border border-border-subtle shadow-sm flex flex-col justify-between h-full hover:bg-white transition-colors">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-epilogue text-[0.625rem] font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-midori-light text-midori-dark">Tahap 01</span>
                    <Sun className="w-5 h-5 text-midori-green" />
                  </div>
                  <h3 className="font-jakarta text-base font-bold text-content-primary mb-2">The Shade & Harvest</h3>
                  <p className="font-jakarta text-sm text-muted-text leading-relaxed">
                    Penaungan kanopi bambu (<em className="italic">Honzu</em>) selama 25 hari sebelum panen. Menghalangi 90% sinar matahari guna memaksimalkan sintesis asam amino L-Theanine.
                  </p>
                </div>
                <span className="font-epilogue text-[0.625rem] font-bold text-midori-green uppercase tracking-widest mt-6 block">25 Hari Shading</span>
              </div>

              <div className="p-6 rounded-2xl bg-surface-sand border border-border-subtle shadow-sm flex flex-col justify-between h-full hover:bg-white transition-colors">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-epilogue text-[0.625rem] font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-midori-light text-midori-dark">Tahap 02</span>
                    <Hourglass className="w-5 h-5 text-midori-green" />
                  </div>
                  <h3 className="font-jakarta text-base font-bold text-content-primary mb-2">Granite Stone Milling</h3>
                  <p className="font-jakarta text-sm text-muted-text leading-relaxed">
                    Satu pasang batu granit kuno berputar lambat membutuhkan waktu 60 menit penuh hanya untuk menghasilkan 35 gram bubuk <em className="italic">Tencha</em> murni.
                  </p>
                </div>
                <span className="font-epilogue text-[0.625rem] font-bold text-midori-green uppercase tracking-widest mt-6 block">35g / Jam Hasil Giling</span>
              </div>

              <div className="p-6 rounded-2xl bg-surface-sand border border-border-subtle shadow-sm flex flex-col justify-between h-full hover:bg-white transition-colors">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-epilogue text-[0.625rem] font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-midori-light text-midori-dark">Tahap 03</span>
                    <Waves className="w-5 h-5 text-midori-green" />
                  </div>
                  <h3 className="font-jakarta text-base font-bold text-content-primary mb-2">The Chasen Aeration</h3>
                  <p className="font-jakarta text-sm text-muted-text leading-relaxed">
                    Whisking ritmis huruf 'W' menggunakan kuas bambu 100-prong pada suhu air optimal 75°C–80°C guna membentuk mikrobusa beludru (<em className="italic">crema</em>).
                  </p>
                </div>
                <span className="font-epilogue text-[0.625rem] font-bold text-midori-green uppercase tracking-widest mt-6 block">Suhu Presisi 78°C</span>
              </div>

              <div className="p-6 rounded-2xl bg-surface-sand border border-border-subtle shadow-sm flex flex-col justify-between h-full hover:bg-white transition-colors">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-epilogue text-[0.625rem] font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-midori-light text-midori-dark">Tahap 04</span>
                    <Coffee className="w-5 h-5 text-midori-green" />
                  </div>
                  <h3 className="font-jakarta text-base font-bold text-content-primary mb-2">Modern Pairing</h3>
                  <p className="font-jakarta text-sm text-muted-text leading-relaxed">
                    Penyajian murni ceremonial usucha atau perpaduan lembut dengan artisan oat milk bersertifikasi, compote buah musiman lokal, dan French-Japanese confectionery.
                  </p>
                </div>
                <span className="font-epilogue text-[0.625rem] font-bold text-midori-green uppercase tracking-widest mt-6 block">Harmoni Rasa Segar</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sensory Comparison Matrix */}
      <section className="w-full px-4 md:px-8 lg:px-16 py-20 bg-white border-y border-border-subtle">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="font-epilogue text-[0.625rem] font-bold uppercase text-midori-green tracking-widest block mb-2">Standard of Excellence</span>
            <h2 className="font-epilogue text-3xl md:text-4xl font-bold text-content-primary tracking-tight mb-3">
              Kemurnian yang Dapat Anda Rasakan
            </h2>
            <p className="font-jakarta text-base text-muted-text">
              Perbandingan objektif antara Midori Ceremonial Grade dengan bubuk teh hijau komersial massal.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl shadow-sm border border-border-subtle">
            <table className="w-full text-left bg-white">
              <thead>
                <tr className="bg-surface-cream text-content-primary font-epilogue text-[0.6875rem] font-bold uppercase tracking-widest border-b border-border-subtle">
                  <th className="py-4 px-6 min-w-[150px]">Indikator Kualitas</th>
                  <th className="py-4 px-6 bg-midori-light text-midori-dark min-w-[250px]">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4" />
                      Midori Ceremonial Uji Grade
                    </div>
                  </th>
                  <th className="py-4 px-6 text-muted-text min-w-[250px]">Matcha Komersial / Culinary Grade</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border-subtle font-jakarta text-sm">
                <tr className="hover:bg-surface-sand/50 transition-colors">
                  <td className="py-5 px-6 font-bold text-content-primary">Rona Warna (Color)</td>
                  <td className="py-5 px-6 bg-midori-light/10 text-content-primary font-semibold border-x border-border-subtle">
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-midori-green inline-block flex-shrink-0"></span>
                      Hijau zamrud cerah (vibrant electric jade), bukti tingginya klorofil murni dari proses shading.
                    </div>
                  </td>
                  <td className="py-5 px-6 text-muted-text">Hijau kusam zaitun kekuningan (dull olive), pertanda daun tua dan oksidasi termal.</td>
                </tr>
                <tr className="hover:bg-surface-sand/50 transition-colors">
                  <td className="py-5 px-6 font-bold text-content-primary">Profil Rasa (Flavor)</td>
                  <td className="py-5 px-6 bg-midori-light/10 text-content-primary font-semibold border-x border-border-subtle">
                    Umami manis alami yang bulat, lembut di langit-langit lidah (creamy finish) tanpa kepahitan menusuk.
                  </td>
                  <td className="py-5 px-6 text-muted-text">Rasa pahit kesat (astringent) pekat yang tajam, seringkali membutuhkan sirup/gula berlebih.</td>
                </tr>
                <tr className="hover:bg-surface-sand/50 transition-colors">
                  <td className="py-5 px-6 font-bold text-content-primary">Kandungan L-Theanine</td>
                  <td className="py-5 px-6 bg-midori-light/10 text-content-primary font-semibold border-x border-border-subtle">
                    Sangat tinggi. Memberikan rasa tenang yang waspada (<em className="italic">Zen focus</em>) tanpa lonjakan cemas dan bebas caffeine crash.
                  </td>
                  <td className="py-5 px-6 text-muted-text">Rendah. Dominan kafein mentah yang dapat menyebabkan debar jantung tidak stabil.</td>
                </tr>
                <tr className="hover:bg-surface-sand/50 transition-colors">
                  <td className="py-5 px-6 font-bold text-content-primary">Asal Usul & Terroir</td>
                  <td className="py-5 px-6 bg-midori-light/10 text-content-primary font-semibold border-x border-border-subtle">
                    100% Single-origin Wazuka & Uji, Kyoto Prefecture. Dipetik saat panen pertama musim semi (Ichibancha).
                  </td>
                  <td className="py-5 px-6 text-muted-text">Campuran panen ke-3/ke-4 dari perkebunan industri campuran tanpa keterlacakan jelas.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Visual Editorial Intermezzo */}
      <section className="w-full px-4 md:px-8 lg:px-16 py-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-7 overflow-hidden rounded-2xl shadow-sm border border-border-subtle">
            <Image 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA0T1aIt2A9HHKkg9f_4uXAmyKoBJAh2AN7l-96ChSaCnpllx-fRArDBQ-FIS8ydXVwBbfvAhP_CGZCOdna2Un7qEuSz6vaBwmqx-IG_U3DsoVag1EJNSL7xEQt7YTDESli5VItO1c7Wlh79HiI1k_UPoXctKUTg4w7vW6FDtPWRVPL15ql786LviTiwwJkJ5PvNOHReRdubnoLuklCk42rLkzsMdQ-VaGLn9F8YV5gCHRVgnNK_2FS"
              alt="Iced matcha lattes"
              width={700}
              height={440}
              unoptimized
              className="w-full h-[380px] md:h-[440px] object-cover"
            />
          </div>
          <div className="md:col-span-5 p-8 md:p-10 bg-surface-cream rounded-2xl shadow-sm border border-border-subtle space-y-4">
            <span className="font-epilogue text-[0.625rem] font-bold uppercase text-midori-green tracking-widest block">The Modern Experience</span>
            <h3 className="font-epilogue text-2xl md:text-3xl font-bold text-content-primary tracking-tight">
              Harmonisasi Tradisi dan Kesegaran Masa Kini
            </h3>
            <p className="font-jakarta text-base text-muted-text leading-relaxed">
              Kami memadukan ritual murni seduh kuas bambu dengan teknik barista kontemporer. Menghadirkan sajian dingin yang menyegarkan iklim tropis Indonesia tanpa mengorbankan sakralitas rasa.
            </p>
            <div className="pt-4 flex items-center gap-6">
              <div className="flex flex-col">
                <span className="font-epilogue text-2xl font-bold text-midori-green">100%</span>
                <span className="font-jakarta text-xs font-bold text-muted-text">Plant-Based Friendly</span>
              </div>
              <div className="w-px h-8 bg-border-subtle"></div>
              <div className="flex flex-col">
                <span className="font-epilogue text-2xl font-bold text-midori-green">0g</span>
                <span className="font-jakarta text-xs font-bold text-muted-text">Pemanis Sintetis</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability & Community Commitment */}
      <section className="w-full px-4 md:px-8 lg:px-16 py-20 bg-surface-cream border-y border-border-subtle">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-4 space-y-3">
              <span className="font-epilogue text-[0.625rem] font-bold uppercase text-midori-green tracking-widest block">Mindful Footprint</span>
              <h2 className="font-epilogue text-3xl font-bold text-content-primary tracking-tight">
                Komitmen Kami untuk Kelestarian Bumi
              </h2>
              <p className="font-jakarta text-base text-muted-text">
                Ritual ketenangan tidak hanya tentang apa yang ada di dalam cangkir, tetapi bagaimana setiap langkah memberi dampak positif bagi petani dan lingkungan.
              </p>
            </div>
            
            <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-6 rounded-2xl bg-white shadow-sm border border-border-subtle space-y-3">
                <Sprout className="w-8 h-8 text-midori-green" />
                <h4 className="font-jakarta text-base font-bold text-content-primary">100% Compostable</h4>
                <p className="font-jakarta text-sm text-muted-text">
                  Gelas kemasan take-away dilapisi pati jagung biodegradable dan sedotan serat tebu alami.
                </p>
              </div>
              <div className="p-6 rounded-2xl bg-white shadow-sm border border-border-subtle space-y-3">
                <Handshake className="w-8 h-8 text-midori-green" />
                <h4 className="font-jakarta text-base font-bold text-content-primary">Direct & Fair Trade</h4>
                <p className="font-jakarta text-sm text-muted-text">
                  Kompensasi premium langsung kepada keluarga petani di Kyoto di atas standar pasar industri.
                </p>
              </div>
              <div className="p-6 rounded-2xl bg-white shadow-sm border border-border-subtle space-y-3">
                <Recycle className="w-8 h-8 text-midori-green" />
                <h4 className="font-jakarta text-base font-bold text-content-primary">Ritual Refill</h4>
                <p className="font-jakarta text-sm text-muted-text">
                  Bawa tumbler Midori atau wadah sendiri, nikmati apresiasi potongan harga <strong className="text-content-primary">Rp 5.000</strong> setiap transaksi.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote & CTA */}
      <section className="w-full px-4 md:px-8 lg:px-16 py-24 bg-surface-sand">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center space-y-12">
          {/* Quote Section */}
          <div className="space-y-4 max-w-2xl">
            <span className="font-epilogue text-6xl text-midori-green leading-none select-none block -mb-4">“</span>
            <blockquote className="font-epilogue text-2xl md:text-3xl text-content-primary font-medium italic">
              Matcha bukan sekadar minuman cepat saji. Ia adalah sebuah jeda napas yang mengembalikan kita ke saat ini—menyatukan pikiran jernih dengan ketenangan tubuh.
            </blockquote>
            <div className="pt-4 flex flex-col items-center">
              <span className="font-epilogue text-[0.6875rem] font-bold uppercase text-midori-dark tracking-widest">Kenji Takahashi & Nabila Rahman</span>
              <span className="font-jakarta text-xs text-muted-text mt-1">Tea Masters & Co-Founders of Midori Matcha Club</span>
            </div>
          </div>
          
          {/* Action Box */}
          <div className="w-full p-8 md:p-12 rounded-2xl bg-white shadow-md border border-border-subtle flex flex-col items-center space-y-6">
            <h3 className="font-epilogue text-3xl font-bold text-content-primary tracking-tight">
              Rasakan Ketenangan dalam Setiap Tegukan.
            </h3>
            <p className="font-jakarta text-base text-muted-text max-w-lg">
              Kunjungi sanctuary terdekat kami di Senopati, BSD, dan Serang, atau jelajahi koleksi menu musiman kami untuk pengalaman menyeduh di rumah.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
              <Link 
                href="/menu"
                className="w-full sm:w-auto inline-flex items-center justify-center font-epilogue text-sm font-bold px-8 py-4 rounded-full bg-midori-green text-white hover:bg-midori-dark transition-all shadow-md"
              >
                Explore Seasonal Menu
                <Coffee className="ml-2 w-4 h-4" />
              </Link>
              <Link 
                href="/cart"
                className="w-full sm:w-auto inline-flex items-center justify-center font-epilogue text-sm font-bold px-8 py-4 rounded-full bg-midori-light text-midori-dark hover:bg-midori-green hover:text-white transition-all"
              >
                Order Pickup / Delivery
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
      <Footer />
    </>
  );
}
