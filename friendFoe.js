let friend = (friends) =>
  friends.filter(
    (word) =>
      word.length < 5 && isNaN(Number(word)) && word !== word.toUpperCase()
  );

console.log(friend(["Ryan", "Kieran", "Mark"]));
console.log(friend(["Ryan", "Jimmy", "123", "4", "Cool Man"]), ["Ryan"]);
console.log(
  friend(["Jimm", "Cari", "aret", "truehdnviegkwgvke", "sixtyiscooooool"]),
  ["Jimm", "Cari", "aret"]
);
console.log(friend(["Love", "Your", "Face", "1"]), ["Love", "Your", "Face"]);
console.log(friend(["I", "AM", "Gupt"]));
console.log("I" == "I".toLowerCase());
