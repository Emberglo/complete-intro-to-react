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
const Pet = ({ name, animal, breed, images, location, id }) => {
  let hero = "http://pets-images.dev-apis.com/pets/none.jpg";

  if (images.length) {
    hero = images[0];
  }

  return (
    <a href={`/details/${id}`} className="pet">
      <div className="image-container">
        <img src={hero} alt={name} />
      </div>
      <div className="info">
        <h1>{name}</h1>
        <h2>
          {animal} - {breed} - {location}
        </h2>
      </div>
    </a>
  );
};

export default Pet;
