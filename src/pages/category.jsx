import { useParams } from "react-router-dom";
import CategoryItem from "../components/categoryItem";
import { useSeeReally } from "../context";
import Load from "../components/load";
const Category = () => {
    const { category: categoryPath } = useParams();
    const { categories, videos: { data } } = useSeeReally();
    if (categories.loading) {
        return <Load />;
    }
    const category = categories.data.find(category => category.title === categoryPath);
    const videos = data.filter(video => video.category === categoryPath);
    return (
        <section className="flex-grow">
            <div className="relative h-[35vh]">
                <div style={{ backgroundImage: `url(${category.img})` }} className="w-full h-full absolute bg-no-repeat bg-cover bg-center" />
                <div className="relative w-full h-full bg-black/30 bg-gradient-to-b from-black to-transparent to-50%">
                    <div className="h-full m-auto px-4 py-8 flex flex-col justify-center items-center md:w-10/12 lg:w-4/6 gap-2 ">
                        <p className="text-white text-2xl w-full text-left font-semibold md:text-3xl lg:text-4xl first-letter:uppercase" >{category.title}</p>
                        <p className="scroll text-white text-lg text-left w-full overflow-y-auto md:text-xl lg:text-2xl ">{category.description}</p>
                    </div>
                </div>
            </div>
            <div className="md:w-10/12 lg:w-4/6 m-auto p-4 lg:py-8">
                <p className="font-semibold text-xl pb-3">Videos</p>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 w-full max-md:pb-14 justify-center gap-4">
                    {
                        videos.map((video, index) => <CategoryItem category path={categoryPath} key={index} data={video} />)
                    }
                </div>
            </div>
        </section>
    )
}
export default Category;