import Controls from "./controls.js"
import Timer from "./timer.js"
import Sounds from "./sounds.js"
import Event from "./event.js"
import {
  buttonPlay, buttonPause, buttonStop, buttonAdd5, buttonRemove5, buttonForest,
  buttonRain, buttonCoffee, buttonFire, buttonDark, buttonLight, minutesDisplay, secondsDisplay, body, 
  timerDisplay, controlsDisplay, soundsDisplay, volumeForest, volumeRain, volumeCoffee, volumeFire
} from "./elements.js"

const controls = Controls({
  buttonPlay, buttonPause, buttonDark, buttonLight, body, timerDisplay, controlsDisplay, soundsDisplay, volumeForest,
  volumeRain, volumeCoffee, volumeFire
})

const timer = Timer({
  minutesDisplay,
  secondsDisplay,
  resetControls: controls.reset
})

const sounds = Sounds()

Event({controls, timer, sounds})





