import { useEffect, useState } from "react";
import { useResolvedPath } from 'react-router-dom';
const usePath = () => {
    const { pathname } = useResolvedPath();
    const [isPath, setIsPath] = useState(false);
    useEffect(() => {
        pathname === "/create-video" ? setIsPath(!isPath) : setIsPath(!isPath);
    }, [pathname])
    return {isPath};
}
export default usePath;