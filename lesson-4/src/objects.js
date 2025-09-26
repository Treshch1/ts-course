const animals = {
    dog: {
        name: ['Buddy', 'Max', 'Sweety'],
        age: 3,
        breed: 'Golden Retriever',
        sound: 'Woof!',
        voice: function () {
            console.log(this.sound);
        }
    },
    cat: {
        name: ['Whiskers', 'Mittens', 'Shadow'],
        age: 2,
        breed: 'Siamese',
        sound: 'Meow!',
        voice: function () {
            console.log(this.sound);
        }
    },
    bird: {
        name: ['Tweety', 'Polly', 'Kiwi'],
        age: 1,
        breed: 'Canary',
        sound: 'Chirp!',
        voice: function () {
            console.log(this.sound);
        }
    }
};

for (const key in animals) {
    console.log(`Animal: ${key}`);
    console.log(`Names: ${animals[key].name.join(', ')}`);
    console.log(`Age: ${animals[key].age}`);
    console.log(`Breed: ${animals[key].breed}`);
    animals[key].voice();
    console.log('---');
}

// Remove an animal
delete animals.bird;
console.log(animals);

// Add a new animal
animals.fish = {
    name: ['Goldie', 'Bubbles'],
    age: 1,
    breed: 'Goldfish',
    voice: function () {
        console.log('Blub!');
    }
};
console.log(animals);
