import NavMenu from '@/app/components/Nav/NavMenu';
import LoginButton from '@/app/components/buttons/LoginButton';
import Waves from '@/app/components/waves/waves';

export default function Header() {
    return (
        <header className="fixed z-50">
            <LoginButton />
            <NavMenu />
            <Waves />
        </header>
    );
}
