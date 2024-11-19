import { NavLink, useLocation } from "react-router-dom";
import Services from "./Services";
import CareerTips from "./CareerTips";
import CareerRoadmap from "./CareerRoadmap";
import FeaturedVideo from "./FeaturedVideo";

const MainSection = () => {

    const location = useLocation();

    const getImageForRoute = () => {
        if (location.pathname === "/myprofile") {
            return "/assets/usinglaptop.jpg";
        }
        else if (location.pathname === "/about") {
            return "/assets/office.jpg"
        }
        else {
            return "/assets/talking.jpg"
        }
    };

    return (
        <div className="main-section relative">
            <div className="relative">
                <img
                    className="w-full h-auto object-cover"
                    src={getImageForRoute()}
                    alt=""
                />

                {
                    location.pathname === "/" && (
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-center space-y-6 px-4 sm:px-8 lg:mb-72">
                            <h1
                                className="lg:text-9xl text-5xl md:text-6xl font-greatvibes text-yellow-400 font-bold"
                                style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 1)" }}
                            >
                                ElevateU
                            </h1>
                            <p
                                className="text-base lg:text-2xl sm:text-lg md:text-l text-gray-100 leading-relaxed max-w-3xl mx-auto"
                                style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 1)" }}
                            >
                                Welcome! Here, you’ll find a blend of professional career counseling,
                                resume reviews, and guidance designed to elevate your personal and
                                professional journey. Join us today to explore more!
                            </p>
                        </div>
                    )}

            </div>



            <div className="absolute top-5 left-0 w-full flex justify-center items-center space-x-8">

                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        isActive
                            ? "text-lg sm:text-2xl md:text-4xl text-yellow-400 font-greatvibes underline hover:text-yellow-200 decoration-2 transition-all"
                            : "text-lg sm:text-2xl md:text-2xl text-white font-greatvibes hover:text-yellow-300 transition-all"
                    }>
                    Home
                </NavLink>

                <NavLink
                    to="/myprofile"
                    className={({ isActive }) =>
                        isActive
                            ? "text-lg sm:text-2xl md:text-4xl text-yellow-400 font-greatvibes underline hover:text-yellow-200 decoration-2 transition-all"
                            : "text-lg sm:text-2xl md:text-2xl text-white font-greatvibes hover:text-yellow-300 transition-all"
                    }>
                    My Profile
                </NavLink>

                <NavLink
                    to="/about"
                    className={({ isActive }) =>
                        isActive
                            ? "text-lg sm:text-2xl md:text-4xl text-yellow-400 font-greatvibes underline hover:text-yellow-200 decoration-2 transition-all"
                            : "text-lg sm:text-2xl md:text-2xl text-white font-greatvibes hover:text-yellow-300 transition-all"
                    }>
                    About
                </NavLink>
            </div>

            {location.pathname === "/" && (
                <div>

                    <div className="absolute top-[230px] md:top-[400px] lg:top-[800px] left-2/4 transform -translate-x-1/3 w-11/12 sm:w-3/4">

                        <div className="carousel w-5/6 sm:w-3/4">

                            <div id="slide1" className="carousel-item relative w-full">
                                <img
                                    src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp"
                                    className="w-full rounded-lg"
                                />

                                <div className="absolute inset-0 flex items-center justify-center">
                                    <h2 className="lg:text-6xl text-2xl md:text-xl text-yellow-400 font-bold bg-black/50 font-greatvibes px-4 py-2 rounded-md">
                                        Navigate Your Career with Confidence
                                    </h2>
                                </div>

                                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                    <a href="#slide4" className="btn btn-circle opacity-50">
                                        ❮
                                    </a>
                                    <a href="#slide2" className="btn btn-circle opacity-50">
                                        ❯
                                    </a>
                                </div>

                            </div>

                            <div id="slide2" className="carousel-item relative w-full">
                                <img
                                    src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp"
                                    className="w-full rounded-lg"
                                />

                                <div className="absolute inset-0 flex items-center justify-center">
                                    <h2 className="lg:text-6xl text-2xl md:text-xl text-yellow-400 font-bold bg-black/50 font-greatvibes px-4 py-2 rounded-md">
                                        Build a Winning Resume
                                    </h2>
                                </div>

                                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                    <a href="#slide1" className="btn btn-circle opacity-50">
                                        ❮
                                    </a>
                                    <a href="#slide3" className="btn btn-circle opacity-50">
                                        ❯
                                    </a>
                                </div>

                            </div>
                            <div id="slide3" className="carousel-item relative w-full">

                                <img
                                    src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp"
                                    className="w-full rounded-lg"
                                />

                                <div className="absolute inset-0 flex items-center justify-center">
                                    <h2 className="lg:text-6xl text-2xl md:text-xl text-yellow-400 font-bold bg-black/50 font-greatvibes px-4 py-2 rounded-md">
                                        Personalized Career Guidance
                                    </h2>
                                </div>

                                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                    <a href="#slide2" className="btn btn-circle opacity-50">
                                        ❮
                                    </a>
                                    <a href="#slide4" className="btn btn-circle opacity-50">
                                        ❯
                                    </a>
                                </div>

                            </div>
                            <div id="slide4" className="carousel-item relative w-full">

                                <img
                                    src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
                                    className="w-full rounded-lg"
                                />

                                <div className="absolute inset-0 flex items-center justify-center">
                                    <h2 className="lg:text-6xl text-2xl md:text-xl text-yellow-400 font-bold bg-black/50 font-greatvibes px-4 py-2 rounded-md">
                                        Strategize for a Brighter Future
                                    </h2>
                                </div>

                                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                    <a href="#slide3" className="btn btn-circle opacity-50">
                                        ❮
                                    </a>
                                    <a href="#slide1" className="btn btn-circle opacity-50">
                                        ❯
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Services></Services>
                    <CareerTips></CareerTips>
                    <CareerRoadmap></CareerRoadmap>
                    <FeaturedVideo></FeaturedVideo>

                </div>

            )}
        </div>
    );
};

export default MainSection;
