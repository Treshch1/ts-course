export interface IApiService<T> {
    get(url: string, headers?: Record<string, string>, params?: Record<string, string>): Promise<T>;
    post(url: string, body: unknown, headers?: Record<string, string>): Promise<T>;
    postFormData(url: string, formData: FormData, headers?: Record<string, string>): Promise<T>;
    put(url: string, body: unknown, headers?: Record<string, string>): Promise<T>;
    delete(url: string, headers?: Record<string, string>): Promise<T>;
}
