import { PetStoreService } from '../src/pet-store.service';
import { MatchersV3, PactV3, Verifier } from '@pact-foundation/pact';
import { InventoryDto } from '../src/models/inventory.dto';
import { expect } from 'chai';
import * as path from 'path';

describe('the pet store api contract tests /inventory', () => {
    let petStoreService: PetStoreService;

    const provider = new PactV3({
        consumer: 'inventory-consumer',
        provider: 'inventory-provider'
    });

    const expectedResponse = {
        '8': 1,
        sold: 23,
        string: 549,
        'sold ': 1,
        d: 1,
        unavailable: 4,
        pending: 29,
        available: 284,
        weisskeiner1: 1,
        '¸E\u0011􉁶¦': 1,
        availabl: 1,
        peric: 20,
        Sold: 1,
        blocked: 1,
        '{{status}}': 3,
        available_DEV: 1,
        lost: 1
    } as InventoryDto;

    const expectedBody = MatchersV3.like(expectedResponse);

    describe('consumer test', () => {
        it('create contract', () => {
            provider
                .given('inventory exists')
                .uponReceiving('a request for inventory')
                .withRequest({
                    method: 'GET',
                    path: '/store/inventory',
                    headers: {
                        Accept: '*/*'
                    }
                })
                .willRespondWith({
                    status: 200,
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: expectedBody
                });
            return provider.executeTest(async (mockServer) => {
                petStoreService = new PetStoreService(mockServer.url);
                const inventory = await petStoreService.getInventory();
                expect(inventory).to.deep.equal(expectedResponse);
            });
        });
    });

    describe('provider test', () => {
        it('validates the contract', () => {
            return new Verifier({
                providerBaseUrl: 'https://petstore.swagger.io/v2/',
                pactUrls: [path.resolve(process.cwd(), 'pacts', 'inventory-consumer-inventory-provider.json')]
            });
        });
    });
});
