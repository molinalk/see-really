import Banner from "../components/banner";
import Categories from "../components/categories";
import Load from "../components/load";
import { useSeeReally } from "../context";
const Home = () => {
    const { categories } = useSeeReally();
    return (
        !categories.loading ?
            <>
                <Banner data={categories.data} />
                <Categories data={categories.data.map(category => ({ id: category.id, title: category.title, description: category.description }))} />
            </>
            : <Load />
    )
}
export default Home;