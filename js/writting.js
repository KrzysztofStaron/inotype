let toWrite = "";
let activeId = 0;

const start = () => {
  generate();
  document.getElementById("letter0").focus();
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
      document.getElementById(`word${i}`).innerHTML += '<input onkeyup="check(this)" type="text" class="letter" id=letter'+letterId+' maxlength="1" placeholder='+letters[q]+'>';
      letterId++;
    }
  }
}
window.onload = start;

const check = (obj) => {
  console.log(obj.value);
  console.log(obj.id.slice(6,obj.id.length));
  if (toWrite[obj.id.slice(6,obj.id.length)] == obj.value) {
    obj.style.color = "green";
  }else {
    obj.style.color = "red";
  }
  activeId++;
  document.getElementById('letter'+activeId).focus();
}


// Useful Functions

const arrayToText = (array) =>{
  let toReturn = "";
  for (var i = 0; i < array.length; i++) {
    toReturn += array[i] + " ";
  }
  return toReturn;
}
