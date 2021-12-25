<template>
  <vi-button @click="handelClik($event, 11)">
    <template #default>我是一个按钮</template>
  </vi-button>
  <vi-input v-model:viInput="input" />
  <!-- <ViButton></ViButton> -->
</template>

<script setup>
// import {ViButton} from "../packages"
import { ref } from "vue";
const handelClik = (e, num) => {
  console.log(e, num);
};
let input = ref("22");
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
