alert('Hello, do You know how to solve a square equation?');
alert('Lets do it together:))');

const a = parseFloat(prompt('Enter your variable A'));
const b = parseFloat(prompt('Enter your variable B'));
const c = parseFloat(prompt('Enter your variable C'));

const result = comparison(a, b, c);
alert(result);

function comparison(a, b, c) {
    if ((b * b - 4 * a * c) < 0) {
        return 'No solution equation!';
    } else if ((b * b - 4 * a * c) === 0) {
        return 'X = '+ (0 - b) / (2 * a);
    } else if ((b * b - 4 * a * c) > 0) {
        return 'X1 = '+ ((0 - b) - (Math.sqrt(b * b - 4 * a * c))) / (2 * a)
        + '     X2 = '+ ((0 - b) + (Math.sqrt(b * b - 4 * a * c))) / (2 * a);
    }
}

//дискримінант = b * b - 4 * a * c;
//return 'X1 = '+ x1 + 'X2' +x2;
//return 'X = '+ x;
//x = (0 - b) / (2 * a);
//x1 = ((0 - b) - (Math.sqrt(b * b - 4 * a * c))) / (2 * a);
//x2 = ((0 - b) + (Math.sqrt(b * b - 4 * a * c))) / (2 * a);
//No solution equation!-рівняння розв'язку немає