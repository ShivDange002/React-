import React from 'react';
import ReactDOM from 'react-dom/client';
import { createHashRouter, RouterProvider} from 'react-router-dom';
import About from './Components/About';
import Contact from './Components/Contact'

const heading = React.createElement(
  "h1",
  {
    id: "title",
  },
  "Heading 1"
);
const heading2 = React.createElement(
  "h2",
  {
    id: "title",
  },
  "Heading 2"
);
const container = React.createElement(
  "div",
  {
    id: "container",
  },
  [heading, heading2]
);

const jsxHeading  = (
    <h1> Hello React!</h1>
);

const HeadingComponent1  = ()  => (
    <h1> Heading Component1</h1>
);
const HeadingComponent2  = ()  => (
    <><HeadingComponent1></HeadingComponent1> <h1> Heading Component2</h1></>
);

const HeadingComponent3 = ()  => (
   <>
    <HeadingComponent2 />
    <h1 id='container'> Heading Component3</h1>
    </>
);
//console.log(heading);

const BodyComponent = () => (
    
        <>
    <HeadingComponent3 id = "container" ></HeadingComponent3>
    </>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
//passing a react element inside the root
//async defer

const appRouter = createHashRouter([
  {
    path: "/",
    element: <BodyComponent />,
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
root.render(< RouterProvider router  = {appRouter}/>);

