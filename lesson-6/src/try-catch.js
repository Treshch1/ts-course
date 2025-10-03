class MyError extends Error {
    constructor(message) {
        super(message);
        this.name = 'MyError';
    }
}

const processRequest = async (url) => {
    const response = await fetch(url);
    const json = await response.json();
    return json.data.map((breed) => breed.attributes.name);
};

const processDogApiRequest = async () => {
    try {
        return await processRequest('https://dog2api.dog/api/v2/breeds');
    } catch {
        try {
            return await processRequest('https://dogapi.dog/api/v2/breeds');
        } catch {
            throw new MyError('Error fetching dog breeds');
        }
    }
};

console.log(await processDogApiRequest());
