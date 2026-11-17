"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 rounded-2xl border bg-white p-6 shadow-soft sm:p-8">
      <div>
        <h3 className="text-xl font-bold text-brand-deep">Send an inquiry</h3>
        <p className="mt-1 text-sm text-muted-foreground">Ask about services, rates, or turnaround time.</p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="contact-name">Your name</Label>
          <Input id="contact-name" name="name" autoComplete="name" placeholder="e.g. Maria" required maxLength={80} />
        </div>
        <div className="space-y-2">
          <Label htmlFor="contact-phone">Contact number</Label>
          <Input id="contact-phone" name="phone" type="tel" autoComplete="tel" placeholder="09XX XXX XXXX" maxLength={30} />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="contact-service">What would you like to ask about?</Label>
        <select id="contact-service" name="service" className="h-11 w-full rounded-lg border border-input bg-background px-3 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
          <option>Wash & fold</option>
          <option>Service rates</option>
          <option>Pickup and delivery</option>
          <option>Other inquiry</option>
        </select>
      </div>
      <div className="space-y-2">
        <Label htmlFor="contact-message">Message</Label>
        <Textarea id="contact-message" name="message" placeholder="How can the shop help?" required maxLength={1000} />
      </div>
      <Button type="submit" className="w-full">Submit demo inquiry</Button>
      {submitted && <p role="status" className="rounded-lg bg-brand-mint p-3 text-sm text-brand-deep">This is a website demo. Your message has not been sent or stored.</p>}
      <p className="text-center text-xs text-muted-foreground">Demo form only — no personal information is transmitted.</p>
    </form>
  );
}
