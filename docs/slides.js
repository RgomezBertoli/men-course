const keypress = require('keypress');
const util = require('util');
const colors = require('colors');
const stdin = process.stdin;
const stdout = process.stdout;

const slides = require('./slides/index');

{
    const lineCols = stdout.columns;
    const numLines = stdout.rows;
    const supportedColors = Object.keys(colors);
    const tabSize = 8;

    let currentSlide = 0;

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
            console.clear && console.clear() || stdout.write('\033c');
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
        const slideNames = Object.keys(slides);

        if (number < slideNames.length) {
            console.clear && console.clear() || stdout.write('\033c');
            const slide = slides[slideNames[number]];
            slide.forEach(writeLine);
        } else {
            currentSlide = slideNames.length - 1;
        }
    }

    function writeLine(line) {
        const formatedLine = parseLine(line);
        stdout.write(formatedLine);
    }

    function parseLine(line) {
        let text = line;

        if (text.includes('<br>')) {
            const br = Array(lineCols).fill().map(() => '-').join('');
            return text.replace(/<br>(.*)/, `${br}$1`);
        }
        if (text.includes('<white-space>')) {
            const whiteSpace = '\n';
            stdout.write(whiteSpace);
            text = text.replace(/<white-space>(.*)/, `$1`);
        }
        if (text.includes('<center>')) {
            text = text.replace(/<center>(.*)<\/center>/, `$1`);
            const startOn = Math.round(lineCols / 2 - text.length / 2);
            const leftSpace = Array(startOn).fill().map(() => ' ').join('');
            text = `${leftSpace}${text}`;
        } else {
            text = '\t' + text;
        }

        return text + '\n';
    }

    config();
}