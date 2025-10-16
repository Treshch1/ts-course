export interface Drivable {
    drive(): void;
    replenish(amount: number): void;
    energyLevel: number;
}

export interface Maintainable {
    performMaintenance(): void;
}

export abstract class Vehicle {
    protected make: string;
    protected model: string;
    protected year: number;
    protected _energyLevel: number;
    private _mileage: number;

    public constructor(make: string, model: string, year: number, _mileage = 0) {
        this.make = make;
        this.model = model;
        this.year = year;
        this._mileage = _mileage;
        this._energyLevel = 100;
    }

    public get details(): string {
        return `${this.year} ${this.make} ${this.model}`;
    }

    public get mileage(): number {
        return this._mileage;
    }

    public addMileage(distance: number): void {
        if (distance > 0) {
            this._mileage += distance;
        }
    }
}

export class Car extends Vehicle implements Drivable, Maintainable {
    private fuelLevel: number;

    public constructor(make: string, model: string, year: number, _mileage = 0, fuelLevel = 100) {
        super(make, model, year, _mileage);
        this.fuelLevel = fuelLevel;
    }

    public drive(): void {
        if (this.fuelLevel > 0) {
            this.addMileage(10);
            this.fuelLevel -= 5;
            console.log(`${this.details} is driving. Mileage: ${this.mileage}. Fuel level: ${this.fuelLevel}`);
        } else {
            console.log('Not enough fuel to drive.');
        }
    }

    public performMaintenance(): void {
        console.log(`${this.details} is being serviced.`);
    }

    public replenish(amount: number): void {
        this.refuel(amount);
    }

    private refuel(amount: number): void {
        this.fuelLevel += amount;
        if (this.fuelLevel > 100) {
            this.fuelLevel = 100;
        }
        console.log(`${this.details} has been refueled. Fuel level: ${this.fuelLevel}`);
    }

    public get energyLevel(): number {
        return this.fuelLevel;
    }
}

export class ElectricScooter extends Vehicle implements Drivable {
    private batteryLevel: number;

    public constructor(make: string, model: string, year: number, _mileage = 0, batteryLevel = 100) {
        super(make, model, year, _mileage);
        this.batteryLevel = batteryLevel;
    }

    public drive(): void {
        if (this.batteryLevel > 0) {
            this.addMileage(2);
            this.batteryLevel -= 5;
            console.log(`${this.details} is scooting. Mileage: ${this.mileage}. Battery level: ${this.batteryLevel}`);
        } else {
            console.log('Battery empty. Please recharge.');
        }
    }

    public replenish(amount: number): void {
        this.refuel(amount);
    }

    private refuel(amount: number): void {
        this.batteryLevel += amount;
        if (this.batteryLevel > 100) {
            this.batteryLevel = 100;
        }
        console.log(`${this.details} has been refueled. Battery level: ${this.batteryLevel}`);
    }

    public get energyLevel(): number {
        return this.batteryLevel;
    }
}
