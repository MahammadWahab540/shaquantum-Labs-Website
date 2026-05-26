import Link from "next/link";
import Image from "next/image";

interface LogoProps {
  variant?: "dark" | "light";
  size?: "sm" | "md" | "lg";
  showTagline?: boolean;
}

export default function Logo({
  variant = "dark",
  size = "md",
  showTagline = false,
}: LogoProps) {
  const height = size === "sm" ? 36 : size === "lg" ? 52 : 44;

  return (
    <Link href="/" className="flex items-center flex-shrink-0 group">
      <Image
        src="/Images/Logo.png"
        alt="ShaQuantum Labs"
        height={height}
        width={height * 6}
        className="w-auto object-contain"
        style={{
          height: `${height}px`,
          filter: variant === "light" ? "brightness(0) invert(1)" : "none",
        }}
        priority
      />
    </Link>
  );
}
