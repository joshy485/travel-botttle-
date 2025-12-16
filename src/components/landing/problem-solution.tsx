import { Lock, ShieldOff } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Reveal } from '../shared/reveal';

export function ProblemSolution() {
  return (
    <section className="py-24 sm:py-32 bg-secondary">
      <div className="container mx-auto">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">The Traveler's Dilemma</h2>
            <p className="mt-4 text-lg leading-8 text-muted-foreground">
              We've all been there. That sinking feeling when your bottle tumbles out of your bag.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12">
          <Reveal>
            <Card className="h-full border-destructive/50 bg-destructive/10">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-destructive/20 text-destructive">
                    <ShieldOff className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-destructive-foreground">The Problem: Insecurity</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4 text-destructive-foreground/80">
                <p>Bag pockets are unreliable. A sudden jolt, a tight squeeze, and your bottle is gone.</p>
                <p>You're left dehydrated, out of pocket, and contributing to plastic waste by buying a new one.</p>
              </CardContent>
            </Card>
          </Reveal>
          <Reveal delay={200}>
            <Card className="h-full border-primary/50 bg-primary/10">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/20 text-primary">
                    <Lock className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-primary">The Solution: ONBOARD</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4 text-foreground/80">
                <p>ONBOARD provides a rock-solid anchor for your water bottle, attaching it securely to any bag.</p>
                <p>Enjoy peace of mind, stay hydrated, and keep your favorite bottle with you, wherever you go.</p>
              </CardContent>
            </Card>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
