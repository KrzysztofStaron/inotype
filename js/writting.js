let toWrite = "";

const start = () => {
  for (var i = 0; i < 10; i++) {
    toWrite += words[Math.floor(Math.random() * words.length)] + " ";
  }

  console.log(toWrite);
  document.getElementById('text').innerHTML=toWrite;
}

window.onload = start;

// Useful Functions

const arrayToText = array =>{
  let toReturn = "";
  for (var i = 0; i < array.length; i++) {
    toReturn += array[i] + " ";
  }
  return toReturn;
}
