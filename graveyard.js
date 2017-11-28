function letters(word) {
  let length = word.length;
  let letters = word.split("");
  let r = 1;
  console.log("Testing - " + word);
  for(let i = 0; i < word.length; i++) {
    let duplicate = [];
    for(let j = 0; j < word.length; j++) {
      if(letters[i] === letters[j]) {
        duplicate = letters[j];
      };
    }
  }
let permutation = fact(length);
console.log(permutation + " / " + r);
return permutation / r;

};
