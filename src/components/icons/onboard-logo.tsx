import Image from "next/image";

export function OnboardLogo() {
  return (
    <Image
      src="https://firebasestorage.googleapis.com/v0/b/studio-2809710753-e6d64.appspot.com/o/logo.png?alt=media"
      alt="ONBOARD"
      width={140}
      height={32}
      priority
    />
  );
}
