const Input = ({ title, type, placeholder, handleBlur, handleInput, value, onError, messageError }) => {
    const changeValue = (e) => {
        let value = e.target.value;
        handleInput(value);
    }
    return (
        <div className="flex flex-col mb-2 md:mb-4">
            <label className="text-white mb-2 md:font-semibold">{title}</label>
            <input className={`p-2 bg-white  shadow-sm outline-black rounded-md md:p-3 ${onError && "border-2 border-red-500"}`} value={value} onChange={changeValue} onBlur={handleBlur} type={!type ? "text" : type} placeholder={placeholder} required />
            {onError && <p className="text-red-500  max-md:text-sm mt-2">{messageError}</p>}
        </div>
    )
}
export default Input;