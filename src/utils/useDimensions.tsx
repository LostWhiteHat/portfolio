import { useEffect, useRef } from "react"

const useDimensions = (ref: any) => {
    const dimensions = useRef({width: 0, height: 0});

    useEffect(() => {
        dimensions.current.width = ref.current.offsetWidth;
        dimensions.current.width = ref.current.offsetHeight;
    }, [ref]);

    return dimensions.current;
}

export default useDimensions;