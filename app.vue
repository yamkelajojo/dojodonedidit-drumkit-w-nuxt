<template>
  <div id="studio" ref="studio">
    <!-- <LeftSpeaker /> -->
    <Screen :drums="drums" />
    <!-- <Keyboard /> -->
  </div>
</template>

<audio
  :v-for="drum in drums"
  :key="drum.id"
  :data-key="drum.keyTitle"
  :src="drum.url"
></audio>

<script setup>
import { ref } from "vue";
import getInstruments from "/composables/soundkeys";

const drums = getInstruments();

const handleKeyDown = (e) => {
  const audios = document.getElementsByTagName("audio");
  console.log(audios);
  console.log(e.key);
  const audio = document.querySelector(`audio[data-key="${e.key}"]`);
  console.log(audio);
};

//onMounted hook is used to ensure that the window is ready before accessing its value and attaching the keydown event listener
onMounted(() => {
  window.addEventListener("keydown", handleKeyDown);
});
</script>
do

<style scoped>
#studio {
  height: 100vh;
  background-image: url("assets/images/backgrounds/1000_F_142901681_cFeNkqQjIFnjFijHufvz9PKuW6siDzXf.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  position: relative;
}
</style>
