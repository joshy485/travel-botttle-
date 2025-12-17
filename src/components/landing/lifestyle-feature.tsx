"use client";

import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Reveal } from '../shared/reveal';
import { Button } from '../ui/button';
import { ArrowUp } from 'lucide-react';

export function LifestyleFeature() {
  const image = PlaceHolderImages.find(img => img.id === 'lifestyle-image-1');

  const scrollToTop = () => {
    document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToEmail = () => {
    const hero = document.querySelector('section');
    if (hero) {
      hero.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-24 sm:py-32 bg-secondary">
      <div className="container mx-auto">
        <div className="relative aspect-video w-full max-w-5xl mx-auto rounded-lg overflow-hidden shadow-2xl">
          {image && (
            <Image
              src={image.imageUrl}
              alt={image.description}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 1280px"
              data-ai-hint={image.imageHint}
            />
          )}
           <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
           <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 text-white">
            <Reveal>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">
                Ready for Adventure
              </h2>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-4 max-w-xl text-lg leading-8 text-white/90">
                Your journey doesn't stop at the airport. ONBOARD is designed for every step of your adventure, keeping you hydrated and ready for whatever comes next.
              </p>
            </Reveal>
             <Reveal delay={400} className="mt-8">
                <Button size="lg" onClick={scrollToEmail} className="group">
                  Get Early Access
                  <ArrowUp className="ml-2 h-4 w-4 transition-transform group-hover:-translate-y-1" />
                </Button>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
