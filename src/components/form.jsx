const Form = ({ children,className, title }) => {
    return (
        <form className={className}>
            <p className="py-2 text-center font-semibold text-xl md:text-2xl lg:text-3lx">{title}</p>
            {children}
        </form>
    )
}
export default Form;