const utils = require('./utils');

function mapFunc(i) {
	return i.split('');
}
const inp = utils.readFile({
	day: 'three',
	mapFunc: mapFunc,
});

// im gonna start using functions on this one lmao if i don't
// i probably won't understand my own code at this point lmao

function getLeastAndMostCommon(b, list) {
	let outObj = { least: '0', most: '1' }; // default just in case yk
	let count = {};
	const combinedList = list.reduce((x, y) => x + y[b], '').split('');
	combinedList.forEach(function (i) {
		count[i] = (count[i] || 0) + 1;
	});
	if (count['0'] > count['1']) {
		outObj['least'] = '1';
		outObj['most'] = '0';
	} else if (count['0'] < count['1']) {
		outObj['least'] = '0';
		outObj['most'] = '1';
	}
	return outObj;
}

function getRatingBase(bit, getLower) {
	let moreorless = bit;
	let toIter = inp;
	let iterAmt = 0;
	let finishIterating = false;
	while (!finishIterating) {
		const { least, most } = getLeastAndMostCommon(iterAmt, toIter);
		moreorless = getLower ? least : most;
		toIter = toIter.filter((li) => {
			return li[iterAmt] === moreorless;
		});
		if (toIter.length === 1) finishIterating = true;
		iterAmt++;
	}
	return parseInt(toIter[0].join(''), 2);
}

function getOxyGenRating(bit) {
	return getRatingBase(bit, false);
}
function getCO2ScrubberRating(bit) {
	return getRatingBase(bit, true);
}

const { least, most } = getLeastAndMostCommon(0, inp);
const oxygenRating = getOxyGenRating(most);
const co2ScrubberRating = getCO2ScrubberRating(least);
const out = oxygenRating * co2ScrubberRating;

console.log(out);
