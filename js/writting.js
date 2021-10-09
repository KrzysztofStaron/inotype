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
      document.getElementById(`word${i}`).innerHTML += '<input onkeyup="check(this)" onfocus="checkFocusLegality(this)" type="text" class="letter" id=letter'+letterId+' maxlength="1" placeholder='+letters[q]+'>';
      letterId++;
    }
  }

  // Set Focus At First Letter
  setFocus(activeId);
}

const start = () =>{
  document.addEventListener('keydown', logKey);
  generate();
}
window.onload = start;

const check = (obj, force = false) => {
  // Check For Illegar Char
  if (obj.value == " " || !obj.value) {
    obj.value = "";
    console.error("Illegal Char");
    return ;
  } else if (force) {
    obj.value = toWrite[activeId];
  }

  // Set Color And Check Char Correctness
  if (toWrite[activeId] == obj.value) {
    obj.style.color = "green";
  } else {
    obj.style.color = "red";
  }
  activeId++;

  // Loop
  if (!document.getElementById('letter' + activeId)) {
    generate();
    return ;
  }

  // Set Focus To Next Input
  setFocus(activeId);
}

// Fix Focus
const checkFocusLegality = (obj) => {
  if (obj.id != "letter"+activeId){
    setFocus(activeId);
    console.error("Illegal Focus Detected");
  }
}

// Set Input Focus
const setFocus = (id = activeId) => {
  document.getElementById('letter' + id).focus();
}

// Detect Special keys fe. Backspace
const logKey = (e) => {
  if ((e.keyCode >= 41 && e.keyCode <= 90) || (e.keyCode >= 97 && e.keyCode <= 122)) {
    check(document.getElementById('letter' + activeId), true)
  }
  if (e.code == "Backspace") {
    activeId--;
    setFocus(activeId)
  }
}
