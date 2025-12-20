import Image from 'next/image';
import { cn } from '@/lib/utils';

export const OnboardLogo = ({ className }: { className?: string }) => (
  <Image
    src="/images/onboard-logo.png"
    alt="ONBOARD Logo"
    width={180}
    height={48}
    className={cn('object-contain', className)}
  />
);
