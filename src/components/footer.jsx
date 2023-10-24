import { Link } from "react-router-dom";
import Github from '../assets/github.svg'
import LinkedIn from '../assets/linkedin.svg'
import usePath from "../hooks/path";
const Footer = () => {
    const { isPath } = usePath("/create-video");
    return (
        <footer className="fixed bottom-0 bg-black w-full h-14 md:relative md:h-16 lg:h-20 flex justify-center items-center overflow-hidden">
            <div className="hidden h-full md:flex md:justify-center md:items-center gap-2 lg:gap-4">
                <p className="text-white md:text-lg lg:text-xl font-semibold">SeeReally | Kevin Molina Lazarte</p>
                <a className="h-3/5 lg:h-3/6" href="http://github.com/molinalk/see-really" target="_blank" rel="noopener noreferrer me"><img className="h-full invert" src={Github} alt="Github" /></a>
                <a className="h-3/5 lg:h-3/6" href="https://www.linkedin.com/in/kevin-molina-lazarte" target="_blank" rel="noopener noreferrer me"><img className="h-full" src={LinkedIn} alt="LinkedIn" /></a>
            </div>
            <Link className="text-white  flex items-center justify-center text-lg w-full h-full rounded-sm font-semibold md:hidden" to={isPath ? "/create-category" : "/create-video"}>{isPath ? "Nueva Categoria" : "Nuevo Video"}</Link>
        </footer>
    )
}
export default Footer;