import { expect } from 'chai';
import { Car, ElectricScooter } from '../src/abstractions/vehicle';


describe('Vehicle Abstractions', () => {
    describe('Car', () => {
        let car: Car;

        beforeEach(() => {
            car = new Car('Toyota', 'Corolla', 2020, 1000, 50);
        });

        it('should have correct details', () => {
            expect(car.details).to.equal('2020 Toyota Corolla');
        });

        it('should drive and decrease fuel level and increase mileage', () => {
            car.drive();
            expect(car.mileage).to.equal(1010);
            expect(car.energyLevel).to.equal(45);
        });

        it('should not drive if fuel is 0', () => {
            car = new Car('Toyota', 'Corolla', 2020, 1000, 0);
            car.drive();
            expect(car.mileage).to.equal(1000);
            expect(car.energyLevel).to.equal(0);
        });

        it('should replenish (refuel) and cap at 100', () => {
            car.replenish(60);
            expect(car.energyLevel).to.equal(100);
        });

        it('should implement Drivable and Maintainable', () => {
            expect(car).to.have.property('drive');
            expect(car).to.have.property('performMaintenance');
        });
    });

    describe('ElectricScooter', () => {
        let scooter: ElectricScooter;

        beforeEach(() => {
            scooter = new ElectricScooter('Xiaomi', 'M365', 2022, 200, 30);
        });

        it('should have correct details', () => {
            expect(scooter.details).to.equal('2022 Xiaomi M365');
        });

        it('should drive and decrease battery level and increase mileage', () => {
            scooter.drive();
            expect(scooter.mileage).to.equal(202);
            expect(scooter.energyLevel).to.equal(25);
        });

        it('should not drive if battery is 0', () => {
            scooter = new ElectricScooter('Xiaomi', 'M365', 2022, 200, 0);
            scooter.drive();
            expect(scooter.mileage).to.equal(200);
            expect(scooter.energyLevel).to.equal(0);
        });

        it('should replenish (recharge) and cap at 100', () => {
            scooter.replenish(80);
            expect(scooter.energyLevel).to.equal(100);
        });
    });
});
