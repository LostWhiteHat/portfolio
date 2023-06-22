export default function Waves() {
    return  (
        <div className='fixed bottom-0 left-0 right-0'>
          <svg className="relative w-full h-[12vh] min-h-[100px] max-h-[150px]" 
            xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 24 150 28" preserveAspectRatio="none" shapeRendering="auto">
            <defs>
            <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
            </defs>
            <g className="parallax">
            <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(37,99,235,0.6)" />
            <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(37,99,235,0.4)" />
            <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(37,99,235,0.2)" />
            <use xlinkHref="#gentle-wave" x="48" y="7" fill="rgba(37,99,235,0.9)" />
            </g>
          </svg>
        </div>
    )
}