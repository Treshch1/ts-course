import { ImageDto } from 'src/models/cats-api';
import { IApiService } from 'src/services/abstractions/i-api.service';

export class TheCatImagesApi {
    public constructor(private readonly apiService: IApiService<Response>) {}

    public async getRandomImage(): Promise<[Response, ImageDto[]]> {
        const response = await this.apiService.get('/images/search');
        const data = await response.json();
        return [response, data];
    }
}
