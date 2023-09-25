import { useEffect, useState } from "react";
import Banner from "../components/banner";
import Categories from "../components/categories";
import * as Api from '../api';
const Home = () => {
    const [categories, setCategories] = useState([]);
    const [videos, setVideos] = useState([]);
    useEffect(() => {
        (async () => {
            setCategories(await Api.getCategories());
            setVideos(await Api.getVideos());
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