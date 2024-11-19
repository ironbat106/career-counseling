import { useContext, useState } from "react";
import { NavLink, Link, Outlet } from "react-router-dom";
import { FaRegUserCircle } from "react-icons/fa";
import { HiAnnotation } from "react-icons/hi";
import { AuthContext } from "../provider/AuthProvider";

const NavBar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { user, logOut } = useContext(AuthContext);


    return (
        <div className="navbar bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white shadow-lg sm:px-6 md:px-8">

            <div className="flex-1">
                <a className="btn btn-ghost normal-case text-4xl font-bold tracking-wider text-yellow-400 hover:text-yellow-200 font-greatvibes">
                    ElevateU
                </a>
            </div>


            {/* <section className="col-span-6">
                <Outlet></Outlet>
            </section> */}

            <div className="hidden lg:flex flex-none">
                <ul className="menu menu-horizontal px-1 space-x-4">
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                isActive
                                    ? "text-yellow-400 underline decoration-2 font-greatvibes text-2xl"
                                    : "hover:text-yellow-200 transition-all font-greatvibes text-xl"
                            }
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/myprofile"
                            className={({ isActive }) =>
                                isActive
                                    ? "text-yellow-400 underline decoration-2 font-greatvibes text-2xl"
                                    : "hover:text-yellow-200 transition-all font-greatvibes text-xl"
                            }
                        >
                            My Profile
                        </NavLink>
                    </li>

                    <div className="flex items-center space-x-4">

                        <div className="font-greatvibes text-2xl">
                            {user && user.email}
                        </div>
                        {
                            user && user?.email ? (
                                <div>
                                    <img
                                        className="w-8 h-8 md:w-10 md:h-10 rounded-full"
                                        src={user?.photoURL}
                                        alt="User Avatar"
                                        title={user.displayName}
                                    />
                                </div>
                               ) : (
                                <FaRegUserCircle className="text-yellow-400 hover:text-yellow-200 text-3xl md:text-4xl cursor-pointer" />
                               )
                        }

                    </div>
                    {
                        user && user?.email
                            ? (
                                <button onClick={logOut} className="btn btn-warning">Log Out</button>
                            ) : (

                                <Link to="/auth/login" className="btn btn-warning hover:bg-yellow-300 font-mono">
                                    Login
                                </Link>

                            )}


                    <li>
                        <button className="btn btn-warning hover:bg-yellow-300 font-mono">
                            <HiAnnotation />
                            Book an Appointment
                        </button>
                    </li>

                </ul>
            </div>

            <div className="lg:hidden">
                <button
                    className="btn btn-ghost text-yellow-400 hover:text-yellow-300"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d={
                                isMenuOpen
                                    ? "M6 18L18 6M6 6l12 12"
                                    : "M4 6h16M4 12h16M4 18h16"
                            }
                        />
                    </svg>
                </button>
            </div>

            {isMenuOpen && (
                <div className="absolute top-16 left-0 w-full bg-gradient-to-r from-gray-800 via-gray-900 to-black shadow-md md:hidden z-50">
                    <ul className="menu menu-vertical px-4 py-2 space-y-2">
                        <li>
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    isActive
                                        ? "text-yellow-400 font-bold underline decoration-2"
                                        : "hover:text-yellow-300 transition-all"
                                }
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/myprofile"
                                className={({ isActive }) =>
                                    isActive
                                        ? "text-yellow-400 font-bold underline decoration-2"
                                        : "hover:text-yellow-300 transition-all"
                                }
                                onClick={() => setIsMenuOpen(false)}
                            >
                                My Profile
                            </NavLink>
                        </li>
                        <li>
                            <button
                                className="btn btn-warning w-full hover:bg-yellow-500"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Book an Appointment
                            </button>
                        </li>
                    </ul>
                </div>
            )}

        </div>
    );
};

export default NavBar;