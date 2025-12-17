import Link from 'next/link';
import Image from 'next/image';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-bold">
          <Image
            src="/images/Image December 17, 2025 - 1_16PM.jpeg"
            alt="ONBOARD Logo"
            width={120}
            height={32}
            className="object-contain"
          />
        </Link>
      </div>
    </header>
  );
}
