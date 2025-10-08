import { createBrowserRouter } from "react-router";
import MainLayouts from "../Layouts/MainLayouts";
import Home from "../Pages/Home";
import Apps from "../Pages/Apps"
import Installation from "../Pages/Installation"


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts/>,
    children:[
        {
            index:true,
            element:<Home/>,
        },
        {
            path:'/apps',
            element:<Apps/>,
        },
        {
            path:'/installation',
            element:<Installation/>,
        },
    ]
  },
]);

export default router