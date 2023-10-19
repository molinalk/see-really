import Category from "./category";
import { useSeeReally } from "../context";
const Categories = ({ data }) => {
    const { videos, test, setTest } = useSeeReally();
    return (
        <section className="p-4 max-md:pb-20 flex flex-col gap-4 m-auto w-full md:w-10/12 lg:w-4/6">
            <button onClick={() => setTest(!test)}>Test</button>
            {
                !videos.loading && data.map(category => <Category key={category.title} title={category.title} videos={videos.data.filter(video => Number(video.id_category) === Number(category.id))} />)
            }
        </section>
    )
}
export default Categories;