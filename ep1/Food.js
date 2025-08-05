import React from "react";
import { createRoot } from "react-dom/client";
import Header  from "./src/Components/Header";
import Body from "./src/Components/Body";
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, createHashRouter, RouterProvider} from 'react-router-dom';
import About from './src/Components/About';
import Contact from './src/Components/Contact';
import Error from "./src/Components/Error";



const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
    </>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    errorElement: <Error />,
  },
  {
    path: "/about",
    element: <About/>
  },
  {
    path: "/contact",
    element : <Contact/>
  }
])
const root = createRoot(document.getElementById("root"));
root.render(< RouterProvider router  = {appRouter}/>);

// root.render(<AppLayout />);
