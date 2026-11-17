import Link from "next/link";
import { ArrowUpRight, Clock3, Facebook, MapPin, Phone, Star, WashingMachine } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const business = {
  name: "NTA Lavamos Laundry Shop",
  address: "9968+PPX, Poblacion Road, Bato, Camarines Sur, Philippines",
  phone: "+63 905 563 0585",
  phoneHref: "tel:+639055630585",
  hours: "Daily, 7:00 AM – 7:00 PM",
  placeId: "ChIJ8QQwaWaZoTMRW1FCsxNjFJk",
  facebook: "https://www.facebook.com/profile.php?id=100090370825470",
};

const mapQuery = encodeURIComponent(business.address);
const mapEmbed = "https://www.google.com/maps?q=" + mapQuery + "&output=embed";
const mapLink = "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(business.name + ", " + business.address);

export default function Home() {
  return (
    <main className="overflow-hidden">
      <div className="bg-brand-deep px-4 py-2 text-center text-[10px] font-semibold tracking-[0.16em] text-white sm:text-xs">
        YOUR LOCAL LAUNDRY SHOP IN BATO
      </div>

      <header className="container flex h-[76px] items-center justify-between">
        <Link href="#" className="flex items-center gap-3" aria-label="NTA Lavamos home">
          <span className="grid h-11 w-11 place-items-center rounded-2xl rounded-bl-md bg-primary text-white shadow-sm">
            <WashingMachine size={23} aria-hidden="true" />
          </span>
          <span className="leading-tight">
            <span className="block text-lg font-extrabold tracking-tight text-brand-deep">NTA <span className="text-primary">Lavamos</span></span>
            <span className="mt-1 block text-[9px] font-bold uppercase tracking-[0.2em] text-muted-foreground">Laundry shop · Bato</span>
          </span>
        </Link>
        <nav aria-label="Main navigation" className="hidden items-center gap-8 text-sm font-semibold text-brand-deep md:flex">
          <Link className="transition-colors hover:text-primary" href="#about">About</Link>
          <Link className="transition-colors hover:text-primary" href="#visit">Location & hours</Link>
          <a href={business.facebook} target="_blank" rel="noopener noreferrer" className="inline-flex h-10 items-center gap-2 rounded-lg border border-border px-4 text-sm font-semibold text-brand-deep transition hover:border-primary hover:text-primary"><Facebook size={15} /> Facebook</a>
          <a href={business.phoneHref} className="inline-flex h-10 items-center gap-2 rounded-lg bg-primary px-4 text-sm font-semibold text-white shadow-sm transition hover:bg-primary/90"><Phone size={15} /> Call the shop</a>
        </nav>
        <div className="flex items-center gap-2 md:hidden"><a href={business.facebook} target="_blank" rel="noopener noreferrer" aria-label="Visit NTA Lavamos on Facebook" className="grid h-10 w-10 place-items-center rounded-lg border border-border text-primary"><Facebook size={18} /></a><a href={business.phoneHref} className="rounded-lg bg-primary px-4 py-2.5 text-xs font-bold text-white">Call now</a></div>
      </header>

      <section className="container grid items-center gap-10 pb-16 pt-8 md:grid-cols-[1.02fr_0.98fr] md:pb-24 md:pt-12">
        <div className="relative z-10">
          <Badge variant="secondary" className="border-0 bg-brand-mint text-brand-deep">Bato, Camarines Sur</Badge>
          <h1 className="mt-6 max-w-[650px] text-[clamp(3.2rem,7vw,5.8rem)] font-black leading-[0.98] tracking-[-0.07em] text-brand-deep">
            Fresh clothes.<br /><span className="text-primary">Lighter days.</span>
          </h1>
          <p className="mt-6 max-w-lg text-base leading-8 text-muted-foreground">
            Looking for a nearby laundry service in Bato? Visit NTA Lavamos Laundry Shop along Poblacion Road or call ahead to ask about current services and rates.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href={business.phoneHref} className="inline-flex h-12 items-center gap-3 rounded-lg bg-primary px-6 text-sm font-bold text-white shadow-soft transition hover:bg-primary/90"><Phone size={17} /> Call {business.phone}</a>
            <a href={mapLink} target="_blank" rel="noopener noreferrer" className="inline-flex h-12 items-center px-3 text-sm font-bold text-brand-deep hover:text-primary">Get directions <ArrowUpRight className="ml-2" size={17} /></a>
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs text-muted-foreground">
            <span className="flex items-center gap-2"><Star size={16} className="fill-amber-400 text-amber-500" /><strong className="text-brand-deep">5.0/5</strong> Google rating · 1 review</span>
            <span className="flex items-center gap-2"><Clock3 size={16} /><strong className="text-brand-deep">7 AM – 7 PM</strong> daily</span>
          </div>
        </div>

        <div className="relative mx-auto flex min-h-[390px] w-full max-w-[530px] items-center justify-center sm:min-h-[470px]">
          <div className="absolute inset-[7%] rounded-[45%_55%_53%_47%/45%_42%_58%_55%] bg-brand-mint" />
          <div className="absolute right-[9%] top-[7%] h-16 w-16 rounded-full bg-brand-coral/80" />
          <div className="absolute bottom-[9%] left-[6%] h-20 w-20 rounded-full border-[14px] border-brand-coral/30" />
          <div className="relative z-10 grid h-[290px] w-[290px] place-items-center rounded-[42%_58%_50%_50%/47%_42%_58%_53%] border-[10px] border-white bg-gradient-to-br from-[#d9eee5] via-[#b8d9d0] to-[#8ebdb5] shadow-soft sm:h-[370px] sm:w-[370px]">
            <div className="grid h-44 w-44 place-items-center rounded-[2rem] border border-white/70 bg-white/70 shadow-xl backdrop-blur sm:h-52 sm:w-52">
              <div className="grid h-24 w-24 place-items-center rounded-full bg-primary text-white sm:h-28 sm:w-28"><WashingMachine size={62} strokeWidth={1.4} /></div>
              <span className="-mt-2 text-xs font-extrabold tracking-[0.18em] text-brand-deep">NTA LAVAMOS</span>
            </div>
          </div>
          <div className="absolute bottom-[12%] right-0 z-20 rounded-xl bg-white p-3 shadow-soft">
            <span className="flex items-center gap-2 text-xs font-bold text-brand-deep"><Star className="fill-amber-400 text-amber-500" size={16} /> 5.0 Google rating</span>
            <span className="mt-1 block text-[10px] text-muted-foreground">Based on 1 public review</span>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-[#f0f5ef]">
        <div className="container grid gap-5 py-7 sm:grid-cols-3 sm:gap-8">
          <div className="flex items-center gap-3"><MapPin className="text-primary" size={21} /><span><strong className="block text-sm text-brand-deep">Poblacion Road</strong><span className="text-xs text-muted-foreground">Bato, Camarines Sur</span></span></div>
          <div className="flex items-center gap-3"><Phone className="text-primary" size={21} /><span><strong className="block text-sm text-brand-deep">+63 905 563 0585</strong><span className="text-xs text-muted-foreground">Call the shop</span></span></div>
          <div className="flex items-center gap-3"><Clock3 className="text-primary" size={21} /><span><strong className="block text-sm text-brand-deep">7:00 AM – 7:00 PM</strong><span className="text-xs text-muted-foreground">Listed daily hours</span></span></div>
        </div>
      </section>

      <section id="about" className="container grid items-center gap-12 py-20 sm:py-28 md:grid-cols-2">
        <div className="relative mx-auto grid min-h-[330px] w-full max-w-[490px] place-items-center overflow-hidden rounded-[2rem] bg-brand-mint p-8">
          <div className="absolute -left-12 -top-12 h-48 w-48 rounded-full bg-white/70" />
          <div className="absolute -bottom-14 -right-8 h-56 w-56 rounded-full bg-brand-coral/25" />
          <div className="relative grid h-48 w-48 place-items-center rounded-full bg-white text-primary shadow-soft"><WashingMachine size={94} strokeWidth={1.2} /></div>
        </div>
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">NTA Lavamos Laundry Shop</p>
          <h2 className="mt-4 text-4xl font-black leading-tight tracking-tight text-brand-deep sm:text-5xl">Your neighborhood laundry <span className="text-primary">stop.</span></h2>
          <p className="mt-5 text-sm leading-7 text-muted-foreground">NTA Lavamos is listed as a laundry service in the Poblacion area of Bato, Camarines Sur. Contact the shop directly for its current service menu, prices, turnaround times, and special-care options.</p>
          <Card className="mt-7 rounded-2xl border-border/80 shadow-sm">
            <CardContent className="flex items-center gap-4 p-5">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-mint text-primary"><Star className="fill-amber-400 text-amber-500" size={21} /></span>
              <div><p className="text-2xl font-black text-brand-deep">5.0 <span className="text-sm font-semibold text-muted-foreground">/ 5</span></p><p className="text-xs text-muted-foreground">Google Maps rating · 1 review</p></div>
              <a className="ml-auto text-xs font-bold text-primary hover:underline" href={mapLink} target="_blank" rel="noopener noreferrer">View listing <ArrowUpRight size={13} className="inline" /></a>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="visit" className="container pb-20 sm:pb-28">
        <div className="grid overflow-hidden rounded-3xl bg-[#edf4ed] md:grid-cols-[0.78fr_1.22fr]">
          <div className="p-8 sm:p-12">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Find the shop</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight text-brand-deep">Visit <span className="text-primary">NTA Lavamos.</span></h2>
            <div className="mt-8 space-y-6">
              <div className="flex items-start gap-3"><MapPin className="mt-0.5 text-primary" size={20} /><span><strong className="block text-sm text-brand-deep">Address</strong><span className="text-sm leading-6 text-muted-foreground">{business.address}</span></span></div>
              <div className="flex items-start gap-3"><Clock3 className="mt-0.5 text-primary" size={20} /><span><strong className="block text-sm text-brand-deep">Opening hours</strong><span className="text-sm text-muted-foreground">{business.hours}</span></span></div>
              <div className="flex items-start gap-3"><Phone className="mt-0.5 text-primary" size={20} /><span><strong className="block text-sm text-brand-deep">Phone</strong><a className="text-sm text-primary hover:underline" href={business.phoneHref}>{business.phone}</a></span></div>
            </div>
            <a href={mapLink} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex h-11 items-center gap-2 rounded-lg bg-primary px-5 text-sm font-bold text-white hover:bg-primary/90">Open in Google Maps <ArrowUpRight size={16} /></a>
          </div>
          <div className="min-h-[340px] bg-[#dce9df]">
            <iframe
              title="Interactive Google Map showing NTA Lavamos Laundry Shop in Bato, Camarines Sur"
              src={mapEmbed}
              width="100%"
              height="100%"
              className="min-h-[340px] w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      <section id="contact" className="bg-brand-deep text-white">
        <div className="container flex flex-col gap-6 py-14 sm:flex-row sm:items-center sm:justify-between">
          <div><p className="text-xs font-bold uppercase tracking-[0.2em] text-[#a8d6c9]">Need laundry service?</p><h2 className="mt-3 text-3xl font-black sm:text-4xl">Call NTA Lavamos.</h2><p className="mt-2 text-sm text-white/70">Ask about available services, rates, and order turnaround.</p></div>
          <a href={business.phoneHref} className="inline-flex h-12 shrink-0 items-center justify-center gap-3 rounded-lg bg-[#f4d77b] px-6 text-sm font-bold text-brand-deep transition hover:bg-[#ffe49b]"><Phone size={17} /> {business.phone}</a>
        </div>
      </section>

      <footer className="bg-brand-deep text-white">
        <div className="container flex flex-col gap-5 border-t border-white/10 py-7 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3"><span className="grid h-9 w-9 place-items-center rounded-xl bg-white/10 text-[#a8d6c9]"><WashingMachine size={19} /></span><span><strong className="block text-sm">NTA Lavamos</strong><span className="text-[10px] text-white/55">Laundry Shop · Bato, Camarines Sur</span></span></div>
          <div className="flex items-center gap-4"><a href={business.facebook} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-xs font-semibold text-white/80 transition hover:text-white"><Facebook size={15} /> Facebook page <ArrowUpRight size={13} /></a><p className="text-xs text-white/60">© {new Date().getFullYear()} NTA Lavamos Laundry Shop.</p></div>
        </div>
      </footer>
    </main>
  );
}
