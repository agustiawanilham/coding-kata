function digital_root(n) {
  let angka = n;
  let stop = false;
  while (!stop) {
    let strTemp = angka.toString().split("");
    let sum = strTemp.reduce((total, value) => total + parseInt(value), 0);
    length = sum.toString().length;
    if (length === 1) {
      stop = true;
      return sum;
    }
    angka = sum;
  }
}

console.log(digital_root(16), 7);
console.log(digital_root(456), 6);
