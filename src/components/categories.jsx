import Category from "./category";
const Categories = ({ data, videos }) => {
    return (
        <section className="p-4 pb-20 md:pb-4 flex flex-col gap-4">
            {
                data.map(category => <Category key={category.title} title={category.title} videos={videos.filter(video => Number(video.id_category) === Number(category.id))} />)
            }
        </section>
    )
}
export default Categories;