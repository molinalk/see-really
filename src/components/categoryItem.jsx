import { memo } from "react";
import { useNavigate } from "react-router-dom";
import { useSeeReally } from "../context";
const CategoryItem = ({ data, category, path }) => {
    const { isLoading } = useSeeReally();
    const navigate = useNavigate();
    const styles = {
        category: "w-full",
        home: "min-w-[12rem] max-w-[12rem] md:w-60 lg:min-w-[18rem] "
    }
    const handleVideo = () => {
        sessionStorage.setItem('video', JSON.stringify(data));
        navigate(`/categories/${path}/video/${data.code}`);
    }
    return (
        <div className={`${category ? styles.category : styles.home} snap-start border rounded-md overflow-hidden ${isLoading && ""}`}>
            <div className="relative flex">
                <div onClick={handleVideo} className="h-full w-full absolute cursor-pointer" />
                <img className="h-full w-full object-cover" loading="lazy" src={`https://i.ytimg.com/vi/${data.code}/mqdefault.jpg`} alt={data.code} />
            </div>
            <p className="text-item overflow-hidden text-xs md:text-sm px-2 py-1">{data.title}</p>
        </div>
    )
};
export default memo(CategoryItem);