function order(words) {
  return words
    .split(" ")
    .sort(function (a, b) {
      return a.match(/\d/) - b.match(/\d/);
    })
    .join(" ");
}

// function order(words) {
//   if (words === "") return "";
//   let array = words.split(" ");
//   let objectOutput = {};
//   for (let i = 0; i < array.length; i++) {
//     let checknumber = array[i].split("").filter((char) => parseInt(char));
//     if (typeof parseInt(checknumber) === "number") {
//       objectOutput[checknumber] = array[i];
//     }
//   }
//   let arrayOutput = [];
//   for (let i = 1; i <= Object.keys(objectOutput).length; i++) {
//     arrayOutput.push(objectOutput[i]);
//   }
//   console.log(JSON.stringify(arrayOutput));
//   return arrayOutput.join(" ");
// }
//
console.log(order("is2 Thi1s T4est 3a"), "Thi1s is2 3a T4est");
console.log(
  order("4of Fo1r pe6ople g3ood th5e the2"),
  "Fo1r the2 g3ood 4of th5e pe6ople"
);
console.log(order(""), "");
console.log("");
