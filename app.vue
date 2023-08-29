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

const executedEvent = ref("Initial executedEvent");

watch(executedEvent, () => {
  console.log("WATCH ku app.vue: " + executedEvent.value);
});

const drums = getInstruments();
const takeAction = (e) => {
  console.log(
    "TakeAction() in app.vue \n Before Change: ",
    executedEvent.value
  );
  executedEvent.value = e;
  console.log("After Change: ", executedEvent.value);
  // return executedEvent.value;
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
