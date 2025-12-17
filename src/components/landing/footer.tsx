import Link from 'next/link';
import { OnboardLogo } from '../icons/onboard-logo';
import { Button } from '../ui/button';
import { ChevronRight } from 'lucide-react';

export function Footer() {
  return (
    <footer id="early-access" className="bg-secondary/50 border-t border-border">
      <div className="container mx-auto py-24 sm:py-32">
        <div className="flex flex-col items-center text-center">
            <Link href="/" className="flex items-center gap-2 font-bold">
              <OnboardLogo />
            </Link>
            <div className="mt-8">
              <Button asChild size="lg">
                <Link href="#hero" className="group">
                  Get Early Access
                  <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
            <p className="mt-8 text-muted-foreground max-w-sm">
              The ultimate solution to keep your water bottle secure and accessible while you travel.
            </p>
            <div className="mt-8 text-sm text-muted-foreground">
              © {new Date().getFullYear()} ONBOARD. All rights reserved.
            </div>
        </div>
      </div>
    </footer>
  );
}
