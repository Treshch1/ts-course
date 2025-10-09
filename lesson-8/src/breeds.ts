import { BreedsApiResponse, Breed, BreedAverageAttributes } from './models';

const sendDogApiRequest = function sendDogApiRequest(): Promise<Response> {
    return fetch('https://dogapi.dog/api/v2/breeds');
};

const getFirstBreed = async (request: Promise<Response>): Promise<Breed> => {
    const response = await request;
    const json = (await response.json()) as BreedsApiResponse;
    return json.data[0] as Breed;
};

(async () => {
    const breed = await getFirstBreed(sendDogApiRequest());
    const breedAverageAttributes = new BreedAverageAttributes(breed);
    console.log(breedAverageAttributes.info);
})();
