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
    <section className="relative w-full h-[600px] overflow-hidden">
      <Reveal>
        <Image
          src={image.imageUrl}
          alt={image.description}
          fill
          className="object-cover"
          sizes="100vw"
          data-ai-hint={image.imageHint}
        />
      </Reveal>
    </section>
  );
}
