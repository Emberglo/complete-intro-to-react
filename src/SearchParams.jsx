import { useState, useEffect } from "react";
// and effect is something that happens outside of your component - typically api requests, but can be local storage, etc
import Pet from "./Pet";

const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];

const SearchParams = () => {
  // useState is a hook that tracks state in this component
  const [location, setLocation] = useState("");
  // above destructuring actually looks like:
  // const locationHook = useState("");
  // const location = locationHook[0];
  // const setLocation = locationHook[1];
  const [animal, setAnimal] = useState("");
  const [breed, setBreed] = useState("");
  const [pets, setPets] = useState([]);
  const breeds = [];

  // an effect runs every single time you rerender a component
  // giving an empty array at the end makes it only run once when the component is first rendered
  // anything you put in the array will be watched and cause a rerender when it changes (ie: [animal])
  useEffect(() => {
    requestPets();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function requestPets() {
    // fetch request to get pets from server
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
    );
    // convert from json to js
    const json = await res.json();
    // update our pets state with the result
    setPets(json.pets);
  }

  return (
    <div className="search-params">
      {/* this is a controlled form - react is controlling the form - typically not best practice - uncontrolled form just grab the data off the form when it's submitted */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          requestPets();
        }}
      >
        <label htmlFor="location">
          Location
          {/* curly braces in value make tells it to insert the javascript expression stored in location rather than just a string "location"
          onchange holds a function to run when the input detects a change and updates the state above */}
          <input
            id="location"
            value={location}
            placeholder="Location"
            onChange={(e) => setLocation(e.target.value)}
          />
        </label>
        <label htmlFor="animal">
          Animal
          <select
            id="animal"
            value={animal}
            onChange={(e) => {
              setAnimal(e.target.value);
              // clears out breed when you change animal type so incorrect breed info isn't shown
              setBreed("");
            }}
          >
            <option />
            {ANIMALS.map((animal) => (
              <option key={animal}>{animal}</option>
            ))}
          </select>
        </label>
        <label htmlFor="breeds">
          Breed
          <select
            id="breed"
            // way of disabling a form option if there is nothing to choose from
            disabled={breeds.length == 0}
            value={breed}
            onChange={(e) => {
              setBreed(e.target.value);
            }}
          >
            <option />
            {breeds.map((breed) => (
              <option key={breed}>{breed}</option>
            ))}
          </select>
        </label>
        <button>Submit</button>
      </form>

      {pets.map((pet) => (
        <Pet
          name={pet.name}
          animal={pet.animal}
          breed={pet.breed}
          key={pet.id}
          // the key allows react to know that an array is being re ordered rather than completely changed - lets it swap things around instead of completely distroying and rerendering
        />
      ))}
    </div>
  );
};

export default SearchParams;
