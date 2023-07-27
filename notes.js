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

// SECTION - 