let toWrite = "";
let activeId = 0;
let writenChars = 0;
let time = 60.0;

const start = () => {
  document.addEventListener('keydown', logKey);
  generate();
}

var tick = setInterval(function() {
  if (time <= 0) {
    clearInterval(tick)
    time = 0;
    document.getElementById('timer').innerHTML = "0";
  }
  time -= 0.1
  time = Math.round(time * 10) / 10;
  if (time%1 == 0) {time += ".0"}
  document.getElementById('timer').innerHTML = time;
}, 100)

window.onload = start;

const generate = () => {
  toWrite = "";
  activeId = 0;
  let letterId=0;
  const textLength = 10;
  const worldsInLine=5;
  document.getElementById('text').innerHTML = '';
  for (var w = 0; w < textLength; w++) {
    let word = words[Math.floor(Math.random() * words.length)];
    if ((w%worldsInLine != 0 || w == 0) && w != textLength-1){
      word += " ";
    }
    toWrite += word;
    document.getElementById('text').innerHTML += '<word id=w'+w+'></word>'

    word.split("").forEach((item) => {
      if (item != " ") {
        document.getElementById('w'+w).innerHTML += '<letter id=l'+letterId+' >'+item+'</letter>';
      } else {
        document.getElementById('w'+w).innerHTML += '<letter id=l'+letterId+' name="space">'+item+'</letter>';
      }

      letterId++;
    });
    if (w%worldsInLine == 0 && w > 0) {
      document.getElementById('text').innerHTML += '<br>'
    }
  }
  document.getElementById('l0').className = "active";
  toWrite = toWrite.toLowerCase()
  console.log(toWrite);
}

const logKey = (e) => {
  const char = e.key.toLowerCase();
  if (activeId == toWrite.length-1) {
    generate();
    return ;
  }
  if (e.code == "Backspace") {
    if (activeId-1 < 0) {
      return ;
    }
    if (getLetter().name == "space") {
      getLetter().innerHTML = " ";
    }
    getLetter().className = "";
    activeId--;
    if (getLetter().className == "correct" && activeId >= 0){
      writenChars--;
    }
    getLetter().className = "active";
    return ;
  }
  if((e.keyCode >= 65 && e.keyCode <= 90) || char == " ") {
    if (getLetter().name == "space") {
      getLetter().innerHTML = " ";
    }
    if (char == toWrite[activeId]) {
      getLetter().className = "correct";
      writenChars++;
    }else {
      getLetter().className = "wrong";
      if (writenChars-1 >= 0) {
        writenChars--;
      }
      if (toWrite[activeId] == " ") {
        getLetter().className = "space";
        getLetter().name = "space";
        getLetter().innerHTML = e.key;
      }
    }
    activeId++;
    getLetter().className = "active";
    //e == 69
  }

}

const getLetter = () => {
  return document.getElementById('l'+activeId);
}
