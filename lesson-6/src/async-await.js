const sendDogApiRequest = function sendDogApiRequest() {
    return fetch('https://dogapi.dog/api/v2/breeds');
};

const processDogApiRequest = async (request) => {
    const response = await request;
    const json = await response.json();
    return json.data.map((breed) => breed.attributes.name);
};

const breeds = await processDogApiRequest(sendDogApiRequest());
console.log(breeds);
