alert('Hello, do You know how to solve a square equation?');
alert('Let\'s do it together:))');

const a = parseFloat(prompt('Enter your variable A'));
const b = parseFloat(prompt('Enter your variable B'));
const c = parseFloat(prompt('Enter your variable C'));

const result = solvingQuadraticEquation(a, b, c);
alert(result);

function solvingQuadraticEquation(a, b, c) {
    if (discriminator() < 0) {
        return 'No solution equation!';
    } else if (discriminator() === 0) {
        return 'X = '+ solvingX();
    } else if (discriminator() > 0) {
        return 'X1 = '+ solvingXOne()
        + '     X2 = '+ solvingXTwo();
    }
}

function discriminator() {
    return b * b - 4 * a * c;
}

function solvingX() {
    return  - b / (2 * a);
}

function solvingXOne() {
    return (- b - (Math.sqrt(discriminator()))) / (2 * a);
}

function solvingXTwo() {
    return (- b + (Math.sqrt(discriminator()))) / (2 * a);
}



//дискримінант = b * b - 4 * a * c;
//return 'X1 = '+ x1 + 'X2' +x2;
//return 'X = '+ x;
//x = (0 - b) / (2 * a);
//x1 = ((0 - b) - (Math.sqrt(b * b - 4 * a * c))) / (2 * a);
//x2 = ((0 - b) + (Math.sqrt(b * b - 4 * a * c))) / (2 * a);
//No solution equation!-рівняння розв'язку немає