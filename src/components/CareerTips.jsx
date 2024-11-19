const CareerTips = () => {

    const tips = [
        { id: 1, tip: "Keep your resume updated regularly.", icon: "📄" },
        { id: 2, tip: "Focus on networking to build valuable connections.", icon: "🤝" },
        { id: 3, tip: "Research thoroughly before interviews.", icon: "🔍" },
        { id: 4, tip: "Stay adaptable and open to learning new skills.", icon: "📚" },
        { id: 5, tip: "Set clear short-term and long-term career goals.", icon: "🎯" },
        { id: 6, tip: "Regularly seek feedback and work on self-improvement.", icon: "💡" },
    ];

    return (
        <div>
            <div className="w-11/12 mx-auto py-12">
                <h2 className="text-3xl sm:text-6xl font-greatvibes font-bold text-center text-yellow-400 mb-10">
                    Career Tips
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {
                        tips.map((tip) => (
                            <div
                                key={tip.id}
                                className="group bg-gradient-to-b from-gray-800 to-gray-900 p-6 rounded-lg shadow-md hover:shadow-xl hover:scale-105 transform transition duration-300 ease-in-out"
                            >
                                <div className="flex items-center mb-4">

                                    <span className="text-yellow-400 text-3xl">{tip.icon}</span>

                                    <h3 className="ml-4 text-xl font-semibold text-yellow-400">
                                        Tip {tip.id}
                                    </h3>

                                </div>

                                <p className="text-gray-300 group-hover:text-white transition">
                                    {tip.tip}
                                </p>
                                
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
};

export default CareerTips;