"use client";

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Reveal } from '../shared/reveal';
import { EmailCaptureForm } from './email-capture-form';

export function Hero() {
  const [offsetY, setOffsetY] = useState(0);
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-background');

  const handleScroll = () => {
    setOffsetY(window.pageYOffset);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative h-auto min-h-[700px] w-full flex items-center justify-center text-center overflow-hidden py-24 sm:py-32">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          priority
          className="object-cover z-0"
          style={{ transform: `translateY(${offsetY * 0.3}px)` }}
          data-ai-hint={heroImage.imageHint}
        />
      )}
      <div className="absolute inset-0 bg-background/70 z-10" />
      <div className="container relative z-20 flex flex-col items-center">
        <Reveal>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl md:text-7xl font-headline">
            Travel Hydration, <span className="text-primary">Secured.</span>
          </h1>
        </Reveal>
        <Reveal delay={200}>
          <p className="mt-6 max-w-3xl text-lg text-foreground/80 sm:text-xl">
            Never lose your water bottle again. ONBOARD is the ultimate travel companion that keeps your hydration locked in and ready for any adventure. Sign up for launch updates and an exclusive early bird discount.
          </p>
        </Reveal>
        <Reveal delay={400} className="w-full max-w-2xl mx-auto">
          <EmailCaptureForm />
        </Reveal>
      </div>
    </section>
  );
}
