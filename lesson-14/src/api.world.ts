import { ConfigService } from './services/config.service';
import { FetchApiService } from './services/fetch-api.service';
import { IApiService } from './services/abstractions/i-api.service';
import { TheCatImagesApi, TheCatVotesApi, TheCatFavoritesApi } from './apis/cats-api';

export class ApiWorld {

    public get catsImagesApiService(): TheCatImagesApi {
        if (!this._imagesApi) {
            this._imagesApi = new TheCatImagesApi(this._theCatsFetchApiService);
        }
        return this._imagesApi;
    }

    public get catsVotesApiService(): TheCatVotesApi {
        if (!this._votesApi) {
            this._votesApi = new TheCatVotesApi(this._theCatsFetchApiService);
        }
        return this._votesApi;
    }

    public get catsFavoritesApiService(): TheCatFavoritesApi {
        if (!this._favoritesApi) {
            this._favoritesApi = new TheCatFavoritesApi(this._theCatsFetchApiService);
        }
        return this._favoritesApi;
    }

    public catsImageApi: TheCatImagesApi;
    public catsVotesApi: TheCatVotesApi;
    public catsFavoritesApi: TheCatFavoritesApi;

    public get configService(): ConfigService {
        return this._configService;
    }

    private _imagesApi?: TheCatImagesApi;
    private _votesApi?: TheCatVotesApi;
    private _favoritesApi?: TheCatFavoritesApi;
    private _theCatsFetchApiService: IApiService<Response>;
    private _configService: ConfigService;

    public constructor() {
        this._configService = new ConfigService();
        const config = this._configService.getConfig();

        this._theCatsFetchApiService = new FetchApiService(config.api.catsApi.baseUrl, { apiKey: config.auth?.catsApi?.apiKey });
        this.catsImageApi = new TheCatImagesApi(this._theCatsFetchApiService);
        this.catsVotesApi = new TheCatVotesApi(this._theCatsFetchApiService);
        this.catsFavoritesApi = new TheCatFavoritesApi(this._theCatsFetchApiService);
    }
}
