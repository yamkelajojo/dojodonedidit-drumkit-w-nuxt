<template>
  <div>Dzowdzow</div>
</template>

<script setup>
import { ref } from "vue";
import getInstruments from "../composables/soundkeys";

const soundkeys = getInstruments;
console.log(soundkeys);
</script>

<style lang="scss" scoped></style>
