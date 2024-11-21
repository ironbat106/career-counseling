import { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaGoogle } from "react-icons/fa";
import { IoEyeSharp } from "react-icons/io5";
import { IoEyeOffSharp } from "react-icons/io5";


const Login = () => {

    useEffect(() => {
        document.title = "Login | ElevateU";
        window.scrollTo(0, 0);
    }, []);

    const { userLogin, setUser, googleSignIn } = useContext(AuthContext);
    const [error, setError] = useState({});
    const [email, setEmail] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    // console.log(location);


    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log({ email, password });

        userLogin(email, password)
            .then((result) => {
                const user = result.user;
                setUser(user);
                toast.success("Login successful!");
                setTimeout(() => {
                    navigate(location?.state ? location.state : "/");
                }, 2000);
            })
            .catch((err) => {
                setError({ ...error, login: err.code });
                toast.error("Login failed: " + err.message);
            })
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

            <div className="card bg-base-100 w-full max-w-lg shrink-0 p-10">

                <h2 className="text-2xl font-semibold text-center font-greatvibes text-yellow-400 text-5xl">Login your account</h2>

                <form onSubmit={handleSubmit} className="card-body">

                    <div className="form-control">

                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input 
                        name="email" 
                        type="email" 
                        placeholder="email" 
                        className="input input-bordered" 
                        required 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        />

                    </div>

                    <div className="form-control relative">

                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>

                        <input
                            name="password"
                            type={showPassword ? 'text' : 'password'}
                            placeholder="password"
                            className="input input-bordered"
                            required
                        />

                        <button
                            onClick={() => setShowPassword(!showPassword)}
                            className="btn btn-xs absolute right-2 top-12">
                            {
                                showPassword ?  <IoEyeSharp /> : <IoEyeOffSharp />
                            }
                        </button>

                        {
                            error.login && (
                                <label className="label text-sm text-yellow-300">
                                    {error.login}
                                </label>
                            )
                        }

                        <label className="label">
                           <Link 
                           to= '/auth/forgot-password'
                           state={{email}}
                           className="label-text-alt link link-hover underline"
                           >
                            Forgot password?
                           </Link>
                        </label>

                    </div>

                    <div className="form-control mt-6">
                        <button className="btn btn-warning w-full">Login</button>
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

                <p className="text-center font-semibold">Don't Have An Account ? <Link className="text-yellow-200 underline" to="/auth/register">Register</Link>
                </p>

            </div>
        </div>
    );
};

export default Login;