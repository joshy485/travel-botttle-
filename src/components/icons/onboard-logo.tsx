
import Image from 'next/image';
import { cn } from '@/lib/utils';

export const OnboardLogo = ({ className }: { className?: string }) => (
  <Image
    src="/images/Whisk_935a5efb63f575bb9c940da82f6c9764dr.png"
    alt="ONBOARD Logo"
    width={180}
    height={48}
    className={cn('object-contain', className)}
  />
);
