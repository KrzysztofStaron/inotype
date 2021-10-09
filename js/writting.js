let toWrite = "";

const start = () => {
  const letters=0;
  generate();
}

const generate = () => {
  document.getElementById('text').innerHTML = "";
  for (var i = 0; i < 10; i++) {
    document.getElementById('text').innerHTML += '<div class="word" id=word'+i+'></div>';
    const word = words[Math.floor(Math.random() * words.length)];
    const letters = word.split("");
    for (var q = 0; q < letters.length; q++) {
      document.getElementById(`word${i}`).innerHTML += '<input type="text" class="letter" maxlength="1" placeholder='+letters[q]+'>';
    }
  }
}
window.onload = start;

// Useful Functions

const arrayToText = (array) =>{
  let toReturn = "";
  for (var i = 0; i < array.length; i++) {
    toReturn += array[i] + " ";
  }
  return toReturn;
}
