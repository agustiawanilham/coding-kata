function narcissistic(value) {
  // Code me to return true or false
  let strVal = value.toString();
  let total = 0;
  for (let i = 0; i < strVal.length; i++) {
    let temp = Number(strVal[i]);
    let hasilPangkat = Math.pow(temp, strVal.length);
    total += hasilPangkat;
  }
  let result = total === value ? true : false;
  return result;
}

Test.assertEquals(narcissistic(7), true, "7 is narcissistic");
Test.assertEquals(narcissistic(371), true, "371 is narcissistic");
