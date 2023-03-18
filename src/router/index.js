import VueRouter from "vue-router";


const routes = [{
    title: 'tab表格',
    name: 'tab',
    path: '/',
    component: () =>
      import('@/components/Tab.vue')
  },
  {
    title: 'form表单',
    path: '/form',
    name: 'form',
    component: () =>
      import('@/components/Form.vue')
  },
  {
    title: 'TabScope',
    name: 'tabtwo',
    path: '/tabtwo',
    component: () => import('@/components/TabTwo.vue')
  },
  {
    title: 'Tabs',
    name: 'tabs',
    path: '/tabs',
    component: () => import('@/components/Tabs.vue')
  },
  {
    title: 'TabTwo',
    name: 'tabTwo',
    path: '/tabTwo',
    component: () => import('@/components/TabTwo.vue')
  },
  {
    title:'LessTest',
    name:'lessTest',
    path:'/lessTest',
    component:()=>import('@/components/lessTest.vue')
  }


]

const router = new VueRouter({
  routes: routes
})

export default router
export {
  routes
}