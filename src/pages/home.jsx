import Banner from "../components/banner";
import Categories from "../components/categories";
import { useFetch } from "../hooks/fetch";
const Home = () => {
    const { data } = useFetch("http://localhost:3000/categories");
    let dataCategories
    if (data) {
        dataCategories = data.map((category) => ({
            id: category.id,
            title: category.title
        }))
    }
    return (
        <main>
            {
                data &&
                <>
                    <Banner data={data} />
                    <Categories data={dataCategories} />
                </>
            }
        </main>
    )
}
export default Home;