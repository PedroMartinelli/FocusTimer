export default function Timer({ minutesDisplay, secondsDisplay, resetControls }) {
  let timerTimeOut
  let minutes = Number(minutesDisplay.textContent)
  let seconds = Number(secondsDisplay.textContent)

  function updateDisplay(minutes, seconds) {
    minutesDisplay.textContent = String(minutes).padStart(2, "0")
    secondsDisplay.textContent = String(seconds).padStart(2, "0")
  }

  function reset() {
    clearTimeout(timerTimeOut)
    updateDisplay(minutes, "0")
  }

  function add5() {
    updateDisplay(String(minutes + 5), seconds)
    minutes = Number(minutesDisplay.textContent)
  }

  function remove5() {
    if (minutesDisplay.textContent < 5) {
      updateDisplay(String(minutes - minutes), seconds)
    } else {
      updateDisplay(String(minutes - 5), seconds)
      minutes = Number(minutesDisplay.textContent)
    }
  }

  function countdown() {
    timerTimeOut = setTimeout(function () {
      let minutes = Number(minutesDisplay.textContent)
      let seconds = Number(secondsDisplay.textContent)


      if (minutes == 0) {
        if (seconds > 0) {
          updateDisplay(minutes, String(seconds - 1))
        } else {
          resetControls()
          reset()
          return
        }
      }

      if (seconds <= 0) {
        seconds = 60
        minutes--
      }

      updateDisplay(minutes, String(seconds - 1))

      countdown()
    }, 1000)
  }

  function pause() {
    clearTimeout(timerTimeOut)
  }

  return {
    updateDisplay,
    countdown,
    reset,
    pause,
    add5,
    remove5
  }

}