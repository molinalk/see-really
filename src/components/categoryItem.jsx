const CategoryItem = ({ data }) => {
    return (
        <div className="w-52 h-52 border">
            <div className="w-full h-3/4">
                <iframe className="w-full h-full" src={`https://www.youtube.com/embed/${data.code}`} ></iframe>
            </div>
            <p>{data.title}</p>
            <p>{data.description}</p>
        </div>
    )
}
export default CategoryItem;