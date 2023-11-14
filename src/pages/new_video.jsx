import { useSeeReally } from "../context";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Form from "../components/form";
import Input from "../components/input";
import Selectable from "../components/selectable";
import BackGround from "../assets/background-video.webp";

import { getCode } from "../helpers/code";
import { fetchVideo } from "../api/youtube/video";
import { addData } from "../firebase";

const NewVideo = () => {
    const { categories, videos, setVideos } = useSeeReally();
    const categoriesName = categories.data?.map((item) => item.title);

    const navigate = useNavigate();

    const [code, setCode] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState({ exist: false });
    const [category, setCategory] = useState("");
    const [onError, setOnError] = useState(false)
    const [title, setTitle] = useState("");

    const saveVideo = async (e) => {
        e.preventDefault();
        const video = {
            code,
            title,
            description,
            category
        }
        await addData(video, "videos");
        setVideos({ ...videos, data: [...videos.data, video] });
        navigate("/");
    }

    const loadImage = async (e) => {
        const input = e.target.value;
        const regex = /^(https?:\/\/)?(www\.)?(youtube\.com\/(embed\/|v\/|watch\?v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
        if (regex.test(input)) {
            const code = getCode(input);
            setCode(code);
            const { snippet: { title, thumbnails: { high : { url } } } } = await fetchVideo(code);
            setImage({ exist: true, url });
            setTitle(title);
            setOnError(false);
        }else{
            setOnError(true);
        }
    }
    const styles = {
        notFound: "scale-50 relative top-56 opacity-0 lg:w-0",
        foundImage: "opacity lg:w-3/5"
    }
    return (
        <section style={{ backgroundImage: `url(${BackGround})` }} className="flex-grow flex justify-center w-full bg-center bg-no-repeat bg-cover">
            <div className="w-full flex max-md:flex-col items-center px-2 gap-4 justify-center md:w-10/12 lg:w-4/6 ">
                <div className={`rounded-lg overflow-hidden transition-all duration-300 ease-in-out ${image.exist ? styles.foundImage : styles.notFound}`}>
                    {
                        image.exist && <img className="aspect-video w-full h-full object-cover" src={image.url} alt="image" />
                    }
                </div>
                <Form handleSubmit={saveVideo} title="Agregar video" className="w-full bg-black/30 shadow shadow-white/60 pb-8 pt-4 px-8 rounded-md lg:w-1/2">
                    <Input handleBlur={loadImage} title="Video" type="url" placeholder="Ingrese la url del video." onError={onError} messageError="La url no es valida." handleInput={setCode} />
                    <Input title="Titulo" placeholder="Titulo del video." value={title} handleInput={setTitle} />
                    <Selectable handleValue={setCategory} title="Categoria" items={categoriesName} />
                    <Input title="Descripcion" placeholder="Ingrese la descripcion del video." value={description} handleInput={setDescription} />
                    <button className="bg-black border-dashed border-white border-2 mt-2 hover:bg-white text-white hover:text-black hover:border-black font-semibold px-3 py-2 rounded-md transition-colors duration-300 ease-in-out cursor-pointer">Agregar video</button>
                </Form>
            </div>
        </section>
    )
}
export default NewVideo;