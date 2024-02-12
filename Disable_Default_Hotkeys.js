
window.onkeydown = (e) => {
  if(e.ctrlKey && e.code === 'KeyG') {
      e.preventDefault();
      return;
  }
  if(e.ctrlKey && e.code === 'KeyP') {
      e.preventDefault();
      return;
  }
  if(e.ctrlKey && e.code === 'KeyF') {
      e.preventDefault();
      return;
  }
  if(e.code === 'F7') {
      e.preventDefault();
      return;
  }
}

