import {
  buttonPlay, buttonPause, buttonStop, buttonAdd5, buttonRemove5, buttonForest,
  buttonRain, buttonCoffee, buttonFire, buttonDark, buttonLight, controlsDisplay, volumeForest, volumeRain,
  volumeCoffee, volumeFire
} from "./elements.js"

export default function ({controls, timer, sounds}) {
  
  volumeForest.addEventListener('mousemove', function(setVolumeForest) {
    sounds.setVolumeForest()
  })
  
  volumeRain.addEventListener('mousemove', function(setVolumeRain) {
    sounds.setVolumeRain()
  })
  
  volumeCoffee.addEventListener('mousemove', function(setVolumeCoffee) {
    sounds.setVolumeCoffee()
  })
  
  volumeFire.addEventListener('mousemove', function(setVolumeFire) {
    sounds.setVolumeFire()
  })
    
  buttonPlay.addEventListener('click', function () {
    controls.play()
    timer.countdown()
  })

  buttonPause.addEventListener('click', function () {
    controls.pause()
    timer.pause()
  })
  
  buttonStop.addEventListener('click', function () {
    controls.stop()
    timer.reset()
  })
  
  buttonAdd5.addEventListener('click', function () {
    timer.add5()
  })
  
  buttonRemove5.addEventListener('click', function () {
    timer.remove5()
  })

  buttonLight.addEventListener('click', function () {
    controls.light()
  })
  
  buttonDark.addEventListener('click', function () {
    controls.dark()
  })
  
  buttonForest.addEventListener('click', function (click) {
    controls.pressed(click)
    if (sounds.forest.paused) {
      sounds.forest.play()
    } else {
      sounds.forest.pause()
    }
    volumeForest.classList.toggle('sliderPressed')
  })
  
  buttonRain.addEventListener('click', function (click) {
    controls.pressed(click)
    if (sounds.rain.paused) {
      sounds.rain.play()
    } else {
      sounds.rain.pause()
    }
    volumeRain.classList.toggle('sliderPressed')
  })
  
  buttonCoffee.addEventListener('click', function (click) {
    controls.pressed(click)
    if (sounds.coffee.paused) {
      sounds.coffee.play()
    } else {
      sounds.coffee.pause()
    }
    volumeCoffee.classList.toggle('sliderPressed')
  })
  
  buttonFire.addEventListener('click', function (click) {
    controls.pressed(click)
    if (sounds.fire.paused) {
      sounds.fire.play()
    } else {
      sounds.fire.pause()
    }
    volumeFire.classList.toggle('sliderPressed')
  })


}