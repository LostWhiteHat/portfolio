import NavButton from '../compontents/buttons/NavButton';

const Contact = () => {
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
                        placeholder="Name"
                        required
                    />
                    <input
                        className="form-input"
                        type="email"
                        name="mail"
                        required
                        placeholder="Email"
                    />
                    <textarea name="message" placeholder="Message" required />
                    <input
                        type="submit"
                        value={'Submit'}
                        className="w-full mt-5 form-submit"
                    />
                </form>
            </div>
        </main>
    );
};

export default Contact;
