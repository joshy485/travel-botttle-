"use client";

import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Reveal } from '../shared/reveal';

export function FullWidthImage() {
  const image = PlaceHolderImages.find(img => img.id === 'full-width-journey');

  if (!image) {
    return null;
  }

  return (
    <section className="py-12 sm:py-16">
      <div className="container mx-auto">
        <Reveal>
          <div className="relative aspect-video w-full max-w-6xl mx-auto rounded-lg overflow-hidden shadow-2xl">
            <Image
              src={image.imageUrl}
              alt={image.description}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 1280px"
              data-ai-hint={image.imageHint}
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
