'use strict';

console.log();
process.on('exit', () => {
  console.log();
});

if (!process.argv[2]) {
  console.error('[组件名]必填 - Please enter new component name');
  process.exit(1);
}

const path = require('path');
const fs = require('fs');
const fileSave = require('file-save');
const uppercamelcase = require('uppercamelcase');
const componentname = process.argv[2];
const chineseName = process.argv[3] || componentname;
const ComponentName = uppercamelcase(componentname);
const PackagePath = path.resolve(__dirname, '../../packages', componentname);
const Files = [{
    filename: 'index.js',
    content: `import ${ComponentName} from './src/index.vue';
    /* istanbul ignore next */
    const ${ComponentName}Plugin = {
      install(app) {
          app.component(${ComponentName}.name, ${ComponentName});
      }
    };
    export {${ComponentName}};`
  },
  {
    filename: 'src/index.vue',
    content: `<template>
    <div>${ComponentName} ${chineseName}</div>
    </template>
    <script>
    export default {
      name: 'vi${ComponentName}'
    };
    </script>
    <style scoped lang="less">
    </style>`
  },
  {
    filename: 'docs/demo.vue',
    content: `<template>
    <${ComponentName} />
    </template>
    <script setup>
    </script>`
  },
  {
    filename: 'docs/README.md',
    content: `<script setup>
    import demo from './demo.vue'
    </script>
    
    # ${chineseName}组件
    
    <Preview comp-name="${ComponentName}" demo-name="demo">
      <demo />
    </Preview>`
  }
];

// 添加到 components.json
const componentsFile = require('../../packages/list.json');
if (componentsFile.some(item => item.compName == ComponentName)) {
  console.error(`${ComponentName} 已存在.`);
  process.exit(1);
}
let defaultCompoent = {
  "compName": ComponentName,
  "compZhName": `${ComponentName} ${chineseName}`,
  "compClassName": ComponentName
}
componentsFile.push(defaultCompoent);
fileSave(path.join(__dirname, '../../packages/list.json'))
  .write(JSON.stringify(componentsFile, null, '  '), 'utf8')
  .end('\n');

// 创建 package
Files.forEach(file => {
  fileSave(path.join(PackagePath, file.filename))
    .write(file.content, 'utf8')
    .end('\n');
});

// 添加到 nav.js
const navConfigFile = path.join(__dirname, '../../src/nav.js');
let elementTsText = fs.readFileSync(navConfigFile);
// let elementTsText = fs.readFileSync(navConfigFile,'utf-8');
const index = elementTsText.indexOf('[') + 1;
const importString = `{
    title: '${ComponentName}',
    name: '${ComponentName}',
    path: '/components/${ComponentName}',
    component: () => import('../packages/${ComponentName}/docs/README.md'),
}`
elementTsText = elementTsText.slice(0, index) + importString + "," + '\n' + elementTsText.slice(index);
fileSave(navConfigFile)
  .write(elementTsText, 'utf8')
  .end('\n');
//添加到插件安装
const pluginPath = path.join(__dirname, '../../packages/index.js');
let pluginText = fs.readFileSync(pluginPath);
pluginText = `import { ${ComponentName}Plugin } from "./${ComponentName}/index";
${pluginText}
/** ${ComponentName} Component */
export * from './${ComponentName}';`;
const pluginIndex = pluginText.indexOf('[') + 1;
const pluginNmae = `${ComponentName}Plugin`
pluginText = pluginText.slice(0, pluginIndex) + '\n' + pluginNmae + "," + pluginText.slice(pluginIndex);
fileSave(pluginPath)
  .write(pluginText, 'utf8')
  .end('\n');
console.log('DONE!');