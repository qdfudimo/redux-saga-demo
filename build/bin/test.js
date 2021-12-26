const path = require('path');
const ComponentName = "Inputlog";
const fs = require('fs');
const uppercamelcase = require('uppercamelcase');
const PackagePath = path.resolve(__dirname, '../../packages', ComponentName);
//componentsFile.some(item=>item.compName == ComponentName)
const componentsFile = require('../../packages/list.json');
const elementTsPath = path.join(__dirname, '../../src/nav.js');
// console.log(elementTsPath);
let elementTsText = fs.readFileSync(elementTsPath);
// let elementTsText = fs.readFileSync(elementTsPath,'utf-8');
// console.log(elementTsText);
const index = elementTsText.indexOf('[') + 1;
const importString = `{
    title: '${ComponentName}',
    name: '${ComponentName}',
    path: '/components/${ComponentName}',
    component: () => import('../packages/${ComponentName}/docs/README.md'),
}`

elementTsText = elementTsText.slice(0, index) + importString + ","+ '\n' + elementTsText.slice(index);
// console.log(elementTsText);
const pluginPath = path.join(__dirname, '../../packages/index.js');
let pluginText = fs.readFileSync(pluginPath);
pluginText = `import { ${ComponentName}Plugin } from "./${ComponentName}/index";
${pluginText}
/** ${ComponentName} Component */
export * from './${ComponentName}';`;
console.log(pluginText);
const pluginIndex = pluginText.indexOf('[') + 1;
const pluginNmae = `${ComponentName}Plugin`
pluginText = pluginText.slice(0, pluginIndex) + '\n' + pluginNmae + "," + pluginText.slice(pluginIndex);
console.log(pluginText);
