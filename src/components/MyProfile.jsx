import NavBar from './NavBar';
import Footer from './Footer';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { updateProfile } from 'firebase/auth';

import backgroundImage from '../assets/usinglaptop.jpg';

const MyProfile = () => {

    useEffect(() => {
        document.title = "My Profile | ElevateU";
    }, []);

    const { user, setUser } = useContext(AuthContext);
    const [newDisplayName, setNewDisplayName] = useState('');
    const [newPhotoURL, setNewPhotoURL] = useState('');

    const handleProfileUpdate = () => {
        if (!user) return;

        updateProfile(user, {
            displayName: newDisplayName || user.displayName,
            photoURL: newPhotoURL || user.photoURL,
        })
            .then(() => {
                console.log("Profile updated successfully!");
                setUser({ ...user, displayName: newDisplayName, photoURL: newPhotoURL });
                setNewDisplayName('');
                setNewPhotoURL('');
            })
            .catch((error) => {
                console.error("Error updating profile:", error);
            });
    };

    return (
        <div className="bg-gradient-to-b from-gray-800 to-gray-900 min-h-screen text-white">

            <NavBar></NavBar>

            <div
                className="flex flex-col items-center justify-center min-h-screen py-12 bg-cover bg-center"
                style={{ backgroundImage: `url(${backgroundImage})` }}  // Using the imported image
            ></div>

            <div className="flex flex-col items-center justify-center min-h-screen py-12">

                <div className="group bg-gradient-to-b from-gray-800 to-gray-900 p-8 rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transform transition-transform duration-300 ease-in-out w-full max-w-md mx-auto">

                    <h2 className="text-center font-greatvibes text-yellow-400 text-5xl mb-6 transform hover:scale-105 transition duration-300">
                        My Profile
                    </h2>

                    {user && (
                        <>
                            <img
                                src={user?.photoURL || "https://via.placeholder.com/150"}
                                alt={user?.displayName || "User"}
                                className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-yellow-400 shadow-xl group-hover:scale-105 transform transition-transform duration-300"
                            />
                            <h3 className="text-center text-xl font-semibold">
                                {user?.displayName || "Anonymous User"}
                            </h3>
                            <p className="text-center text-gray-600">
                                {user.email}
                            </p>

                            {/* Update Profile Form */}
                            <div className="mt-6 space-y-4">
                                <input
                                    type="text"
                                    placeholder="New Display Name"
                                    value={newDisplayName}
                                    onChange={(e) => setNewDisplayName(e.target.value)}
                                    className="input input-bordered input-yellow-400 w-full text-lg py-3 px-5 rounded-lg shadow-md transition duration-300 hover:border-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                                />
                                <input
                                    type="text"
                                    placeholder="New Photo URL"
                                    value={newPhotoURL}
                                    onChange={(e) => setNewPhotoURL(e.target.value)}
                                    className="input input-bordered input-yellow-400 w-full text-lg py-3 px-5 rounded-lg shadow-md transition duration-300 hover:border-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                                />
                                <button
                                    onClick={handleProfileUpdate}
                                    className="btn btn-warning hover:bg-yellow-300 text-black w-full py-3 px-6 rounded-full font-semibold text-xl transition duration-300 ease-in-out transform hover:scale-105"
                                >
                                    Update Profile
                                </button>
                            </div>
                        </>
                    )}
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MyProfile;
