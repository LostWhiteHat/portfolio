export default function Custom404() {
    return (
        <div id="background" className="z-[98] fixed w-screen h-screen">
            <div id="stars"></div>
            <div id="stars2"></div>
            <div id="stars3"></div>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 285 80"
                preserveAspectRatio="xMidYMid slice"
                id="svg"
            >
                <defs>
                    <mask id="mask" x="0" y="0" width="100%" height="100%">
                        <rect
                            x="0"
                            y="0"
                            width="100%"
                            height="100%"
                            fill="white"
                        />
                        <text id="line1" x="103" y="40">
                            404
                        </text>
                        <text id="line2" x="70" y="60">
                            PAGE NOT FOUND
                        </text>
                    </mask>
                </defs>
                <rect x="0" y="0" width="100%" height="100%" fill="black" />
            </svg>
        </div>
    );
}
