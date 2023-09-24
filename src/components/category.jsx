import CategoryItem from "./categoryItem";
const Category = ({videos,title}) => {
    return (
        videos.length > 0 &&
        <section className="flex flex-col gap-4">
            <div className="w-full flex justify-between items-center">
                <p className="font-semibold text-lg">{title}</p>
                <p className="font-semibold text-lg">{title}</p>
            </div>
            <div className="flex">
                {
                    videos.map((video, index) => <CategoryItem key={index} data={video} />)
                }
            </div>
        </section>
    )
}
export default Category;