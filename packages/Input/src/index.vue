<template>
  <input
    :type="inputType"
    placeholder="请输入"
    :value="input"
    @input="onAgeInput"
  />
</template>
<script setup>
import { defineProps, ref, defineEmits, watch, onMounted } from "vue";
const props = defineProps({
  inputType: {
    type: String,
    default: "text",
  },
  viInput: {
    type: [String, Number],
  },
});
let input = ref("");
input.value = props.viInput;
// 监听props.viInput
watch(
  () => props.viInput,
  (newVal, oldVal) => {
    input.value = newVal;
  },
  {
    // immediate: true, // 立即执行
    deep: true, // 深度监听
  }
);
const emit = defineEmits(["update:viInput"]);
const onAgeInput = (event) => {
  emit("update:viInput", event.target.value);
};
</script>
<script>
export default {
  name: "viInput",
};
</script>
<style lang="less" scoped>
</style>