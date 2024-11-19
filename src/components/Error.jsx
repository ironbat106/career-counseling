import { Link } from "react-router-dom";


const Error = () => {
    return (
        <div className="h-screen flex flex-col items-center justify-center bg-gray-900 text-white">

            <h1 className="text-7xl lg:text-9xl font-greatvibes text-yellow-400">
                Oops!
            </h1>

            <p className="text-xl lg:text-3xl mt-4 text-gray-300 text-center px-4">
                Looks like you've stumbled into uncharted territory... or maybe the page just decided to take a day off.
            </p>

            <p className="text-lg lg:text-xl mt-2 text-gray-400 italic text-center">
                Either way, it’s not here. We checked. Twice.
            </p>

            <img
                src="https://media.giphy.com/media/3ov9k0FIoYczN8JGgk/giphy.gif"
                alt="Lost Anime Character"
                className="mt-8 rounded-lg shadow-lg w-80 lg:w-96"
            />

            <div className="mt-8">
                <Link
                    to="/"
                    className="btn btn-warning text-lg px-6 py-2 rounded-full hover:bg-yellow-300 transition-all"
                >
                    Go Home!
                </Link>
            </div>

            <p className="mt-6 text-sm text-gray-500">
                (P.S. If you think this is a mistake, maybe refresh... or just blame the internet.)
            </p>

        </div>
    );
};

export default Error;