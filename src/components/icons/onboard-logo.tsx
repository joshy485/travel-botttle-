import Image from 'next/image';
import { cn } from '@/lib/utils';

export const OnboardLogo = ({ className }: { className?: string }) => (
  <Image
    src="/images/Untitled Project (1).png"
    alt="ONBOARD Logo"
    width={150}
    height={40}
    className={cn('object-contain', className)}
  />
);
