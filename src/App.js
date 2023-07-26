// always capitalize components
// this is essentially creating a class
const App = () => {
  return React.createElement(
    // type of element we're creating
    "div",
    // can be an empty object or null - attributes handing down to the elment - could have an id, or sytle name, etc inside the object (optional)
    {},
    // children of this component (optional)
    [
      React.createElement("h1", {}, "Adopt Me!"),
      React.createElement(Pet, {
        name: "Piper",
        animal: "Dog",
        breed: "German Shepherd",
      }),
      React.createElement(Pet, {
        name: "Siggy",
        animal: "Dog",
        breed: "German Shepherd",
      }),
      React.createElement(Pet, {
        name: "Fluffy",
        animal: "Bird",
        breed: "Gyrfalcon",
      }),
    ]
  );
};
// now we need to intantiate the class - it's nice to keep access to container and root so they're separate variables
const container = document.getElementById("root");
// createRoot is the new way of doing ReactDOM.render - render doesn't have all concurency features - puts you in legacy mode
const root = ReactDOM.createRoot(container);
// create element is given a component here instead of a string - if given a string, it will just render the string
root.render(React.createElement(App));
//JSX calls React.createElement for you - won't need to use it again after this

// props are how to pass data from parent to child - makes code resuable
const Pet = (props) => {
  // array holds children components - can just list them without an array which is called Variable Airity - react will put them in an array under the hood
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("h2", {}, props.animal),
    React.createElement("h2", {}, props.breed),
  ]);
};
