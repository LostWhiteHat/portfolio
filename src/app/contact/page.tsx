import { useSession } from 'next-auth/react';
import { useState } from 'react';

export default function Contact() {
    const { data: session } = useSession();
    const defaultModel = {
        name: session?.user?.name!,
        email: session?.user?.email!,
        message: '',
    };
    const [model, setModel] = useState(defaultModel);
    const handleChange = (e: any) => {
        setModel({
            ...model,
            [e.target.name]: e.target.value?.trim(),
        });
    };

    return (
        <main className="flex h-screen ml-5 mr-5 items-center justify-center">
            <div className="bg-secondary h-[535px] w-[500px] rounded-xl shadow-2xl flex items-center flex-col">
                <h1 className="text-center text-4xl text-white mt-5">
                    Contact<b className="text-blue-600"> me</b>
                </h1>
                <form
                    action="mailto:info@buerdel.dev"
                    method="post"
                    encType="text/plain"
                    className="relative mt-5 w-[95%] h-[40px]"
                >
                    <input
                        className="form-input"
                        type="text"
                        name="name"
                        onChange={handleChange}
                        value={model.name}
                        placeholder="Name"
                        required
                    />
                    <input
                        className="form-input"
                        type="email"
                        name="mail"
                        onChange={handleChange}
                        value={model.email}
                        placeholder="Email"
                        required
                    />
                    <textarea
                        name="message"
                        onChange={handleChange}
                        value={model.message}
                        placeholder="Message"
                        required
                    />
                    <input
                        type="submit"
                        value={'Submit'}
                        className="w-full mt-5 form-submit"
                    />
                </form>
            </div>
        </main>
    );
}
