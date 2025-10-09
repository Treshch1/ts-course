abstract class Animal {
    public constructor(
        protected name: string,
        protected age: number
    ) {}

    public getName(): string {
        return this.name;
    }

    public getAge(): number {
        return this.age;
    }

    protected makeSound(): string {
        return 'Some sound';
    }
}

export class Dog extends Animal {
    public constructor(
        name: string,
        age: number,
        protected breed: string
    ) {
        super(name, age);
        this.breed = breed;
    }

    public getBreed(): string {
        return this.breed;
    }

    public bark(): string {
        return `${this.name} barks: ${this.makeSound()}`;
    }

    protected makeSound(): string {
        return 'Woof!';
    }
}

export class Cat extends Animal {
    public constructor(
        name: string,
        age: number,
        public color: string
    ) {
        super(name, age);
    }

    public makeSound(): string {
        return 'Meow!';
    }

    public setName(newName: string): void {
        this.name = newName;
    }
}

export class Fish extends Animal {
    public swim(): string {
        return `${this.name} is swimming`;
    }

    public makeSound(): string {
        return super.makeSound();
    }
}
