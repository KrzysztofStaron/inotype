// Variables
let toWrite = "";
let activeId = 0;
let endPoints = [];

// Generate Text Function
const generate = () => {
  // Clear
  toWrite = "";
  activeId = 0;
  endPoints = [];
  let letterId = 0;
  document.getElementById('text').innerHTML = "";

  // Generate Text
  for (var i = 0; i < 10; i++) {
    document.getElementById('text').innerHTML += '<div class="word" id=word'+i+'></div>';
    const word = words[Math.floor(Math.random() * words.length)];
    toWrite += word;
    const letters = word.split("");
    for (var q = 0; q < letters.length; q ++) {
      document.getElementById(`word${i}`).innerHTML += '<input onkeyup="check(this)" type="text" class="letter" id=letter'+letterId+' maxlength="1" placeholder='+letters[q]+'>';
      letterId++;
    }
  }

  // Set Focus At First Letter
  document.getElementById("letter0").focus();
}
window.onload = generate;

// Checking The Correctness Of The Char
const check = (obj) => {
  activeId++;

  // Set Color
  if (toWrite[obj.id.slice(6,obj.id.length)] == obj.value) {
    obj.style.color = "green";
  } else {
    obj.style.color = "red";
  }

  // Loop
  if (!document.getElementById('letter' + activeId)) {
    generate();
    return ;
  }

  // Set Focus To Next Input
  document.getElementById('letter'+activeId).focus();
}
