const fs = require('fs');

function readFile(args) {
	const day = args.day;
	const func = args.mapFunc;
	const given = fs.readFileSync(`inputs/day-${day}.txt`, 'utf8').split('\n');

	if (func == null) return given;
	return given.map((i) => func(i));
}

module.exports = { readFile };
