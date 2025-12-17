import { Header } from '@/components/landing/header';
import { Hero } from '@/components/landing/hero';
import { ProblemSolution } from '@/components/landing/problem-solution';
import { Features } from '@/components/landing/features';
import { SecurityFeature } from '@/components/landing/security-feature';
import { HowItWorks } from '@/components/landing/how-it-works';
import { ImageRail } from '@/components/landing/image-rail';
import { Footer } from '@/components/landing/footer';
import { FullWidthImage } from '@/components/landing/full-width-image';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <Hero />
        <ProblemSolution />
        <Features />
        <SecurityFeature />
        <FullWidthImage />
        <HowItWorks />
        <ImageRail />
      </main>
      <Footer />
    </div>
  );
}
