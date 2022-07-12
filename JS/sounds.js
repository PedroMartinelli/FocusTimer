import {
  volumeForest, volumeRain, volumeCoffee, volumeFire
} from "./elements.js"

export default function () {
  const forest = new Audio("./Sounds/Floresta.wav")
  const rain = new Audio("./Sounds/Chuva.wav")
  const coffee = new Audio("./Sounds/Cafeteria.wav")
  const fire = new Audio("./Sounds/Lareira.wav")

  function setVolumeForest() {
    forest.volume = volumeForest.value / 100;
  }
  
  function setVolumeRain() {
    rain.volume = volumeRain.value / 100;
  }
  
  function setVolumeCoffee() {
    coffee.volume = volumeCoffee.value / 100;
  }
  
  function setVolumeFire() {
    fire.volume = volumeFire.value / 100;
  }
  
  forest.loop = true
  rain.loop = true
  coffee.loop = true
  fire.loop = true

  return {
    forest,
    rain,
    coffee,
    fire,
    setVolumeForest,
    setVolumeRain,
    setVolumeCoffee,
    setVolumeFire
  }
}
