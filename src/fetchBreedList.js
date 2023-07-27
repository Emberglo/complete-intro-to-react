const fetchBreedList = async ({queryKey}) => {
    const animal = queryKey[1];

    // to catch requests with no animal - no need to go to the api
    if (!animal) return [];

    const apiRes = await fetch(
        `http://pets-v2.dev-apis.com/breeds?animal=${animal}`
    );

    // if it's an unsuccessful request, react query wants you to throw an error - give yourself a useful error message for debugging
    if (!apiRes.ok) {
        throw new Error(`breeds/${animal} fetch not ok`);
    }

    // react query expects us to return a promise, and fetch gives us a promise
    return apiRes.json();
}

export default fetchBreedList;