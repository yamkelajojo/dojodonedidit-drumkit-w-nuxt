<template>
  <div class="keyboard">
    <div
      v-for="drum in drums"
      :key="drum.id"
      :data-key="drum.keyTitle"
      class="button"
      @click="handleClick($event, drum.keyTitle)"
    >
      <p>{{ drum.keyTitle.toUpperCase() }}</p>
    </div>
  </div>

  <audio
    v-for="drum in drums"
    :key="drum.id"
    :data-key="drum.keyTitle"
    :src="drum.url"
  ></audio>
</template>

<script setup>
// import { emit } from "process";

const { drums } = defineProps(["drums"]);

let pressed = ref(false);
const emit = defineEmits(["clickedKey"]);

const handleClick = (e, keyTitle) => {
  const audio = document.querySelector(`audio[data-key="${keyTitle}"]`);

  if (!audio) return; //stops function from running all together
  audio.currentTime = 0; //rewind it to the start before it starts playing
  audio.play();
  console.log(keyTitle);
  emit("clickedKey", e);
};

const handleKeyDown = (e) => {
  const audio = document.querySelector(`audio[data-key="${e.key}"]`);
  const button = document.querySelector(`div[data-key="${e.key}"].button`);

  if (!audio) return; //stops function from running all together
  audio.currentTime = 0; //rewind it to the start before it starts playing
  audio.play();

  button.style.top = "10px";
  button.style.backgroundColor = "#f78900";
  button.style.webkitBoxShadow =
    "inset 3px 1px 0 #ffe5c4, inset 0 -3px 0 #915100";
  button.style.mozBoxShadow = "inset 3px 1px 0 #ffe5c4, inset 0 -3px 0 #915100";
  button.style.boxShadow = "inset 3px 1px 0 #ffe5c4, inset 0 -3px 0 #915100";
  // console.log(e);
  // console.log(e.keyTitle);
  // console.log(e.key);
};

const handleKeyUp = (e) => {
  const button = document.querySelector(`div[data-key="${e.key}"].button`);
  button.style.top = "";
  button.style.backgroundColor = "";
  button.style.webkitBoxShadow = "";
  button.style.mozBoxShadow = "";
  button.style.boxShadow = "";
};

//onMounted hook is used to ensure that the window is ready before accessing its value and attaching the keydown event listener
onMounted(() => {
  window.addEventListener("keydown", handleKeyDown);
  window.addEventListener("keyup", handleKeyUp);
});
</script>

<style scoped>
.keyboard,
.keyboard > * {
  scale: 0.7;
  /* opacity: 0.95; */
}

.keyboard {
  display: flex;
  position: absolute;
  top: 80%;
  left: 20.5%;
  /* background-color: #000; */
}

.button {
  position: relative;
  display: inline-block;
  margin: 10px;
  &:hover {
    cursor: pointer;
  }
}

.button p {
  color: white;
  font-family: Helvetica, sans-serif;
  font-weight: bold;
  font-size: 36px;
  text-align: center;
  text-decoration: none;
  background-color: #ffa12b;
  display: block;
  position: relative;
  padding: 20px 40px;

  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  text-shadow: 0px 1px 0px #000;
  filter: dropshadow(color=#000, offx=0px, offy=1px);

  -webkit-box-shadow: inset 3px 0.5px 0 #ffe5c4, 0 10px 0 #915100;
  -moz-box-shadow: inset 3px 0.5px 0 #ffe5c4, 0 10px 0 #915100;
  box-shadow: inset 3px 0.5px 0 #ffe5c4, 0 10px 0 #915100;

  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  border-radius: 5px;
}

.button p:active {
  top: 10px;
  background-color: #f78900;

  -webkit-box-shadow: inset 3px 1px 0 #ffe5c4, inset 0 -3px 0 #915100;
  -moz-box-shadow: inset 3px 1px 0 #ffe5c4, inset 0 -3px 0 #915100;
  box-shadow: inset 3px 1px 0 #ffe5c4, inset 0 -3px 0 #915100;
}

.button:after {
  content: "";
  height: 100%;
  width: 100%;
  padding: 4px;
  position: absolute;
  bottom: -15px;
  left: -4px;
  z-index: -1;
  background-color: #2b1800;

  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  border-radius: 5px;

  /* -webkit-box-shadow: inset 3px 1px 0 #ffe5c4, inset 0 -3px 0 #915100;
  -moz-box-shadow: inset 3px 1px 0 #ffe5c4, inset 0 -3px 0 #915100;
  box-shadow: inset 3px 1px 0 #ffe5c4, inset 0 -3px 0 #915100; */
}
</style>
