const sendDogApiRequest = function sendDogApiRequest() {
    return fetch('https://dogapi.dog/api/v2/breeds');
};

const processDogApiRequest = (request) => {
    return request
        .then((response) => response.json())
        .then((json) => {
            return json.data.map((breed) => breed.attributes.name);
        })
        .catch((error) => {
            console.error('Error fetching dog breeds:', error);
        });
};

processDogApiRequest(sendDogApiRequest()).then((breedNames) => {
    console.log(breedNames);
});
