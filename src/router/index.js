import Vue from 'vue'
import Router from 'vue-router'
import PageRender from '@/components/PageRender'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'PageRender',
      component: PageRender,
    },
  ],
})
