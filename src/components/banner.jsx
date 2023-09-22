import BannerItem from "./bannerItem";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
const Banner = () => {
    return (
        <section className="h-[35vh] lg:h-[45vh] w-full">
            <Carousel autoPlay={true} infiniteLoop={true} transitionTime={500}  emulateTouch={true} stopOnHover={false} showStatus={false} showArrows={false} showThumbs={false}>
                <BannerItem data={{ title: 'Deport', description: '', img: 'https://assets.nflxext.com/ffe/siteui/vlv3/f85718e8-fc6d-4954-bca0-f5eaf78e0842/e51c3e02-8a8e-403a-87cc-41a8075b90f4/BO-es-20230918-popsignuptwoweeks-perspective_alpha_website_large.jpg' }} />
                <BannerItem data={{ title: 'Games', description: '', img: 'https://assets.nflxext.com/ffe/siteui/vlv3/f85718e8-fc6d-4954-bca0-f5eaf78e0842/e51c3e02-8a8e-403a-87cc-41a8075b90f4/BO-es-20230918-popsignuptwoweeks-perspective_alpha_website_large.jpg' }} />
            </Carousel>
        </section>
    )
}
export default Banner;