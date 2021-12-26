<template>
  <input
    :type="inputType"
    placeholder="请输入"
    :value="input"
    @input="onAgeInput"
  />
</template>
<script setup>
import { defineProps, ref, watch } from "vue";
const props = defineProps({
  inputType: {
    type: String,
    default: "text",
  },
  modelValue: {
    type: [String, Number],
  },
});
let input = ref("");
input.value = props.modelValue;
// 监听props.modelValue
watch(
  () => props.modelValue,
  (newVal, oldVal) => {
    input.value = newVal;
  },
  {
    // immediate: true, // 立即执行
    deep: true, // 深度监听
  }
);
const emit = defineEmits(["update:modelValue"]);
const onAgeInput = (event) => {
  emit("update:modelValue", event.target.value);
};
</script>
<script>
export default {
  name: "viInput",
};
</script>
<style lang="less" scoped>
</style>