//used to need to import React here but don't need to any more

// props are how to pass data from parent to child - makes code resuable
// old way of writing a component without JSX
// const Pet = (props) => {
//   // array holds children components - can just list them without an array which is called Variable Airity - react will put them in an array under the hood
//   return React.createElement("div", {}, [
//     React.createElement("h1", {}, props.name),
//     React.createElement("h2", {}, props.animal),
//     React.createElement("h2", {}, props.breed),
//   ]);
// };

//new way of writing with JSX
const Pet = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <h2>{props.animal}</h2>
      <h2>{props.breed}</h2>
    </div>
  );
};

export default Pet;
