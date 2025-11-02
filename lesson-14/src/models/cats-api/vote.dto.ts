export interface CreateImageVoteDto {
    message: string;
    id: number;
    image_id: string;
    value: number;
    country_code: string;
}

export interface VoteDetailsDto {
    id: number;
    user_id: string;
    image_id: string;
    sub_id: string | null;
    created_at: string;
    value: number;
    country_code: string;
    image: {
        id: string;
        url: string;
    };
}

export interface VoteDeleteResponseDto {
    message: 'SUCCESS';
}
