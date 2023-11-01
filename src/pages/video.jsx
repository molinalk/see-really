const Video = () => {
    const video = JSON.parse(sessionStorage.getItem('video'));
    return video && (
        <section className="flex-grow flex justify-center items-center">
            <div className="flex max-md:flex-col items-center max-md:w-full max-md:px-4 md:w-11/12 lg:w-4/6 gap-4">
                <div className="max-md:w-full w-3/5 aspect-video overflow-hidden rounded-md">
                    <iframe className="w-full h-full" id={`${video.id}`} allow="autoplay" src={`https://www.youtube.com/embed/${video.code}?autoplay=1`} ></iframe>
                </div>
                <div className="max-md:w-full w-2/5">
                    <p>{video.description}</p>
                </div>
            </div>
        </section>
    );
}
export default Video;
