<template>
  <!-- <vi-button @click="handelClik($event, 11)">
    <template #default>我是一个按钮</template>
  </vi-button>
  <vi-input v-model:viInput="input" /> -->
  <!-- <ViButton></ViButton> -->
  <div class="vi-doc">
    <aside>
      <router-link
      exact-active-class = "_active"
        v-for="(link, index) in data.links"
        :key="index"
        :to="link.path"
        >{{ link.name }}</router-link
      >
    </aside>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script setup>
// import {ViButton} from "../packages"
// import { ref } from "vue";
// const handelClik = (e, num) => {
//   console.log(e, num);
// };
// let input = ref("22");

import ComponentList from "../packages/list.json";
import { reactive } from "vue";

const data = reactive({
  links: ComponentList.map((item) => ({
    path: `/components/${item.compName}`,
    name: item.compZhName,
  })),
});
</script>

<style lang="less">
html,
body {
  margin: 0;
  padding: 0;
}
.vi-doc {
  display: flex;
  min-height: 100vh;
  aside {
    width: 200px;
    padding: 15px;
    border-right: 1px solid #ccc;
    display: flex;
    flex-direction: column;
    a {
      color: #42b983;
      font-weight: 600;
      padding: 8px;
      text-decoration: none;
    }
    ._active {
      color: goldenrod;
    }
  }
  main {
    width: 100%;
    flex: 1;
    padding: 15px;
  }
}
</style>
