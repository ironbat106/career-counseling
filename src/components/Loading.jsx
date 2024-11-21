const Loading = () => {
    return (
        <div className='flex flex-col min-h-screen justify-center items-center space-y-4'>
            <span className="loading loading-infinity loading-lg text-warning"></span>
            <p className="text-yellow-400 text-lg">
                Just a second... Or maybe two. Good things take time!
            </p>
        </div>
    );
};

export default Loading;