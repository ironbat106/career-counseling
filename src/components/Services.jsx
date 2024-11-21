import { Link, useLoaderData } from "react-router-dom";
import Aos from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";


const Services = () => {

    const servicesData = useLoaderData();

    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);

    useEffect(() => {
        Aos.refresh();
    }, []);

    return (
        <div id="services" className="w-11/12 sm:w-10/12 lg:w-8/12 mx-auto py-16">

            <h2 className="text-3xl sm:text-6xl font-greatvibes font-bold text-center text-yellow-400 mb-10">
                Our Services
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {
                    servicesData.map((service) => {
                        return (
                            <div
                                key={service.id}
                                data-aos="fade-up"
                                className="group bg-gradient-to-b from-gray-800 to-gray-900 p-6 rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transform transition-transform duration-300 ease-in-out">

                                <figure>
                                    <img className='h-60 w-full object-cover group-hover:scale-105 transform transition-transform duration-300'
                                        src={service.image}
                                        alt={service.serviceName}
                                    />
                                </figure>

                                <div className="card-body p-6">

                                    <h2 className="card-title text-xl sm:text-2xl font-semibold text-yellow-400">
                                        {service.serviceName}
                                    </h2>

                                    <p className="text-sm sm:text-base text-white">
                                        Name: {service.counselor}
                                    </p>

                                    <p className="text-sm sm:text-base text-white">
                                        Category: {service.category}
                                    </p>

                                    <p className="text-sm sm:text-base text-white">
                                        Price: {service.pricing}
                                    </p>

                                    <Link to={`/services/${service.id}`} className="btn btn-warning hover:bg-yellow-200 px-6 py-2 rounded-full text-lg">
                                        Learn More
                                    </Link>

                                </div>

                            </div>)

                    })
                }
            </div>
        </div>
    );
};

export default Services;