const animalSound = (animal) => {
    switch (animal) {
        case 'cat':
            return 'meow';
        case 'dog':
            return 'woof';
        case 'cow':
            return 'moo';
        default:
            return 'unknown sound';
    }
};

console.log(animalSound('cat')); // meow
console.log(animalSound('dog')); // woof
console.log(animalSound('cow')); // moo
console.log(animalSound('lion')); // unknown sound
