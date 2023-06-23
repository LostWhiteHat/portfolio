import Link from "next/link";
import { SiBookalope } from 'react-icons/si'

const HomeButton: React.FC = () => {
    return (
        <Link href="/">
            <div className="sidebar-icon group">
                <div>
                    <SiBookalope size="32"/>
                </div>
                <span className="sidebar-tooltip group-hover:scale-100">Home</span>
            </div>
        </Link>
    )
}

export default HomeButton;