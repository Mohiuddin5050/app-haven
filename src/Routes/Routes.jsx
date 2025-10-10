import { createBrowserRouter } from "react-router";
import MainLayouts from "../Layouts/MainLayouts";
import Home from "../Pages/Home";
import Apps from "../Pages/Apps"
import Installation from "../Pages/Installation"
import DetailsCard from "../Pages/DetailsCard";
import ErrorPage from "../Pages/ErrorPage";


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
        {
          path:'/detailsCard/:id',
          element:<DetailsCard/>
        },
        {
          path:'*',
          element:<ErrorPage/>
        }

    ]
  },
]);

export default router