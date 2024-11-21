import Aos from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";

const CareerRoadmap = () => {

    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);

    useEffect(() => {
        Aos.refresh();
    }, []);

    const steps = [
        {
            id: 1,
            title: "Discover Your Passion",
            description: "Start by identifying your interests, strengths, and long-term aspirations.",
            icon: "🌟"
        },
        {
            id: 2,
            title: "Set Career Goals",
            description: "Define clear, achievable short-term and long-term career objectives.",
            icon: "🎯"
        },
        {
            id: 3,
            title: "Upskill & Network",
            description: "Acquire new skills and build a professional network to expand your opportunities.",
            icon: "📚"
        },
        {
            id: 4,
            title: "Prepare for Interviews",
            description: "Polish your resume, practice mock interviews, and research your target companies.",
            icon: "🤝"
        },
        {
            id: 5,
            title: "Land Your Dream Job",
            description: "Apply confidently, negotiate wisely, and embark on your career journey.",
            icon: "🚀"
        },
    ];

    return (
        <div className="w-11/12 mx-auto py-12">

            <h2 className="text-3xl sm:text-6xl font-greatvibes font-bold text-center text-yellow-400 mb-10">
                Career Roadmap
            </h2>

            <div className="flex flex-col space-y-6">
                {
                    steps.map((step) => (

                        <div
                            key={step.id}
                            data-aos="fade-down"
                            className="flex flex-col items-center text-center group bg-gradient-to-b from-gray-800 to-gray-900 p-6 rounded-lg shadow-md hover:shadow-xl hover:scale-105 transform transition duration-300 ease-in-out"
                        >

                            <div className="text-yellow-400 text-5xl mb-4">
                                {step.icon}
                            </div>

                            <div>
                                <h3 className="text-2xl font-bold text-yellow-400 mb-2">{step.title}</h3>
                                <p className="text-gray-300">{step.description}</p>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default CareerRoadmap;