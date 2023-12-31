'use client';
import { useSession, signIn, signOut } from 'next-auth/react';
import Image from 'next/image';
import { AiOutlineMail, AiOutlineUser } from 'react-icons/ai';

export default function LoginButton() {
    const { data: session } = useSession();
    if (session) {
        if (session.user?.name == null) {
            return (
                <div className="login-button group" onClick={() => signOut()}>
                    <AiOutlineMail size={33} />
                    <span className="login-tooltip group-hover:scale-100">
                        Logout
                    </span>
                </div>
            );
        }
        return (
            <div className="login-button group" onClick={() => signOut()}>
                <Image
                    src={session.user!.image!}
                    fill={true}
                    alt={session.user!.name!}
                    className="p-1"
                    unoptimized
                ></Image>
                <span className="login-tooltip group-hover:scale-100">
                    Logout
                </span>
            </div>
        );
    }
    return (
        <div className="login-button group" onClick={() => signIn()}>
            <AiOutlineUser size={33} color="white" />
            <span className="login-tooltip group-hover:scale-100">Login</span>
        </div>
    );
}
