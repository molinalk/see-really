import { Link } from "react-router-dom";
import logo from '../assets/logo.svg';
import usePath from "../hooks/path";
const Header = () => {
    const { isPath } = usePath("/create-video");
    return (
        <header className="bg-black w-full h-16 lg:h-20">
            <div className="w-full h-full flex justify-center items-center px-4 py-3 m-auto md:w-10/12 md:justify-between lg:w-4/6 lg:py-4">
                <Link className="h-4/5 relative flex after:h-full after:text-2xl after:flex after:ml-2 after:items-center after:left-full after:content-['SeeReally'] after:font-semibold after:text-white" to="/"><img className="h-full " src={logo} alt="logo" /></Link>
                <Link className="text-white text-sm  p-2 border rounded-sm hidden font-semibold transition-colors duration-500 ease-out hover:bg-white hover:border-black hover:text-black md:text-base md:inline md:leading-none lg:px-4 lg:py-3" to={isPath ? "/create-category" : "/create-video"}>{isPath ? "Nueva Categoria" : "Nuevo Video"}</Link>
            </div>
        </header>
    )
}
export default Header;