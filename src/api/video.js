const url = "http://localhost:3000/videos";
export const getVideos = async () => {
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

export const getVideo = async (id) => {
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

export const getVideoByCategory = async (id) => {
    try {
        const data = await fetch(`${url}?id_category=${id}`);
        if (!data.ok) {
            throw new Error('No se pudo obtener el recurso');
        }
        return data.json();
    } catch (error) {
        console.error(error);
    }
}

export const newVideo = (video) => {
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(video)
    })
    .then(res=>{
        if(!res.ok){
            throw new Error("Error al agregar los recuros");
        }
        console.log("Insercion correcta");
    }).catch(error=>console.error(error));
}
