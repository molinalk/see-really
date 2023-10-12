import Form from "../components/form"
import Input from "../components/input"

const NewCategory = () => {
    return (
        <section className="flex-grow w-full h-full bg-slate-400 p-4 md:w-11/12 lg:w-3/4 m-auto flex items-center">
            <Form title="Categoria" className="w-full bg-slate-300 p-4 rounded-md">
                <Input title="Nombre"  placeholder="Ingrese el nombre de la categoria" />
                <Input title="Descripcion" placeholder="Ingrese la descripcion de la categoria" />
                <Input title="Portada" type="url" placeholder="Ingrese la portada de la categoria" />
                <button className="bg-black hover:bg-white text-white hover:text-black font-semibold px-3 py-2 rounded-md transition-colors duration-300 ease-in-out cursor-pointer">Agregar categoria</button>
            </Form>
        </section>
    )
}
export default NewCategory;