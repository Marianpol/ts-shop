const handleApiRequest = async (endpoint: string, options: object) => {
    const result = await fetch('/api/' + endpoint, options);

    const response = result.json();
    response.then((data) => {
        return data;
    })
    .catch((reject) => {
        return reject;
    })
}

export default handleApiRequest;