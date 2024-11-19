const FeaturedVideo = () => {
    return (
        <div className="w-11/12 mx-auto py-12">
            <h2 className="text-3xl sm:text-6xl font-greatvibes font-bold text-center text-yellow-400 mb-10">
                Featured Video
            </h2>
            <div className="flex justify-center items-center">
                <div className="group w-full max-w-3xl bg-gradient-to-b from-gray-800 to-gray-900 p-6 rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transform transition-transform duration-300 ease-in-out">
                    <iframe
                        width="100%"
                        height="415"
                        src="https://www.youtube.com/embed/4e6KSaCxcHs?si=3RZkV595RRevbSrS"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                        className="rounded-lg"
                    ></iframe>
                </div>
            </div>
            <p className="text-center text-xl text-gray-300 mt-6">
                Learn insightful tips and strategies for advancing your career with this expert-led video!
            </p>
        </div>
    );
};

export default FeaturedVideo;