let toWrite = "";
let activeId = 0;
let writenChars = 0;

const start = () => {
  document.addEventListener('keydown', logKey);
  generate();
}

window.onload = start;

const generate = () => {
  toWrite = "";
  activeId = 0;
  let letterId=0;
  const textLength = 15;
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
        document.getElementById('w'+w).innerHTML += '<letter id=l'+letterId+' class="" >'+item+'</letter>';
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
    if (document.getElementById('l'+activeId).name == "space") {
      document.getElementById('l'+activeId).innerHTML = " ";
    }
    document.getElementById('l'+activeId).className = "";
    activeId--;
    document.getElementById('l'+activeId).className = "active";
    return ;
  }
  if((e.keyCode >= 65 && e.keyCode <= 90) || char == " ") {
    if (document.getElementById('l'+activeId).name == "space") {
      document.getElementById('l'+activeId).innerHTML = " ";
    }
    if (char == toWrite[activeId]) {
      document.getElementById('l'+activeId).className = "correct";
      writenChars++;
    }else {
      document.getElementById('l'+activeId).className = "wrong";
      writenChars--;
      if (toWrite[activeId] == " ") {
        document.getElementById('l'+activeId).className = "space";
        document.getElementById('l'+activeId).name = "space";
        document.getElementById('l'+activeId).innerHTML = e.key;
      }
    }
    activeId++;
    document.getElementById('l'+activeId).className = "active";
    //e == 69
  }

}
