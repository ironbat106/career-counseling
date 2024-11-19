import MainSection from './MainSection';
import NavBar from './NavBar';
import Footer from './Footer';
import { useContext, useState } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { updateProfile } from 'firebase/auth';

const MyProfile = () => {
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
        <div>
            <NavBar></NavBar>
            <MainSection></MainSection>
            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
                <div className="card bg-white shadow-md p-6 w-full max-w-md">
                    <h2 className="text-center font-greatvibes text-yellow-400 text-4xl mb-6">
                        My Profile
                    </h2>
                    {user && (
                        <>
                            <img
                                src={user?.photoURL || "https://via.placeholder.com/150"}
                                alt={user?.displayName || "User"}
                                className="w-32 h-32 rounded-full mx-auto mb-4"
                            />
                            <h3 className="text-center text-xl font-semibold">
                                {user?.displayName || "Anonymous User"}
                            </h3>
                            <p className="text-center text-gray-600">
                                {user.email}
                            </p>

                            {/* Update Profile Form */}
                            <div className="mt-6">
                                <input
                                    type="text"
                                    placeholder="New Display Name"
                                    value={newDisplayName}
                                    onChange={(e) => setNewDisplayName(e.target.value)}
                                    className="input input-bordered w-full mb-4"
                                />
                                <input
                                    type="text"
                                    placeholder="New Photo URL"
                                    value={newPhotoURL}
                                    onChange={(e) => setNewPhotoURL(e.target.value)}
                                    className="input input-bordered w-full mb-4"
                                />
                                <button
                                    onClick={handleProfileUpdate}
                                    className="btn btn-warning w-full"
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
