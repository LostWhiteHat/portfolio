import Link from "next/link";
import { SiGithub } from 'react-icons/si'

export default function GithubButton() {
    return (
        <Link href="https://github.com/LostWhiteHat" target="_blank">
            <div className="sidebar-icon group">
                <div>
                    <SiGithub size="36"/>
                </div>
            </div>
        </Link>
    )
}