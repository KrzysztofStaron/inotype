let toWrite = ""

const start = () =>{
  for (var i = 0; i < 10; i++) {
    toWrite += words[Math.floor(Math.random() * words.length)] + " "
  }

  console.log(toWrite);
}

window.onload = start;
