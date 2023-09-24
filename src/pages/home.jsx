import { useEffect, useState } from "react";
import Banner from "../components/banner";
import Categories from "../components/categories";
import { Fetch } from "../api/fetch";
const Home = () => {
    const [categories, setCategories] = useState([]);
    const [videos, setVideos] = useState([]);
    useEffect(() => {
        const datos = [
            fetch("http://localhost:3000/categories"),
            fetch("http://localhost:3000/videos")
        ];
        (async () => {
            const [categories, videos] = await Fetch(datos);
            setCategories(categories);
            setVideos(videos);
        })();
    }, [])
    return (
        categories.length > 0 &&
        <>
            <Banner data={categories} />
            <Categories data={categories.map(category => ({id:category.id, title: category.title, description: category.description }))} videos={videos} />
        </>
    )
}
export default Home;