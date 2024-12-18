import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ForgetPassword = () => {

    useEffect(() => {
        document.title = "Forgot Password | ElevateU";
        window.scrollTo(0, 0);
    }, []);

    const location = useLocation();
    const [email, setEmail] = useState(location?.state?.email || "");
    const [message, setMessage] = useState("");

    const handleResetPassword = async () => {
        if (!email) {
            toast.error("Please enter your email.");
            return;
        }

        const auth = getAuth();
        try {
            await sendPasswordResetEmail(auth, email);
            toast.success("Password reset email sent! Redirecting to Gmail. Check your inbox.");

            setTimeout(() =>{
                window.location.href = "https://mail.google.com"
            }, 2000);
        }
        catch (error) {
            toast.error(error.message || "Failed to send reset email. Try again.");
        }
    };

    return (
        <div className="min-h-screen flex justify-center items-center">
            <div className="card bg-base-100 w-full max-w-md p-10">
                <h2 className="text-2xl font-semibold text-center font-greatvibes text-yellow-400 text-5xl">
                    Reset Password
                </h2>
                <form className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            className="input input-bordered"
                        />
                    </div>
                    <div className="form-control mt-6">
                        <button
                            type="button"
                            onClick={handleResetPassword}
                            className="btn btn-warning w-full"
                        >
                            Reset Password
                        </button>
                    </div>
                </form>
            </div>
            <ToastContainer position="top-center"></ToastContainer>
        </div>
    );
};

export default ForgetPassword;