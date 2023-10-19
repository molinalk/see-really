import { createContext, useContext, useEffect, useState } from "react"
import * as Api from "../api";
const SeeReally = createContext("hoal desde el global");
const SeeReallyProvider = ({ children }) => {
    const [videos, setVideos] = useState({ loading: true });
    const [test, setTest] = useState(false);
    useEffect(() => {
        if (!sessionStorage.getItem("session")) {
            sessionStorage.setItem("session", "true");
            fetchData();
        } else {
            const videosSession = JSON.parse(sessionStorage.getItem("videos"));
            setVideos({ ...videos, ...videosSession });
        }
        console.log("Valor de session storage: ", sessionStorage.getItem("session"));
    }, [test])
    const fetchData = async () => {
        try {
            const listVideos = await Api.getVideos();
            const listVideosPromise = listVideos.map(async (item) => {
                const dataVideo = await Api.fetchVideo(item.code);
                return { ...dataVideo, id_category: item.id_category };
            });
            const videosData = await Promise.all(listVideosPromise);
            console.log(videosData);
            const videos = {
                loading: false,
                data: videosData
            }
            sessionStorage.setItem("videos", JSON.stringify(videos));
            setVideos(videos);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };
    return (
        <SeeReally.Provider value={{ videos, setVideos, test, setTest }}>
            {children}
        </SeeReally.Provider>
    );
};
export const useSeeReally = () => {
    return useContext(SeeReally);
};
export default SeeReallyProvider;