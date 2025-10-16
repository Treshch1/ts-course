import { Car, ElectricScooter } from '../src/abstractions/vehicle';
import { VehicleOperator } from '../src/index';

describe('VehicleOperator', () => {
    let operator: VehicleOperator;

    beforeEach(() => {
        operator = new VehicleOperator();
    });

    it('should be able to drive a car', () => {
        const car = new Car('Toyota', 'Corolla', 2020, 1000, 50);
        operator.operate(car);
        expect(car.mileage).toEqual(1100);
        expect(car.energyLevel).toEqual(0);
    });

    it('should be able to drive an electric scooter', () => {
        const scooter = new ElectricScooter('Xiaomi', 'M365', 2022, 200, 30);
        operator.operate(scooter);
        expect(scooter.mileage).toEqual(212);
        expect(scooter.energyLevel).toEqual(0);
    });

    it('should be able to drive and replenish a car', () => {
        const car = new Car('Toyota', 'Corolla', 2020, 1000, 50);
        operator.operate(car);
        operator.replenish(car, 20);
        expect(car.mileage).toEqual(1100);
        expect(car.energyLevel).toEqual(20);
    });

    it('should be able to drive and replenish and drive again an electric scooter', () => {
        const scooter = new ElectricScooter('Xiaomi', 'M365', 2022, 200, 30);
        operator.operate(scooter);
        operator.replenish(scooter, 10);
        operator.operate(scooter);
        expect(scooter.mileage).toEqual(216);
        expect(scooter.energyLevel).toEqual(0);
    });
});
