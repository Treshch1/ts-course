import { Car } from '../src/abstractions/vehicle';
import { expect } from 'chai';
import sinon from 'sinon';

describe('Car', () => {
    let car: Car;

    beforeEach(() => {
        car = new Car('Toyota', 'Corolla', 2020);
    });

    it('should call addMileage when drive is called', () => {
        const addMileageSpy = sinon.spy(car, 'addMileage');
        car.drive();
        expect(addMileageSpy.calledOnce).to.be.true;
        addMileageSpy.restore();
    });

    it('should call refuel with argument 50 when replenish is called ', () => {
        const refuelSpy = sinon.spy(car, 'refuel');
        car.replenish(50);
        expect(refuelSpy.calledOnceWith(50)).to.be.true;
        refuelSpy.restore();
    });
});
