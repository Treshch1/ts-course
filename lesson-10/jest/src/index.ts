import { Car, Drivable, ElectricScooter } from './abstractions';

export class VehicleOperator {
    public operate(vehicle: Drivable): void {
        while (vehicle.energyLevel > 0) {
            vehicle.drive();
        }
    }

    public replenish(vehicle: Drivable, amount: number): void {
        vehicle.replenish(amount);
    }
}

const myCar = new Car('Toyota', 'Corolla', 2020);
const myScooter = new ElectricScooter('Xiaomi', 'M365', 2022);
const operator = new VehicleOperator();

operator.operate(myCar); // Car drives
operator.replenish(myCar, 20); // Refuel car
operator.operate(myCar); // Car drives

console.log('---');
operator.operate(myScooter); // Scooter drives
operator.replenish(myScooter, 30); // Recharge scooter
operator.operate(myScooter); // Scooter drives
