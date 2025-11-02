import { CreateImageVoteDto, VoteDeleteResponseDto, VoteDetailsDto } from 'src/models/cats-api';
import { IApiService } from 'src/services/abstractions/i-api.service';

export class TheCatVotesApi {
    public constructor(private readonly apiService: IApiService<Response>) {}

    public async createImageVote(voteData: { image_id: string; value: number }): Promise<[Response, CreateImageVoteDto]> {
        const response = await this.apiService.post('/votes', voteData);
        const data = await response.json();
        return [response, data];
    }

    public async getVoteDetails(voteId: number, jsonExpected = true): Promise<[Response, VoteDetailsDto | string]> {
        const response = await this.apiService.get(`/votes/${voteId}`);
        const data = jsonExpected ? await response.json() : await response.text();
        return [response, data];
    }

    public async deleteVote(voteId: number): Promise<[Response, VoteDeleteResponseDto]> {
        const response = await this.apiService.delete(`/votes/${voteId}`);
        const data = await response.json();
        return [response, data];
    }
}
