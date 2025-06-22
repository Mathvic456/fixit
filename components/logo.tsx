import Link from "next/link"
import Image from "next/image"

interface LogoProps {
  linkToHome?: boolean
  className?: string
}

export function Logo({ linkToHome = true, className = "" }: LogoProps) {
  const logoElement = (
    <div className="flex items-center">
      <Image
        src="/images/fixit-logo.png"
        alt="Fixit Logo"
        width={0}
        height={40}
        className={`h-8 w-auto ${className}`}
        priority
      />
    </div>
  )

  if (linkToHome) {
    return (
      <Link href="/" className="flex items-center">
        {logoElement}
      </Link>
    )
  }

  return logoElement
}
