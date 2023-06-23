<template>
  <div id="leftSpeaker" class="speaker flex-cnt">
    <div id="tweeter"></div>
    <div id="sub"></div>
    <div id="sub"></div>
  </div>
</template>

<script setup></script>

<style scoped>
#leftSpeaker {
  left: 13.5%;
  opacity: 0.9;
}

#sub,
#tweeter {
  transform: rotateY(-30deg) rotateX(5deg);
}

#tweeter {
  margin-top: 12px;
}
</style>
