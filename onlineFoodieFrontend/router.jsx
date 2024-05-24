import { createBrowserRouter } from "react-router-dom";
import Home from "./src/pages/home/Home";
import AboutUs from "./src/pages/aboutUs/AboutUs";
import ContactUs from "./src/pages/contactUs/ContactUs";
import Register from "./src/pages/auth/register/Register";

const router=createBrowserRouter([
    {
        path:'/',
        element:<Home/>
    },{
path:"/about",
element:<AboutUs/>
    },{
        path:'/contact',
        element:<ContactUs/>
    },
    {
        path:'/register',
        element:<Register/>
    }
])
 
export default router