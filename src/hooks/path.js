import { useEffect, useState } from "react";
import { useResolvedPath } from 'react-router-dom';
const usePath = (pathInput) => {
    const { pathname } = useResolvedPath();
    const [isPath, setIsPath] = useState(false);
    useEffect(() => {
        pathname === pathInput ? setIsPath(true) : setIsPath(false);
    }, [pathname])
    return {isPath};
}
export default usePath;