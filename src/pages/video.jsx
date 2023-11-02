import { useParams, useNavigate } from "react-router-dom";
import { useSeeReally } from "../context";
import { useState, useEffect } from "react";
import Load from "../components/load";
const Video = () => {
    const { code } = useParams();
    const { videos } = useSeeReally();
    const navigate = useNavigate();
    const [video, setVideo] = useState(JSON.parse(sessionStorage.getItem('video')) ?? null);
    useEffect(() => {
        if (videos.data) {
            const video = videos.data.find(item => item.code === code) ?? null;
            if (video) {
                setVideo(video)
            } else {
                navigate(-1)
            }
        }
    }, [videos])
    if (!video) return <Load />
    return (
        <section className="flex-grow flex justify-center items-center">
            <div className="flex max-md:flex-col items-center max-md:w-full max-md:px-4 md:w-11/12 lg:w-4/6 gap-4">
                <div className="max-md:w-full w-3/5 aspect-video overflow-hidden rounded-md">
                    <iframe className="w-full h-full" id={`${video.id}`} allow="autoplay" src={`https://www.youtube.com/embed/${video.code}?autoplay=1`} />
                </div>
                <div className="max-md:w-full w-2/5 mb-auto">
                    <p className="font-bold lg:text-lg">{video.title}</p>
                    <hr className="border-black/25 my-4" />
                    <p>{video.description}</p>
                </div>
            </div>
        </section>
    );
}
export default Video;
