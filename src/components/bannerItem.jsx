import { Link } from "react-router-dom";
const BannerItem = ({ data }) => {
    const { title, description, img } = data;
    return (
        <div className="min-w-full h-full">
            <div style={{ backgroundImage: `url(${img})` }} className="w-full h-full absolute bg-no-repeat bg-cover bg-center" />
            <div className="relative w-full h-full bg-black/30 bg-gradient-to-b from-black to-transparent to-50% ">
                <div className="h-full m-auto p-4 flex flex-col justify-center items-center gap-0.5 md:w-10/12 lg:w-4/6">
                    <p className="text-white text-2xl w-full text-left font-semibold md:text-3xl lg:text-4xl first-letter:uppercase" >{title}</p>
                    <p className="scroll text-white text-lg text-left w-full max-h-[45%] overflow-y-auto md:text-xl lg:text-2xl ">{description}</p>
                    <Link className=" text-white font-semibold mt-6 rounded-lg px-4 py-2.5 bg-black transition-colors duration-500 hover:bg-white hover:text-black  md:text-lg md:px-4 md:py-2 lg:px-6 lg:py-3 " to={`/categories/${title}`}>Ver Categoria</Link>
                </div>
            </div>
        </div>
    )
}
export default BannerItem;