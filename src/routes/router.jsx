import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import MyProfile from "../components/MyProfile";
import About from "../components/About";
import Error from "../components/Error";
import ServiceDetails from "../components/ServiceDetails";
import AuthLayout from './../layouts/AuthLayout';
import Login from "../components/Login";
import Register from "../components/Register";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout></HomeLayout>,
        loader: async () => {
            const res = await fetch('/display.json');
            return res.json();
        }
    },
    {
        path: "auth",
        element: <AuthLayout></AuthLayout>,
        children: [
            {
                path: "/auth/login",
                element: <Login></Login>,
            },
            {
                path: "/auth/register",
                element: <Register></Register>,
            },
        ],
    },
    {
        path: "/myprofile",
        element: (
            <PrivateRoute>
                <MyProfile></MyProfile>
            </PrivateRoute>
        )
    },
    {
        path: "/about",
        element: <About></About>
    },
    {
        path: "/services/:id",
        element: (
        <PrivateRoute>
            <ServiceDetails></ServiceDetails>
        </PrivateRoute>
        ),
        loader: async ({ params }) =>{
            const res = await fetch('/display.json');
            const services = await res.json();
            return services.find(service => service.id === parseInt(params.id));
        },
    },
    {
        path: "auth",
        element: <h1>Login</h1>
    },
    {
        path: "*",
        element: <Error></Error>
    }
])

export default router;