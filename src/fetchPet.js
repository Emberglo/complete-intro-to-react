const fetchPet = async ({queryKey}) => {
    const id = queryKey[1];

    const apiRes = await fetch(
        `http://pets-v2.dev-apis.com/pets?id=${id}`
    );

    // if it's an unsuccessful request, react query wants you to throw an error - give yourself a useful error message for debugging
    if (!apiRes.ok) {
        throw new Error(`details/${id} fetch not ok`);
    }

    // react query expects us to return a promise, and fetch gives us a promise
    return apiRes.json();
}

export default fetchPet;