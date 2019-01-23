import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import { resolve } from 'url';


Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: "/city",
      name: "city",
      component: resolve => require(['@/pages/city/city'],resolve)
    }
  ]
})
