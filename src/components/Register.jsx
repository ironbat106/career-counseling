import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TestToast from "./TestToast";
import { FaGoogle } from "react-icons/fa";


const Register = () => {

    useEffect(() => {
        document.title = "Register | ElevateU";
    }, []);

    const { createNewUser, setUser, updateUserProfile, googleSignIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const [error, setError] = useState({});
    const [password, setPassword] = useState("");

    const handlePasswordChange = (e) => {
        const value = e.target.value;
        setPassword(value);

        const passwordError = {};
        if (!/[A-Z]/.test(value)) {
            passwordError.uppercase = "Must include at least one uppercase letter";
        }
        if (!/[a-z]/.test(value)) {
            passwordError.lowercase = "Must include at least one lowercase letter";
        }
        if (value.length < 6) {
            passwordError.length = "Must be at least 6 characters long";
        }

        setError((prev) => ({
            ...prev,
            password: Object.keys(passwordError).length ? passwordError : null,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const form = new FormData(e.target);
        const name = form.get("name");
        const email = form.get("email");
        const photo = form.get("photo");
        const password = form.get("password");

        if (name.length < 4) {
            setError({ ...error, name: "Must be more than 4 characters long" });
            toast.error("Name Must be more than 4 characters long!");
            return;
        }

        if (error.password) {
            toast.error("Please fix the password errors before submitting.");
            return;
        }

        console.log({ name, email, photo, password });

        createNewUser(email, password)
            .then((result) => {
                const user = result.user;
                setUser(user);
                updateUserProfile({ displayName: name, photoURL: photo })
                    .then(() => {
                        toast.success("Registration successful!", { autoClose: 3000 });
                        setTimeout(() =>{
                            navigate("/");
                        }, 2000);
                    })
                    .catch((err) => {
                        toast.error("Error updating profile: " + err.message);
                        console.log(err);
                    })
            })
            .catch((err) => {
                toast.error("Registration failed: " + err.message);
                console.log(err);
            });
    };

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then((result) => {
                const user = result.user;
                setUser(user);
                toast.success("Google Sign-In successful!");
                setTimeout(() => {
                    navigate(location?.state || "/");
                }, 2000);
            })
            .catch((err) => {
                toast.error("Google Sign-In failed: " + err.message);
            });
    };

    return (
        <div className="min-h-screen flex justify-center items-center">
            <ToastContainer position="top-center" />
            {/* <TestToast></TestToast> */}

            <div className="card bg-base-100 w-full max-w-lg shrink-0 p-10">

                <h2 className="text-2xl font-semibold text-center font-greatvibes text-yellow-400 text-5xl">
                    Register your account
                </h2>

                <form onSubmit={handleSubmit} className="card-body">

                    <div className="form-control">

                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>

                        <input name="name" type="text" placeholder="name" className="input input-bordered" required />
                    </div>
                    {
                        error.name && (
                            <label className="label text-xs text-yellow-300">
                                {error.name}
                            </label>
                        )
                    }

                    <div className="form-control">

                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>

                        <input name="photo" type="text" placeholder="photo-url" className="input input-bordered" required />
                    </div>

                    <div className="form-control">

                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>

                        <input name="email" type="email" placeholder="email" className="input input-bordered" required />
                    </div>

                    <div className="form-control">

                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>

                        <input
                            name="password"
                            type="password"
                            placeholder="password"
                            className="input input-bordered"
                            value={password}
                            onChange={handlePasswordChange}
                            required
                        />
                        {
                            error.password && (
                                <div className="text-xs text-yellow-300 mt-1">
                                    {
                                        Object.values(error.password).map((err, index) => (
                                            <p key={index}>{err}</p>
                                        ))
                                    }
                                </div>
                            )}

                    </div>

                    <div className="form-control mt-6">
                        <button className="btn btn-warning" disabled={!!error.password}>
                            Register
                        </button>
                    </div>
                </form>

                <div className="divider">OR</div>


                <form onSubmit={handleSubmit} className="card-body">
                <div className="form-control">
                    <button
                        className="btn btn-outline btn-warning w-full"
                        onClick={handleGoogleSignIn}
                    >
                        Login with Google
                        <FaGoogle className="mr-2" />
                    </button>
                </div>
                </form>

                <p className="text-center font-semibold">Already Have An Account ? <Link className="text-yellow-200 underline" to="/auth/login">Login</Link>
                </p>

            </div>
        </div>
    );
};

export default Register;