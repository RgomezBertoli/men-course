const keypress = require('keypress');
const util = require('util');
const stdin = process.stdin;
const stdout = process.stdout;

const slides = require('./slides/index');

{
    let currentSlide = 0;
    let lineCols = stdout.columns;
    let numLines = stdout.rows;

    function config() {
        keypress(stdin);

        if (typeof stdin.setRawMode == 'function') {
            stdin.setRawMode(true);
        }
        stdin.resume();
        stdin.on('keypress', evaluateKey);

        writeSlide(currentSlide);
    }

    function evaluateKey(str, key) {
        if (key.sequence === '\u0003') {
            process.exit();
        }
        if (key.name === 'up' || key.name === 'left') {
            currentSlide = currentSlide !== 0 ? currentSlide - 1 : 0;
        }
        if (key.name === 'down' || key.name === 'right') {
            currentSlide += 1;
        }

        writeSlide(currentSlide);
    }

    function writeSlide(number) {
        console.clear();
        const slideNames = Object.keys(slides);

        if (number < slideNames.length) {
            const slide = slides[slideNames[number]];
            slide.forEach(writeLine);
        } else {
            currentSlide = slideNames.length - 1;
        }
    }

    function writeLine(line) {
        if (line === '!!sep') {
            console.log(new Array(lineCols).join('-'));
        } else if (line === '!!whiteLine') {
            console.log('\n');
        } else {
            console.log(line);
        }
    }

    config();
}