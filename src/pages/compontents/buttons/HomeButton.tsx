import Link from "next/link";
import { SiBookalope } from 'react-icons/si'



export default function HomeButton() {
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