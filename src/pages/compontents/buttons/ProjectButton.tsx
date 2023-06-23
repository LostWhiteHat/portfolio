import Link from "next/link";
import { SiGithubactions } from 'react-icons/si'

const HomeButton: React.FC = () => {
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

export default HomeButton;