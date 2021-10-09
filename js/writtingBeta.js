const start = () => {
  document.addEventListener('keydown', logKey);
}

window.onload = start;

const generate = () => {

}

const logKey = (e) => {
  console.log(e.keyCode);
}
