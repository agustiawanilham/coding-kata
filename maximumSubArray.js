const calculateSumArray = (array) => {
  let sum = array.reduce((total, value) => total + value, 0);
  return sum;
};

const maxSequence = (arr) => {
  if (arr.length === 0) {
    return 0;
  }
  let arrayTemp = [];
  let sumTemp = 0;
};

console.log(calculateSumArray([1, 2, 3]));
console.log(maxSequence([]), 0);
console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]), 6);
