import Link from "next/link";
import { SiGithub } from 'react-icons/si'

const GithubButton: React.FC = () => {
    return (
        <Link href="https://github.com/LostWhiteHat" target="_blank">
            <div className="sidebar-icon group">
                <div>
                    <SiGithub size="36"/>
                </div>
                <span className="sidebar-tooltip group-hover:scale-100">GitHub</span>
            </div>
        </Link>
    )
}

export default GithubButton;