import React from "react";
import { createRoot } from "react-dom/client";
import Header  from "./src/Components/Header";
import Body from "./src/Components/Body";






const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
    </>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<AppLayout />);
