// I was originally used sets and classes on this one but when
// I did, it was so slow and broke node lmao so I'm gonna use a
// map with numbers instead :D
const utils = require('./utils');

let inp = new Map();
utils
	.readFile({
		day: 'six',
		mapFunc(x) {
			return x.split(',').map((f) => parseInt(f));
		},
	})[0]
	.forEach(function (x) {
		inp.set(x, (inp.get(x) || 0) + 1);
	});

for (let i = 0; i < 256; i++) {
	let toReplace = new Map();
	let size = 0;
	inp.forEach((val, key, map) => {
		if (key === 0) {
			toReplace.set(8, toReplace.has(8) ? toReplace.get(8) + val : val);
			toReplace.set(6, toReplace.has(6) ? toReplace.get(6) + val : val);
			size += val;
		} else {
			toReplace.set(key - 1, toReplace.has(key - 1) ? toReplace.get(key - 1) + val : val);
		}
		size += val;
	});

	console.log(`Day ${i + 1} Population:`, size);
	inp = toReplace;
}
