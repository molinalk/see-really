import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as Api from '../api';
import CategoryItem from "../components/categoryItem";
const Category = () => {
    const { category: titleCategory } = useParams();
    const [category, setCategory] = useState(null);
    const [videos, setVideos] = useState(null);
    useEffect(() => {

        (async () => {
            let category = await Api.getCategoryByName(titleCategory);
            let videos = await Api.getVideoByCategory(category[0].id);
            setCategory(category[0]);
            setVideos(videos);
        })();
    }, [])
    return (category && videos) && (
        <section>
            <div className="relative">
                <div style={{ backgroundImage: `url(${category.frond_page})` }} className="w-full h-full absolute bg-no-repeat bg-cover bg-center" />
                <div className="relative w-full h-full bg-black/30 bg-gradient-to-b from-black to-transparent to-50%">
                    <div className="h-full m-auto px-4 py-8 flex flex-col justify-center items-center gap-2 md:w-11/12 lg:w-3/4">
                        <p className="text-white text-2xl w-full text-left font-semibold md:text-3xl lg:text-4xl" >{category.title}</p>
                        <p className="scroll text-white text-lg text-left w-full overflow-y-auto md:text-xl lg:text-2xl ">{category.description}</p>
                    </div>
                </div>
            </div>
            <div className="p-4">
                <p>VIDEOS</p>
                <div className="flex flex-wrap w-full justify-center gap-4">
                    {
                        videos.map((video, index) => <CategoryItem category key={index} data={video} />)
                    }
                </div>
            </div>
        </section>
    )
}
export default Category;