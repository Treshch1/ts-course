export interface Breed {
    id: string;
    type: string;
    attributes: {
        name: string;
        description: string;
        life: {
            max: number;
            min: number;
        };
        male_weight: {
            max: number;
            min: number;
        };
        female_weight: {
            max: number;
            min: number;
        };
        hypoallergenic: boolean;
    };
    relationships: {
        group: {
            data: {
                id: string;
                type: string;
            };
        };
    };
}

export interface BreedsApiResponse {
    data: Breed[];
    meta: {
        pagination: {
            current: number;
            next: number | null;
            last: number;
            records: number;
        };
    };
    links: {
        self: string;
        current: string;
        next: string | null;
        last: string;
    };
}

export class BreedAverageAttributes {
    public constructor(private breed: Breed) {
        this.breed = breed;
        this.averageLifetime = (breed.attributes.life.min + breed.attributes.life.max) / 2;
        this.averageMaleWeight = (breed.attributes.male_weight.min + breed.attributes.male_weight.max) / 2;
        this.averageFemaleWeight = (breed.attributes.female_weight.min + breed.attributes.female_weight.max) / 2;
    }

    public averageLifetime: number;
    public averageMaleWeight: number;
    public averageFemaleWeight: number;

    public get info(): string {
        return (
            `Breed: ${this.breed.attributes.name};\n` +
            `Average lifetime: ${this.averageLifetime} years;\n` +
            `Average male weight: ${this.averageMaleWeight} kg;\n` +
            `Average female weight: ${this.averageFemaleWeight} kg`
        );
    }
}
