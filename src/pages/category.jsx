import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as Api from '../api';
import CategoryItem from "../components/categoryItem";
import { useSeeReally } from "../context";
const Category = () => {
    const { category: titleCategory } = useParams();
    const [category, setCategory] = useState(null);
    const [videos, setVideos] = useState(null);
    const {data:videosData}=useSeeReally().videos;
    useEffect(() => {
        (async () => {
            let category = (await Api.getCategoryByName(titleCategory))[0];
            let videos = videosData.filter(video => Number(video.id_category) === Number(category.id)); 
            setCategory(category);
            setVideos(videos);
        })();
    }, [])
    return (category && videos) && (
        <section className="flex-grow">
            <div className="relative ">
                <div style={{ backgroundImage: `url(${category.frond_page})` }} className="w-full h-full absolute bg-no-repeat bg-cover bg-center" />
                <div className="relative w-full h-full bg-black/30 bg-gradient-to-b from-black to-transparent to-50%">
                    <div className="h-full m-auto px-4 py-8 flex flex-col justify-center items-center md:w-10/12 lg:w-4/6 gap-2 ">
                        <p className="text-white text-2xl w-full text-left font-semibold md:text-3xl lg:text-4xl" >{category.title}</p>
                        <p className="scroll text-white text-lg text-left w-full overflow-y-auto md:text-xl lg:text-2xl ">{category.description}</p>
                    </div>
                </div>
            </div>
            <div className="md:w-10/12 lg:w-4/6 m-auto p-4 lg:py-8">
                <p className="font-semibold text-xl pb-3">Videos</p>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 w-full max-md:pb-14 justify-center gap-4">
                    {
                        videos.map((video, index) => <CategoryItem category path={titleCategory} key={index} data={video} />)
                    }
                </div>
            </div>
        </section>
    )
}
export default Category;