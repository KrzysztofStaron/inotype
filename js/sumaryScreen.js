const sumaryScreen = () => {
  const minutesInTime = startTime / 60;
  const lpm = writenChars / minutesInTime;
  const wpm = lpm / 4;
  document.getElementById('content').innerHTML = '<span>Letters per minute: '+lpm+'</span><br>';
  document.getElementById('content').innerHTML += '<span>Words per minute: '+wpm+'</span><br><br>';
  document.getElementById('content').innerHTML += '<span id="again" onclick="location.reload()"></span>';
}
