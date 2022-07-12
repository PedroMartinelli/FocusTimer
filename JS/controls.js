export default function Controls({
  buttonPlay,
  buttonPause,
  buttonLight,
  buttonDark,
  timerDisplay,
  body,
  controlsDisplay,
  soundsDisplay,
  volumeForest,
  volumeRain,
  volumeCoffee,
  volumeFire
}) {

  function play() {
    buttonPlay.classList.add('hide')
    buttonPause.classList.remove('hide')
  }

  function pause() {
    buttonPause.classList.add('hide')
    buttonPlay.classList.remove('hide')
  }

  function stop() {
    buttonPause.classList.add('hide')
    buttonPlay.classList.remove('hide')
  }

  function pressed(click) {
    click.currentTarget.classList.toggle('pressed')
  }

  function reset() {
    buttonPlay.classList.remove('hide')
    buttonPause.classList.add('hide')
  }

  function light() {
    buttonLight.classList.add('hide')
    buttonDark.classList.remove('hide')
    body.classList.add('dark')
    timerDisplay.classList.add('timerDark')
    controlsDisplay.classList.add('controlsDark')
    soundsDisplay.classList.add('soundsDark')
    volumeForest.classList.add('sliderDark') 
    volumeRain.classList.add('sliderDark') 
    volumeCoffee.classList.add('sliderDark') 
    volumeFire.classList.add('sliderDark') 
  }

  function dark() {
    buttonDark.classList.add('hide')
    buttonLight.classList.remove('hide')
    body.classList.remove('dark')
    timerDisplay.classList.remove('timerDark')
    controlsDisplay.classList.remove('controlsDark')
    soundsDisplay.classList.remove('soundsDark')
    volumeForest.classList.remove('sliderDark')
    volumeRain.classList.remove('sliderDark')
    volumeCoffee.classList.remove('sliderDark')
    volumeFire.classList.remove('sliderDark')
  }

  return {
    play,
    pause,
    pressed,
    reset,
    stop,
    light,
    dark
  }

}

