import Link from "next/link";
import { SiAboutdotme } from 'react-icons/si'

const AboutmeButton: React.FC = () => {
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

export default AboutmeButton;