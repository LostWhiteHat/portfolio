import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
    title: 'Home',
};

export default function Page() {
    return (
        <main className="flex flex-col items-center justify-center min-h-[80vh] w-screen">
            <Image
                src={'./images/logo-no-background.svg'}
                alt="Buerdel development"
                width={900}
                height={900}
                className="sm:pt-0"
            />
        </main>
    );
}
