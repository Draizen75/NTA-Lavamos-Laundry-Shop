'use client';

import { useState } from 'react';
import { ArrowRight, Check, Clock3, Droplets, Facebook, Heart, MapPin, Menu, Phone, Shirt, Sparkles, Truck, WashingMachine, X } from 'lucide-react';

const services = [
  { icon: Shirt, title: 'Wash & fold', text: 'Everyday clothes washed, dried, and neatly folded. Final service details to be confirmed.' },
  { icon: Sparkles, title: 'Freshen up', text: 'A convenient refresh for your weekly laundry routine. Available options to be confirmed.' },
  { icon: Truck, title: 'Pickup & delivery', text: 'Want laundry picked up or delivered? Ask the shop if this service is available.' },
];

const steps = [
  ['01', 'Bring your laundry', 'Visit the shop during confirmed business hours.'],
  ['02', 'Choose your service', 'The team can explain available services, rates, and turnaround time.'],
  ['03', 'Pick up fresh', 'Collect your clean laundry when your order is ready.'],
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [form, setForm] = useState({ name: '', phone: '', service: 'Wash & fold', message: '' });
  const [sent, setSent] = useState(false);

  const submitInquiry = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Laundry inquiry from ${form.name || 'website visitor'}`);
    const body = encodeURIComponent(`Name: ${form.name}\nContact: ${form.phone}\nService: ${form.service}\nMessage: ${form.message}\n\nPlease replace the placeholder email address in app/page.tsx before launch.`);
    window.location.href = `mailto:hello@example.com?subject=${subject}&body=${body}`;
    setSent(true);
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <main>
      <div className="announcement"><span className="announcement-dot" /> A little more fresh in every load <span className="announcement-divider">✳</span> Proudly local to Bato <span className="announcement-sparkle">✦</span></div>
      <header className="site-header">
        <a className="brand" href="#home" aria-label="NTA Lavamos home" onClick={closeMenu}>
          <span className="brand-mark"><Droplets size={25} strokeWidth={2.4} /></span>
          <span className="brand-copy"><strong>NTA <em>Lavamos</em></strong><small>LAUNDRY SHOP · BATO</small></span>
        </a>
        <button className="mobile-toggle" aria-label="Toggle navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
        <nav className={menuOpen ? 'nav nav-open' : 'nav'}>
          <a href="#services" onClick={closeMenu}>Our services</a><a href="#how-it-works" onClick={closeMenu}>How it works</a><a href="#about" onClick={closeMenu}>About us</a><a href="#visit" onClick={closeMenu}>Find us</a>
          <a className="nav-cta" href="#contact" onClick={closeMenu}>Get in touch <ArrowRight size={16} /></a>
        </nav>
      </header>

      <section className="hero" id="home">
        <div className="hero-copy">
          <div className="eyebrow"><span className="eyebrow-line" /> YOUR NEIGHBORHOOD LAUNDRY FRIEND</div>
          <h1>Fresh clothes.<br /><span>Happier days.</span></h1>
          <p className="hero-description">Laundry day feels lighter when someone’s got your back. Let us help make your everyday a little fresher.</p>
          <div className="hero-actions"><a className="button button-primary" href="#contact">Ask us about laundry <ArrowRight size={18} /></a><a className="text-link" href="#services">Explore services <span>↗</span></a></div>
          <div className="hero-trust"><div className="avatar-stack"><span>☺</span><span>✿</span><span>♡</span></div><div><strong>A friendly local touch</strong><small>Here for the Bato community</small></div><span className="trust-heart"><Heart size={18} fill="currentColor" /></span></div>
        </div>
        <div className="hero-visual">
          <div className="visual-blob" />
          <div className="photo-frame"><img src="https://images.unsplash.com/photo-1604335399105-0c5a2e2c7f0a?auto=format&fit=crop&w=1100&q=85" alt="Fresh folded laundry and a clean, bright laundry space" /></div>
          <div className="floating-note note-top"><span className="note-icon"><Sparkles size={19} /></span><span><strong>A fresh start</strong><small>One load at a time</small></span></div>
          <div className="floating-note note-bottom"><span className="note-icon note-blue"><WashingMachine size={20} /></span><span><strong>Made for your routine</strong><small>Easy, everyday laundry care</small></span></div>
          <div className="sun-doodle">✳</div><div className="dot-pattern" />
        </div>
        <div className="hero-bottom"><span>GOOD CARE, GOOD DAY</span><span className="hero-bottom-line" /><span>SCROLL TO DISCOVER ↓</span></div>
      </section>

      <section className="welcome-strip"><div className="welcome-icon"><Heart size={22} /></div><p><strong>Hey, Bato!</strong> Your laundry deserves a little love. We’re happy you stopped by.</p><span className="welcome-flower">✿</span></section>

      <section className="section services-section" id="services">
        <div className="section-heading"><div><div className="eyebrow"><span className="eyebrow-line" /> LESS LAUNDRY STRESS</div><h2>Care for your clothes,<br /><span>care for your day.</span></h2></div><p>From the weekly pile-up to the little things in between, find the laundry help that fits your routine.</p></div>
        <div className="service-grid">{services.map(({ icon: Icon, title, text }, i) => <article className="service-card" key={title}><div className={`service-icon service-icon-${i}`}><Icon size={25} /></div><span className="card-number">0{i + 1}</span><h3>{title}</h3><p>{text}</p><a href="#contact" className="card-link">Ask about this service <ArrowRight size={16} /></a></article>)}</div>
        <div className="service-footnote"><span>✳</span> Don’t see what you need? Just ask us — we’d love to help.</div>
      </section>

      <section className="process-section" id="how-it-works"><div className="process-inner"><div className="process-heading"><div className="eyebrow eyebrow-light"><span className="eyebrow-line" /> EASY AS 1, 2, 3</div><h2>A simpler laundry<br /><span>kind of day.</span></h2><p>No fuss, no guesswork. Here’s how to get started with your next load.</p><a className="button button-light" href="#contact">Let’s get started <ArrowRight size={17} /></a></div><div className="steps">{steps.map(([number, title, text]) => <div className="step" key={number}><span className="step-number">{number}</span><div><h3>{title}</h3><p>{text}</p></div><Check className="step-check" size={20} /></div>)}</div><div className="process-flower">✿</div></div></section>

      <section className="about-section section" id="about"><div className="about-photo"><img src="https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?auto=format&fit=crop&w=1000&q=85" alt="Fresh clean laundry neatly arranged" /><div className="about-sticker"><span>LOCAL</span><strong>LOVE</strong><small>✳ BATO, CAMARINES SUR ✳</small></div></div><div className="about-copy"><div className="eyebrow"><span className="eyebrow-line" /> A LITTLE ABOUT US</div><h2>Your local laundry<br />stop, with a <span>lot of heart.</span></h2><p className="about-lead">We’re NTA Lavamos Laundry Shop, part of the neighborhood here in Bato.</p><p>We believe taking care of your clothes should feel simple and welcoming. Whether it’s your weekly wash or a busy-day backup, we’re here to make laundry one less thing on your mind.</p><div className="about-points"><div><span>♡</span> Friendly neighborhood service</div><div><span>✳</span> Everyday laundry convenience</div></div><a className="text-link" href="#visit">Come say hello <span>↗</span></a></div></section>

      <section className="visit-section" id="visit"><div className="visit-card"><div className="visit-copy"><div className="eyebrow"><span className="eyebrow-line" /> COME ON OVER</div><h2>We’re right<br /><span>around the corner.</span></h2><p>Find us on Poblacion Road in Bato. We’d love to see you!</p><div className="visit-detail"><MapPin size={19} /><span><strong>Find our shop</strong><small>Poblacion Road, Bato, Camarines Sur</small></span></div><div className="visit-detail"><Clock3 size={19} /><span><strong>Shop hours</strong><small>[Confirm opening days and hours]</small></span></div><a className="button button-primary" href="https://www.google.com/maps/search/?api=1&query=NTA+Lavamos+Laundry+Shop+Bato+Camarines+Sur" target="_blank" rel="noreferrer">Open in Google Maps <ArrowRight size={17} /></a></div><div className="map-panel"><div className="map-grid" /><div className="map-road road-one" /><div className="map-road road-two" /><div className="map-road road-three" /><div className="map-pin"><MapPin size={27} fill="currentColor" /></div><div className="map-label"><strong>NTA Lavamos</strong><small>Poblacion Road · Bato</small></div><span className="map-caption">A LITTLE PLACE, A LOT OF FRESH ♡</span></div></div></section>

      <section className="contact-section section" id="contact"><div className="contact-intro"><div className="eyebrow"><span className="eyebrow-line" /> WE’RE ALL EARS</div><h2>Have a question?<br /><span>Let’s talk laundry.</span></h2><p>Need to know about rates, services, or when to drop by? Send us a note and we’ll be happy to help.</p><div className="contact-note"><span>✿</span><p><strong>Prefer a quick chat?</strong><br />Call or message us using the shop’s confirmed contact details.</p></div></div><form className="contact-form" onSubmit={submitInquiry}><div className="form-heading"><h3>Send an inquiry</h3><p>We’ll point you in the right direction.</p></div><label>Your name<input required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder="e.g. Juan dela Cruz" /></label><label>Contact number<input value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} placeholder="Your mobile number" /></label><label>What can we help with?<select value={form.service} onChange={e => setForm({ ...form, service: e.target.value })}><option>Wash & fold</option><option>Rates and turnaround</option><option>Pickup & delivery availability</option><option>Other question</option></select></label><label>Your message<textarea rows={3} value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} placeholder="Tell us what you need..." /></label><button className="button button-primary form-submit" type="submit">Send inquiry <ArrowRight size={17} /></button><small className="form-disclaimer">Demo form: replace hello@example.com with the shop’s approved email before launch.</small>{sent && <p className="form-success" role="status">Your email app should open with your inquiry. This demo uses a placeholder email address.</p>}</form></section>

      <footer className="footer"><div className="footer-main"><a className="brand brand-footer" href="#home"><span className="brand-mark"><Droplets size={24} /></span><span className="brand-copy"><strong>NTA <em>Lavamos</em></strong><small>LAUNDRY SHOP · BATO</small></span></a><p>A little more fresh in every load.<br />Made with care for our Bato neighbors.</p><div className="footer-social"><a href="#contact" aria-label="Contact"><Phone size={17} /></a><a href="#contact" aria-label="Facebook page placeholder"><Facebook size={17} /></a></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} NTA Lavamos Laundry Shop. Demo concept.</span><span>Made with <Heart size={13} fill="currentColor" /> in Bicol</span></div></footer>
      <div className="demo-ribbon">CONCEPT PREVIEW · BUSINESS DETAILS NEED OWNER APPROVAL</div>
    </main>
  );
}
