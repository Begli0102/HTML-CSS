function setButtonText () {
  let button = document.getElementById('formButton')
  let windowWidth = window.innerWidth

  if (windowWidth <= 470) {
    button.innerHTML = 'Jetzt kontaktieren'
  } else {
    button.innerHTML = 'Senden'
  }
}

setButtonText()

window.addEventListener('resize', setButtonText)
