import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Reveal } from '../shared/reveal';
import { ShieldCheck } from 'lucide-react';

export function SecurityFeature() {
  const image = PlaceHolderImages.find(img => img.id === 'security-feature-image');

  return (
    <section className="py-24 sm:py-32">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <Reveal>
            <div className="lg:pr-8">
              <div className="max-w-xl">
                <div className="flex items-center gap-3 text-primary">
                    <ShieldCheck className="h-8 w-8" />
                    <p className="text-lg font-semibold">TSA Friendly</p>
                </div>
                <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">
                  Breeze Through Security
                </h2>
                <p className="mt-6 text-lg leading-8 text-muted-foreground">
                  Stop juggling your items at the security checkpoint. The ONBOARD strap keeps your bottle attached to your bag, so you can send them through the scanner together. It's one less thing to worry about.
                </p>
                <p className="mt-4 text-lg leading-8 text-muted-foreground">
                    Our quick-release buckle means you can easily detach your bottle if needed, without any fuss. Travel smarter, not harder.
                </p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={200}>
            {image && (
              <div className="relative aspect-video w-full overflow-hidden rounded-lg shadow-2xl">
                <Image
                  src={image.imageUrl}
                  alt={image.description}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  data-ai-hint={image.imageHint}
                />
              </div>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
