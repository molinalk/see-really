import { Link } from "react-router-dom";
import CategoryItem from "./categoryItem";
import { useEffect, useState } from "react";
const Category = ({ videos, title }) => {
    if (videos.length === 0) {
        return null;
    }
    const [scroll, setScroll] = useState({ slider: false, amount: 100, left: 0 });
    const handleNextPosition = (e) => {
        const slider = e.target.previousSibling
        setScroll(prevState => ({ ...prevState, left: slider.scrollLeft }));
        console.log(slider.scrollLeft);
        slider.scrollBy({
            left: scroll.amount,
            behavior: 'smooth'
        });
    }
    const handlePreviousPosition = (e) => {
        const slider = e.target.nextSibling;
        setScroll(prevState => ({ ...prevState, left: slider.scrollLeft }));
        console.log(slider.scrollLeft);
        slider.scrollBy({
            left: -scroll.amount,
            behavior: 'smooth'
        });
    }
    useEffect(() => {
        const slider = document.getElementById(title);
        if (slider.scrollWidth > slider.clientWidth) {
            setScroll(prevState => ({ ...prevState, slider: true, scrollMaxWidth: slider.scrollWidth - slider.clientWidth })); //obtenemos el estaod anterior y actulizamos con el nuevo
        }
    }, [])
    console.log(scroll);
    return (
        <section className="flex flex-col w-full gap-4 md:w-11/12 lg:w-3/4 m-auto">
            <div className="w-full flex justify-between items-center">
                <p className="font-semibold text-lg">{title}</p>
                <Link className="text-sm lg:text-lg before:content-['Ver_todo'] flex gap-2 before:text-base before:font-semibold items-center" to={`/categories/${title.toLowerCase()}`}><i className="fa-solid fa-arrow-right"></i></Link>
            </div>
            <div className="flex items-center gap-4 px-2">
                <div onClick={handlePreviousPosition} className={`${(scroll.slider && scroll.left > 0) ? 'visible' : 'invisible'} px-2.5 py-1.5 text-2xl font-semibold font-mono  leading-none rounded-full cursor-pointer bg-slate-50 border shadow-lg shadow-black/30`}>{'<'}</div>
                <div id={title} className="slider flex gap-4 overflow-x-scroll flex-grow snap-x snap-mandatory">
                    {
                        videos.map((video, index) => <CategoryItem key={index} data={video} />)
                    }
                </div>
                <div onClick={handleNextPosition} className={`${(scroll.slider && scroll.left!==scroll.scrollMaxWidth) ? 'visible' : 'invisible'} px-2.5 py-1.5 text-2xl font-semibold font-mono  leading-none rounded-full cursor-pointer bg-slate-50 border shadow-lg shadow-black/30`}>{'>'}</div>
            </div>
        </section>
    )
}
export default Category;