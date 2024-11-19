import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className="bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white pt-10 pb-5">
            <div className="max-w-screen-xl mx-auto px-4">
                <div className="flex justify-between items-center mb-8">

                    <div className="text-3xl font-bold text-yellow-400 font-greatvibes tracking-wider">
                        ElevateU
                    </div>
                    
                    <div className="flex space-x-6">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                            <FaFacebook className="text-yellow-400 hover:text-yellow-200 text-2xl" />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                            <FaTwitter className="text-yellow-400 hover:text-yellow-200 text-2xl" />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin className="text-yellow-400 hover:text-yellow-200 text-2xl" />
                        </a>
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                            <FaGithub className="text-yellow-400 hover:text-yellow-200 text-2xl" />
                        </a>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    <div>
                        <h4 className="text-xl font-semibold text-yellow-400 mb-4">About Us</h4>
                        <p className="text-sm text-gray-400">
                            ElevateU is dedicated to empowering individuals with guidance, support, and resources for a brighter future. Our mission is to help you achieve your career goals and aspirations.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-xl font-semibold text-yellow-400 mb-4">Quick Links</h4>
                        <ul>
                            <li>
                                <a href="/" className="text-gray-400 hover:text-yellow-200 transition-all">Home</a>
                            </li>
                            <li>
                                <a href="/profile" className="text-gray-400 hover:text-yellow-200 transition-all">My Profile</a>
                            </li>
                            <li>
                                <a href="/about" className="text-gray-400 hover:text-yellow-200 transition-all">About</a>
                            </li>
                            <li>
                                <a href="/contact" className="text-gray-400 hover:text-yellow-200 transition-all">Contact</a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-xl font-semibold text-yellow-400 mb-4">Contact</h4>
                        <p className="text-sm text-gray-400">Email: support@elevateu.com</p>
                        <p className="text-sm text-gray-400">Phone: +880 1969480067 </p>
                        <p className="text-sm text-gray-400">Address: 123 ElevateU Street, Dhaka, Bangladesh</p>
                    </div>
                </div>

                <div className="text-center text-sm text-gray-500">
                    <p>© 2024 ElevateU. All Rights Reserved.</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
