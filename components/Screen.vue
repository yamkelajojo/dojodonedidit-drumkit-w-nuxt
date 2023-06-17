<template>
  <div id="screen" class="flex-cnt">
    <h1>Dojo's Drum Kit</h1>
    <div id="player" class="flex-cnt">
      <div v-for="drum in drums" :key="drum.id" id="instr" class="flex-cnt">
        <Icon :name="drum.icon" size="1.1rem" id="icon" />
        <p id="keyTitle" class="flex-cnt">{{ drum.keyTitle }}</p>
        <p id="soundName" class="flex-cnt">{{ drum.sound }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import getInstruments from "../composables/soundkeys";

const drums = getInstruments();
</script>

<style scoped>
#instr {
  flex-direction: column;
  justify-content: space-around;
  gap: 0.6rem;
  border-right: 2px solid #3f3f3fb0;
  /* border-right: 2px solid #454545d7; */
}

#instr:last-child {
  border-right: none;
}

#instr > * {
  opacity: 0.8;
  /* width: 100%; */
  /* text-align: center; */
}

#icon {
  padding-top: 0.6rem;
  padding-left: 0.65rem;
  padding-right: 0.65rem;
}

#keyTitle {
  font-size: 20px;
  font-weight: 600;
}

#soundName {
  font-size: 12px;
  padding-bottom: 0.6rem;
}

#screen {
  flex-direction: column;
  justify-content: space-around;
  position: absolute;
  gap: 1.3rem;
  left: 50%;
  top: 43.5%;
  transform: translate(-50%, -50%);
}

#player {
  background-color: rgba(245, 245, 220, 0.704);
  border: 2px solid #3f3f3fd7;
  border-radius: 0.3rem;
}
</style>
