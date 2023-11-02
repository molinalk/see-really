import { createContext, useContext, useEffect, useState } from "react";
import { getData } from "../firebase";

const SeeReally = createContext(null);
const SeeReallyProvider = ({ children }) => {
    const [videos, setVideos] = useState({ loading: true });
    const [categories, setCategories] = useState({ loading: true });
    useEffect(() => {
        if (!sessionStorage.getItem("session")) {
            sessionStorage.setItem("session", "true");
            fetchData();
        } else {
            const videosSession = JSON.parse(sessionStorage.getItem("videos"));
            const categoriesSession = JSON.parse(sessionStorage.getItem("categories"));
            setVideos({ ...videos, ...videosSession });
            setCategories({ ...categories, ...categoriesSession });
        }
    }, [])
    const fetchData = async () => {
        const data = [
            getData("videos"),
            getData("categories")
        ]
        const [listVideos, listCategories] = await Promise.all(data);
        const videos = {
            loading: false,
            data: listVideos
        }
        const categories = {
            loading: false,
            data: listCategories
        }
        sessionStorage.setItem("videos", JSON.stringify(videos));
        sessionStorage.setItem("categories", JSON.stringify(categories));
        setVideos(videos);
        setCategories(categories);
    };
    return (
        <SeeReally.Provider value={{ videos, setVideos, categories, setCategories }}>
            {children}
        </SeeReally.Provider>
    );
};
export const useSeeReally = () => {
    return useContext(SeeReally);
};
export default SeeReallyProvider;