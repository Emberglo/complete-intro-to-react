import { useState, useContext } from "react";
// and effect is something that happens outside of your component - typically api requests, but can be local storage, etc
import Results from "./Results";
import useBreedList from "./useBreedList";
import { useQuery } from "@tanstack/react-query";
import fetchSearch from "./FetchSearch";
import AdoptedPetContext from "./AdoptedPetContext";

const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];

const SearchParams = () => {
  // useState is a hook that tracks state in this component
  // below destructuring actually looks like:
  // const animalHook = useState("");
  // const animal = animalHook[0];
  // const setAnimal = animalHook[1];
  const [animal, setAnimal] = useState("");
  // use our custom hook to always have a correct breed list based on the current animal
  const [breeds] = useBreedList(animal);
  const [requestParams, setRequestParams] = useState({
    location: "",
    animal: "",
    breed: "",
  });
  // eslint-disable-next-line no-unused-vars
  const [adoptedPet, _] = useContext(AdoptedPetContext);

  // useQuery has completely removed useEffect from the project - also includes error handing and caching that we didn't have to code ourselves
  const results = useQuery(["search", requestParams], fetchSearch);
  // TODO - impement a loading screen like on the details page for pets
  const pets = results?.data?.pets ?? [];

  return (
    // TODO - extract the form into it's own component
    <div className="search-params">
      {/* this is an uncontrolled form - react isn't tracking location or breed anymore - best to do it this way unless you have a data dependency like with animal */}
      <form
        // e in this case is a react synthetic dom event, not an actual dom event - sometimes can be important to know, especially in typescript
        onSubmit={(e) => {
          // prevents form from actually submitting
          e.preventDefault();
          //browser api that takes all the form data and puts it in an object
          const formData = new FormData(e.target);
          const obj = {
            animal: formData.get("animal") ?? "",
            breed: formData.get("breed") ?? "",
            location: formData.get("location") ?? "",
          };
          setRequestParams(obj);
        }}
      >
        {adoptedPet ? (
          <div className="pet image-container">
            <img src={adoptedPet.images[0]} alt={adoptedPet.name} />
          </div>
        ) : null}
        <label htmlFor="location">
          Location
          {/* curly braces in value make tells it to insert the javascript expression stored in location rather than just a string "location"
          onchange holds a function to run when the input detects a change and updates the state above */}
          <input id="location" name="location" placeholder="Location" />
        </label>

        <label htmlFor="animal">
          Animal
          <select
            id="animal"
            value={animal}
            onChange={(e) => {
              setAnimal(e.target.value);
              // clears out breed when you change animal type so incorrect breed info isn't shown
            }}
          >
            <option />
            {ANIMALS.map((animal) => (
              <option key={animal}>{animal}</option>
            ))}
          </select>
        </label>

        <label htmlFor="breed">
          Breed
          <select
            id="breed"
            name="breed"
            // way of disabling a form option if there is nothing to choose from
            disabled={breeds.length == 0}
          >
            <option />
            {breeds.map((breed) => (
              <option key={breed}>{breed}</option>
            ))}
          </select>
        </label>
        <button>Submit</button>
      </form>

      <Results pets={pets} />
    </div>
  );
};

export default SearchParams;
