function eval() {
    // Do not use eval!!!
    return;
}

function expressionCalculator(expr) {
	let array = [];
	let result = 0;
	let char = '';	
	expr = expr + ' ';
	for (let i = 0; i < expr.length; i++) {

		if(expr[i] === '+'
		  || expr[i] === '-'
		  || expr[i] === '/'
		  || expr[i] === '*') array.push(expr[i])
		else if (isNaN(parseInt(expr[i])) === false) {
			char += expr[i];
		} else if (expr[i] === ' ' && char !== '') {
			char = parseInt(char);
			array.push(char);	
			char = '';
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

expressionCalculator('10 + 9');


expressionCalculator(9*10)


module.exports = {
    expressionCalculator
}