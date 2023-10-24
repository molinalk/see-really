import Category from "./category";
import Load from "./load";
import { useSeeReally } from "../context";
const Categories = ({ data }) => {
    const { videos } = useSeeReally();
    return (
        <section className="p-4 max-md:pb-20 flex flex-col gap-4 m-auto w-full md:w-10/12 lg:w-4/6">
            {
                videos.loading
                    ? <Load />
                    : data.map(category => <Category key={category.title} title={category.title} videos={videos.data.filter(video => video.category === category.title)} />)
            }
        </section>
    )
}
export default Categories;