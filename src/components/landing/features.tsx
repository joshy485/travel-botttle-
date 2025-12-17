import { Gem, Settings, Zap, Plane } from 'lucide-react';
import { Reveal } from '../shared/reveal';

const features = [
  {
    icon: <Zap className="h-6 w-6" />,
    name: 'Quick-Release Buckle',
    description: 'Instant access to your bottle with a one-handed click. Security meets convenience.',
  },
  {
    icon: <Gem className="h-6 w-6" />,
    name: 'Premium Materials',
    description: 'Crafted from aircraft-grade aluminum and durable woven nylon for a lifetime of travel.',
  },
  {
    icon: <Settings className="h-6 w-6" />,
    name: 'Universal Compatibility',
    description: 'The adjustable strap fits any bottle handle, including your favorite Yeti Rambler or Stanley cup, and attaches to any backpack, suitcase, or tote.',
  },
  {
    icon: <Plane className="h-6 w-6" />,
    name: 'Travel-Optimized Design',
    description: 'Sleek, lightweight, and TSA-friendly. Designed by travelers, for travelers.',
  },
];

export function Features() {
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
      </div>
    </section>
  );
}
