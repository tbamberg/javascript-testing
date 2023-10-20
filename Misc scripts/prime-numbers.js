let interval = 20;

nextPrime:
for (let i = 2; i <= interval; i++) {

    for (let x = 2; x < i; x++) {
        if (i % x == 0) {
            continue nextPrime;
        }
    }

    console.log(i);
}
