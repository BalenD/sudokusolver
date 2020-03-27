import Solver from './lib/solver.js';
import { isCorrect, convertToArray, verticalToLetter } from './lib/checker.js'


const fields = [...document.getElementsByClassName('field')];
const submitBtn = document.getElementById('submitBtn');
const checkBtn = document.getElementById('checkBtn');
const resetBtn = document.getElementById('resetBtn');

const solver = new Solver();

let grid = '';
let currentGrid;


submitBtn.addEventListener('click', () => {
    for (const field of fields) {
        grid += field.textContent;
    }
    const solution = solver.search(solver.solve(grid));
    for (const s in solution) {
        const field = fields.find((ele) => ele.id === s)
        field.textContent = solution[s];
    }
    currentGrid = solution;
    grid = '';
});

checkBtn.addEventListener('click', () => {
    const gridArr = convertToArray(currentGrid);
    const correct = isCorrect(gridArr);
    if (correct.isCorrect) {
        for (const field of fields) {
            field.setAttribute("style", "background-color: green;");
            
        }
        setTimeout(() => {
            for (const field of fields) {
                field.setAttribute("style", "background-color: white;");
            }
        }, 3000);
    } else {
        const wrongField = `${verticalToLetter[correct.y]}${correct.x}`
        const fieldToChange = fields.find((ele) => ele.id === wrongField);
        fieldToChange.setAttribute("style", "background-color: red;");
        setTimeout(() => {
            fieldToChange.setAttribute("style", "background-color: white;");
        }, 3000);
    }
});

resetBtn.addEventListener('click', () => {
    for (const field of fields) {
        field.textContent = 0;
    }
});