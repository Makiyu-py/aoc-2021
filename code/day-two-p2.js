const utils = require('./utils');

function mapFunc(x) {
	x = x.split(' ');
	x[1] = parseInt(x[1]);
	return x;
}

const inp = utils.readFile({ day: 'two', mapFunc: mapFunc });

let horPos = 0;
let depth = 0;
let aim = 0;

for (let i = 0; i < inp.length; i++) {
	const pos = inp[i][0];
	const x = inp[i][1];

	if (pos === 'forward') {
		horPos += x;
		if (aim <= 0) continue;
		depth += x * aim;
	} else if (pos === 'down') {
		aim += x;
	} else if (pos === 'up') {
		aim -= x;
	}
}
const out = horPos * depth;
console.log(out);
