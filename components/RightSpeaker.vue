<template>
  <div id="rightSpeaker" class="speaker flex-cnt">
    <div id="tweeter"></div>
    <div id="sub"></div>
    <div id="sub"></div>
  </div>
</template>

<script setup></script>

<style scoped>
#rightSpeaker {
  top: -8.7%;
  left: 86.35%;
  opacity: 0.3;
}

#sub,
#tweeter {
  transform: rotateY(-30deg) rotateX(-5deg);
}

#tweeter {
  margin-top: 12px;
}
</style>
