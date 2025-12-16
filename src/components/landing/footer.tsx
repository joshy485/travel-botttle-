import Link from 'next/link';
import { EmailCaptureForm } from './email-capture-form';
import { OnboardLogo } from '@/components/icons/onboard-logo';

export function Footer() {
  return (
    <footer id="early-access" className="bg-secondary/50 border-t border-border">
      <div className="container py-24 sm:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">
              Be the First to <span className="text-primary">ONBOARD</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Join our exclusive mailing list to get launch updates, early bird discounts, and travel tips. Your next adventure is waiting.
            </p>
            <EmailCaptureForm />
          </div>
          <div className="flex flex-col items-start lg:items-end">
            <Link href="/" className="flex items-center gap-2 font-bold">
              <OnboardLogo />
              <span className="text-lg">ONBOARD</span>
            </Link>
            <p className="mt-4 text-muted-foreground text-left lg:text-right max-w-sm">
              The ultimate solution to keep your water bottle secure and accessible while you travel.
            </p>
            <div className="mt-8 text-sm text-muted-foreground">
              © {new Date().getFullYear()} ONBOARD. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
