import CategoryItem from "./categoryItem";
import { useFetch } from "../hooks/fetch";
import { useEffect, useState } from "react";
const Category = ({ dataCategory }) => {
    const [videos, setVideos] = useState([]);
    const videosData = useFetch("http://localhost:3000/videos").data;
    useEffect(() => {
        if (videosData) {
            const videoFilter = videosData.filter(video => Number(video.id_category) === Number(dataCategory.id));
            setVideos(videoFilter);
        }
    }, [videosData, dataCategory])
    return (
        videos.length > 0 &&
        <section className="flex flex-col gap-4">
            <p className="font-semibold text-lg">{dataCategory.title}</p>
            <div className="flex">
                {
                    videos.map((video, index) => <CategoryItem key={index} data={video} />)
                }
            </div>
        </section>
    )
}
export default Category;