import { FavoriteCreateDto, FavoriteListItemDto } from 'src/models/cats-api';
import { IApiService } from 'src/services/abstractions/i-api.service';

export class TheCatFavoritesApi {
    public constructor(private readonly apiService: IApiService<Response>) {}

    public async createFavorite(favoriteData: { image_id: string; sub_id: string }): Promise<[Response, FavoriteCreateDto]> {
        const response = await this.apiService.post('/favourites', favoriteData);
        const data = await response.json();
        return [response, data];
    }

    public async getFavoritesList(): Promise<[Response, FavoriteListItemDto[]]> {
        const response = await this.apiService.get('/favourites');
        const data = await response.json();
        return [response, data];
    }

    public async deleteFavorite(favoriteId: number): Promise<[Response, { message: string }]> {
        const response = await this.apiService.delete(`/favourites/${favoriteId}`);
        const data = await response.json();
        return [response, data];
    }
}
