let toWrite = "";
let activeId = 0;

const start = () => {
  document.addEventListener('keydown', logKey);
  generate();
}

window.onload = start;

const generate = () => {
  toWrite = "";
  activeId = 0;
  const textLength = 15;
  for (var w = 0; w < textLength; w++) {
    let word = words[Math.floor(Math.random() * words.length)];
    if (w != textLength - 1) word += " ";
    toWrite += word;
    document.getElementById('text').innerHTML += '<word id=w'+w+'></word>'

    word.split("").forEach((item, l) => {
      document.getElementById('w'+w).innerHTML += '<letter id=l'+l+' class="placeHolder" >'+item+'</letter>';
    });
    if (w%5 == 0 && w > 0) {
      document.getElementById('text').innerHTML += '<br>'
    }
  }
  document.getElementById('l0').className = "active";

  toWrite = toWrite.toLowerCase()
  console.log(toWrite);
}

const logKey = (e) => {
  const char = e.key.toLowerCase();
  if((e.keyCode >= 65 && e.keyCode <= 90) || char == " ") {
    activeId++;
    console.log(char);
    console.log(e.keyCode);
  }
}
