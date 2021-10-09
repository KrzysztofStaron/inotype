let toWrite = "";

const start = () => {
  const letters=0;
  generate();
}

const generate = () => {
  toWrite = "";
  let letterId = 0;
  document.getElementById('text').innerHTML = "";
  for (var i = 0; i < 10; i++) {
    document.getElementById('text').innerHTML += '<div class="word" id=word'+i+'></div>';
    const word = words[Math.floor(Math.random() * words.length)];
    toWrite += word;
    const letters = word.split("");
    for (var q = 0; q < letters.length; q++) {
      document.getElementById(`word${i}`).innerHTML += '<input type="text" class="letter" id=letter'+letterId+' maxlength="1" placeholder='+letters[q]+'>';
      letterId++;
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
