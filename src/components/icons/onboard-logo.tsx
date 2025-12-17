import Image from 'next/image';
import { cn } from '@/lib/utils';

export const OnboardLogo = ({ className }: { className?: string }) => (
  <Image
    src="/images/Generated Image December 17, 2025 - 1_16PM.jpeg"
    alt="ONBOARD Logo"
    width={120}
    height={32}
    className={cn('object-contain mix-blend-screen', className)}
  />
);
