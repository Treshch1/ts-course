const withIf = (input) => {
    if (input > 0) {
        return true;
    }
};

console.log(withIf(5)); // true
console.log(withIf(-5)); // undefined


const withIfElse = (input) => {
    if (input > 0) {
        return true;
    } else {
        return false;
    }
};

console.log(withIfElse(5)); // true
console.log(withIfElse(-5)); // false


const withSeveralIfElse = (input) => {
    if (input > 0) {
        return true;
    } else if (input < 0) {
        return false;
    } else {
        return null;
    }
};

console.log(withSeveralIfElse(5)); // true
console.log(withSeveralIfElse(-5)); // false
console.log(withSeveralIfElse(0)); // null


const withLogicalOperators = (input1, input2) => {
    if (input1 && input2) {
        return true;
    } else if (input1 || input2) {
        return false;
    } else {
        return null;
    }
};

console.log(withLogicalOperators(true, true)); // true
console.log(withLogicalOperators(true, false)); // false
console.log(withLogicalOperators(false, false)); // null

const a = 5;
console.log(a > 0 ? 'positive' : 'non-positive'); // positive
console.log(a < 0 ? 'positive' : 'non-positive'); // non-positive
