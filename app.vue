<template>
  <div id="studio" ref="studio">
    <!-- <LeftSpeaker /> -->
    <RightSpeaker />
    <Screen :drums="drums" :executedEvent="executedEvent" />
    <Keyz :drums="drums" @clickedKey="takeAction" />
    <!-- <Keyboard  /> -->
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

let executedEvent = ref(null);

const drums = getInstruments();
const takeAction = (e) => {
  console.log(
    "The event we want from being emmitted from Keyz to app.vue \n ",
    e
  );
  executedEvent.value = e;
};
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
