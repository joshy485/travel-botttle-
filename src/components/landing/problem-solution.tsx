import { CheckCircle, XCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Reveal } from '../shared/reveal';

export function ProblemSolution() {
  return (
    <section id="problem-solution" className="py-24 sm:py-32 bg-secondary">
      <div className="container mx-auto">
        <Reveal>
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">The Traveler’s Dilemma</h2>
            <p className="mt-4 text-lg leading-8 text-muted-foreground">
             You know the moment. A sudden stop, a tight squeeze, and your bottle slips out of your bag — gone.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12 items-start">
          {/* The Problem */}
          <Reveal>
            <div className="space-y-6">
                <div className="flex items-center gap-4">
                    <XCircle className="h-10 w-10 text-destructive" />
                    <h3 className="text-2xl font-semibold text-foreground">The Problem: Unreliable Storage</h3>
                </div>
                <p className="text-muted-foreground">
                    Most bags weren’t designed to securely carry bottles. Side pockets stretch. Inner pockets tip. One sharp movement and your bottle is on the floor — or left behind entirely.
                </p>
                <div className="space-y-4">
                    <h4 className="font-semibold text-foreground">That means:</h4>
                    <ul className="space-y-3 text-muted-foreground">
                        <li className="flex items-start gap-3">
                            <XCircle className="h-5 w-5 text-destructive mt-1 shrink-0" />
                            <span>Scrambling through the airport</span>
                        </li>
                        <li className="flex items-start gap-3">
                             <XCircle className="h-5 w-5 text-destructive mt-1 shrink-0" />
                            <span>Losing hydration mid-journey</span>
                        </li>
                        <li className="flex items-start gap-3">
                             <XCircle className="h-5 w-5 text-destructive mt-1 shrink-0" />
                            <span>Buying another plastic bottle you didn’t plan on</span>
                        </li>
                    </ul>
                </div>
            </div>
          </Reveal>

          {/* The Solution */}
          <Reveal delay={200}>
            <Card className="h-full border-primary/50 bg-primary/10 shadow-lg">
                <CardHeader>
                    <div className="flex items-center gap-4">
                        <CheckCircle className="h-10 w-10 text-primary" />
                        <CardTitle className="text-2xl font-semibold text-primary">The Solution: ONBOARD</CardTitle>
                    </div>
                </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-foreground/80">
                  ONBOARD is built differently. It locks securely to the reinforced base point of your bag—not loose fabric or weak pockets—creating a stable, rock-solid anchor for your bottle.
                </p>
                <div>
                    <h4 className="font-semibold text-foreground/90">Move hands-free with essentials like:</h4>
                    <ul className="mt-3 space-y-2 text-foreground/80">
                         <li className="flex items-center gap-3">
                            <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                            <span>Passport & Travel Documents</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                            <span>AirPods & Earbuds</span>
                        </li>
                        <li className="flex items-center gap-3">
                           <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                            <span>Other small travel items</span>
                        </li>
                    </ul>
                </div>
                <p className="font-semibold text-foreground/90 !mt-6">
                    No juggling. No pocket stuffing. No stress. Just secure carry, easy access, and peace of mind.
                </p>
              </CardContent>
            </Card>
          </Reveal>
        </div>
      </div>
    </section>
  );
}