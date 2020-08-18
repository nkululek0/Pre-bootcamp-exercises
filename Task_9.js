function multiples(){
	let sum = 0;
	let totalMultiples = [];
	for (count = 999; count > 0; count--) {
        if ((count % 3 == 0) || (count % 5 == 0)) {
            totalMultiples.push(count);
        }
    }
    for (count = 0; count < totalMultiples.length; count++) {
        sum += totalMultiples[count];
    }
    console.log(sum);
}
