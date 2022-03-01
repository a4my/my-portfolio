function loader() {
  loaderContainer.classList.add('fade-out')
}

function fadeOut() {
  setInterval(loader, 2000)
}

window.onload = fadeOut()
