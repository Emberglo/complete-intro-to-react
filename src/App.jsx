// React import in done automatically - not needed anymore
// import React from "react";
import { createRoot } from "react-dom/client";
// import Pet from "./Pet";
import SearchParams from "./SearchParams";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Details from "./Details";
import { Link } from "react-router-dom";

// always capitalize components
// this is essentially creating a class
const App = () => {
  return (
    <BrowserRouter>
      <header>
        <Link to="/">Adopt Me!</Link>
      </header>
      <Routes>
        <Route path="/details/:id" element={<Details />} />
        <Route path="/" element={<SearchParams />} />
      </Routes>
    </BrowserRouter>
  );

  // Old way of writing the component without JSX - not going to use anymore
  // return React.createElement(
  //   // type of element we're creating
  //   "div",
  //   // can be an empty object or null - attributes handing down to the elment - could have an id, or sytle name, etc inside the object (optional)
  //   {},
  //   // children of this component (optional)
  //   [
  //     React.createElement("h1", {}, "Adopt Me!"),
  //     React.createElement(Pet, {
  //       name: "Piper",
  //       animal: "Dog",
  //       breed: "German Shepherd",
  //     }),
  //     React.createElement(Pet, {
  //       name: "Siggy",
  //       animal: "Dog",
  //       breed: "German Shepherd",
  //     }),
  //     React.createElement(Pet, {
  //       name: "Fluffy",
  //       animal: "Bird",
  //       breed: "Gyrfalcon",
  //     }),
  //   ]
  // );
};
// now we need to intantiate the class - it's nice to keep access to container and root so they're separate variables
const container = document.getElementById("root");
// createRoot is the new way of doing ReactDOM.render - render doesn't have all concurency features - puts you in legacy mode
const root = createRoot(container);
// create element is given a component here instead of a string - if given a string, it will just render the string
// root.render(React.createElement(App));
// instead of React.createElement, we can just pass the component tag
root.render(<App />);
// JSX calls React.createElement for you - won't need to use it again after this
