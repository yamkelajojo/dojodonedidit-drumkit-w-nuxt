<template>
  <div id="screen" class="flex-cnt">
    <h1>Dojo's Drum Kit</h1>
    <div id="player" class="flex-cnt">
      <div
        v-for="drum in drums"
        :key="drum.id"
        :data-key="drum.keyTitle"
        @mouseenter="toolTipOn = true"
        @mousemove="followtip($event, drum)"
        @mouseleave="toolTipOn = false"
        id="instr"
        class="flex-cnt"
      >
        <Icon :name="drum.icon" size="1.1rem" id="icon" />
        <p id="keyTitle" class="flex-cnt">{{ drum.keyTitle.toUpperCase() }}</p>
        <p id="soundName" class="flex-cnt">{{ drum.sound }}</p>
      </div>
    </div>
  </div>
  <div id="tooltip" ref="tooltip" v-if="toolTipOn">
    <div class="flex-cnt">
      <Icon :name="icon" size="2.6rem" id="icon" />
    </div>
    <h5 style="font-size: 0.6rem">Category</h5>
    <h5 id="category">{{ category }}</h5>
    <p id="description">{{ description }}</p>
  </div>
</template>

<script setup>
import { ref } from "vue";
import getInstruments from "../composables/soundkeys";

const { drums } = defineProps(["drums"]);
const tooltip = ref(null);
let toolTipOn = ref(false);
let icon = ref(null);
let category = ref();
let description = ref();

const followtip = (e, drum) => {
  description.value = drum.description;
  icon.value = drum.icon;
  category = drum.category;

  var x = e.pageX;
  var y = e.pageY;

  tooltip.value.style.left = x - 120 + "px";
  tooltip.value.style.top = y - 280 + "px";
};

const handleKeyDown = (e) => {
  const soundSection = document.querySelector(`div[data-key="${e.key}"]#instr`);
  soundSection.classList.add("playing");
};

const handleKeyUp = (e) => {
  const soundSection = document.querySelector(`div[data-key="${e.key}"]#instr`);
};

//to stop animation overlapping/for ending transition overlap
const transitionEnd = () => {
  const soundSections = document.querySelectorAll("#instr");
  soundSections.forEach((soundSec) =>
    soundSec.addEventListener("transitionend", removeTransition)
  );
};

const removeTransition = (e) => {
  console.log(e);
};

onMounted(() => {
  window.addEventListener("keydown", handleKeyDown);
  window.addEventListener("keyup", handleKeyUp);
  transitionEnd();
});
</script>

<style scoped>
#instr {
  flex-direction: column;
  justify-content: space-around;
  gap: 0.6rem;
  border-right: 2px solid #3f3f3fb0;
  transition: all 2s;
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
#instr,
#instr > *:hover {
  cursor: not-allowed;
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

#tooltip {
  position: absolute;
  flex-direction: column;
  gap: 2rem;
  color: black;
  background-color: rgba(245, 245, 220, 0.704);
  border: 2px solid #3f3f3fd7;
  border-radius: 0.3rem;
  font-size: 0.2rem;
  padding: 0.4rem;
  width: 200px;
  height: 220px;
}

#description {
  font-size: 0.4rem;
}

#category {
  font-size: 0.4rem;
}

.playing {
  transform: scale(1.2);
  background-color: #1f36a7a3;
}
</style>
