import { memo } from "react";

const CategoryItem = memo(({ data,category }) => {
    const styles={
        category:"w-full",
        home:"min-w-[12rem] max-w-[12rem] md:w-60 lg:min-w-[18rem] snap-start"
    }
    return (
        <div className={`${category?styles.category:styles.home} border rounded-md overflow-hidden`}>
            <div className="aspect-video">
                <iframe className="w-full  h-full" id={`${data.code}`} src={`https://www.youtube.com/embed/${data.code}`} ></iframe>
            </div>
            <p className="text-item overflow-hidden text-sm py-1.5 px-4">{data.description}</p>
        </div>
    )
});
export default CategoryItem;