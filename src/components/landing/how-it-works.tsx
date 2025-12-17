import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Reveal } from '../shared/reveal';

const steps = [
  {
    id: 'how-it-works-1',
    name: 'Loop It',
    description: 'Secure the holder straps through your carry-on’s top and side handles to attach the holder to your bag.',
  },
  {
    id: 'how-it-works-2',
    name: 'Secure It',
    description: 'Adjust the straps so the holder sits firmly against the side of your carry-on.',
  },
  {
    id: 'how-it-works-3',
    name: 'Lock It',
    description: 'Pull the straps tight and lock them in place. Your bottle is now securely ONBOARD.',
  },
];

export function HowItWorks() {
  const images = PlaceHolderImages.filter(img => steps.some(step => step.id === img.id));

  return (
    <section className="py-24 sm:py-32 bg-secondary">
      <div className="container mx-auto">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">Simple. Secure. Ready in Seconds.</h2>
            <p className="mt-4 text-lg leading-8 text-muted-foreground">
              Getting set up with ONBOARD is as easy as 1, 2, 3.
            </p>
          </div>
        </Reveal>

        <div className="mt-20 grid grid-cols-1 gap-16 md:grid-cols-3">
          {steps.map((step, index) => {
            const image = images.find(img => img.id === step.id);
            return (
              <Reveal key={step.id} delay={index * 150}>
                <div className="flex flex-col items-center text-center">
                  {image && (
                    <div className="relative w-full aspect-square overflow-hidden rounded-lg shadow-lg">
                      <Image
                        src={image.imageUrl}
                        alt={image.description}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        data-ai-hint={image.imageHint}
                      />
                    </div>
                  )}
                  <div className="mt-8">
                    <h3 className="text-lg font-semibold text-primary">
                      <span className="text-3xl font-bold">{`0${index + 1}`}</span> {step.name}
                    </h3>
                    <p className="mt-2 text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
