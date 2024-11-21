import { useEffect, useState } from "react";
import Footer from "./Footer";
import MainSection from "./MainSection";
import NavBar from "./NavBar";
import AboutImage from "../assets/office.jpg";
import { Link } from "react-router-dom";
import Aos from 'aos';
import 'aos/dist/aos.css';
import Loading from "../components/Loading";
import { FaArrowLeft } from "react-icons/fa";


const About = () => {
    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {
        document.title = "About | ElevateU";

        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);

    if (isLoading) {
        return <Loading></Loading>;
    }

    return (
        <div style={{
            backgroundImage: `url(${AboutImage})`,  // Use the imported image here
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
        }}
            className="min-h-screen text-white">

            <NavBar></NavBar>

            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 space-y-12 bg-black bg-opacity-50">

                <section className="flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-12">
                    <div className="md:w-1/2 text-center md:text-left">

                        <Link to="/" className="btn btn-warning mb-10 rounded-full">
                            <FaArrowLeft />
                        </Link>

                        <h1 className="text-4xl lg:text-6xl font-bold text-yellow-400 mb-4 font-greatvibes">
                            About ElevateU
                        </h1>

                        <p className="text-lg md:text-xl leading-relaxed">
                            ElevateU is dedicated to empowering individuals with guidance, support, and resources for a brighter future.
                            Our mission is to help you achieve your career goals and aspirations through personalized counseling and
                            expert advice.
                        </p>

                    </div>

                    <div className="md:w-1/2">
                        <img
                            className="rounded-lg shadow-lg transform hover:scale-105 transition duration-300"
                            src="../assets/twopeople.jpg"
                            alt=""
                        />
                    </div>

                </section>

                <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                    <div
                        className="group bg-gradient-to-b from-gray-800 to-gray-900 p-6 rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transform transition-transform duration-300 ease-in-out"
                        data-aos="fade-up"
                    >

                        <div className="card-body">

                            <h2 className="card-title text-4xl text-yellow-400 font-greatvibes">
                                Career Counseling
                            </h2>

                            <p>Expert advice tailored to your aspirations, helping you chart a clear path to success.
                            </p>

                        </div>
                    </div>

                    <div
                        className="group bg-gradient-to-b from-gray-800 to-gray-900 p-6 rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transform transition-transform duration-300 ease-in-out"
                        data-aos="fade-up"
                    >

                        <div className="card-body">

                            <h2 className="card-title text-4xl text-yellow-400 font-greatvibes">
                                Resume Building
                            </h2>

                            <p>Polish your professional profile with personalized resume crafting tips and guidance.
                            </p>

                        </div>
                    </div>
                    <div
                        className="group bg-gradient-to-b from-gray-800 to-gray-900 p-6 rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transform transition-transform duration-300 ease-in-out"
                        data-aos="fade-up"
                    >

                        <div className="card-body">
                            <h2 className="card-title text-4xl text-yellow-400 font-greatvibes">
                                Interview Preparation
                            </h2>

                            <p>Gain confidence with mock interviews and insider tips to ace your next opportunity.
                            </p>

                        </div>
                    </div>
                </section>

                <section className="text-center">

                    <h2 className="text-3xl lg:text-5xl font-bold text-yellow-400 mb-6 font-greatvibes">
                        What People Say About Us
                    </h2>

                    <div className="carousel w-full space-x-4">
                        <div className="carousel-item">
                            <div
                                className="group bg-gradient-to-b from-gray-800 to-gray-900 p-6 rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transform transition-transform duration-300 ease-in-out"
                                data-aos="fade-down"
                            >
                                <div className="card-body">

                                    <p>
                                        ElevateU has completely transformed my career path. Their team is dedicated and truly inspiring.
                                    </p>

                                    <h3 className="mt-4 text-yellow-400 font-semibold">- Ramisha Ishanee
                                    </h3>

                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div
                                className="group bg-gradient-to-b from-gray-800 to-gray-900 p-6 rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transform transition-transform duration-300 ease-in-out"
                                data-aos="fade-down"
                            >
                                <div className="card-body">

                                    <p>
                                        I landed my dream job thanks to ElevateU's tailored advice and resume guidance!
                                    </p>

                                    <h3 className="mt-4 text-yellow-400 font-semibold">- Tasnova Toma.
                                    </h3>

                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div
                                className="group bg-gradient-to-b from-gray-800 to-gray-900 p-6 rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transform transition-transform duration-300 ease-in-out"
                                data-aos="fade-down"
                            >
                                <div className="card-body">

                                    <p>
                                        Their mock interviews were a game-changer. I can't recommend ElevateU enough!
                                    </p>

                                    <h3 className="mt-4 text-yellow-400 font-semibold">- Jubair
                                    </h3>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="text-center py-8">

                    <section className="text-center py-8">
                        <Link
                            to="/"
                            className="btn btn-warning btn-lg px-8 py-4 text-lg hover:bg-yellow-300 transition-all"
                        >
                            Discover Our Services
                        </Link>
                    </section>

                </section>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default About;