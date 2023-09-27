import Form from "../components/form"
import Input from "../components/input"
const NewVideo = () => {
    return (
        <section className="flex-grow md:w-11/12 lg:w-3/4 m-auto flex items-center">
            <Form className="w-full bg-slate-300 p-4 rounded-md">
                <Input title="Video" type="url" placeholder="Ingrese la url del video" />
                <Input title="Descripcion" placeholder="Ingrese la descripcion del video" />
                <button className="bg-black hover:bg-white text-white hover:text-black font-semibold px-3 py-2 rounded-md transition-colors duration-300 ease-in-out cursor-pointer">Agregar video</button>
            </Form>
        </section>
    )
}
export default NewVideo;