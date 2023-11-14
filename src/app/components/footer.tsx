import Link from 'next/link';
import { SiGithub, SiLinkedin } from 'react-icons/si';

export default function Footer() {
    return (
        <footer className="fixed w-screen bottom-3 left-2 text-sm text-white z-[51]">
            <p>
                Copyright <span>&copy;</span> 2023 Patrick Bürdel
            </p>

            <Link
                href={
                    'https://www.linkedin.com/in/patrick-b%C3%BCrdel-872647255/'
                }
                target="_blank"
            >
                <div className="social-button fixed right-8 bottom-3 group">
                    <SiLinkedin size={26} color="white" />
                    <span className="social-tooltip group-hover:scale-100">
                        LinkedIn
                    </span>
                </div>
            </Link>

            <Link href={'https://github.com/LostWhiteHat'} target="_blank">
                <div className="social-button fixed right-24 bottom-3 group">
                    <SiGithub size={26} color="white" />
                    <span className="social-tooltip group-hover:scale-100">
                        Github
                    </span>
                </div>
            </Link>
        </footer>
    );
}
