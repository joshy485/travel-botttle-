
import { Gem, Settings, Zap, Plane } from 'lucide-react';
import { Reveal } from '../shared/reveal';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const features = [
  {
    icon: <Zap className="h-6 w-6" />,
    name: 'Quick-Release Access',
    description: 'A quick-release buckle, designed for smooth, one-handed use. Grab or stow your bottle in seconds, even while on the move.',
  },
  {
    icon: <Gem className="h-6 w-6" />,
    name: 'Durable Nylon Construction',
    description: 'Crafted from high-strength woven nylon and reinforced, travel-grade plastics. Lightweight, flexible, and built for a lifetime of use.',
  },
  {
    icon: <Settings className="h-6 w-6" />,
    name: 'Universal Bottle Compatibility',
    description: 'The adjustable strap fits most modern bottles with handles, including popular styles like Yeti® and Stanley®, and secures directly to your carry-on.',
  },
  {
    icon: <Plane className="h-6 w-6" />,
    name: 'Carry-On Optimized Design',
    description: 'Slim, lightweight, and TSA-friendly. Purpose-built for rolling carry-on suitcases, keeping your bottle stable and accessible from terminal to gate.',
  },
];

export function Features() {
  const featureImage = PlaceHolderImages.find(img => img.id === 'features-section-image');
  return (
    <section className="py-24 sm:py-32">
      <div className="container mx-auto">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">Engineered for the Journey</h2>
            <p className="mt-4 text-lg leading-8 text-muted-foreground">
              Every detail of ONBOARD is designed to make your travel smoother and more secure.
            </p>
          </div>
        </Reveal>

        <div className="mt-20 max-w-lg sm:mx-auto md:max-w-none">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <Reveal key={feature.name} delay={index * 150}>
                <div className="flex flex-col items-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                    {feature.icon}
                  </div>
                  <dt className="mt-4 font-semibold text-foreground">{feature.name}</dt>
                  <dd className="mt-2 leading-7 text-muted-foreground">{feature.description}</dd>
                </div>
              </Reveal>
            ))}
          </dl>
        </div>
        
        {featureImage && (
          <Reveal>
            <div className="mt-24 relative aspect-video w-full max-w-6xl mx-auto rounded-lg overflow-hidden shadow-2xl">
              <Image
                src={featureImage.imageUrl}
                alt={featureImage.description}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 1280px"
                data-ai-hint={featureImage.imageHint}
              />
            </div>
          </Reveal>
        )}

      </div>
    </section>
  );
}
