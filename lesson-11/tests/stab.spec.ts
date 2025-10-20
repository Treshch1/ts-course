import { ElectricScooter } from '../src/abstractions/vehicle';
import { expect } from 'chai';
import sinon from 'sinon';

describe('ElectricScooter with sinon stubs', () => {
    let scooter: ElectricScooter;

    beforeEach(() => {
        scooter = new ElectricScooter('Segway', 'Ninebot', 2023, 50, 20);
    });

    it('should call stubbed drive method once and return mileage', () => {
        const driveStub = sinon.stub(scooter, 'drive').returns(52);
        const result = scooter.drive();
        expect(driveStub.calledOnce).to.be.true;
        expect(result).to.equal(52);
        driveStub.restore();
    });

    it('should stub drive with error', () => {
        const driveStub = sinon.stub(scooter, 'drive').throws(new Error('Drive error'));
        expect(() => scooter.drive()).to.throw('Drive error');
        driveStub.restore();
    });
});
