"use client";

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Reveal } from '../shared/reveal';

const railImageIds = ['rail-image-1', 'rail-image-2', 'rail-image-3', 'rail-image-4'];

export function ImageRail() {
  const [offsetY, setOffsetY] = useState(0);
  const railImages = PlaceHolderImages.filter(img => railImageIds.includes(img.id));
  const sectionRef = useRef<HTMLDivElement>(null);
  const [sectionTop, setSectionTop] = useState(0);

  const handleScroll = () => {
    setOffsetY(window.pageYOffset);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    if (sectionRef.current) {
      setSectionTop(sectionRef.current.offsetTop);
    }
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="py-24 sm:py-32 overflow-hidden" ref={sectionRef}>
      <div className="container mx-auto">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">For Every Leg of the Journey</h2>
            <p className="mt-4 text-lg leading-8 text-muted-foreground">
              From the airport terminal to the mountain trail, ONBOARD is with you.
            </p>
          </div>
        </Reveal>

        <div className="mt-20 relative grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 h-[600px] md:h-[400px]">
          {railImages.map((image, index) => {
            const isEven = index % 2 === 0;
            const parallaxFactor = (offsetY - sectionTop) * 0.05;
            return (
              <div
                key={image.id}
                className="relative rounded-lg overflow-hidden shadow-2xl transition-transform duration-300 ease-out"
                style={{
                  transform: `translateY(${parallaxFactor * (isEven ? -1 : 1)}px)`,
                  marginTop: isEven ? '0' : '50px'
                }}
              >
                <Image
                  src={image.imageUrl}
                  alt={image.description}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 25vw"
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
