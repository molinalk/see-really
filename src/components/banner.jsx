import BannerItem from "./bannerItem";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
const Banner = ({ data }) => {
    return (
        <section className="h-[35vh] lg:h-[40vh] w-full">
            <Carousel autoPlay={true} infiniteLoop={true} transitionTime={500} emulateTouch={true} stopOnHover={false} showStatus={false} showArrows={false} showThumbs={false}>
                {
                    data.map(category => <BannerItem key={category.title} data={category} />)
                }
            </Carousel>
        </section>
    )
}
export default Banner;