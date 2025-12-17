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
                  Stop juggling loose items at the security checkpoint. ONBOARD keeps your water bottle and small essentials securely attached to your carry-on, so everything moves through the scanner together.
                </p>
                <p className="mt-4 text-lg leading-8 text-muted-foreground">
                  When you need to detach, the quick-release buckle lets you remove your bottle in seconds—no stress, no delays. Travel smarter. Move faster.
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
