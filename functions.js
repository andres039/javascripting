// function eat (food) {
//   return food + ' tasted really good.'
// }
// console.log(eat('bananas'))

function judgeVegetable(vegetables, metric) {
  let metrics = vegetables.map((vegetable) => vegetable[metric]);
  let highestMark = Math.max(...metrics);
  return vegetables[metrics.indexOf(highestMark)].submitter;
  // return vegetables.submitter
}
console.log(
  judgeVegetable(
    [
      {
        submitter: "Old Man Franklin",
        redness: 10,
        plumpness: 5,
      },
      {
        submitter: "Sally Tomato-Grower",
        redness: 2,
        plumpness: 8,
      },
      {
        submitter: "Hamid Hamidson",
        redness: 4,
        plumpness: 3,
      },
    ],
    "redness"
  )
);
