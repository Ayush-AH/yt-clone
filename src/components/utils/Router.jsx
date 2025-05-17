import { createBrowserRouter } from "react-router-dom";
import Feed from "../feed/Feed";
import Watch from "../Watch";
import Layout from "../layout/Layout";

const Router = createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    children:[
      {
        path:"/",
        element:<Feed/>
      },
       {
        path:"/watch",
        element:<Watch/>
      }
    ]
  }
])

export default Router;