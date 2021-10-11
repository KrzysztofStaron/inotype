const sumaryScreen = () => {
  const minutesInTime = startTime / 60;
  const lpm = writenChars / minutesInTime;
  let wpm = writenWords /  minutesInTime;
  document.getElementById('content').innerHTML = '<span>Letters per minute: '+lpm+'</span><br>';
  document.getElementById('content').innerHTML += '<span>Words per minute: '+wpm+'</span><br><br>';
  document.getElementById('content').innerHTML += '<span id="again" class="buttonBuyNo" onclick="location.reload()"></span>';
}
