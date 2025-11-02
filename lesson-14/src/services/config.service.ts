import * as dotenv from 'dotenv-safe';
import { ApiConfigDto, AuthConfigDto, ConfigDto } from '../models/config/api.config';

export class ConfigService {
    public constructor() {
        dotenv.config();
    }

    public getConfig(): ConfigDto {
        return {
            auth: this.getAuthConfig(),
            api: this.getApiConfig()
        };
    }

    private getAuthConfig(): AuthConfigDto {
        return {
            catsApi: {
                apiKey: process.env.CAT_API_KEY || ''
            }
        };
    }

    private getApiConfig(): ApiConfigDto {
        return {
            catsApi: {
                baseUrl: process.env.CAT_BASE_URL || ''
            }
        };
    }
}
