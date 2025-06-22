import Link from "next/link"
import Image from "next/image"

interface LogoProps {
  linkToHome?: boolean
  className?: string
  size?: "sm" | "md" | "lg" | "xl"
}

export function Logo({ linkToHome = true, className = "", size = "md" }: LogoProps) {
  // Define different logo sizes
  const sizeConfig = {
    sm: { width: 100, height: 32, class: "h-8" },
    md: { width: 140, height: 45, class: "h-11" },
    lg: { width: 180, height: 58, class: "h-14" },
    xl: { width: 220, height: 70, class: "h-16" },
    xxl: { width: 260, height: 84, class: "h-20" },
  }

  const config = sizeConfig[size]

  const logoElement = (
    <div className="flex items-center">
      <Image
        src={`/images/fixit-logo.png?height=${config.height}&width=${config.width}&text=LOGO`}
        alt="Fixit Logo"
        width={config.width}
        height={config.height}
        className={`${config.class} w-auto ${className}`}
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
