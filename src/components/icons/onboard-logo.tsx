import { cn } from '@/lib/utils';

export const OnboardLogo = ({ className }: { className?: string }) => (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={cn('h-8 w-8 text-primary', className)}>
        <path d="M16 3.5L28.5 10V22L16 28.5L3.5 22V10L16 3.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M10 13L16 16.5L22 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);
