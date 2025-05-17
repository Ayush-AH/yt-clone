import { createBrowserRouter } from "react-router-dom";
import Home from "../home/Home";
import Feed from "../feed/Feed";
import Watch from "../Watch";

const Router = createBrowserRouter([
  {
    path:"/",
    element:<Home/>,
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