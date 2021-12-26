 const routes = [{
         title: '按钮',
         name: 'Button',
         path: '/components/Button',
         component: () => import(`../packages/Button/docs/README.md`),
     },
     {
         title: '输入框',
         name: 'Input',
         path: '/components/Input',
         component: () => import(`../packages/Input/docs/README.md`),
     }
 ]
 export default routes