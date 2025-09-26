// Count from 0 to 9 using different loops
for (let i = 0; i < 10; i++) {
    console.log(i);
}

let i = 0;
while (i < 10) {
    console.log(i);
    i++;
}

i = 0;
do {
    console.log(i);
    i++;
} while (i < 10);

// Count down from 100 to 0 in steps of 10
for (let i = 100; i >= 0; i -= 10) {
    console.log(i);
}

i = 100;
while (i >= 0) {
    console.log(i);
    i -= 10;
}

i = 100;
do {
    console.log(i);
    i -= 10;
} while (i >= 0);
