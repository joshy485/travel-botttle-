"use client";

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Reveal } from '../shared/reveal';

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
    <section className="relative h-[85vh] min-h-[600px] w-full flex items-center justify-center text-center overflow-hidden">
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
          <p className="mt-6 max-w-2xl text-lg text-foreground/80 sm:text-xl">
            Never lose your water bottle again. ONBOARD is the ultimate travel companion that keeps your hydration locked in and ready for any adventure.
          </p>
        </Reveal>
        <Reveal delay={400}>
          <div className="mt-10">
            <Button asChild size="lg" className="group">
              <Link href="#early-access">
                Get Early Access
                <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
