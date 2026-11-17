import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Clock3, Facebook, MapPin, Phone } from "lucide-react";
import { MobileNav } from "@/components/mobile-nav";
import { BackToTop } from "@/components/back-to-top";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const business = {
  name: "NTA Lavamos Laundry Shop",
  address: "9968+PPX, Poblacion Road, Bato, Camarines Sur, Philippines",
  phone: "+63 905 563 0585",
  phoneHref: "tel:+639055630585",
  hours: "Daily, 7:00 AM – 7:00 PM",
  facebook: "https://www.facebook.com/profile.php?id=100090370825470",
};

const mapQuery = encodeURIComponent(business.name + ", " + business.address);
const mapEmbed = "https://www.google.com/maps?q=" + mapQuery + "&t=k&z=18&output=embed";
const mapLink = "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(business.name + ", " + business.address);

export default function Home() {
  return (
    <main id="top" className="overflow-x-clip">
      <div className="bg-brand-deep px-4 py-2 text-center text-[10px] font-semibold tracking-[0.16em] text-white sm:text-xs">
        YOUR LOCAL LAUNDRY SHOP IN BATO
      </div>

      <header className="container flex h-[76px] items-center justify-between">
        <Link href="#" className="flex items-center gap-3" aria-label="NTA Lavamos home">
          <Image src="/lavamos%20logo.jpg" alt="NTA Lavamos Laundry Shop logo" width={112} height={63} priority className="h-12 w-auto rounded-md object-contain" />
          <span className="sr-only">NTA Lavamos Laundry Shop · Bato</span>
        </Link>
        <nav aria-label="Main navigation" className="hidden items-center gap-4 text-xs font-semibold text-brand-deep lg:flex xl:text-sm">
          <Link className="transition-colors hover:text-primary" href="#services">Services & rates</Link>
          <Link className="transition-colors hover:text-primary" href="#gallery">Our shop</Link>
          <Link className="transition-colors hover:text-primary" href="#about">About</Link>
          <Link className="transition-colors hover:text-primary" href="#visit">Location & hours</Link>
          <a href={business.facebook} target="_blank" rel="noopener noreferrer" className="inline-flex h-10 items-center gap-2 rounded-lg border border-border px-4 text-sm font-semibold text-brand-deep transition hover:border-primary hover:text-primary"><Facebook size={15} /> Facebook</a>
          <a href={business.phoneHref} className="inline-flex h-10 items-center gap-2 rounded-lg bg-primary px-4 text-sm font-semibold text-white shadow-sm transition hover:bg-primary/90"><Phone size={15} /> Call the shop</a>
        </nav>
        <MobileNav phoneHref={business.phoneHref} facebookHref={business.facebook} />
      </header>

      <section className="relative isolate overflow-hidden bg-background">
        <div className="pointer-events-none absolute inset-0 -z-20" aria-hidden="true">
          <Image
            src="/lavamos%20shop.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-[58%_78%] sm:object-[62%_65%] lg:object-[72%_center]"
          />
        </div>
        <div
          className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_bottom,#f8fbfb_0%,rgba(248,251,251,0.99)_38%,rgba(248,251,251,0.9)_58%,rgba(248,251,251,0.48)_100%)] sm:bg-[linear-gradient(to_bottom,#f8fbfb_0%,rgba(248,251,251,0.97)_34%,rgba(248,251,251,0.78)_58%,rgba(248,251,251,0.28)_100%)] lg:bg-[linear-gradient(to_right,#f8fbfb_0%,rgba(248,251,251,0.99)_34%,rgba(248,251,251,0.88)_49%,rgba(248,251,251,0.28)_72%,rgba(248,251,251,0.08)_100%)]"
          aria-hidden="true"
        />
        <div className="container relative grid min-h-[680px] items-center py-12 sm:min-h-[720px] sm:py-16 lg:min-h-[680px] lg:grid-cols-[1.05fr_0.95fr] lg:py-20">
          <div className="relative z-10 max-w-[650px]">
            <Badge variant="secondary" className="border-0 bg-brand-mint text-brand-deep">Bato, Camarines Sur</Badge>
            <h1 className="mt-5 max-w-[650px] text-[clamp(2.75rem,9vw,5.8rem)] font-black leading-[0.98] tracking-[-0.065em] text-brand-deep sm:mt-6">
              Fresh clothes.<br /><span className="text-primary">Lighter days.</span>
            </h1>
            <p className="mt-5 max-w-lg text-sm leading-7 text-muted-foreground sm:mt-6 sm:text-base sm:leading-8">
              Looking for a nearby laundry service in Bato? Visit NTA Lavamos Laundry Shop along Poblacion Road or call ahead to ask about current services and rates.
            </p>
            <div className="mt-7 flex flex-col items-stretch gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
              <a href={business.phoneHref} className="inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-lg bg-primary px-5 text-sm font-bold text-white shadow-soft transition hover:bg-primary/90 sm:w-auto sm:px-6"><Phone size={17} /> Call {business.phone}</a>
              <a href={mapLink} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center justify-center px-3 text-sm font-bold text-brand-deep hover:text-primary sm:justify-start">Get directions <ArrowUpRight className="ml-2" size={17} /></a>
            </div>
            <div className="mt-8 flex flex-col items-start gap-3 text-xs text-muted-foreground sm:mt-10 md:flex-row md:flex-wrap md:items-center md:gap-x-6 md:gap-y-3">
              <span className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-brand-red" /><strong className="text-brand-deep">Wash · Dry · Fold</strong> Full-service and self-service options</span>
              <span className="flex items-center gap-2"><Clock3 size={16} /><strong className="text-brand-deep">7 AM – 7 PM</strong> listed daily hours</span>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-brand-mint">
        <div className="container grid gap-5 py-6 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-8 lg:py-7">
          <div className="flex items-center gap-3"><MapPin className="text-primary" size={21} /><span><strong className="block text-sm text-brand-deep">Poblacion Road</strong><span className="text-xs text-muted-foreground">Bato, Camarines Sur</span></span></div>
          <div className="flex items-center gap-3"><Phone className="text-primary" size={21} /><span><strong className="block text-sm text-brand-deep">+63 905 563 0585</strong><span className="text-xs text-muted-foreground">Call the shop</span></span></div>
          <div className="flex items-center gap-3"><Clock3 className="text-primary" size={21} /><span><strong className="block text-sm text-brand-deep">7:00 AM – 7:00 PM</strong><span className="text-xs text-muted-foreground">Listed daily hours</span></span></div>
        </div>
      </section>


      <section id="gallery" className="bg-background py-14 sm:py-20 lg:py-24">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Inside NTA Lavamos</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight text-brand-deep sm:text-5xl">A closer look at our shop.</h2>
            <p className="mt-4 text-sm leading-7 text-muted-foreground">See the laundry machines and customer area at our Bato location.</p>
          </div>
          <div className="mt-8 grid gap-5 sm:mt-10 sm:gap-6 md:grid-cols-2">
            <figure className="overflow-hidden rounded-3xl border border-border bg-white shadow-sm">
              <Image src="/lavamos%20shop.jpg" alt="Commercial washer and dryer machines inside NTA Lavamos Laundry Shop" width={1024} height={1365} sizes="(max-width: 767px) calc(100vw - 2.5rem), (max-width: 1023px) calc((100vw - 4rem) / 2), 568px" className="h-[280px] w-full object-cover sm:h-[380px] lg:h-[460px]" />
              <figcaption className="px-5 py-4 text-sm font-semibold text-brand-deep">Our laundry machines</figcaption>
            </figure>
            <figure className="overflow-hidden rounded-3xl border border-border bg-white shadow-sm">
              <Image src="/lavamos%20shop%201.jpg" alt="Laundry machines, customer weighing scale and shop interior at NTA Lavamos Laundry Shop" width={1400} height={1050} sizes="(max-width: 767px) calc(100vw - 2.5rem), (max-width: 1023px) calc((100vw - 4rem) / 2), 568px" className="h-[280px] w-full object-cover sm:h-[380px] lg:h-[460px]" />
              <figcaption className="px-5 py-4 text-sm font-semibold text-brand-deep">Weighing and laundry area</figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section id="services" className="bg-brand-mint/70 py-14 sm:py-20 lg:py-24">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Services & pricing</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight text-brand-deep sm:text-5xl">Laundry made simple.</h2>
            <p className="mt-4 text-sm leading-7 text-muted-foreground">Choose full-service laundry or use the self-service machines. Prices below follow the shop&apos;s supplied rate poster.</p>
          </div>

          <div className="mt-8 grid gap-5 sm:mt-10 sm:gap-6 lg:grid-cols-2">
            <Card className="overflow-hidden rounded-3xl border-0 shadow-sm">
              <div className="bg-brand-red px-6 py-5 text-white">
                <h3 className="text-2xl font-black">Full-service</h3>
                <p className="mt-1 text-sm text-white/90">Wash, dry and fold</p>
              </div>
              <CardContent className="p-4 sm:p-6">
                <ul className="divide-y divide-border">
                  <li className="flex items-start justify-between gap-4 py-4 text-sm"><span className="font-semibold text-brand-deep">With detergent and fabcon</span><strong className="whitespace-nowrap text-lg font-black text-brand-red">₱190.00</strong></li>
                  <li className="flex items-start justify-between gap-4 py-4 text-sm"><span className="font-semibold text-brand-deep">No detergent or fabcon</span><strong className="whitespace-nowrap text-lg font-black text-brand-red">₱175.00</strong></li>
                  <li className="flex items-start justify-between gap-4 py-4 text-sm"><span className="font-semibold text-brand-deep">Fabcon only (no detergent)</span><strong className="whitespace-nowrap text-lg font-black text-brand-red">₱185.00</strong></li>
                  <li className="flex items-start justify-between gap-4 py-4 text-sm"><span className="font-semibold text-brand-deep">Detergent only (no fabcon)</span><strong className="whitespace-nowrap text-lg font-black text-brand-red">₱180.00</strong></li>
                </ul>
                <p className="mt-4 rounded-xl bg-brand-red-soft p-4 text-xs leading-5 text-brand-red">For detergent and fabcon add-ons, refer to the shop&apos;s price list.</p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden rounded-3xl border-0 shadow-sm">
              <div className="bg-brand-blue px-6 py-5 text-white">
                <h3 className="text-2xl font-black">Self-service</h3>
                <p className="mt-1 text-sm text-white/90">Select the machine service you need</p>
              </div>
              <CardContent className="p-6">
                <ul className="divide-y divide-border">
                  <li className="flex items-center justify-between gap-4 py-3 text-sm"><span className="font-semibold text-brand-deep">Wash only</span><strong className="text-lg font-black text-brand-blue">₱70.00</strong></li>
                  <li className="flex items-center justify-between gap-4 py-3 text-sm"><span className="font-semibold text-brand-deep">Dry only</span><strong className="text-lg font-black text-brand-blue">₱75.00</strong></li>
                  <li className="flex items-center justify-between gap-4 py-3 text-sm"><span className="font-semibold text-brand-deep">Spin dry</span><strong className="text-lg font-black text-brand-blue">₱15.00</strong></li>
                  <li className="flex items-center justify-between gap-4 py-3 text-sm"><span className="font-semibold text-brand-deep">Fold</span><strong className="text-lg font-black text-brand-blue">₱20.00</strong></li>
                  <li className="flex items-center justify-between gap-4 py-3 text-sm"><span className="font-semibold text-brand-deep">Additional wash (24 mins)</span><strong className="text-lg font-black text-brand-blue">₱50.00</strong></li>
                  <li className="flex items-center justify-between gap-4 py-3 text-sm"><span className="font-semibold text-brand-deep">Additional dry (5 mins)</span><strong className="text-lg font-black text-brand-blue">₱10.00</strong></li>
                </ul>
                <p className="mt-4 rounded-xl bg-brand-blue-soft p-4 text-xs leading-5 text-brand-deep">Available upon request and subject to machine availability and laundry volume.</p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-5 grid gap-5 sm:mt-6 sm:gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <Card className="rounded-3xl border-0 shadow-sm">
              <CardContent className="p-6 sm:p-8">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">Service turnaround</p>
                <div className="mt-5 grid gap-4 md:grid-cols-2">
                  <div className="rounded-2xl bg-brand-blue-soft p-5">
                    <h3 className="font-extrabold text-brand-deep">Regular service</h3>
                    <p className="mt-1 text-2xl font-black text-primary">No extra fee</p>
                    <p className="mt-3 text-xs leading-5 text-muted-foreground">Processed according to the regular queue. Same-day service may be available when daily capacity allows. During peak periods, orders may be scheduled for next-day or later pickup.</p>
                  </div>
                  <div className="rounded-2xl bg-brand-red-soft p-5">
                    <h3 className="font-extrabold text-brand-deep">Rush service</h3>
                    <p className="mt-1 text-2xl font-black text-brand-red">+₱50 / load</p>
                    <p className="mt-3 text-xs leading-5 text-muted-foreground">Priority processing. Available upon request and subject to machine availability and laundry volume. Comforters, bulky items and special loads may require additional processing time.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-3xl border-0 shadow-sm">
              <CardContent className="p-6 sm:p-8">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">Laundry load capacity</p>
                <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-2">
                  <div className="rounded-2xl bg-brand-mint p-4"><p className="text-sm font-extrabold text-brand-deep">Light load</p><p className="mt-1 text-2xl font-black text-primary">8 kg</p><p className="mt-1 text-xs text-muted-foreground">T-shirts, shorts, underwear, thin pajamas, blouses and other lightweight garments.</p></div>
                  <div className="rounded-2xl bg-brand-blue-soft p-4"><p className="text-sm font-extrabold text-brand-deep">Standard mixed load</p><p className="mt-1 text-2xl font-black text-primary">7 kg</p><p className="mt-1 text-xs text-muted-foreground">A combination of light and regular garments such as shirts, pants and pajamas.</p></div>
                  <div className="rounded-2xl bg-brand-red-soft p-4"><p className="text-sm font-extrabold text-brand-deep">Heavy load</p><p className="mt-1 text-2xl font-black text-primary">7 kg</p><p className="mt-1 text-xs text-muted-foreground">Jeans, denim clothing, towels, curtains, hoodies, sweatshirts and jackets.</p></div>
                  <div className="rounded-2xl bg-brand-red-soft p-4"><p className="text-sm font-extrabold text-brand-deep">Comforter</p><p className="mt-1 text-2xl font-black text-primary">1 piece</p><p className="mt-1 text-xs text-muted-foreground">One comforter per load.</p></div>
                </div>
                <p className="mt-4 text-[11px] leading-5 text-muted-foreground"><strong className="text-brand-deep">Important:</strong> Load capacity may be reduced depending on size, thickness, weight and type of laundry to ensure proper washing and drying.</p>
              </CardContent>
            </Card>
          </div>

          <p className="mx-auto mt-8 max-w-3xl text-center text-xs leading-5 text-muted-foreground">Please contact NTA Lavamos to confirm availability and any current price-list updates before visiting.</p>
        </div>
      </section>

      <section id="about" className="container grid items-center gap-8 py-14 sm:gap-10 sm:py-20 lg:grid-cols-2 lg:gap-12 lg:py-28">
        <div className="relative mx-auto h-[280px] w-full max-w-[490px] overflow-hidden rounded-[2rem] bg-brand-mint shadow-soft sm:h-[360px] lg:h-[420px]">
          <Image
            src="/lavamos%20shop%201.jpg"
            alt="Inside NTA Lavamos Laundry Shop, showing the actual shop interior and laundry equipment"
            width={1400}
            height={1050}
            sizes="(max-width: 1023px) calc(100vw - 2.5rem), 490px"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">NTA Lavamos Laundry Shop</p>
          <h2 className="mt-4 text-4xl font-black leading-tight tracking-tight text-brand-deep sm:text-5xl">Your neighborhood laundry <span className="text-primary">stop.</span></h2>
          <p className="mt-5 text-sm leading-7 text-muted-foreground">Choose full-service wash, dry and fold or self-service machine options. View the service rates, turnaround choices and load-capacity guidance above, or contact the shop to confirm availability.</p>
          <Card className="mt-6 rounded-2xl border-border/80 shadow-sm sm:mt-7">
            <CardContent className="flex flex-col gap-3 p-5 sm:flex-row sm:items-center">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-mint text-primary"><Phone size={20} /></span>
              <div className="min-w-0 flex-1"><p className="font-extrabold text-brand-deep">Need help choosing a service?</p><p className="mt-1 text-xs leading-5 text-muted-foreground">Call the shop to confirm current rates, machine availability and turnaround.</p></div>
              <a className="inline-flex h-10 shrink-0 items-center justify-center rounded-lg bg-primary px-4 text-xs font-bold text-white hover:bg-primary/90" href={business.phoneHref}>Call the shop</a>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="visit" className="container pb-14 sm:pb-20 lg:pb-28">
        <div className="grid overflow-hidden rounded-3xl bg-brand-mint lg:grid-cols-[0.78fr_1.22fr]">
          <div className="p-8 sm:p-12">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Find the shop</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight text-brand-deep">Visit <span className="text-primary">NTA Lavamos.</span></h2>
            <div className="mt-8 space-y-6">
              <div className="flex items-start gap-3"><MapPin className="mt-0.5 text-primary" size={20} /><span><strong className="block text-sm text-brand-deep">Address</strong><span className="text-sm leading-6 text-muted-foreground">{business.address}</span></span></div>
              <div className="flex items-start gap-3"><Clock3 className="mt-0.5 text-primary" size={20} /><span><strong className="block text-sm text-brand-deep">Opening hours</strong><span className="text-sm text-muted-foreground">{business.hours}</span></span></div>
              <div className="flex items-start gap-3"><Phone className="mt-0.5 text-primary" size={20} /><span><strong className="block text-sm text-brand-deep">Phone</strong><a className="text-sm text-primary hover:underline" href={business.phoneHref}>{business.phone}</a></span></div>
            </div>
            <a href={mapLink} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-lg bg-primary px-5 text-sm font-bold text-white hover:bg-primary/90 sm:w-auto">Open in Google Maps <ArrowUpRight size={16} /></a>
          </div>
          <div className="h-[300px] bg-brand-mint sm:h-[380px] lg:h-auto lg:min-h-[420px]">
            <iframe
              title="Interactive Google Map showing NTA Lavamos Laundry Shop in Bato, Camarines Sur"
              src={mapEmbed}
              width="100%"
              height="100%"
              className="h-full min-h-[300px] w-full border-0 sm:min-h-[380px] lg:min-h-[420px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      <section id="contact" className="bg-brand-deep text-white">
        <div className="container flex flex-col gap-5 py-10 sm:gap-6 sm:py-14 md:flex-row md:items-center md:justify-between">
          <div><p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-cyan">Need laundry service?</p><h2 className="mt-3 text-3xl font-black sm:text-4xl">Call NTA Lavamos.</h2><p className="mt-2 text-sm text-white/70">Ask about available services, rates, and order turnaround.</p></div>
          <a href={business.phoneHref} className="inline-flex min-h-12 w-full shrink-0 items-center justify-center gap-3 rounded-lg bg-brand-cyan px-6 text-sm font-bold text-brand-deep transition hover:bg-brand-cyan/85 sm:w-auto"><Phone size={17} /> {business.phone}</a>
        </div>
      </section>

      <footer className="bg-brand-deep text-white">
        <div className="container border-t border-white/10 py-10 sm:py-12">
          <div className="grid gap-9 sm:grid-cols-2 lg:grid-cols-[1.2fr_0.8fr_1fr] lg:gap-12">
            <div>
              <Link href="#" aria-label="NTA Lavamos home" className="inline-flex items-center gap-3 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-brand-deep">
                <Image src="/lavamos%20logo.jpg" alt="NTA Lavamos Laundry Shop logo" width={112} height={63} className="h-12 w-auto rounded-md object-contain" />
              </Link>
              <h2 className="mt-4 text-lg font-extrabold tracking-tight">NTA Lavamos Laundry Shop</h2>
              <p className="mt-2 max-w-sm text-sm leading-6 text-white/70">Your neighborhood laundry shop in Bato, Camarines Sur. Choose full-service or self-service laundry options.</p>
              <a href={business.facebook} target="_blank" rel="noopener noreferrer" aria-label="Visit NTA Lavamos on Facebook (opens in a new tab)" className="mt-4 inline-flex min-h-10 items-center gap-2 rounded-md text-sm font-semibold text-white/85 transition hover:text-brand-cyan focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-brand-deep">
                <Facebook size={16} /> Follow us on Facebook <ArrowUpRight size={14} />
              </a>
            </div>

            <nav aria-label="Footer navigation">
              <h3 className="text-sm font-bold uppercase tracking-[0.14em] text-brand-cyan">Explore</h3>
              <ul className="mt-4 space-y-3 text-sm text-white/75">
                <li><Link className="transition hover:text-brand-cyan focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan" href="#services">Services & rates</Link></li>
                <li><Link className="transition hover:text-brand-cyan focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan" href="#gallery">Our shop</Link></li>
                <li><Link className="transition hover:text-brand-cyan focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan" href="#about">About us</Link></li>
                <li><Link className="transition hover:text-brand-cyan focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan" href="#visit">Location & hours</Link></li>
              </ul>
            </nav>

            <div>
              <h3 className="text-sm font-bold uppercase tracking-[0.14em] text-brand-cyan">Visit or contact</h3>
              <ul className="mt-4 space-y-4 text-sm">
                <li className="flex items-start gap-3"><MapPin size={17} className="mt-0.5 shrink-0 text-brand-cyan" /><div><span className="block font-semibold text-white">Address</span><a href={mapLink} target="_blank" rel="noopener noreferrer" className="mt-1 inline-block leading-6 text-white/70 transition hover:text-brand-cyan focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan">Poblacion Road, Bato, Camarines Sur</a></div></li>
                <li className="flex items-start gap-3"><Phone size={17} className="mt-0.5 shrink-0 text-brand-cyan" /><div><span className="block font-semibold text-white">Phone</span><a href={business.phoneHref} className="mt-1 inline-block text-white/70 transition hover:text-brand-cyan focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan">{business.phone}</a></div></li>
                <li className="flex items-start gap-3"><Clock3 size={17} className="mt-0.5 shrink-0 text-brand-cyan" /><div><span className="block font-semibold text-white">Opening hours</span><span className="mt-1 block text-white/70">{business.hours}</span></div></li>
              </ul>
            </div>
          </div>

          <div className="mt-9 border-t border-white/10 pt-5 text-xs text-white/55">
            <p>© {new Date().getFullYear()} NTA Lavamos Laundry Shop. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <BackToTop />
    </main>
  );
}
