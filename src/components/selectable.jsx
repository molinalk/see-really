const Selectable = ({ handleValue, items, title }) => {

    const handleChange=(e)=>{
        handleValue(e.target.value);
    }
    return (
        <div className="flex flex-col mb-2 md:mb-4">
            <label className="text-white mb-2 md:font-semibold">{title}</label>
            <select onChange={handleChange} className="p-2 rounded-md md:p-3" >
                <option value="" >Seleccione una categoria</option>
                {
                    items && items.map((item, index) => <option key={index} value={item} >{item}</option>)
                }
            </select>
        </div>
    )
}
export default Selectable;