import React , {lazy, Suspense} from "react";
import { createRoot } from "react-dom/client";
import Header  from "./src/Components/Header";
import Body from "./src/Components/Body";
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, createHashRouter, RouterProvider, Outlet} from 'react-router-dom';
import About from './src/Components/About';
import Contact from './src/Components/Contact';
import Error from "./src/Components/Error";
//import RestrauntMenu from "./src/Components/RestrauntMenu"
import Cart from "./src/Components/Cart"
//import Grocery from "./src/Components/Grocery";
import Shimmer from "./src/Components/Shimmer";


const Grocery = lazy(() => import("./src/Components/Grocery"));
const RestrauntMenu = lazy(() => import("./src/Components/RestrauntMenu"));


const AppLayout = () => {
  return (
    <>
      <Header />
      {/* <Body /> */}
      <Outlet />
    </>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {

        path: "/",
        element: < Body />
      },
      {
    path: "/about",
    element: <About/>
  },
  {
    path: "/contact",
    element : <Contact/>
  },
  {
    path: "/cart",
    element : <Cart/>
  },
   {
    path: "/grocery",
    element : <Suspense fallback = { <h1>Loading...</h1>} ><Grocery/></Suspense>
    
  },
  {

    path: "restraunts/:restaurantId",
    element: <Suspense fallback={<Shimmer />}>
      <RestrauntMenu />
      </Suspense>
  }
    ],

    errorElement: <Error />,
  },
 
])
const root = createRoot(document.getElementById("root"));
root.render(< RouterProvider router  = {appRouter}/>);

// root.render(<AppLayout />);
