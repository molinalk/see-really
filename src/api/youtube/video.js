
export const fetchVideo = async (id) => {
    try {
        const response = await fetch(`https://www.googleapis.com/youtube/v3/videos?id=${id}&key=${import.meta.env.VITE_API_KEY}&part=snippet,statistics&fields=items(id,snippet(publishedAt,channelId,title,description,thumbnails),statistics)`)
        if (response.ok) {
            return (await response.json())["items"][0];
        }
        throw new Error("No se pudo obtener los datos")
    } catch (error) {
        console.error(error);
    }
}
