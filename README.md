# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)

```
name: 步骤名称
env: 该步骤所需的环境变量
run: 该步骤运行的命令，如上面的例子：bash输出环境变量
id : 每个步骤的唯一标识符
uses : 使用哪个 action
with : 指定某个 action 可能需要输入的参数
continue-on-error : 设置为 true 允许此步骤失败 job 仍然通过
timeout-minutes : step 的超时分钟数

```
