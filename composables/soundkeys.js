import { ref } from "vue";

export default function getInstruments() {
  const soundkeys = ref([
    {
      keyTitle: "A",
      id: "65",
      sound: "Clap",
      url: "assets/audio/Clap.wav",
    },
    {
      keyTitle: "S",
      id: "83",
      sound: "HiHat",
      url: "assets/audio/HiHat.wav",
    },
    {
      keyTitle: "D",
      id: "68",
      sound: "Kick",
      url: "assets/audio/Kick.wav",
    },
    {
      keyTitle: "F",
      id: "70",
      sound: "OpenHat",
      url: "assets/audio/OpenHat.wav",
    },
    {
      keyTitle: "G",
      id: "71",
      sound: "Boom",
      url: "assets/audio/808.wav",
    },
    {
      keyTitle: "H",
      id: "72",
      sound: "Rim",
      url: "assets/audio/Rim.wav",
    },
    {
      keyTitle: "J",
      id: "74",
      sound: "Snare",
      url: "assets/audio/Snare.wav",
    },
    {
      keyTitle: "K",
      id: "75",
      sound: "Tom",
      url: "assets/audio/Tom.wav",
    },
    {
      keyTitle: "L",
      id: "76",
      sound: "Tink",
      url: "assets/audio/Tink.wav",
    },
  ]);
  console.log(soundkeys.value);
  return soundkeys.value;
}
