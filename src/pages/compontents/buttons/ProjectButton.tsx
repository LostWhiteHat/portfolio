import { Inter } from "next/font/google";
import Link from "next/link";
import { SiGithubactions } from 'react-icons/si'

const inter = Inter({ subsets: ['latin'] })

export default function HomeButton() {
    return (
        <Link href="/projects">
            <div className="sidebar-icon group">
                <div>
                    <SiGithubactions size="36"/>
                </div>
                <span className="sidebar-tooltip group-hover:scale-100">Projects</span>
            </div>
        </Link>
    )
}