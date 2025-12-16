import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import { OnboardLogo } from '@/components/icons/onboard-logo';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-bold">
          <OnboardLogo />
          <span className="text-lg">ONBOARD</span>
        </Link>
        <div className="flex items-center gap-4">
            <Button asChild className="group">
                <Link href="#early-access">
                    Get Early Access
                    <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
            </Button>
        </div>
      </div>
    </header>
  );
}
