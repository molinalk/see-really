import Category from "./category";
const Categories =({data})=>{
    return (
        <section className="p-4 flex flex-col gap-4">
            {
                data.map(category=><Category key={category.title} dataCategory={category}/>)
            }
        </section>
    )
}
export default Categories;