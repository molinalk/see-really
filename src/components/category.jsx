import { Link } from "react-router-dom";
import CategoryItem from "./categoryItem";
import { useEffect, useState } from "react";
const Category = ({ videos, title }) => {
    const [scroll, setScroll] = useState({ slider: false, amount: 100, left: 0 });
    useEffect(() => {
        const slider = document.getElementById(title);
        if (slider && slider.scrollWidth > slider.clientWidth) {
            setScroll(prevState => ({ ...prevState, slider: true, scrollMaxWidth: slider.scrollWidth - slider.clientWidth })); //obtenemos el estaod anterior y actulizamos con el nuevo
        }
    }, [title])
    const handleNextPosition = (e) => {
        const slider = e.target.previousElementSibling
        slider.scrollBy({
            left: scroll.amount,
            behavior: 'smooth'
        });
        handleScroll(slider);
    }
    const handlePreviousPosition = (e) => {
        const slider = e.target.nextElementSibling;
        slider.scrollBy({
            left: -scroll.amount,
            behavior: 'smooth'
        });
        handleScroll(slider);
    }
    const handleScroll = (slider) => {
        slider.addEventListener('scroll', () => {
            setScroll(prevState => ({ ...prevState, left: slider.scrollLeft }));
        });
    }
    return videos.length > 0 && (
        <section className="flex flex-col w-full gap-4">
            <div className="w-full flex justify-between items-center">
                <p className="font-semibold text-lg first-letter:uppercase">{title}</p>
                <Link className="text-sm lg:text-lg before:content-['Ver_todo'] flex gap-2 before:text-base before:font-semibold items-center" to={`/categories/${title}`}><i className="fa-solid fa-arrow-right"></i></Link>
            </div>
            <div className="flex items-center gap-4 px-2">
                <div onClick={handlePreviousPosition} className={`${(scroll.slider && scroll.left > 0) ? 'visible' : 'invisible'} duration-300 hidden lg:inline px-2.5 py-1.5 text-2xl font-semibold font-mono  leading-none rounded-full cursor-pointer bg-slate-50 border hover:shadow-lg hover:shadow-black/30`}>{'<'}</div>
                <div id={title} className="slider-category flex  gap-4 overflow-x-scroll flex-grow snap-x snap-mandatory">
                    {
                        videos.map((video, index) => index < 8 && <CategoryItem key={index} path={title} data={video} />)
                    }
                </div>
                <div onClick={handleNextPosition} className={`${(scroll.slider && scroll.left <= scroll.scrollMaxWidth - 1) ? 'visible' : 'invisible'} duration-300 hidden  lg:inline px-2.5 py-1.5 text-2xl font-semibold font-mono  leading-none rounded-full cursor-pointer bg-slate-50 border hover:shadow-lg hover:shadow-black/30`}>{'>'}</div>
            </div>
        </section>
    )
}
export default Category;