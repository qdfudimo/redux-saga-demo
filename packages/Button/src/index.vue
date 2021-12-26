<template>
  <button class="vi-button" @click="$emit('click', $event)">
      <slot>按钮</slot>
  </button>
</template>

<script setup>
import { ref } from "vue";
let name = ref("你好啊");
defineEmits(['click']);
</script>
<script>
  export default {
    name: 'viButton',
  }
</script>
<style scoped lang="less">
.vi-button {
  cursor: pointer;
  appearance: none;
  padding: 5px 10px;
  background: lightskyblue;
  border: none;
  border-radius: 4px;
  color: #fff;
  &:active {
    background: rgb(92, 185, 243);
  }
  &:not(:last-child) {
    margin-right: 15px;
  }
}
</style>