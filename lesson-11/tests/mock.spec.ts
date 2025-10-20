import { Car } from '../src/abstractions/vehicle';
import sinon from 'sinon';

describe('Car', () => {
    it('should call addMilage when drive is called', () => {
        const car = new Car('Honda', 'Civic', 2021);
        const mock = sinon.mock(car);
        mock.expects('addMileage').once();
        mock.expects('refuel').never();

        car.drive();

        mock.verify();
        mock.restore();
    });

    it('should call stopEngine when park is called', () => {
        const car = new Car('Honda', 'Civic', 2021);
        const mock = sinon.mock(car);
        mock.expects('drive').exactly(5);
        mock.expects('replenish').once().withArgs(10);

        car.drive();
        car.drive();
        car.drive();
        car.drive();
        car.drive();
        car.replenish(10);

        mock.verify();
        mock.restore();
    });
});
