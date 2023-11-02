import { Link } from "react-router-dom";
import image from "../assets/not_found.webp";
const NotFound = () => {
    return (
        <section className="flex-grow gap-4 flex justify-center items-center flex-col">
            <img className="lg:w-3/12" src={image} alt="not_found" />
            <p className="lg:text-4xl font-bold ">Recurso no encotrado</p>
            <Link className="lg:px-6 rounded-lg lg:py-2 lg:text-lg text-white bg-black transition-colors duration-300 hover:bg-white hover:text-black shadow-lg shadow-black/25" to="/">Ir a inicio</Link>
        </section>
    )
}
export default NotFound;