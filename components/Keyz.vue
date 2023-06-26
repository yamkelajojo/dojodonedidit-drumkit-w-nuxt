<template>
  <div class="keyboard">
    <div v-for="drum in drums" :key="drum.id" class="button">
      <p>{{ drum.keyTitle.toUpperCase() }}</p>
    </div>
  </div>
</template>

<script setup>
const { drums } = defineProps(["drums"]);
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
