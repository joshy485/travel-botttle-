import Image from 'next/image';
import { cn } from '@/lib/utils';

export const OnboardLogo = ({ className }: { className?: string }) => (
  <Image
    src="/images/Untitled Project.png"
    alt="ONBOARD Logo"
    width={32}
    height={32}
    className={cn('h-8 w-8', className)}
  />
);
