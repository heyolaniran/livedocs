import { HeaderProps } from "@/types"
import { Dock } from "lucide-react"
import Link from "next/link"

export const Header = ({children} :  HeaderProps) => {
  return (
    <div className="header">
        <Link href={'/'} className="md:flex-1">
            <Dock className="w-8 h-8 text-white" />
        </Link>

        {children}

    </div>
  )
}
