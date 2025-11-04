export interface ConfigDto {
    auth: AuthConfigDto;
    api: ApiConfigDto;
}

export interface AuthConfigDto {
    catsApi: CatAuthConfigDto;
}

export interface ApiConfigDto {
    catsApi: CatApiConfigDto;
}

export interface CatAuthConfigDto {
    apiKey: string;
}

export interface CatApiConfigDto {
    baseUrl: string;
}
