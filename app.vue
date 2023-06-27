<template>
  <div id="studio" ref="studio">
    <!-- <LeftSpeaker /> -->
    <Screen :drums="drums" />
    <Keyz :drums="drums" />
    <!-- <Keyboard /> -->
  </div>
  <audio
    v-for="drum in drums"
    :key="drum.id"
    :data-key="drum.keyTitle"
    :src="drum.url"
  ></audio>
</template>

<script setup>
import { ref } from "vue";
import getInstruments from "/composables/soundkeys";

const drums = getInstruments();
</script>

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
