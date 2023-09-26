import { memo } from "react";

const CategoryItem = memo(({ data }) => {
    return (
        <div className="min-w-[12rem] max-w-[12rem] md:w-60 lg:min-w-[18rem] border rounded-md  overflow-hidden snap-start">
            <div className="aspect-video">
                <iframe className="w-full  h-full" id={`${data.code}`} src={`https://www.youtube.com/embed/${data.code}`} ></iframe>
            </div>
            <p className="text-sm py-2 px-4 max-h-[52px]">{data.description}</p>
        </div>
    )
});
export default CategoryItem;