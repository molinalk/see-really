const Video = () => {
    const video = JSON.parse(sessionStorage.getItem('video'));
    return video && (
        <section className="flex-grow flex justify-center items-center">
            <div className="flex md:w-11/12 lg:w-3/4">
                <div className="w-3/5 aspect-video overflow-hidden rounded-md hover:">
                    <iframe className="w-full  h-full" id={`${video.code}`} allow="autoplay" autoPlay src={`https://www.youtube.com/embed/${video.code}`} ></iframe>
                </div>
                <div className="w-2/5">
                    <p>{video.description}</p>
                </div>
            </div>
        </section>
    );
}
export default Video;
