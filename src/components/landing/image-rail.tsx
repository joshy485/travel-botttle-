"use client";

import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Reveal } from '../shared/reveal';

const railImageIds = ['rail-image-2'];

export function ImageRail() {
  const railImages = PlaceHolderImages.filter(img => railImageIds.includes(img.id));
  
  return (
    <section className="py-24 sm:py-32 overflow-hidden">
      <div className="container mx-auto">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">For Every Leg of the Journey</h2>
            <p className="mt-4 text-lg leading-8 text-muted-foreground">
              From the airport terminal to your final destination, ONBOARD is with you.
            </p>
          </div>
        </Reveal>

        <div className="mt-20 flex justify-center">
          {railImages.map((image) => {
            return (
              <div
                key={image.id}
                className="relative aspect-video w-full max-w-4xl rounded-lg overflow-hidden shadow-2xl"
              >
                <Image
                  src={image.imageUrl}
                  alt={image.description}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 896px"
                  data-ai-hint={image.imageHint}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
