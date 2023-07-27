// making a custom hook to get a breed list
import { useQuery } from '@tanstack/react-query';
import fetchBreedList from './fetchBreedList';

export default function useBreedList(animal) {
    const results = useQuery(["breeds", animal], fetchBreedList);

    // the question marks after results and data indicated they may not exist - the ?? says that if they don't, give me back an empty array
    return [results?.data?.breeds ?? [], results.status];
}