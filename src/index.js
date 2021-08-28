function eval() {
    // Do not use eval!!!
    return;
}

function expressionCalculator(expr) {
	let array = [];
	let result = 0;
	let char = '';	
	expr = expr + '?';
	let sum = 0;
	let mul = 0;

		
	for (let i = 0; i < expr.length; i++) {

		if (isNaN(parseInt(expr[i])) === false && expr[i] !== ' ') {
			char += expr[i];
		} else if (expr[i] === '?' && expr[i - 1] !== ' ') {
			array.push(parseInt(char))
		} else if (isNaN(parseInt(expr[i])) === true && expr[i] !== ' ' && char !== '') {
			char = parseInt(char);
			array.push(char);	
			char = '';
			if (expr[i] !== '?') array.push(expr[i]);
		} else if (isNaN(parseInt(expr[i])) === true && expr[i] !== ' ' && char === '') {
			if (expr[i] !== '?') array.push(expr[i]);
		}
	}

		
	
result = array[0];
	
for (let i = 0; i < array.length - 1; i++) {
	if (array[i] === '*') {

		result *= array[i + 1];
	}
	else if (array[i] === '/') {

		result /= array[i + 1];
}
}
for (let i = 0; i < array.length - 1; i++) {
	if (array[i] === '+') result += array[i + 1];
	else if (array[i] === '-') result -= array[i + 1];
}
	
	return result;
}

expressionCalculator(' ( 6 - 3 ) * 8')

module.exports = {
    expressionCalculator
}