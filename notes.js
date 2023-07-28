// SECTION - from useBreedList.js - comments are old way of getting the breed list before react-query:

// const localCache = {};

    // inside export function:
    // const [breedList, setBreedList] = useState([]);
    // const [status, setStatus] = useState("unloaded");

    // useEffect(() => {
    //     if (!animal) {
    //         setBreedList([]);
    //     } else if (localCache[animal]) {
    //         // if we've seen that animal type before, we get the breed list from localCache instead of making an api request
    //         setBreedList(localCache[animal]);
    //     } else {
    //         requestBreedList();
    //     }

    //     async function requestBreedList() {
    //         setBreedList([]);
    //         setStatus("loading");

    //         const res = await fetch(
    //             `http://pets-v2.dev-apis.com/breeds?animal=${animal}`
    //         )

    //         const json = await res.json();

    //         localCache[animal] = json.breeds || [];

    //         setBreedList(localCache[animal]);

    //         setStatus("loaded");
    //     }
    // }, [animal]);


// SECTION - from App.jsx - Old way of writing the component without JSX - not going to use anymore

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

  // SECTION - from Pet.jsx - props are how to pass data from parent to child - makes code resuable

// old way of writing a component without JSX
// const Pet = (props) => {
//   // array holds children components - can just list them without an array which is called Variable Airity - react will put them in an array under the hood
//   return React.createElement("div", {}, [
//     React.createElement("h1", {}, props.name),
//     React.createElement("h2", {}, props.animal),
//     React.createElement("h2", {}, props.breed),
//   ]);
// };

// SECTION - old Controlled Form from SearchParams

// const [animal, setAnimal] = useState("");
// const [breed, setBreed] = useState("");

  // an effect runs every single time you rerender a component
  // giving an empty array at the end makes it only run once when the component is first rendered
  // anything you put in the array will be watched and cause a rerender when it changes (ie: [animal])
  // useEffect(() => {
    // requestPets();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  // async function requestPets() {
  //   // fetch request to get pets from server
  //   const res = await fetch(
  //     `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
  //   );
  //   // convert from json to js
  //   const json = await res.json();
  //   // update our pets state with the result
  //   setPets(json.pets);
  // }

//   {/* this is a controlled form - react is controlling the form - typically not best practice - uncontrolled form just grab the data off the form when it's submitted */}
//   <form
//   // e in this case is a react synthetic dom event, not an actual dom event - sometimes can be important to know, especially in typescript
//   onSubmit={(e) => {
//     // prevents form from actually submitting
//     e.preventDefault();
//     requestPets();
//   }}
// >
//   <label htmlFor="location">
//     Location
//     {/* curly braces in value make tells it to insert the javascript expression stored in location rather than just a string "location"
//     onchange holds a function to run when the input detects a change and updates the state above */}
//     <input
//       id="location"
//       value={location}
//       placeholder="Location"
//       onChange={(e) => setLocation(e.target.value)}
//     />
//   </label>

//   <label htmlFor="animal">
//     Animal
//     <select
//       id="animal"
//       value={animal}
//       onChange={(e) => {
//         setAnimal(e.target.value);
//         // clears out breed when you change animal type so incorrect breed info isn't shown
//         setBreed("");
//       }}
//     >
//       <option />
//       {ANIMALS.map((animal) => (
//         <option key={animal}>{animal}</option>
//       ))}
//     </select>
//   </label>

//   <label htmlFor="breed">
//     Breed
//     <select
//       id="breed"
//       // way of disabling a form option if there is nothing to choose from
//       disabled={breeds.length == 0}
//       value={breed}
//       onChange={(e) => {
//         setBreed(e.target.value);
//       }}
//     >
//       <option />
//       {breeds.map((breed) => (
//         <option key={breed}>{breed}</option>
//       ))}
//     </select>
//   </label>
//   <button>Submit</button>
// </form>