const fs = require('fs');

function main(input) {
	let lastSum = 0;
	let increase = 0;

	for (let i = 0; i < input.length; i++) {
		if (i + 2 >= input.length) break;
		let currentSum = input[i] + input[i + 1] + input[i + 2];

		let toCompare = lastSum;
		lastSum = currentSum;

		if (i === 0) continue;

		if (currentSum > toCompare) increase++;
	}
	console.log(increase);
}

fs.readFile('inputs/day-one.txt', 'utf8', (err, given) => {
	if (err) {
		console.error(err);
		return;
	}
	let inp = given.split('\n').map((i) => parseInt(i));
	main(inp);
});
