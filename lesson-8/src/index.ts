import { Dog, Cat, Fish } from './abstractions';

const myDog = new Dog('Rex', 5, 'Labrador');
console.log(myDog.getName()); // Rex
console.log(myDog.getAge()); // 5
console.log(myDog.getBreed()); // Labrador
console.log(myDog.bark()); // Rex barks: Some sound

const myCat = new Cat('Whiskers', 2, 'Snowy');
console.log(myCat.getName()); // Whiskers
console.log(myCat.getAge()); // 2
console.log(myCat.color); // Snowy
console.log(myCat.makeSound()); // Meow!
myCat.setName('Mira');
console.log(myCat.getName()); // Mira

const myFish = new Fish('Nemo', 1);
console.log(myFish.getName()); // Nemo
console.log(myFish.getAge()); // 1
console.log(myFish.swim()); // Nemo is swimming
console.log(myFish.makeSound()); // Some sound
