// making a custom hook to get a breed list
import { useQuery } from '@tanstack/react-query';
import fetchBreedList from './fetchBreedList';

// comments are old way of getting the breed list before react-query:

// const localCache = {};

export default function useBreedList(animal) {
    const results = useQuery(["breeds", animal], fetchBreedList);

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

    // the question marks after results and data indicated they may not exist - the ?? says that if they don't, give me back an empty array
    return [results?.data?.breeds ?? [], results.status];
}