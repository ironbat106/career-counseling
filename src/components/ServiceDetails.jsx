
import NavBar from './NavBar';
import Footer from './Footer';
import { Link, useLoaderData } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { FaArrowLeft } from "react-icons/fa";

const ServiceDetails = () => {

    const service = useLoaderData();
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState("");

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleAddComment = () => {
        if (newComment.trim()) {
            setComments([...comments, newComment.trim()]);
            setNewComment("");
        }
    };

    return (
        <div>
            <NavBar></NavBar>

            <div className='w-11/12 sm:w-10/12 lg:w-8/12 mx-auto py-16'>

                <div>
                    <Link
                        to="/"
                        className="btn btn-warning text-black rounded-full">
                        <FaArrowLeft />

                    </Link>

                    <h2 className='text-3xl sm:text-6xl font-bold text-center text-yellow-400 mb-10'>
                        {service.serviceName}
                    </h2>
                </div>

                <div className="flex items-center justify-center h-full">
                    <img
                        src={service.image}
                        alt={service.serviceName}
                        className="w-1/2 h-96 object-cover rounded-lg mb-6"
                    />
                </div>

                <p className='text-white mb-4'>
                    {service.description}
                </p>

                <p className='text-yellow-400 mb-4'>
                    <strong>Counselor:</strong> {service.counselor}
                </p>
                <p className='text-white mb-4'>
                    <strong>Category:</strong> {service.category}
                </p>
                <p className='text-white mb-4'>
                    <strong>Price:</strong> {service.pricing}
                </p>
                <p className='text-white mb-4'>
                    <strong>Duration:</strong> {service.duration}
                </p>
                <p className='text-white mb-4'>
                    <strong>Rating:</strong> {service.rating}⭐
                </p>

                <a
                    href={service.learnMore}
                    target="_blank"
                    className='btn btn-warning mb-6'
                >
                    Learn More
                </a>

                <div className='mt-10'>
                    <h3 className='text-2xl text-white mb-4 font-greatvibes'>Comment/Feedback</h3>
                </div>

                <input
                    type="text"
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    placeholder="Write your comment here..."
                    className="input input-bordered w-full mb-4"
                />

                <button
                    onClick={handleAddComment}
                    className='btn btn-warning w-full mb-6'>
                    Submit Comment
                </button>

                <div>
                    {comments.length > 0 ? (
                        comments.map((comment, index) => (
                            <p key={index} className="bg-gray-800 p-4 rounded-lg text-white mb-2">
                                {comment}
                            </p>
                        ))
                    ) : (
                        <p className="text-gray-400">No comments yet. Be the first to comment!</p>
                    )}
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default ServiceDetails;