const CategoryItem=({data})=>{
    return (
        <div className="w-52 h-52 border">
            <p>{data.title}</p>
            <p>{data.description}</p>
        </div>
    )
}
export default CategoryItem;