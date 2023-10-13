import Form from "../components/form"
import Input from "../components/input"

const NewVideo = () => {
    return (
        <section className="flex-grow w-full bg-slate-400 flex items-center">
            <Form title="Agregar video" className="w-full bg-slate-300 pb-8 pt-4 px-8 rounded-md md:w-10/12 lg:w-2/4 m-auto">
                <Input title="Video" type="url" placeholder="Ingrese la url del video" />
                <Input title="Descripcion" placeholder="Ingrese la descripcion del video" />
                <button className="bg-black hover:bg-white text-white hover:text-black font-semibold px-3 py-2 rounded-md transition-colors duration-300 ease-in-out cursor-pointer">Agregar video</button>
            </Form>
        </section>
    )
}
export default NewVideo;