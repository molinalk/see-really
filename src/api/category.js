const url = "http://localhost:3000/categories";
export const getCategories = async () => {
    try {
        const data = await fetch(url);
        if (!data.ok) {
            throw new Error('No se pudo obtener el recurso');
        }
        return data.json();
    } catch (error) {
        console.error(error);
    }
}

export const getCategory=async(id)=>{
    try {
        const data = await fetch(`${url}/${id}`);
        if (!data.ok) {
            throw new Error('No se pudo obtener el recurso');
        }
        return data.json();
    } catch (error) {
        console.error(error);
    }
}
export const getCategoryByName=async(name)=>{
    try {
        const data = await fetch(`${url}?title=${name}`);
        if (!data.ok) {
            throw new Error('No se pudo obtener el recurso');
        }
        return data.json();
    } catch (error) {
        console.error(error);
    }
}
