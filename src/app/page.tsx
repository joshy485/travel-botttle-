"use client";

import { Header } from '@/components/landing/header';
import { Hero } from '@/components/landing/hero';
import dynamic from 'next/dynamic';

// Dynamically import components that are below the fold
const ProblemSolution = dynamic(() => import('@/components/landing/problem-solution').then(mod => mod.ProblemSolution));
const Features = dynamic(() => import('@/components/landing/features').then(mod => mod.Features));
const SecurityFeature = dynamic(() => import('@/components/landing/security-feature').then(mod => mod.SecurityFeature));
const HowItWorks = dynamic(() => import('@/components/landing/how-it-works').then(mod => mod.HowItWorks));
const ImageRail = dynamic(() => import('@/components/landing/image-rail').then(mod => mod.ImageRail));
const Footer = dynamic(() => import('@/components/landing/footer').then(mod => mod.Footer));
const FullWidthImage = dynamic(() => import('@/components/landing/full-width-image').then(mod => mod.FullWidthImage));

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
