// My Solution
// function duplicateEncode(word) {
//   if (!word) {
//     return;
//   }
//   let str = word.toLowerCase();
//   let newStr = "";
//   for (let i = 0; i < str.length; i++) {
//     let _char = str.charAt(i);
//     if (str.indexOf(_char) == str.lastIndexOf(_char)) {
//       newStr += "(";
//     } else {
//       newStr += ")";
//     }
//   }
//   return newStr;
// }

// Best Solution
function duplicateEncode(word) {
  return word
    .toLowerCase()
    .split("")
    .map(function (a, i, w) {
      return w.indexOf(a) == w.lastIndexOf(a) ? "(" : ")";
    })
    .join("");
}
console.log(duplicateEncode("din"), "(((");
console.log(duplicateEncode("recede"), "()()()");
console.log(duplicateEncode("Success"), ")())())", "should ignore case");
console.log(duplicateEncode("(( @"), "))((");
