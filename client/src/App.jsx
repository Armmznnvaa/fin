import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './App.css'
import UserRoot from "./UserRoot";
import Home from "./pages/Home"
import Add from "./pages/Add";
import Details from "./pages/Details";
import Basket from "./pages/basket";
import BasketItemContextProvider from "./context/BasketItemContext";

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <UserRoot/>,
      children:[
       {
        path:"/Home",
        element:<Home/>

       },
       {
        path:"/Add",
        element:<Add/>

       },
       {
        path:"/Details/:id",
        element:<Details/>

       },{
        path:"/Basket",
        element:<Basket/>
       }
      ]
    },
  ]);
  return (
    <>
   <BasketItemContextProvider>
   <RouterProvider router={router} />
   </BasketItemContextProvider>
    </>
  )
}

export default App
