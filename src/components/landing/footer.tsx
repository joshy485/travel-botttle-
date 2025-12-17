import Link from 'next/link';
import { OnboardLogo } from '../icons/onboard-logo';

export function Footer() {
  return (
    <footer id="early-access" className="bg-secondary/50 border-t border-border">
      <div className="container py-24 sm:py-32">
        <div className="flex flex-col items-center text-center">
            <Link href="/" className="flex items-center gap-2 font-bold">
              <OnboardLogo />
            </Link>
            <p className="mt-4 text-muted-foreground max-w-sm">
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
