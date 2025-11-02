import { IApiService } from './abstractions/i-api.service';

export class FetchApiService implements IApiService<Response> {
    public constructor(
        private readonly baseUrl: string,
        private secret: {
            apiKey?: string;
        }
    ) {}

    public async get(url: string, params?: Record<string, string | number | boolean>, headers?: Record<string, string>): Promise<Response> {
        const queryParams = params
            ? '?' +
              Object.entries(params || {})
                  .map(([key, value]) => `${key}=${value}`)
                  .join('&')
            : '';
        const defaultHeaders = this.getDefaultHeaders(headers);
        const fullUrl = `${this.baseUrl}${url}${queryParams}`;

        const response = await fetch(fullUrl, {
            method: 'GET',
            headers: defaultHeaders
        });
        return response;
    }

    public async post(url: string, body: unknown, headers?: Record<string, string>): Promise<Response> {
        const defaultHeaders = this.getDefaultHeaders(headers);
        const fullUrl = `${this.baseUrl}${url}`;

        const response = await fetch(fullUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                ...defaultHeaders
            },
            body: JSON.stringify(body)
        });
        return response;
    }

    public async postFormData(url: string, formData: FormData, headers?: Record<string, string>): Promise<Response> {
        const defaultHeaders = this.getDefaultHeaders(headers);
        const fullUrl = `${this.baseUrl}${url}`;

        const response = await fetch(fullUrl, {
            method: 'POST',
            headers: {
                ...defaultHeaders
            },
            body: formData
        });
        return response;
    }

    public async put(url: string, body: unknown, headers?: Record<string, string>): Promise<Response> {
        const defaultHeaders = this.getDefaultHeaders(headers);
        const fullUrl = `${this.baseUrl}${url}`;

        const response = await fetch(fullUrl, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                ...defaultHeaders
            },
            body: JSON.stringify(body)
        });
        return response;
    }

    public async delete(url: string, headers?: Record<string, string>): Promise<Response> {
        const defaultHeaders = this.getDefaultHeaders(headers);
        const fullUrl = `${this.baseUrl}${url}`;

        const response = await fetch(fullUrl, {
            method: 'DELETE',
            headers: defaultHeaders
        });
        return response;
    }

    private getAuthHeaders(): Record<string, string> {
        const headers: Record<string, string> = {};
        if (this.secret.apiKey) {
            headers['x-api-key'] = this.secret.apiKey;
        }
        return headers;
    }

    private getDefaultHeaders(headers?: Record<string, string>): Record<string, string> {
        return {
            ...this.getAuthHeaders(),
            ...headers,
            Accept: 'application/json'
        };
    }
}
