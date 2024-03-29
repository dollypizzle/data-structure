'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the isBalanced function below.
function isBalanced(s) {
    const o = {
        '{': '}',
        '[': ']',
        '(': ')'
    };
    const stack = [];

    for (let i = 0, len = s.length; i < len; i++) {
        let b = s[i];

        switch (b) {
            case ']':
            case '}':
            case ')':
                if (b === stack[stack.length - 1])
                    stack.pop();
                else
                    return 'NO';
                break;
            default:
                stack.push(o[b]);
        }
    }

    return stack.length === 0 ? 'YES' : 'NO';

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const t = parseInt(readLine(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const s = readLine();

        let result = isBalanced(s);

        ws.write(result + "\n");
    }

    ws.end();
}