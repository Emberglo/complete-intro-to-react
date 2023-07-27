// React import in done automatically - not needed anymore
// import React from "react";
import { createRoot } from "react-dom/client";
// import Pet from "./Pet";
import SearchParams from "./SearchParams";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Details from "./Details";
import { Link } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

//instantiate a query client cache
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // setting these to infinity means the cache will hold onto the data for the user's whole session
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});

// always capitalize components
// this is essentially creating a class
const App = () => {
  return (
    // browser router and queryclientprovider are called higher order components - they wrap other components but don't display anything
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <header>
          <Link to="/">Adopt Me!</Link>
        </header>
        <Routes>
          <Route path="/details/:id" element={<Details />} />
          <Route path="/" element={<SearchParams />} />
        </Routes>
      </QueryClientProvider>
    </BrowserRouter>
  );
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
