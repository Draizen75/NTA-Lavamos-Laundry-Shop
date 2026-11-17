import Link from "next/link";
import {
  ArrowRight, Check, Clock3, Droplets, Heart, MapPin, Shirt,
  Sparkles, Truck, WashingMachine, Waves,
} from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const services = [
  {
    icon: Shirt,
    number: "01",
    title: "Wash & fold",
    description: "Everyday laundry care to help make your weekly routine a little lighter.",
    note: "Ask about available load sizes",
  },
  {
    icon: Sparkles,
    number: "02",
    title: "Freshen up",
    description: "A convenient refresh for your clothes, linens, and everyday essentials.",
    note: "Specific options to be confirmed",
  },
  {
    icon: Truck,
    number: "03",
    title: "Pickup & delivery",
    description: "Need a hand getting laundry to the shop? Ask if collection is available in your area.",
    note: "Availability to be confirmed",
  },
];

const steps = [
  ["01", "Bring your laundry", "Visit the shop and ask the team about current service options."],
  ["02", "Confirm your order", "Check the rates, estimated turnaround, and any special instructions."],
  ["03", "Pick up fresh", "Collect your laundry when the shop confirms that your order is ready."],
];

export default function Home() {
  return (
    <main className="overflow-hidden">
      <div className="bg-brand-deep px-4 py-2 text-center text-[10px] font-semibold tracking-[0.14em] text-white sm:text-xs">
        A LITTLE MORE FRESHNESS IN YOUR EVERYDAY
      </div>

      <header className="container flex h-[76px] items-center justify-between">
        <Link href="#" className="flex items-center gap-3" aria-label="NTA Lavamos home">
          <span className="grid h-11 w-11 place-items-center rounded-2xl rounded-bl-md bg-primary text-white shadow-sm">
            <WashingMachine size={23} aria-hidden="true" />
          </span>
          <span className="leading-tight">
            <span className="block text-lg font-extrabold tracking-tight text-brand-deep">NTA <span className="text-primary">Lavamos</span></span>
            <span className="mt-1 block text-[9px] font-bold uppercase tracking-[0.2em] text-muted-foreground">Laundry shop</span>
          </span>
        </Link>
        <nav aria-label="Main navigation" className="hidden items-center gap-8 text-sm font-semibold text-brand-deep md:flex">
          <Link className="transition-colors hover:text-primary" href="#services">Services</Link>
          <Link className="transition-colors hover:text-primary" href="#how-it-works">How it works</Link>
          <Link className="transition-colors hover:text-primary" href="#about">About</Link>
          <Link className="transition-colors hover:text-primary" href="#visit">Visit us</Link>
          <Button asChild={false} className="h-10 px-4" onClick={() => { window.location.hash = "contact"; }}>Get in touch <ArrowRight size={15} /></Button>
        </nav>
        <Link href="#contact" className="rounded-lg bg-primary px-4 py-2.5 text-xs font-bold text-white md:hidden">Contact us</Link>
      </header>

      <section className="container grid items-center gap-10 pb-14 pt-8 md:grid-cols-[1.02fr_0.98fr] md:pb-20 md:pt-12">
        <div className="relative z-10">
          <Badge variant="secondary" className="border-0 bg-brand-mint text-brand-deep">Your neighborhood laundry stop</Badge>
          <h1 className="mt-6 max-w-[650px] text-[clamp(3.2rem,7vw,5.8rem)] font-black leading-[0.98] tracking-[-0.07em] text-brand-deep">
            Fresh clothes.<br /><span className="text-primary">Lighter days.</span>
          </h1>
          <p className="mt-6 max-w-lg text-base leading-8 text-muted-foreground">
            Laundry day doesn’t have to take over your day. NTA Lavamos is a friendly local laundry shop concept built around making everyday laundry feel easier.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link href="#contact" className="inline-flex h-12 items-center gap-3 rounded-lg bg-primary px-6 text-sm font-bold text-white shadow-soft transition hover:bg-primary/90">
              Ask about services <ArrowRight size={17} />
            </Link>
            <Link href="#services" className="inline-flex h-12 items-center px-3 text-sm font-bold text-brand-deep hover:text-primary">Explore services <span className="ml-2 text-brand-coral">↘</span></Link>
          </div>
          <div className="mt-10 flex items-center gap-3 text-xs text-muted-foreground">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-white text-primary shadow-sm"><Heart size={17} /></span>
            <span><strong className="block text-brand-deep">Made for everyday life</strong><span>Local service details are being confirmed.</span></span>
          </div>
        </div>

        <div className="relative mx-auto flex min-h-[390px] w-full max-w-[530px] items-center justify-center sm:min-h-[470px]">
          <div className="absolute inset-[7%] rounded-[45%_55%_53%_47%/45%_42%_58%_55%] bg-brand-mint" />
          <div className="absolute right-[9%] top-[7%] h-16 w-16 rounded-full bg-brand-coral/80" />
          <div className="absolute bottom-[9%] left-[6%] h-20 w-20 rounded-full border-[14px] border-brand-coral/30" />
          <div className="relative z-10 grid h-[290px] w-[290px] place-items-center rounded-[42%_58%_50%_50%/47%_42%_58%_53%] border-[10px] border-white bg-gradient-to-br from-[#d9eee5] via-[#b8d9d0] to-[#8ebdb5] shadow-soft sm:h-[370px] sm:w-[370px]">
            <div className="grid h-44 w-44 place-items-center rounded-[2rem] border border-white/70 bg-white/70 shadow-xl backdrop-blur sm:h-52 sm:w-52">
              <div className="grid h-24 w-24 place-items-center rounded-full bg-primary text-white sm:h-28 sm:w-28"><WashingMachine size={62} strokeWidth={1.4} /></div>
              <span className="-mt-2 text-xs font-extrabold tracking-[0.18em] text-brand-deep">FRESH START</span>
            </div>
          </div>
          <div className="absolute left-0 top-[18%] z-20 rounded-xl bg-white p-3 shadow-soft">
            <span className="flex items-center gap-2 text-xs font-bold text-brand-deep"><Droplets className="text-primary" size={17} /> A fresh feeling</span>
            <span className="mt-1 block text-[10px] text-muted-foreground">For your everyday essentials</span>
          </div>
          <div className="absolute bottom-[15%] right-0 z-20 rounded-xl bg-white p-3 shadow-soft">
            <span className="flex items-center gap-2 text-xs font-bold text-brand-deep"><Sparkles className="text-brand-coral" size={16} /> Care in every load</span>
            <span className="mt-1 block text-[10px] text-muted-foreground">Ask about available services</span>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-[#f0f5ef]">
        <div className="container flex flex-col items-center justify-center gap-2 py-6 text-center sm:flex-row sm:gap-4">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-white text-brand-coral"><Heart size={17} /></span>
          <p className="text-sm text-muted-foreground"><strong className="text-brand-deep">A friendly neighborhood concept.</strong> Confirm current services, rates, and hours directly with the shop.</p>
        </div>
      </section>

      <section id="services" className="container py-20 sm:py-28">
        <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div><p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">What we can help with</p><h2 className="mt-4 text-4xl font-black tracking-tight text-brand-deep sm:text-5xl">Laundry, made <span className="text-primary">simpler.</span></h2></div>
          <p className="max-w-sm text-sm leading-7 text-muted-foreground">Explore the services featured in this concept. Please check with the shop for its actual service list and pricing.</p>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {services.map(({ icon: Icon, number, title, description, note }) => (
            <Card key={number} className="group rounded-2xl border-border/80 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-soft">
              <CardContent className="p-7">
                <div className="flex items-center justify-between"><span className="grid h-12 w-12 place-items-center rounded-xl bg-brand-mint text-primary"><Icon size={23} /></span><span className="text-xs font-bold text-muted-foreground/60">{number}</span></div>
                <h3 className="mt-7 text-xl font-extrabold tracking-tight text-brand-deep">{title}</h3>
                <p className="mt-3 min-h-[72px] text-sm leading-7 text-muted-foreground">{description}</p>
                <Separator className="my-5" />
                <p className="flex items-center gap-2 text-xs font-semibold text-primary"><Check size={15} /> {note}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section id="how-it-works" className="bg-brand-deep text-white">
        <div className="container grid gap-12 py-20 sm:py-24 md:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#a8d6c9]">Simple from start to finish</p>
            <h2 className="mt-4 text-4xl font-black leading-tight tracking-tight sm:text-5xl">A little less laundry on your <span className="text-[#a8d6c9]">mind.</span></h2>
            <p className="mt-5 max-w-sm text-sm leading-7 text-white/70">The exact process and turnaround depend on the services offered by the shop. Here’s a simple guide for your first visit.</p>
            <Link href="#contact" className="mt-7 inline-flex h-11 items-center gap-3 rounded-lg bg-[#f4d77b] px-5 text-sm font-bold text-brand-deep transition hover:bg-[#ffe49b]">Ask a question <ArrowRight size={16} /></Link>
          </div>
          <div className="divide-y divide-white/15">
            {steps.map(([number, title, description]) => (
              <div key={number} className="grid grid-cols-[46px_1fr_20px] items-start gap-4 py-6 first:pt-2">
                <span className="grid h-10 w-10 place-items-center rounded-full border border-[#8bc6bd]/70 text-xs font-bold text-[#a8d6c9]">{number}</span>
                <div><h3 className="font-bold">{title}</h3><p className="mt-2 max-w-md text-sm leading-6 text-white/65">{description}</p></div>
                <Check className="mt-2 text-[#a8d6c9]" size={18} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="container grid items-center gap-12 py-20 sm:py-28 md:grid-cols-2">
        <div className="relative mx-auto grid min-h-[330px] w-full max-w-[490px] place-items-center overflow-hidden rounded-[2rem] bg-brand-mint p-8">
          <div className="absolute -left-12 -top-12 h-48 w-48 rounded-full bg-white/70" />
          <div className="absolute -bottom-14 -right-8 h-56 w-56 rounded-full bg-brand-coral/25" />
          <div className="relative grid h-48 w-48 place-items-center rounded-full bg-white text-primary shadow-soft"><Waves size={94} strokeWidth={1.2} /></div>
          <Badge className="absolute bottom-7 left-7 border-0 bg-white text-brand-deep shadow-sm">Freshness for everyday</Badge>
        </div>
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">A local laundry shop</p>
          <h2 className="mt-4 text-4xl font-black leading-tight tracking-tight text-brand-deep sm:text-5xl">Good care starts with the <span className="text-primary">little things.</span></h2>
          <p className="mt-5 text-sm leading-7 text-muted-foreground">NTA Lavamos is presented here with a warm, approachable identity for a neighborhood laundry business. The final website should reflect the shop’s real story, services, and customer policies once confirmed by the owner.</p>
          <ul className="mt-7 space-y-3 text-sm font-semibold text-brand-deep">
            <li className="flex items-center gap-3"><Check className="text-primary" size={17} /> Clear service and rate information</li>
            <li className="flex items-center gap-3"><Check className="text-primary" size={17} /> Helpful contact details and directions</li>
            <li className="flex items-center gap-3"><Check className="text-primary" size={17} /> Mobile-friendly browsing experience</li>
          </ul>
        </div>
      </section>

      <section id="visit" className="container pb-20 sm:pb-28">
        <div className="grid overflow-hidden rounded-3xl bg-[#edf4ed] md:grid-cols-2">
          <div className="p-8 sm:p-12">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Plan your visit</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight text-brand-deep">We’d love to <span className="text-primary">help.</span></h2>
            <p className="mt-4 max-w-sm text-sm leading-7 text-muted-foreground">The shop’s exact address, opening hours, and contact number still need confirmation before this demo is published.</p>
            <div className="mt-7 space-y-5">
              <div className="flex items-center gap-3"><MapPin className="text-primary" size={20} /><span><strong className="block text-sm text-brand-deep">Location</strong><span className="text-xs text-muted-foreground">Bato, Camarines Sur — exact address to confirm</span></span></div>
              <div className="flex items-center gap-3"><Clock3 className="text-primary" size={20} /><span><strong className="block text-sm text-brand-deep">Opening hours</strong><span className="text-xs text-muted-foreground">Please contact the shop to confirm</span></span></div>
            </div>
            <Link href="#contact" className="mt-8 inline-flex h-11 items-center gap-2 rounded-lg bg-primary px-5 text-sm font-bold text-white hover:bg-primary/90">Contact the shop <ArrowRight size={16} /></Link>
          </div>
          <div className="relative flex min-h-[300px] items-center justify-center overflow-hidden bg-[#dce9df]">
            <div className="absolute inset-0 opacity-50" style={{ backgroundImage: "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)", backgroundSize: "38px 38px" }} />
            <div className="absolute h-10 w-[130%] rotate-[-25deg] border-y-[5px] border-[#cbdccf] bg-[#fff9e9]" />
            <div className="absolute h-7 w-[130%] rotate-[35deg] border-y-[4px] border-[#cbdccf] bg-[#fff9e9]" />
            <div className="relative z-10 grid h-16 w-16 place-items-center rounded-full rounded-bl-md bg-primary text-white shadow-xl"><MapPin size={29} /></div>
            <span className="absolute bottom-5 right-5 rounded-lg bg-white/90 px-3 py-2 text-[10px] font-bold tracking-wide text-brand-deep">LOCATION DETAILS TO BE ADDED</span>
          </div>
        </div>
      </section>

      <section id="contact" className="container grid gap-10 pb-24 pt-4 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Let’s talk laundry</p>
          <h2 className="mt-4 text-4xl font-black leading-tight tracking-tight text-brand-deep sm:text-5xl">Questions? We’re <span className="text-primary">listening.</span></h2>
          <p className="mt-5 max-w-sm text-sm leading-7 text-muted-foreground">Use this demo form to preview the contact experience. It does not send or store information until a real contact channel and backend are configured.</p>
          <div className="mt-8 flex items-start gap-3 rounded-xl bg-brand-mint p-4 text-sm text-brand-deep"><Heart className="mt-0.5 shrink-0 text-primary" size={18} /><p>Before launch, confirm the business phone, email or messaging channel, address, hours, and privacy notice with the owner.</p></div>
        </div>
        <ContactForm />
      </section>

      <footer className="bg-brand-deep text-white">
        <div className="container flex flex-col gap-5 py-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3"><span className="grid h-9 w-9 place-items-center rounded-xl bg-white/10 text-[#a8d6c9]"><WashingMachine size={19} /></span><span><strong className="block text-sm">NTA Lavamos</strong><span className="text-[10px] text-white/55">Laundry shop concept</span></span></div>
          <p className="text-xs text-white/60">© {new Date().getFullYear()} NTA Lavamos. Demo concept — business details require owner approval.</p>
        </div>
      </footer>
      <div className="fixed bottom-3 right-3 z-50 rounded-md bg-brand-deep px-3 py-2 text-[9px] font-bold tracking-[0.12em] text-white shadow-lg">CONCEPT PREVIEW</div>
    </main>
  );
}
