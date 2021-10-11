let html = "";
let type = true;

const settingsClick = () => {
  if (type) {
    open();
  } else {
    close();
  }
  type = !type;
}

const open = () => {
  let content = document.getElementById('content');
  html = content.innerHTML;
  content.innerHTML = 'Settings'
}

const close = () => {
  document.getElementById('content').innerHTML = html;
}
