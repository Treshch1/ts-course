const person = {
    name: {
        firstName: 'John',
        lastName: 'Doe'
    },
    age: 30,
    gender: 'male',
    get fullName() {
        return `${this.name.firstName} ${this.name.lastName}`;
    },
    set fullName(name) {
        [this.name.firstName, this.name.lastName] = name.split(' ');
    },
    shoutName: function () {
        return `${this.fullName.toUpperCase()}!`;
    }
};

console.log(person.fullName); // John Doe
person.fullName = 'Jane Smith';
console.log(person.fullName); // Jane Smith
console.log(person.name.firstName); // Jane
console.log(person.name.lastName); // Smith
console.log(person.shoutName()); // JANE SMITH!
