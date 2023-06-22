import { Inter } from "next/font/google";
import Link from "next/link";
import { SiAboutdotme } from 'react-icons/si'

const inter = Inter({ subsets: ['latin'] })

export default function AboutmeButton() {
    return (
        <Link href="/aboutme">
            <div className="sidebar-icon group">
                <div>
                    <SiAboutdotme size="32"/>
                </div>
                <span className="sidebar-tooltip group-hover:scale-100">About me</span>
            </div>
        </Link>
    )
}