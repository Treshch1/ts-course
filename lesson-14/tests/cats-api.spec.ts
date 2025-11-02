import { ImageDto } from '../src/models/cats-api/image.dto';
import { TheCatImagesApi, TheCatFavoritesApi, TheCatVotesApi } from '../src/apis/cats-api';
import { ConfigService } from '../src/services/config.service';
import { FetchApiService } from '../src/services/fetch-api.service';
import { expect } from 'chai';

describe('The Cat Api integration tests', () => {
    const config = new ConfigService().getConfig();
    const fetchApiService = new FetchApiService(config.api.catsApi.baseUrl, {
        apiKey: config.auth.catsApi.apiKey
    });
    const imagesApi = new TheCatImagesApi(fetchApiService);
    const votesApi = new TheCatVotesApi(fetchApiService);
    const favoritesApi = new TheCatFavoritesApi(fetchApiService);

    let randomImage: ImageDto;
    let createdVoteId: number;
    let createdFavoriteId: number;
    const userId = 'my-user';

    it('should fetch random cat image', async () => {
        const [response, data] = await imagesApi.getRandomImage();
        randomImage = data[0];

        expect(response.ok).to.equal(true);
        expect(Array.isArray(data)).to.equal(true);
        expect(data.length).to.equal(1);
        expect(data[0]).to.have.property('id');
        expect(data[0]).to.have.property('url');
    });

    it('should create image vote', async () => {
        const voteData = {
            image_id: randomImage.id,
            value: 1
        };
        const [response, data] = await votesApi.createImageVote(voteData);

        expect(response.ok).to.equal(true);
        expect(data).to.have.property('id');
        expect(data).to.have.property('image_id', voteData.image_id);
        expect(data).to.have.property('value', voteData.value);

        createdVoteId = data.id;
    });

    it('should get vote details', async () => {
        const [response, data] = await votesApi.getVoteDetails(createdVoteId);

        expect(response.ok).to.equal(true);
        expect(data).to.have.property('id', createdVoteId);
        if (typeof data !== 'string') {
            expect(data.image).to.have.property('id', randomImage.id);
            expect(data.image).to.have.property('url', randomImage.url);
            expect(data).to.have.property('value', 1);
        }
    });

    it('should delete vote', async () => {
        const [response, data] = await votesApi.deleteVote(createdVoteId);

        expect(response.ok).to.equal(true);
        expect(data).to.have.property('message', 'SUCCESS');
    });

    it('should raise 404 when getting deleted vote details', async () => {
        const [response, data] = await votesApi.getVoteDetails(createdVoteId, false);

        expect(response.status).to.equal(404);
        expect(data).to.equal('NOT_FOUND');
    });

    it('should create favorite', async () => {
        const favoriteData = {
            image_id: randomImage.id,
            sub_id: userId
        };
        const [response, data] = await favoritesApi.createFavorite(favoriteData);

        expect(response.ok).to.equal(true);
        expect(data).to.have.property('message', 'SUCCESS');

        createdFavoriteId = data.id;
    });

    it('should include created favorite in favorites list', async () => {
        const [response, data] = await favoritesApi.getFavoritesList();
        const createdFavorite = data.find((fav) => fav.id === createdFavoriteId);

        expect(response.ok).to.equal(true);
        expect(createdFavorite).to.not.equal(undefined);
        if (createdFavorite) {
            expect(createdFavorite).to.have.property('id', createdFavoriteId);
            expect(createdFavorite).to.have.property('sub_id', userId);
            expect(createdFavorite.image).to.have.property('id', randomImage.id);
            expect(createdFavorite.image).to.have.property('url', randomImage.url);
        }
    });

    it('should delete favorite', async () => {
        const [response, data] = await favoritesApi.deleteFavorite(createdFavoriteId);

        expect(response.ok).to.equal(true);
        expect(data).to.have.property('message', 'SUCCESS');
    });

    it('should not include deleted favorite in favorites list', async () => {
        const [response, data] = await favoritesApi.getFavoritesList();
        const deletedFavorite = data.find((fav) => fav.id === createdFavoriteId);

        expect(response.ok).to.equal(true);
        expect(deletedFavorite).to.equal(undefined);
    });
});
