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
window.onload = generate;

// Set Color
const check = (obj) => {
  console.clear();
for (var i = 0; i < activeId+1; i++) {
  if (document.getElementById('letter' + i)) {
    let oldObj = document.getElementById('letter' + i);
    console.log(toWrite[i] +" | "+ oldObj.value);
    if (toWrite[i] == oldObj.value) {
      oldObj.style.color = "green";
    } else {
      oldObj.style.color = "red";
    }
  } else {
    console.error("not gut");
  }
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
    console.log("Illegal Focus Detected");
  }
}

const setFocus = (id = activeId) => {
  document.getElementById('letter' + id).focus();
}
