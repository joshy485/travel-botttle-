import Image from "next/image";

export function OnboardLogo() {
  return (
    <Image
      src="/images/logo.png"
      alt="ONBOARD"
      width={140}
      height={32}
      priority
    />
  );
}
