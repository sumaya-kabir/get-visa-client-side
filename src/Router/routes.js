import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import About from "../Pages/About/About";
import AddServices from "../Pages/AddServices/AddServices";
import Blog from "../Pages/Blog/Blog";
import Contact from "../Pages/Contact/Contact";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import MyReviews from "../Pages/MyReviews/MyReviews";
import Update from "../Pages/MyReviews/Update";
import AddReviews from "../Pages/Reviews/AddReviews";
import ServiceDetails from "../Pages/Services/ServiceDetails";
import Services from "../Pages/Services/Services";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRoutes from "./PrivateRoutes";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('https://getvisa-server.vercel.app/servicesHome')
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/services',
                element: <Services></Services>,
                loader: () => fetch('https://getvisa-server.vercel.app/services')
            },
            {
                path: '/services/:id',
                element: <ServiceDetails></ServiceDetails>,
                loader: ({params}) => fetch(`https://getvisa-server.vercel.app/services/${params.id}`)
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/addreviews/:id',
                element: <PrivateRoutes><AddReviews></AddReviews></PrivateRoutes>,
                loader: ({params}) => fetch(`https://getvisa-server.vercel.app/services/${params.id}`)
              },
              
            {
                path: '/myReviews',
                element:<PrivateRoutes><MyReviews></MyReviews></PrivateRoutes>
            },
            {
                path: '/update/:id',
                element:<PrivateRoutes><Update></Update></PrivateRoutes>,
                loader: (({params}) => fetch(`https://getvisa-server.vercel.app/myreviews/${params.id}`))
            },
            {
                path: '/addservices',
                element:<PrivateRoutes><AddServices></AddServices></PrivateRoutes>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            }
        ]
    }
])