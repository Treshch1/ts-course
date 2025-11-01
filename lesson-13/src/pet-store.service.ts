import { InventoryDto } from './models/inventory.dto';

export class PetStoreService {
    public constructor(private baseUrl: string) {}

    public async getInventory(): Promise<InventoryDto[]> {
        const response = await fetch(`${this.baseUrl}/store/inventory`);
        const responseJson = await response.json();

        return responseJson;
    }
}
