const Solver = require('./solver');
const {convertToArray, isCorrect} = require('./checker');

const solver = new Solver();



const noClue = [
    '000000000',
    '000000000',
    '000000000',
    '000000000',
    '000000000',
    '000000000',
    '000000000',
    '000000000',
    '000000000'
  ].join('');

const seventeenClue = [
    '000000010',
    '000002003',
    '000400000',
    '000000500',
    '401600000',
    '007100000',
    '050000200',
    '000080040',
    '030910000'
  ].join('');
  const fortyClue = [
    '000000000',
    '012034567',
    '034506182',
    '001058206',
    '008600001',
    '020007050',
    '003705028',
    '080060700',
    '207083615',
  ].join('');
  const elevenClue = [
    '102000000',
    '003000000',
    '000000004',
    '040050000',
    '060070000',
    '000000020',
    '008000000',
    '000000000',
    '000000800',
  ].join('');

  const puzzles = [elevenClue,  seventeenClue, fortyClue, noClue];
  const arrOfSolved = [];
  for (const puzzle of puzzles) {
    const solved = solver.search(solver.solve(puzzle));
    const solvedArr = convertToArray(solved);
    const correct = isCorrect(solvedArr);
    arrOfSolved.push({solution: solvedArr, correct});
  }
  for (const solved of arrOfSolved) {
    console.log(solved.solution);
    console.log(solved.correct);
  }
  