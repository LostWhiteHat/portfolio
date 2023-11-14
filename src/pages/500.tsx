export default function Custom500() {
    return (
        <div className="fixed h-screen w-screen flex items-center justify-center flex-col">
            <div>
                <h1 className="text-9xl text-red-700">500</h1>
                <h1 className="text-5xl text-white">Internal Server Error</h1>
            </div>
        </div>
    );
}
